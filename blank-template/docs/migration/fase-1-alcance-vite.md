# Fase 1 - Alcance y estrategia (Next.js -> React + Vite)

Fecha: 2026-04-23
Estado: Propuesta lista para aprobacion

## 1) Objetivo de la migracion
Migrar el proyecto actual de Next.js (App Router) a React + Vite manteniendo la experiencia visual y funcional de la plantilla ecommerce, con cambios minimos en UX durante la primera migracion.

## 2) Alcance funcional de esta migracion
Incluido en la migracion inicial:
- UI completa actual (header, footer, carrito lateral, secciones home, shop, blog, contact, checkout, paginas de detalle).
- Enrutamiento SPA equivalente al set de rutas publico actual.
- Estado de carrito en cliente (contexto), reglas de pricing y validaciones de formularios.
- Integracion de assets estaticos existentes (public/css, public/js, public/img, public/fonts).
- API mock actual para catalogo y checkout.
- SEO basico compatible con SPA (titulo, meta description por ruta via libreria react).

Fuera de alcance en esta primera migracion:
- SSR/SSG/ISR nativo de Next.js.
- Metadata server-driven nativa de App Router.
- Route handlers o API routes de Next.js (no existen hoy en el proyecto, pero se explicita).
- i18n, autenticacion real, pagos reales, backend real.
- Test suite automatizada completa (se validara manual + lint/build en esta etapa).

## 3) Stack objetivo propuesto (Fase 2)
- Build tool: Vite
- Framework: React 19 + TypeScript
- Router: react-router-dom
- SEO SPA: react-helmet-async (para title/description por ruta)
- Lint: ESLint (manteniendo reglas adaptadas al nuevo contexto, removiendo reglas Next-specific)

## 4) Mapa de rutas (equivalencia 1:1)
- / -> HomePage
- /shop -> ShopPage
- /single-product-details -> SingleProductDetailsPage
- /checkout -> CheckoutPage
- /blog -> BlogPage
- /single-blog -> SingleBlogPage
- /regular-page -> RegularPage
- /contact -> ContactPage

Notas:
- Se mantienen rutas y slugs para no romper navegacion ni enlaces internos.
- Robots/sitemap se resolveran en Fase 6 con estrategia SPA (archivos estaticos en public y/o plugin).

## 5) Criterios de exito (Definition of Done)
- Dev server de Vite inicia sin errores.
- Build de produccion de Vite termina sin errores.
- Navegacion funcional en todas las rutas listadas.
- Carrito: agregar, quitar, actualizar cantidad y vaciar funcionan igual que hoy.
- Checkout y Contact: validaciones y feedback visual activos.
- Assets legacy (CSS/JS/imagenes) renderizan correctamente sin ruptura de layout.
- SEO basico por ruta (title + description) aplicado.

## 6) Riesgos y decisiones tecnicas tempranas
Riesgos:
- Dependencia de scripts legacy jQuery/plugins para comportamientos de menu/carrusel.
- Diferencias entre next/image y img en Vite.
- Posibles diferencias de carga de scripts por orden de ejecucion.

Mitigaciones:
- Migrar primero estructura visual y routing, luego compatibilidad de scripts por modulo.
- Reemplazar gradualmente comportamientos legacy por React cuando sea simple y seguro.
- Validar cada pagina contra checklist visual/funcional al cerrar cada fase.

## 7) Plan de fases y control por confirmacion
- Fase 1: Alcance y estrategia (actual) -> requiere confirmacion para avanzar.
- Fase 2: Bootstrap Vite + configuracion base -> pausa y confirmacion.
- Fase 3: Layout global + estilos + assets -> pausa y confirmacion.
- Fase 4: Migracion de rutas/paginas -> pausa y confirmacion.
- Fase 5: Estado y logica (cart, pricing, forms, mock API) -> pausa y confirmacion.
- Fase 6: SEO + compatibilidad final -> pausa y confirmacion.
- Fase 7: QA, cleanup, cierre -> pausa y confirmacion final.

## 8) Resultado de Fase 1
Documento de alcance aprobado pendiente de tu confirmacion para iniciar Fase 2.
