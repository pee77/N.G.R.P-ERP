import BrandsSection from "@/components/home/BrandsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import CtaSection from "@/components/home/CtaSection";
import HeroSection from "@/components/home/HeroSection";
import PopularProductsSection from "@/components/home/PopularProductsSection";
import { brands, categories, cta, hero, products } from "@/data/home";

export const metadata = {
  title: "Home",
  description: "Discover the latest fashion arrivals, featured categories, and global sale offers.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection {...hero} />
      <CategoriesSection categories={categories} />
      <CtaSection {...cta} />
      <PopularProductsSection products={products} />
      <BrandsSection brands={brands} />
    </main>
  );
}
