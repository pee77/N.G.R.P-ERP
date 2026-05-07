import type {
  Category,
  CheckoutInput,
  OrderPreview,
  Product,
  QuoteSubmissionResult,
} from "@/types/commerce";

export type CatalogApi = {
  listProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  listCategories(): Promise<Category[]>;
};

export type CheckoutApi = {
  previewOrder(input: CheckoutInput): Promise<OrderPreview>;
  submitQuote(input: CheckoutInput): Promise<QuoteSubmissionResult>;
};

export type CommerceApi = {
  catalog: CatalogApi;
  checkout: CheckoutApi;
};

type ApiSuccess<T> = {
  success: true;
  data: T;
};

type ApiFailure = {
  success: false;
  error: string;
  code?: string;
};

type ApiEnvelope<T> = ApiSuccess<T> | ApiFailure;

type CommerceApiClientOptions = {
  baseUrl?: string;
  fetchFn?: typeof fetch;
};

class CommerceApiError extends Error {
  status: number;

  code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = "CommerceApiError";
    this.status = status;
    this.code = code;
  }
}

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

export function resolveApiBaseUrl(): string {
  const envValue = import.meta.env.VITE_PROTONLAB_API_BASE_URL?.trim();

  return trimTrailingSlash(envValue || "http://localhost:3000");
}

function normalizeCategory(raw: Partial<Category> & Pick<Category, "id" | "name" | "slug">): Category {
  return {
    id: raw.id,
    name: raw.name,
    slug: raw.slug,
    image: raw.image || "https://placehold.co/600x400/F8FAFC/0B1F33?text=Categoria",
    href: raw.href || `/shop?category=${raw.slug}`,
  };
}

function normalizeProduct(raw: Partial<Product> & Pick<Product, "id" | "sku" | "slug" | "name" | "brand" | "family" | "availability" | "requiresInstallation" | "requiresMaintenance" | "categoryId" | "image">): Product {
  return {
    id: raw.id,
    sku: raw.sku,
    slug: raw.slug,
    name: raw.name,
    brand: raw.brand,
    family: raw.family,
    subfamily: raw.subfamily,
    shortDescription: raw.shortDescription,
    technicalDescription: raw.technicalDescription,
    datasheetUrl: raw.datasheetUrl,
    availability: raw.availability,
    requiresInstallation: raw.requiresInstallation,
    requiresMaintenance: raw.requiresMaintenance,
    price: raw.price,
    compareAtPrice: raw.compareAtPrice,
    currency: raw.currency || "USD",
    image: raw.image,
    hoverImage: raw.hoverImage,
    categoryId: raw.categoryId,
    href: raw.href || `/products/${raw.slug}`,
    badge: raw.badge,
  };
}

async function parseEnvelope<T>(response: Response): Promise<ApiEnvelope<T>> {
  return (await response.json()) as ApiEnvelope<T>;
}

export function createHttpCommerceApi(options: CommerceApiClientOptions = {}): CommerceApi {
  const baseUrl = trimTrailingSlash(options.baseUrl || resolveApiBaseUrl());
  const fetchFn = options.fetchFn || fetch;

  async function request<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetchFn(`${baseUrl}${path}`, {
      ...init,
      headers: {
        "content-type": "application/json",
        ...(init?.headers || {}),
      },
    });
    const payload = await parseEnvelope<T>(response);

    if (!response.ok || !payload.success) {
      throw new CommerceApiError(
        payload.success ? "Request failed" : payload.error,
        response.status,
        payload.success ? undefined : payload.code,
      );
    }

    return payload.data;
  }

  return {
    catalog: {
      async listProducts() {
        const data = await request<Product[]>("/api/products", { method: "GET" });

        return data.map(normalizeProduct);
      },
      async getProductBySlug(slug: string) {
        try {
          const data = await request<Product>(`/api/products/slug/${encodeURIComponent(slug)}`, {
            method: "GET",
          });

          return normalizeProduct(data);
        } catch (error) {
          if (error instanceof CommerceApiError && error.status === 404) {
            return null;
          }

          throw error;
        }
      },
      async listCategories() {
        const data = await request<Category[]>("/api/categories", { method: "GET" });

        return data.map(normalizeCategory);
      },
    },
    checkout: {
      async previewOrder(input) {
        const subtotal = input.items.reduce(
          (sum, item) => sum + (item.unitPrice || 0) * item.quantity,
          0,
        );
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
      async submitQuote(input) {
        return request<QuoteSubmissionResult>("/api/quotes", {
          method: "POST",
          body: JSON.stringify(input),
        });
      },
    },
  };
}

export const commerceApi = createHttpCommerceApi();
