import { useEffect, useState } from "react";
import BrandsSection from "@/components/home/BrandsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import CtaSection from "@/components/home/CtaSection";
import HeroSection from "@/components/home/HeroSection";
import PopularProductsSection from "@/components/home/PopularProductsSection";
import { commerceApi } from "@/lib/commerce-api";
import { brands, cta, hero } from "@/data/home";
import type { Category, Product } from "@/types/commerce";

export const metadata = {
  title: "Home",
  description: "Discover the latest fashion arrivals, featured categories, and global sale offers.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
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

  return (
    <main>
      <HeroSection {...hero} />
      {catalogError ? <p className="text-center mt-4">{catalogError}</p> : null}
      <CategoriesSection categories={categories} />
      <CtaSection {...cta} />
      <PopularProductsSection products={products.slice(0, 4)} />
      <BrandsSection brands={brands} />
    </main>
  );
}
