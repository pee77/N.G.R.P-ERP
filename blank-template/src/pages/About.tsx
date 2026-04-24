import { brandConfig } from "@/config/brand";

export default function AboutPage() {
  return (
    <main>
      <div className="contact-area d-flex align-items-center" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="contact-info" style={{ width: "100%", padding: "80px 5%" }}>
          <h2>Sobre {brandConfig.name}</h2>
          <p>
            Especialistas en equipamiento clínico e industrial para continuidad operativa.
          </p>
        </div>
      </div>

      <div className="section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <h4>Nuestra Experiencia</h4>
              <p>
                {brandConfig.name} centraliza solicitudes, cotizaciones y seguimiento de pedidos para clientes B2B. Nuestro enfoque es netamente técnico y resolutivo, asegurando la trazabilidad comercial y operativa de cada proyecto o laboratorio que equipamos.
              </p>
              <p>
                No somos solo un distribuidor; somos un socio estratégico para asegurar el funcionamiento ininterrumpido de sus procesos críticos.
              </p>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <h4>Cobertura y Servicios</h4>
              <ul>
                <li>✔️ Provisión de equipos de alta precisión.</li>
                <li>✔️ Reactivos químicos y biológicos.</li>
                <li>✔️ Mantenimiento preventivo y correctivo.</li>
                <li>✔️ Soporte técnico en terreno.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
