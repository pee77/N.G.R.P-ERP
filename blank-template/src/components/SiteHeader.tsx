"use client";

import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import logoProtonLab from "@/assets/images/protonlab/logo-protonlab.png";

export default function SiteHeader() {
  const { itemCount, toggleCart } = useCart();

  return (
    <header className="header_area">
      <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
        <nav className="classy-navbar" id="essenceNav">
          <Link className="nav-brand" to="/">
            <img
              src={logoProtonLab}
              alt="Proton Lab"
              width={240}
              height={80}
              className="site-header-logo"
              sizes="(max-width: 767px) 140px, 240px"
            />
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
              <ul>
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
                <li>
                  <Link to="/login">Portal clientes</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="header-meta d-flex clearfix justify-content-end">
          <div className="search-area">
            <form action="#" method="post">
              <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
              <button type="submit">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </form>
          </div>
          <div className="favourite-area">
            <button type="button" aria-label="Favorites">
              <img src="/img/core-img/heart.svg" alt="Favorite" width={24} height={24} />
            </button>
          </div>
          <div className="user-login-info">
            <button type="button" aria-label="User account">
              <img src="/img/core-img/user.svg" alt="User" width={24} height={24} />
            </button>
          </div>
          <div className="cart-area">
            <button type="button" id="essenceCartBtn" onClick={toggleCart}>
              <img src="/img/core-img/bag.svg" alt="Cart" width={24} height={24} /> <span>{itemCount}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
