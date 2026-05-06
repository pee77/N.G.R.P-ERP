import { useParams } from "react-router-dom";
import SingleProductDetails from "@/components/shop/SingleProductDetails";
import { shopProducts } from "@/data/shop";

export const metadata = {
  title: "Product Details",
  description: "See product gallery, available sizes, colors, and add your favorite item to cart.",
  alternates: {
    canonical: "/single-product-details",
  },
};

export default function SingleProductDetailsPage() {
  const { slug } = useParams();
  
  // Buscar el producto por su slug
  const product = shopProducts.find((p) => p.slug === slug) || shopProducts[0];

  return (
    <main>
      <SingleProductDetails product={product} />
    </main>
  );
}
