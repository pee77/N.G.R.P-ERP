import { Link } from "react-router-dom";
import { brandConfig } from "@/config/brand";
import logoProtonLab from "@/assets/images/protonlab/logo-protonlab.png";

export default function SiteFooter() {
  return (
    <footer className="footer_area clearfix">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="single_widget_area d-flex mb-30">
              <div className="footer-logo mr-50">
                <Link to="/">
                  <img src={logoProtonLab} alt={brandConfig.name} style={{ height: "60px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                </Link>
              </div>
              <div className="footer_menu">
                <ul>
                  <li><Link to="/about">Nosotros</Link></li>
                  <li><Link to="/shop">Productos</Link></li>
                  <li><Link to="/contact">Contacto</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="single_widget_area mb-30">
              <ul className="footer_widget_menu">
                <li><Link to="/support">Soporte Técnico</Link></li>
                <li><Link to="/login">Portal Clientes</Link></li>
                <li><Link to="/blog">Guías y Blog</Link></li>
                <li><Link to="/regular-page">Políticas de Privacidad</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row align-items-end">
          <div className="col-12 col-md-6">
            <div className="single_widget_area">
              <div className="footer_heading mb-30">
                <h6>Contacto Comercial</h6>
                <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 0 }}>{brandConfig.contact.email}</p>
                <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 0 }}>{brandConfig.contact.phone}</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="single_widget_area">
              <div className="footer_social_area">
                <a href={brandConfig.social.linkedin} target="_blank" rel="noreferrer" title="LinkedIn">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy;{new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
