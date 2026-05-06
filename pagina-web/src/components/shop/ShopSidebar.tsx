export default function ShopSidebar() {
  return (
    <div className="shop_sidebar_area">
      <div className="widget catagory mb-50">
        <h6 className="widget-title mb-30">Familias de Producto</h6>

        <div className="catagories-menu">
          <ul id="menu-content2" className="menu-content collapse show">
            <li data-toggle="collapse" data-target="#equipos">
              <button type="button">Equipamiento</button>
              <ul className="sub-menu collapse show" id="equipos">
                <li><a href="/shop">Ver todos</a></li>
                <li><a href="/shop">Análisis Clínico</a></li>
                <li><a href="/shop">Procesamiento</a></li>
                <li><a href="/shop">Refrigeración</a></li>
              </ul>
            </li>
            <li data-toggle="collapse" data-target="#reactivos" className="collapsed">
              <button type="button">Reactivos</button>
              <ul className="sub-menu collapse" id="reactivos">
                <li><a href="/shop">Ver todos</a></li>
                <li><a href="/shop">Biología Molecular</a></li>
                <li><a href="/shop">Química Clínica</a></li>
              </ul>
            </li>
            <li data-toggle="collapse" data-target="#insumos" className="collapsed">
              <button type="button">Insumos</button>
              <ul className="sub-menu collapse" id="insumos">
                <li><a href="/shop">Ver todos</a></li>
                <li><a href="/shop">Vidriería</a></li>
                <li><a href="/shop">Plásticos estériles</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="widget price mb-50">
        <h6 className="widget-title mb-30">Filtrar por</h6>
        <p className="widget-title2 mb-30">Disponibilidad</p>

        <div className="widget-desc">
          <ul style={{ padding: 0 }}>
            <li style={{ listStyle: "none", marginBottom: "10px" }}><a href="/shop" style={{ color: "#787878" }}>En stock inmediato</a></li>
            <li style={{ listStyle: "none", marginBottom: "10px" }}><a href="/shop" style={{ color: "#787878" }}>Bajo pedido (Importación)</a></li>
            <li style={{ listStyle: "none", marginBottom: "10px" }}><a href="/shop" style={{ color: "#787878" }}>Sujeto a confirmación</a></li>
          </ul>
        </div>
      </div>

      <div className="widget brands mb-50">
        <p className="widget-title2 mb-30">Marcas Registradas</p>
        <div className="widget-desc">
          <ul>
            <li><a href="/shop">TechLab</a></li>
            <li><a href="/shop">OptiSci</a></li>
            <li><a href="/shop">BioGen</a></li>
            <li><a href="/shop">TermoLab</a></li>
            <li><a href="/shop">GlassMed</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
