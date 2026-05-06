import { useState, useMemo } from "react";
import ProductCard from "@/components/home/ProductCard";
import type { Product } from "@/types/commerce";

type ShopProductGridProps = {
  products: Product[];
};

export default function ShopProductGrid({ products }: ShopProductGridProps) {
  const [sortOrder, setSortOrder] = useState<string>("newest");

  const sortedProducts = useMemo(() => {
    const list = [...products];
    if (sortOrder === "price-desc") {
      return list.sort((a, b) => (b.price || 0) - (a.price || 0));
    }
    if (sortOrder === "price-asc") {
      return list.sort((a, b) => (a.price || 0) - (b.price || 0));
    }
    return list; // default o newest (no tenemos fecha real)
  }, [products, sortOrder]);

  return (
    <div className="shop_grid_product_area">
      <div className="row">
        <div className="col-12">
          <div className="product-topbar d-flex align-items-center justify-content-between">
            <div className="total-products">
              <p>
                <span>{products.length}</span> productos encontrados
              </p>
            </div>
            <div className="product-sorting d-flex">
              <p>Orden:</p>
              <form action="#" method="get">
                <select 
                  name="select" 
                  id="sortByselect" 
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="newest">Más recientes</option>
                  <option value="price-desc">Precio: Mayor a Menor</option>
                  <option value="price-asc">Precio: Menor a Mayor</option>
                </select>
                <input type="submit" className="d-none" value="" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {sortedProducts.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <nav aria-label="navigation">
        <ul className="pagination mt-50 mb-70">
          <li className="page-item">
            <button className="page-link" type="button" aria-label="Previous page">
              <i className="fa fa-angle-left" />
            </button>
          </li>
          <li className="page-item"><button className="page-link" type="button">1</button></li>
          <li className="page-item"><button className="page-link" type="button">2</button></li>
          <li className="page-item"><button className="page-link" type="button">3</button></li>
          <li className="page-item"><button className="page-link" type="button">...</button></li>
          <li className="page-item"><button className="page-link" type="button">21</button></li>
          <li className="page-item">
            <button className="page-link" type="button" aria-label="Next page">
              <i className="fa fa-angle-right" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
