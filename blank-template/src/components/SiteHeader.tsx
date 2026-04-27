"use client";

import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import ProtonLogo from "@/components/ProtonLogo";

export default function SiteHeader() {
  const { itemCount, toggleCart } = useCart();

  return (
    <header className="header_area">
      <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
        <nav className="classy-navbar" id="essenceNav">
          <Link className="nav-brand" to="/" style={{ textDecoration: 'none' }}>
            <ProtonLogo className="site-header-logo" />
          </Link>

          <div className="classy-navbar-toggler">
            <span className="navbarToggler">
              <span />
              <span />
              <span />
            </span>
          </div>

          <div className="classy-menu">
            <div className="classycloseIcon">
              <div className="cross-wrap">
                <span className="top" />
                <span className="bottom" />
              </div>
            </div>

            <div className="classynav">
              <ul style={{ display: 'flex', flexDirection: 'row', gap: '20px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/about">Nosotros</Link>
                </li>
                <li>
                  <Link to="/shop">Productos</Link>
                </li>
                <li>
                  <Link to="/support">Soporte</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="header-meta d-flex clearfix justify-content-end" style={{ alignItems: 'center' }}>
          <div className="search-area">
            <form action="#" method="post">
              <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
              <button type="submit">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>

          <div className="user-login-info" style={{ display: 'flex', alignItems: 'center', padding: '0 10px', marginLeft: '10px' }}>
            <Link to="/login" style={{ display: 'flex', alignItems: 'center', color: '#747474ff', textDecoration: 'none', fontWeight: 500, fontSize: '18px', borderLeft: 'none' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '10px', width: '26px', height: '26px', flexShrink: 0 }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
              Ingresar
            </Link>
          </div>

          {/* Barrera tangible */}
          <div style={{ 
            width: '4px', 
            height: '35px', 
            backgroundColor: '#d1d1d1', 
            margin: '0 10px', 
            borderRadius: '10px',
            boxShadow: 'inset 1px 1px 1px rgba(0,0,0,0.1), 1px 1px 1px rgba(255,255,255,0.8)',
            flexShrink: 0
          }}></div>

          <div className="cart-area" style={{ paddingLeft: '10px' }}>
            <button type="button" id="essenceCartBtn" onClick={toggleCart} style={{ borderLeft: 'none' }}>
              <img src="/img/core-img/bag.svg" alt="Cart" width={24} height={24} /> <span>{itemCount}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
