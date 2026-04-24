import ShopProductGrid from "@/components/shop/ShopProductGrid";
import ShopSidebar from "@/components/shop/ShopSidebar";
import { shopProducts } from "@/data/shop";

export const metadata = {
  title: "Shop",
  description: "Browse the latest dresses, accessories, and fashion essentials.",
  alternates: {
    canonical: "/shop",
  },
};

export default function ShopPage() {
  return (
    <main>
      <div className="breadcumb_area bg-img" style={{ backgroundImage: "url('https://placehold.co/1920x300/0B1F33/FFF?text=Catálogo+Técnico')" }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="page-title text-center">
                <h2 style={{ color: "white" }}>Catálogo B2B</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="shop_grid_area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <ShopSidebar />
            </div>

            <div className="col-12 col-md-8 col-lg-9">
              <ShopProductGrid products={shopProducts} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
