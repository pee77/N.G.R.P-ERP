"use client";

import { useCart } from "@/context/CartContext";
import { formatMoney } from "@/lib/pricing";

export default function SiteCart() {
  const { items, itemCount, pricing, removeItem, updateQuantity, clearCart, isCartOpen, closeCart } = useCart();

  return (
    <>
      <div 
        className={isCartOpen ? "cart-bg-overlay cart-bg-overlay-on" : "cart-bg-overlay"} 
        onClick={closeCart}
      />

      <div className={isCartOpen ? "right-side-cart-area cart-on" : "right-side-cart-area"}>
        <div className="cart-button">
          <button type="button" id="rightSideCart" onClick={closeCart}>
            <img src="/img/core-img/bag.svg" alt="Cart" width={24} height={24} /> <span>{itemCount}</span>
          </button>
        </div>

        <div className="cart-content d-flex">
          <div className="cart-list">
            {items.length === 0 ? (
              <div className="single-cart-item" style={{ padding: "20px" }}>
                <h6>Cotización vacía</h6>
                <p style={{ fontSize: "12px", color: "#787878" }}>Agregue equipos o insumos desde el catálogo.</p>
              </div>
            ) : (
              items.map((item) => (
                <div className="single-cart-item" key={item.productId}>
                  <div className="product-image">
                    <img src={item.image} className="cart-thumb" alt={item.name} width={80} height={100} />
                    <div className="cart-item-desc">
                      <button
                        type="button"
                        className="product-remove"
                        onClick={() => {
                          removeItem(item.productId);
                        }}
                        aria-label={`Remove ${item.name}`}
                      >
                        <i className="fa fa-close" aria-hidden="true" />
                      </button>
                      <span className="badge">{item.brand ?? "Proton Lab"}</span>
                      <h6>{item.name}</h6>
                      <p className="size">SKU: {item.sku}</p>
                      <p className="price">{item.unitPrice ? formatMoney(item.unitPrice, item.currency || "USD") : "A cotizar"}</p>
                      <p className="size">Cant: {item.quantity}</p>
                      <div className="d-flex">
                        <button
                          type="button"
                          className="btn btn-sm"
                          onClick={() => {
                            updateQuantity(item.productId, item.quantity - 1);
                          }}
                        >
                          -
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm"
                          onClick={() => {
                            updateQuantity(item.productId, item.quantity + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="cart-amount-summary">
            <h2>Resumen de Cotización</h2>
            <ul className="summary-table">
              <li>
                <span>Subtotal referencial:</span> <span>{pricing.subtotal > 0 ? formatMoney(pricing.subtotal, pricing.currency) : "A cotizar"}</span>
              </li>
              <li>
                <span>Despacho:</span>{" "}
                <span>A convenir</span>
              </li>
            </ul>
            <div className="checkout-btn mt-100">
              <a href="/checkout" className="btn essence-btn">
                Solicitar Cotización
              </a>
              {items.length > 0 ? (
                <button
                  type="button"
                  className="btn essence-btn"
                  onClick={clearCart}
                  style={{ marginTop: "10px", backgroundColor: "#6B7280" }}
                >
                  Limpiar Lista
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
