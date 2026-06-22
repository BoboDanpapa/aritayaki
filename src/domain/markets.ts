export type Language = "ja" | "en" | "zh-TW";
export type MarketId = "tw" | "au" | "us";

export const DEFAULT_LANGUAGE: Language = "ja";

export const MARKETS = {
  tw: {
    id: "tw",
    label: { ja: "台湾", en: "Taiwan", "zh-TW": "台灣" },
    currency: "TWD",
    prefix: "NT$",
    rateFromUsd: 32.4,
    shippingBase: 38
  },
  au: {
    id: "au",
    label: { ja: "オーストラリア", en: "Australia", "zh-TW": "澳洲" },
    currency: "AUD",
    prefix: "A$",
    rateFromUsd: 1.53,
    shippingBase: 46
  },
  us: {
    id: "us",
    label: { ja: "アメリカ", en: "United States", "zh-TW": "美國" },
    currency: "USD",
    prefix: "US$",
    rateFromUsd: 1,
    shippingBase: 42
  }
} as const;

export function getRecommendedMarket(language = "", region = ""): MarketId {
  const normalized = `${language}-${region}`.toLowerCase();
  if (normalized.includes("tw") || normalized.includes("zh-hant")) return "tw";
  if (normalized.includes("au")) return "au";
  return "us";
}

export function formatMarketPrice(usd: number, market: MarketId): string {
  const config = MARKETS[market];
  const converted = usd * config.rateFromUsd;
  const rounded = config.currency === "TWD" ? Math.round(converted / 10) * 10 : Math.round(converted);
  return `${config.prefix}${rounded.toLocaleString("en-US")}`;
}
