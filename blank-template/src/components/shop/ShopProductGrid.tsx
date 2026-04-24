import ProductCard from "@/components/home/ProductCard";
import type { Product } from "@/types/commerce";

type ShopProductGridProps = {
  products: Product[];
};

export default function ShopProductGrid({ products }: ShopProductGridProps) {
  return (
    <div className="shop_grid_product_area">
      <div className="row">
        <div className="col-12">
          <div className="product-topbar d-flex align-items-center justify-content-between">
            <div className="total-products">
              <p>
                <span>{products.length}</span> products found
              </p>
            </div>
            <div className="product-sorting d-flex">
              <p>Sort by:</p>
              <form action="#" method="get">
                <select name="select" id="sortByselect">
                  <option value="highest">Highest Rated</option>
                  <option value="newest">Newest</option>
                  <option value="price-desc">Price: $$ - $</option>
                  <option value="price-asc">Price: $ - $$</option>
                </select>
                <input type="submit" className="d-none" value="" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {products.map((product) => (
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
