import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleProductDetailsView from "@/components/shop/SingleProductDetails";
import { commerceApi } from "@/lib/commerce-api";
import type { Product } from "@/types/commerce";

export const metadata = {
  title: "Product Details",
  description: "See product gallery, available sizes, colors, and add your favorite item to cart.",
  alternates: {
    canonical: "/single-product-details",
  },
};

export default function SingleProductDetailsPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [catalogError, setCatalogError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadProduct() {
      if (!slug) {
        setCatalogError("Producto no encontrado.");
        setLoading(false);
        return;
      }

      try {
        const nextProduct = await commerceApi.catalog.getProductBySlug(slug);

        if (cancelled) {
          return;
        }

        if (!nextProduct) {
          setCatalogError("Producto no encontrado.");
        } else {
          setProduct(nextProduct);
        }
      } catch {
        if (!cancelled) {
          setCatalogError("No pudimos cargar el detalle del producto.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadProduct();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <main>
        <section className="section-padding-80 text-center">
          <div className="container">
            <p>Cargando producto...</p>
          </div>
        </section>
      </main>
    );
  }

  if (catalogError || !product) {
    return (
      <main>
        <section className="section-padding-80 text-center">
          <div className="container">
            <p>{catalogError || "Producto no encontrado."}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <SingleProductDetailsView product={product} />
    </main>
  );
}
