# Fase 2 - Bootstrap React + Vite

Fecha: 2026-04-23
Estado: Completada, pendiente de confirmacion para Fase 3

## Cambios realizados

1. Scripts y dependencias base actualizados para Vite.
- dev -> vite
- build -> vite build
- preview -> vite preview
- Se conservaron scripts legacy de Next con prefijo dev:next/build:next/start:next para transicion.

2. Configuracion Vite creada.
- Archivo vite.config.ts con plugin React.
- Alias @ -> src configurado.

3. Entrypoint SPA creado.
- index.html con root mount.
- src/main.tsx con BrowserRouter.
- src/App.tsx placeholder de arranque.
- src/vite-env.d.ts agregado.
- src/vite-base.css agregado para estilo minimo temporal.

4. TypeScript adaptado a Vite.
- Se removio plugin de Next en tsconfig.
- Se agregaron types de vite/client.

## Incidencia resuelta durante la fase
- react-helmet-async genero conflicto de peers con React 19.
- Decision: quitarla en esta fase para no bloquear bootstrap.
- SEO por ruta se definira en Fase 6 con alternativa compatible.

## Verificacion tecnica
- npm install: OK
- npm run build (Vite): OK

Salida relevante de build:
- dist/index.html generado
- bundle JS/CSS generado correctamente
- build finalizo sin errores

## Estado del proyecto al cierre de Fase 2
- El proyecto ya arranca y compila como base React + Vite.
- Todavia no se han migrado rutas/paginas de Next al router SPA de Vite (se hace en fases posteriores).

## Proximo paso (requiere confirmacion)
Fase 3: layout global + estilos + assets legacy, manteniendo checkpoint al cierre.
