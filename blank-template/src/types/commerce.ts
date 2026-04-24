export type CurrencyCode = "USD";

export type ProductBadge = {
  text: string;
  className: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  href: string;
};

export type Product = {
  id: string;
  sku: string;
  slug: string;
  name: string;
  brand: string;
  family: string;
  subfamily?: string;
  shortDescription?: string;
  technicalDescription?: string;
  datasheetUrl?: string;
  availability: "disponible" | "bajo_pedido" | "sujeto_stock";
  requiresInstallation: boolean;
  requiresMaintenance: boolean;
  price?: number;
  compareAtPrice?: number;
  currency?: CurrencyCode;
  image: string;
  hoverImage?: string;
  categoryId: string;
  href: string;
  badge?: ProductBadge;
};

export type CartItem = {
  productId: string;
  sku: string;
  name: string;
  image: string;
  unitPrice?: number;
  currency?: CurrencyCode;
  quantity: number;
  brand?: string;
};

export type PricingRules = {
  shippingFlatRate: number;
  freeShippingThreshold: number;
  taxRate: number;
  discountRate: number;
};

export type PricingBreakdown = {
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  total: number;
  currency: CurrencyCode;
};

export type CheckoutAddress = {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state?: string;
  postalCode: string;
  country: string;
  phone?: string;
};

export type CheckoutDraft = {
  email: string;
  shippingAddress: CheckoutAddress;
  billingAddress?: CheckoutAddress;
  sameAsShipping: boolean;
  notes?: string;
};

export type CheckoutInput = {
  email: string;
  items: CartItem[];
  shippingAddress: CheckoutAddress;
  billingAddress?: CheckoutAddress;
  paymentMethod: "card" | "paypal" | "cash_on_delivery";
  notes?: string;
};

export type OrderPreview = {
  items: CartItem[];
  pricing: PricingBreakdown;
};
