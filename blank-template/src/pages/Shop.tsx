import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ShopProductGrid from "@/components/shop/ShopProductGrid";
import ShopSidebar from "@/components/shop/ShopSidebar";
import { commerceApi } from "@/lib/commerce-api";
import type { Category, Product } from "@/types/commerce";

export const metadata = {
  title: "Shop",
  description: "Browse the latest dresses, accessories, and fashion essentials.",
  alternates: {
    canonical: "/shop",
  },
};

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [catalogError, setCatalogError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadCatalog() {
      try {
        const [nextCategories, nextProducts] = await Promise.all([
          commerceApi.catalog.listCategories(),
          commerceApi.catalog.listProducts(),
        ]);

        if (cancelled) {
          return;
        }

        setCategories(nextCategories);
        setProducts(nextProducts);
      } catch {
        if (!cancelled) {
          setCatalogError("No pudimos cargar el catálogo desde Proton Lab backend.");
        }
      }
    }

    void loadCatalog();

    return () => {
      cancelled = true;
    };
  }, []);

  const selectedCategory = searchParams.get("category");
  const selectedCategoryId = useMemo(
    () => categories.find((category) => category.slug === selectedCategory)?.id,
    [categories, selectedCategory],
  );
  const visibleProducts = useMemo(() => {
    if (!selectedCategoryId) {
      return products;
    }

    return products.filter((product) => product.categoryId === selectedCategoryId);
  }, [products, selectedCategoryId]);

  return (
    <main>
      <section className="shop_grid_area section-padding-80">
        <div className="container">
          {catalogError ? <p className="mb-4">{catalogError}</p> : null}
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <ShopSidebar />
            </div>

            <div className="col-12 col-md-8 col-lg-9">
              <ShopProductGrid products={visibleProducts} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
