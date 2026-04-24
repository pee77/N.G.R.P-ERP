"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatMoney } from "@/lib/pricing";
import type { Product } from "@/types/commerce";

type SingleProductDetailsProps = {
  product: Product;
};

export default function SingleProductDetails({ product }: SingleProductDetailsProps) {
  const { addItem } = useCart();
  const gallery = product.hoverImage ? [product.image, product.hoverImage] : [product.image];

  return (
    <section className="single_product_details_area d-flex align-items-center">
      <div className="single_product_thumb clearfix">
        <div className="product_thumbnail_slides owl-carousel">
          {gallery.map((src) => (
            <img key={src} src={src} alt={product.name} width={900} height={1200} />
          ))}
        </div>
      </div>

      <div className="single_product_desc clearfix">
        <span>{product.brand} - {product.family}</span>
        <h2>{product.name}</h2>
        <p className="product-price">
          {product.price ? formatMoney(product.price, product.currency || "USD") : "A cotizar"}
        </p>
        <p className="product-desc">{product.shortDescription ?? product.name}</p>

        <div className="technical-specs mt-30 mb-30" style={{ fontSize: "14px", color: "#555" }}>
          <p><strong>SKU:</strong> {product.sku}</p>
          <p><strong>Disponibilidad:</strong> <span style={{ textTransform: "capitalize" }}>{product.availability.replace("_", " ")}</span></p>
          {product.technicalDescription && <p><strong>Especificaciones:</strong> {product.technicalDescription}</p>}
          <ul style={{ paddingLeft: "20px", marginTop: "15px" }}>
            <li>{product.requiresInstallation ? "✅ Requiere instalación técnica" : "❌ No requiere instalación"}</li>
            <li>{product.requiresMaintenance ? "✅ Requiere mantenimiento preventivo" : "❌ No requiere mantenimiento preventivo"}</li>
          </ul>
        </div>

        <form
          className="cart-form clearfix"
          onSubmit={(event) => {
            event.preventDefault();
            addItem(product, 1);
          }}
        >
          <div className="cart-fav-box d-flex align-items-center">
            <button type="submit" className="btn essence-btn">
              Solicitar Cotización
            </button>
            <div className="product-favourite ml-4">
              <button type="button" className="favme fa fa-heart" aria-label="Add to favourites" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
