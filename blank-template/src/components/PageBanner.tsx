import { useLocation } from "react-router-dom";

const routeTitles: Record<string, string> = {
  "/shop": "Catálogo B2B",
  "/blog": "Blog Corporativo",
  "/contact": "Contacto Comercial",
  "/about": "Nuestra Empresa",
  "/support": "Soporte Técnico",
  "/checkout": "Finalizar Compra",
  "/login": "Acceso Clientes",
  "/single-blog": "Noticias",
  "/single-product-details": "Detalle de Producto",
  "/regular-page": "Información"
};

export default function PageBanner() {
  const location = useLocation();
  
  // No mostramos el banner en la Home
  if (location.pathname === "/") return null;

  const title = routeTitles[location.pathname] || "Proton Lab";

  return (
    <div className="breadcumb_area" style={{ height: "auto", marginTop: "0px", position: "relative", overflow: "hidden" }}>
      <img 
        src="/src/assets/images/protonlab/banner-protonlab.png" 
        alt="Banner" 
        style={{ width: "100%", height: "auto", display: "block" }} 
      />
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.1)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="page-title text-center">
                <h2 style={{ color: "white", textShadow: "0px 0px 10px rgba(0,0,0,0.5)", fontSize: "clamp(24px, 5vw, 48px)" }}>
                  {title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
