import { brandConfig } from "@/config/brand";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main>
      <div className="section-padding-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="checkout_details_area clearfix">
                <div className="cart-page-heading mb-30 text-center">
                  <h5>Portal Clientes {brandConfig.name}</h5>
                  <p>Acceso exclusivo a cotizaciones y seguimiento B2B.</p>
                </div>
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <label htmlFor="email">Email Corporativo</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="password">Contraseña</label>
                      <input type="password" className="form-control" id="password" required />
                    </div>
                    <div className="col-12 text-center mt-3">
                      <button type="submit" className="btn essence-btn w-100">Ingresar al Portal</button>
                    </div>
                    <div className="col-12 text-center mt-3">
                      <Link to="/contact" className="text-muted"><small>¿Desea ser cliente B2B? Contáctenos.</small></Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
