# Modelo comercial de Academy

Actualización posterior: la separación entre guías públicas y Campus está documentada en [SEO-UPDATE.md](SEO-UPDATE.md). El modelo comercial y los brochures se conservan.

La fuente de verdad está en `src/data/programs/{desde-cero,frontend-react,full-stack}.ts`.
`src/data/program-commerce.ts` calcula horas en vivo, total de cuotas y formato de precios para la UI y JSON-LD. Metadata, cards y sticky CTA consumen los datos de programas.

| Programa | Duración | Horas en vivo | Fundadores | Regular | Cuotas | Premium | Reserva |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Desde cero | 8 semanas | 32 | S/ 249 | S/ 349 | 2 x S/ 190 = S/ 380 | — | S/ 50 |
| Frontend React | 12 semanas / 3 meses | 48 | S/ 499 | S/ 649 | 3 x S/ 230 = S/ 690 | S/ 899 | S/ 50 |
| Full Stack | 16 semanas / 4 meses | 64 | S/ 799 | S/ 999 | 4 x S/ 270 = S/ 1,080 | S/ 1,290 | S/ 100 |

Todos: remota en vivo, 2 clases semanales de 2 horas. Fundadores es precio de lanzamiento / cupos limitados. La reserva se descuenta del precio final.

## Brochures: actualizados manualmente

El usuario proporcionó los tres brochures corregidos. Se conservaron las copias con guion bajo y se restauraron las rutas publicadas con guion usando exactamente los mismos archivos:

- `public/brochures/brochure-desde-cero.pdf`
- `public/brochures/brochure-frontend-react.pdf`
- `public/brochures/brochure-full-stack.pdf`
- `public/brochure_desde-cero.pdf` (copia de ruta anterior)
- `public/brochure_frontend-react.pdf` (copia de ruta anterior)
- `public/brochure_full-stack.pdf` (copia de ruta anterior)

Cada brochure debe incluir los valores de la tabla, modalidad y frecuencia; Discord, Campus Academy (`/campus`), GitHub / LinkedIn; «IA como copiloto, no como sustituto de fundamentos» y «No entregues código que no puedas explicar».

Estructura: Desde cero conserva los cuatro módulos existentes (HTML, responsive, JavaScript, publicación). Frontend: 2 meses de formación técnica + 1 mes de proyecto integrador individual con mentoría. Full Stack: mes 1 Frontend avanzado / Next.js; mes 2 Backend y APIs; mes 3 Full Stack, arquitectura y proyecto individual; mes 4 proyecto profesional grupal con Scrum.

Frontend y Full Stack: Cohorte A lunes y miércoles; Cohorte B martes y jueves. «Horario se confirma al abrir cohorte». Estas opciones no implican inscripciones abiertas. No inventar fechas, horas ni beneficios Premium.

Los PDFs de mentorías y entrevistas se conservan. Se verificó que las copias de cada brochure actualizado sean idénticas; no se realizó una nueva revisión editorial del contenido proporcionado.

## Auditoría y decisiones

- Frontend ya tenía 12 semanas y Full Stack 16 semanas: se conservaron sus temarios.
- Desde cero tenía «Duración por confirmar»: se actualizó a 8 semanas.
- No había precios publicados en los datos/componentes de Academy. Se agregó un bloque de precios reutilizable sin duplicar importes en componentes.
- Se retiraron los textos que dejaban pendiente el formato/modalidad en metodología y FAQ.
- Premium publica solo el importe aprobado; sus beneficios no fueron especificados.
- No se publicaron cohortes abiertas: se conservó `cohorts.ts` y se añadieron opciones de días en los datos del programa.
- Se mantuvieron rutas, Campus, mentorías, entrevistas, descargas y eventos de analytics.
- La UI solo añade navegación y bloque responsive de precios, más horas en el resumen existente.

## Validación

- 8 tests aprobados, incluidos precios, cuotas, horas, rutas, Campus y analytics.
- Lint y typecheck: aprobados.
- Build: aprobado, 25 páginas generadas. Next.js advierte sobre múltiples lockfiles; no impide compilar.
- HTML generado: verificados precios, reserva, nota Fundadores, enlaces de brochures y JSON-LD de los tres cursos; Campus y mentorías generados.
- Revisión visual desktop/mobile pendiente: no hay navegador conectado ni CLI agent-browser disponible. El grid usa columnas automáticas con mínimo limitado al ancho del contenedor.

## Archivos modificados

- `src/data/program-types.ts`, `src/data/program-commerce.ts`
- `src/data/programs/desde-cero.ts`, `src/data/programs/frontend-react.ts`, `src/data/programs/full-stack.ts`
- `src/data/programs/methodology.ts`, `src/data/faq.ts`
- `src/components/program/ProgramPricing.tsx`, `src/components/program/ProgramHero.tsx`, `src/components/program/ProgramLanding.tsx`
- `src/lib/program-metadata.ts`, `src/app/globals.css`
- `tests/programs.test.mjs`, `COMMERCIAL-UPDATE.md`
