import type { CartItem, CurrencyCode, PricingBreakdown, PricingRules } from "@/types/commerce";

export const DEFAULT_PRICING_RULES: PricingRules = {
  shippingFlatRate: 10,
  freeShippingThreshold: 200,
  taxRate: 0.07,
  discountRate: 0.15,
};

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}

export function formatMoney(amount: number, currency: CurrencyCode = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

export function calculateSubtotal(items: CartItem[]): number {
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  return round2(subtotal);
}

export function calculateDiscount(subtotal: number, rules: PricingRules = DEFAULT_PRICING_RULES): number {
  if (subtotal < 100) {
    return 0;
  }

  return round2(subtotal * rules.discountRate);
}

export function calculateShipping(subtotalAfterDiscount: number, rules: PricingRules = DEFAULT_PRICING_RULES): number {
  if (subtotalAfterDiscount <= 0 || subtotalAfterDiscount >= rules.freeShippingThreshold) {
    return 0;
  }

  return round2(rules.shippingFlatRate);
}

export function calculateTax(
  taxableAmount: number,
  rules: PricingRules = DEFAULT_PRICING_RULES,
): number {
  return round2(taxableAmount * rules.taxRate);
}

export function buildPricing(
  items: CartItem[],
  rules: PricingRules = DEFAULT_PRICING_RULES,
): PricingBreakdown {
  const subtotal = calculateSubtotal(items);
  const discount = calculateDiscount(subtotal, rules);
  const discountedSubtotal = subtotal - discount;
  const shipping = calculateShipping(discountedSubtotal, rules);
  const tax = calculateTax(discountedSubtotal + shipping, rules);
  const total = round2(discountedSubtotal + shipping + tax);

  return {
    subtotal,
    discount,
    shipping,
    tax,
    total,
    currency: "USD",
  };
}
