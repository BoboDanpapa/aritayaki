import { describe, expect, it } from "vitest";
import {
  DEFAULT_LANGUAGE,
  MARKETS,
  formatMarketPrice,
  getRecommendedMarket
} from "./markets";
import { products } from "./products";
import { calculateSelection } from "./selection";

describe("market and language behavior", () => {
  it("opens in Japanese regardless of market", () => {
    expect(DEFAULT_LANGUAGE).toBe("ja");
  });

  it("supports Taiwan, Australia, and the United States", () => {
    expect(Object.keys(MARKETS)).toEqual(["tw", "au", "us"]);
    expect(MARKETS.tw.currency).toBe("TWD");
    expect(MARKETS.au.currency).toBe("AUD");
    expect(MARKETS.us.currency).toBe("USD");
  });

  it("recommends a market without changing language", () => {
    expect(getRecommendedMarket("zh-TW", "TW")).toBe("tw");
    expect(getRecommendedMarket("en-AU", "AU")).toBe("au");
    expect(getRecommendedMarket("en-US", "US")).toBe("us");
  });

  it("formats sample prices in the selected market currency", () => {
    expect(formatMarketPrice(42, "tw")).toContain("NT$");
    expect(formatMarketPrice(42, "au")).toContain("A$");
    expect(formatMarketPrice(42, "us")).toContain("US$");
  });
});

describe("KAZAN Second Selection catalog", () => {
  it("contains six distinct demo vessels", () => {
    expect(products).toHaveLength(6);
    expect(new Set(products.map((product) => product.slug)).size).toBe(6);
  });

  it("uses factual condition reports without public grades", () => {
    for (const product of products) {
      expect(product.condition.type.length).toBeGreaterThan(0);
      expect(product.condition.location.length).toBeGreaterThan(0);
      expect(product.condition.visibility).toMatch(/subtle|visible/);
      expect(product.condition.functionalImpact).toBe("none");
      expect("grade" in product.condition).toBe(false);
    }
  });

  it("does not include unsafe defect examples", () => {
    const unsafe = /crack|sharp|leak|structural|food safety/i;
    for (const product of products) {
      expect(JSON.stringify(product.condition)).not.toMatch(unsafe);
    }
  });
});

describe("selection inquiry", () => {
  it("allows a single vessel inquiry", () => {
    const summary = calculateSelection([{ productId: products[0].id, quantity: 1 }], "us");
    expect(summary.itemCount).toBe(1);
    expect(summary.subtotal).toBeGreaterThan(0);
    expect(summary.shippingEstimate).toBeGreaterThan(0);
  });

  it("reduces average shipping cost when more vessels are selected", () => {
    const single = calculateSelection([{ productId: products[0].id, quantity: 1 }], "au");
    const group = calculateSelection([{ productId: products[0].id, quantity: 5 }], "au");
    expect(group.shippingEstimate / group.itemCount).toBeLessThan(
      single.shippingEstimate / single.itemCount
    );
  });
});
