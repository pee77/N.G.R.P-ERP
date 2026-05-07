import { describe, expect, it, vi } from "vitest";

import { createHttpCommerceApi } from "./commerce-api";

describe("createHttpCommerceApi", () => {
  it("loads products from the Proton Lab backend", async () => {
    const fetchFn = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          success: true,
          data: [
            {
              id: "prod-1",
              sku: "SKU-1",
              slug: "producto-1",
              name: "Producto 1",
              brand: "Marca 1",
              family: "Equipos",
              availability: "disponible",
              requiresInstallation: false,
              requiresMaintenance: false,
              image: "/producto-1.png",
              categoryId: "cat-1"
            }
          ]
        }),
        {
          status: 200,
          headers: {
            "content-type": "application/json"
          }
        }
      )
    );

    const api = createHttpCommerceApi({
      baseUrl: "http://localhost:3000",
      fetchFn
    });

    const products = await api.catalog.listProducts();

    expect(fetchFn).toHaveBeenCalledWith(
      "http://localhost:3000/api/products",
      expect.objectContaining({
        method: "GET"
      })
    );
    expect(products).toEqual([
      expect.objectContaining({
        id: "prod-1",
        slug: "producto-1"
      })
    ]);
  });

  it("returns null when the backend cannot find a product slug", async () => {
    const fetchFn = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          success: false,
          error: "Producto no encontrado",
          code: "NOT_FOUND"
        }),
        {
          status: 404,
          headers: {
            "content-type": "application/json"
          }
        }
      )
    );

    const api = createHttpCommerceApi({
      baseUrl: "http://localhost:3000",
      fetchFn
    });

    await expect(api.catalog.getProductBySlug("missing")).resolves.toBeNull();
  });

  it("submits checkout data as a quote request", async () => {
    const fetchFn = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({
          success: true,
          data: {
            quoteId: "quote_123",
            status: "pendiente"
          }
        }),
        {
          status: 201,
          headers: {
            "content-type": "application/json"
          }
        }
      )
    );

    const api = createHttpCommerceApi({
      baseUrl: "http://localhost:3000",
      fetchFn
    });

    const result = await api.checkout.submitQuote({
      email: "compras@cliente.cl",
      items: [
        {
          productId: "prod-1",
          sku: "SKU-1",
          name: "Producto 1",
          quantity: 1,
          unitPrice: 900,
          currency: "USD",
          image: "/producto-1.png"
        }
      ],
      shippingAddress: {
        firstName: "Ana",
        lastName: "Pérez",
        addressLine1: "Av. Siempre Viva 123",
        city: "Santiago",
        postalCode: "7500000",
        country: "CL"
      },
      paymentMethod: "card"
    });

    expect(fetchFn).toHaveBeenCalledWith(
      "http://localhost:3000/api/quotes",
      expect.objectContaining({
        method: "POST"
      })
    );
    expect(result).toEqual({
      quoteId: "quote_123",
      status: "pendiente"
    });
  });
});
