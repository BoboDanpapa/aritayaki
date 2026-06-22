import { MARKETS, type MarketId } from "./markets";
import { products } from "./products";

export interface SelectionItem {
  productId: string;
  quantity: number;
}

export interface SelectionSummary {
  itemCount: number;
  subtotal: number;
  shippingEstimate: number;
  total: number;
  weightGrams: number;
}

export function calculateSelection(items: SelectionItem[], market: MarketId): SelectionSummary {
  const normalized = items.filter((item) => item.quantity > 0);
  const itemCount = normalized.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = normalized.reduce((sum, item) => {
    const product = products.find((candidate) => candidate.id === item.productId);
    return sum + (product?.priceUsd ?? 0) * item.quantity;
  }, 0);
  const weightGrams = normalized.reduce((sum, item) => {
    const product = products.find((candidate) => candidate.id === item.productId);
    return sum + (product?.weightGrams ?? 0) * item.quantity;
  }, 0);
  const base = MARKETS[market].shippingBase;
  const packingWeight = itemCount > 0 ? 650 + itemCount * 110 : 0;
  const billableKg = (weightGrams + packingWeight) / 1000;
  const shippingEstimate = itemCount === 0 ? 0 : Math.round(base + billableKg * 8.5);

  return {
    itemCount,
    subtotal,
    shippingEstimate,
    total: subtotal + shippingEstimate,
    weightGrams
  };
}
