import { brandConfig } from "@/config/brand";

export default function SupportPage() {
  return (
    <main>
      <div className="contact-area d-flex align-items-center" style={{ backgroundColor: "var(--primary-color)" }}>
        <div className="contact-info" style={{ width: "100%", padding: "80px 5%" }}>
          <h2 style={{ color: "#fff" }}>Soporte Técnico Operacional</h2>
          <p style={{ color: "rgba(255,255,255,0.8)" }}>
            Centro de atención técnica para equipos, mantenimientos e instalación.
          </p>
        </div>
      </div>

      <div className="contact-area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="checkout_details_area clearfix">
                <div className="cart-page-heading mb-30">
                  <h5>Solicitud de Asistencia</h5>
                </div>
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name">Nombre / Solicitante *</label>
                      <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="company">Empresa / Laboratorio *</label>
                      <input type="text" className="form-control" id="company" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone">Teléfono *</label>
                      <input type="text" className="form-control" id="phone" required />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="type">Tipo de solicitud *</label>
                      <select className="form-select w-100" id="type">
                        <option value="preventa">Asesoría Preventa</option>
                        <option value="instalacion">Instalación de Equipo</option>
                        <option value="mantenimiento">Mantenimiento Preventivo</option>
                        <option value="falla">Falla Técnica / Reparación</option>
                        <option value="repuesto">Cotización de Repuesto</option>
                        <option value="capacitacion">Capacitación Técnica</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="equipment">Equipo o Solución</label>
                      <input type="text" className="form-control" id="equipment" placeholder="Ej. Centrífuga TechLab" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="serial">Número de Serie</label>
                      <input type="text" className="form-control" id="serial" placeholder="Si aplica" />
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="urgency">Nivel de Urgencia</label>
                      <select className="form-select w-100" id="urgency">
                        <option value="normal">Normal (Respuesta en 48h)</option>
                        <option value="alta">Alta (Equipo detenido)</option>
                        <option value="critica">Crítica (Riesgo operacional)</option>
                      </select>
                    </div>
                    <div className="col-12 mb-3">
                      <label htmlFor="description">Descripción del problema o solicitud *</label>
                      <textarea name="description" className="form-control" id="description" cols={30} rows={5} required />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn essence-btn">Generar Ticket de Soporte</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="checkout-content mt-50">
                <h5 className="title--">Línea Directa Técnica</h5>
                <p className="mb-3">En caso de emergencia operacional crítica, contáctenos directamente al teléfono de soporte 24/7.</p>
                <p className="mb-3"><strong>{brandConfig.contact.supportEmail}</strong></p>
                <p className="mb-0"><strong>{brandConfig.contact.phone}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
