"use client";

import { useCart } from "@/context/CartContext";
import { formatMoney } from "@/lib/pricing";
import type { Product } from "@/types/commerce";

import { Link } from "react-router-dom";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="single-product-wrapper">
      <div className="product-img">
        <Link to={product.href}>
          <img src={product.image} alt={product.name} width={600} height={800} />
          {product.hoverImage ? (
            <img className="hover-img" src={product.hoverImage} alt={`${product.name} hover`} width={600} height={800} />
          ) : null}
        </Link>

        {product.badge ? (
          <div className={`product-badge ${product.badge.className}`}>
            <span>{product.badge.text}</span>
          </div>
        ) : null}

        <div className="product-favourite">
          <button type="button" className="favme fa fa-heart" aria-label={`Add ${product.name} to favourites`} />
        </div>
      </div>

      <div className="product-description">
        <span>{product.brand}</span>
        <Link to={product.href}>
          <h6>{product.name}</h6>
        </Link>

        {product.price ? (
          product.compareAtPrice ? (
            <p className="product-price">
              <span className="old-price">{formatMoney(product.compareAtPrice, product.currency || "USD")}</span>{" "}
              {formatMoney(product.price, product.currency || "USD")}
            </p>
          ) : (
            <p className="product-price">{formatMoney(product.price, product.currency || "USD")}</p>
          )
        ) : (
          <p className="product-price">A cotizar</p>
        )}

        <div className="hover-content">
          <div className="add-to-cart-btn">
            <button type="button" className="btn essence-btn" onClick={() => addItem(product, 1)}>
              Cotizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
