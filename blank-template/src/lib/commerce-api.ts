import { categories, products } from "@/data/home";
import type { CheckoutInput, OrderPreview, Product, Category } from "@/types/commerce";

export type CatalogApi = {
  listProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  listCategories(): Promise<Category[]>;
};

export type CheckoutApi = {
  previewOrder(input: CheckoutInput): Promise<OrderPreview>;
  submitOrder(input: CheckoutInput): Promise<{ orderId: string }>;
};

export type CommerceApi = {
  catalog: CatalogApi;
  checkout: CheckoutApi;
};

export const mockCommerceApi: CommerceApi = {
  catalog: {
    async listProducts() {
      return products;
    },
    async getProductBySlug(slug: string) {
      return products.find((product) => product.slug === slug) ?? null;
    },
    async listCategories() {
      return categories;
    },
  },
  checkout: {
    async previewOrder(input) {
      const subtotal = input.items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
      const total = Number(subtotal.toFixed(2));

      return {
        items: input.items,
        pricing: {
          subtotal: total,
          discount: 0,
          shipping: 0,
          tax: 0,
          total,
          currency: "USD",
        },
      };
    },
    async submitOrder(input) {
      void input;
      return { orderId: `ord_${Date.now()}` };
    },
  },
};
