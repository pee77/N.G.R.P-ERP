"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatMoney } from "@/lib/pricing";
import { useFavorites } from "@/context/FavoritesContext";
import type { Product } from "@/types/commerce";

type SingleProductDetailsProps = {
  product: Product;
};

export default function SingleProductDetails({ product }: SingleProductDetailsProps) {
  const { addItem } = useCart();
  const { toggleFavorite, getLikes } = useFavorites();
  const likes = getLikes(product.id);
  const gallery = product.hoverImage ? [product.image, product.hoverImage] : [product.image];

  return (
    <section className="single_product_details_area d-flex align-items-center">
      <div className="single_product_thumb clearfix" style={{ position: "relative" }}>
        <div className="product-favourite" style={{ position: "absolute", top: "20px", right: "20px", zIndex: 10 }}>
          <button 
            type="button" 
            className="favme"
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(product.id);
            }}
            style={{
              background: "white",
              border: "none",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              cursor: "pointer"
            }}
          >
            <i className="fa fa-heart" style={{ color: "#ff4444", fontSize: "20px" }} />
            {likes > 0 && <span style={{ fontSize: "12px", fontWeight: "bold", color: "#333" }}>{likes}</span>}
          </button>
        </div>
        <div className="product_thumbnail_slides">
          {gallery.map((src) => (
            <img key={src} src={src} alt={product.name} style={{ width: "100%", height: "auto", display: "block" }} />
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
          </div>
        </form>
      </div>
    </section>
  );
}
