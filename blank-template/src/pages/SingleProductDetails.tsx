import SingleProductDetails from "@/components/shop/SingleProductDetails";
import { featuredProduct } from "@/data/shop";

export const metadata = {
  title: "Product Details",
  description: "See product gallery, available sizes, colors, and add your favorite item to cart.",
  alternates: {
    canonical: "/single-product-details",
  },
};

export default function SingleProductDetailsPage() {
  return (
    <main>
      <SingleProductDetails product={featuredProduct} />
    </main>
  );
}
