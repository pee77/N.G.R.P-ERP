import { brandConfig } from "@/config/brand";

export default function ContactPage() {
  return (
    <main>
      <div className="contact-area d-flex align-items-center">
        <div className="contact-info" style={{ width: "100%", padding: "100px 5%" }}>
          <h2>Contacto Comercial</h2>
          <p>
            Comuníquese con el equipo de Proton Lab para cotizaciones, alianzas o información corporativa.
          </p>

          <div className="contact-address mt-50">
            <p>
              <span>Dirección:</span> {brandConfig.contact.address}
            </p>
            <p>
              <span>Teléfono:</span> {brandConfig.contact.phone}
            </p>
            <p>
              <span>Ventas:</span> <a href={`mailto:${brandConfig.contact.email}`}>{brandConfig.contact.email}</a>
            </p>
            <p>
              <span>Soporte:</span> <a href={`mailto:${brandConfig.contact.supportEmail}`}>{brandConfig.contact.supportEmail}</a>
            </p>
          </div>
        </div>
      </div>

      <div className="contact-area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="checkout_details_area clearfix">
                <div className="cart-page-heading mb-30">
                  <h5>Enviar Mensaje</h5>
                </div>
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" id="first_name" placeholder="Nombre completo" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="email" className="form-control" id="email" placeholder="Email corporativo" required />
                    </div>
                    <div className="col-12 mb-3">
                      <select className="form-select w-100" id="subject">
                        <option value="venta">Cotizaciones y Ventas</option>
                        <option value="soporte">Soporte Técnico</option>
                        <option value="proveedor">Proveedores</option>
                        <option value="alianza">Alianzas Comerciales</option>
                      </select>
                    </div>
                    <div className="col-12 mb-3">
                      <textarea name="message" className="form-control" id="message" cols={30} rows={10} placeholder="Mensaje" />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn essence-btn">Enviar Mensaje</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="checkout-content mt-50">
                <h5 className="title--">Horario de Atención</h5>
                <p className="mb-3">Nuestro equipo comercial y técnico está disponible para atender sus requerimientos B2B.</p>
                <p className="mb-0">Lunes a Viernes: 08:30 a 18:00 hrs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
