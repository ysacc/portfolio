# Separación de guías públicas y Campus

## Estado actual: Campus recuperado y responsive ajustado

Esta actualización sustituye la decisión anterior de mostrar `CampusUnavailable`: `/campus` vuelve a renderizar directamente el componente existente `CampusContent`, sin duplicarlo ni modificar su contenido. Se recuperan primeros pasos, preparación, herramientas, manuales, GitHub, LinkedIn, IA, retos, comunidad, recursos y estándares. Es accesible sin autenticación por URL directa; conserva el layout con `noindex, nofollow` y no aparece en el sitemap. No es un área autenticada.

Las guías del Campus siguen enlazando a `/guias/...`. No se cambiaron los artículos, metadata, schemas, analytics ni redirects legacy. Permanecen 15 guías y 25 URLs en sitemap.

Se retiró Campus del array compartido de Navbar, tanto desktop como móvil. La búsqueda en el código no encontró otros enlaces públicos a `/campus` en footer, home, CTA o programas. La home conserva una mención textual en `CampusShortcutSection` (“Clases, Campus, Discord…”), sin enlace: describe la metodología y no es navegación. Se conserva también el contenido de brochures sin cambios.

Cambios responsive en `src/app/programs.css`:

- Se corrigieron las tres columnas que persistían en el hub móvil: una columna hasta 800 px, dos entre 801 y 1100 px y tres en desktop amplio.
- Campus conserva una columna móvil en sus grids, con espacios de 20 px. IA usa dos columnas hasta 800 px y una hasta 360 px.
- Títulos de guías y Campus: H1 de 34–42 px, H2 de 28–34 px y H3 de 21–25 px en móvil.
- Hijos de grid y secciones con `min-width: 0`; código limitado al contenedor y scroll horizontal dentro del snippet. Breadcrumbs, URLs y listas pueden ajustar líneas.
- Recursos de artículos en una columna móvil; acciones en columna hasta 480 px, botones con texto ajustable y altura mínima de 48 px.
- Menú móvil con enlaces de al menos 44 px, separación y scroll vertical para pantallas bajas; menor gap del navbar hasta 480 px.
- `.container` ya tenía márgenes laterales de 20 px hasta 800 px, 32 px hasta 1100 px y 48 px en desktop. Se conservaron.
- `MobileDisclosure` conserva su funcionamiento en Campus; las guías públicas no usan acordeones.

Archivos modificados: `src/app/campus/page.tsx`, `src/components/Navbar.tsx`, `src/app/guias/page.tsx` (solo clase de estilo), `src/app/programs.css`, `tests/programs.test.mjs` y este reporte.

Validación: 13 tests aprobados, typecheck y lint aprobados. Los tests comprueban CampusContent, secciones recuperadas, enlaces `/guias`, ausencia de Campus en ambos menús, noindex, sitemap y regresiones existentes. Build: 47 páginas generadas. Advertencia existente de múltiples lockfiles.

QA visual real no disponible: la consulta de herramientas devolvió cero navegadores conectados y no se encontró `agent-browser`. No se verificaron visualmente los viewports 320×568, 375×667, 390×844, 430×932, 768×1024, 1024 px y 1440×900. Los ajustes se revisaron por CSS y HTML; queda pendiente confirmar visualmente overflow, menú y disclosures abiertos en esos tamaños. Sin despliegue en esta actualización.

Los apartados siguientes se conservan como historial de las decisiones y validaciones anteriores.

## Ampliación editorial: seis guías Frontend

Estado actual tras esta ampliación: **15 guías públicas, 25 URLs de sitemap y 47 páginas generadas**. Los apartados posteriores describen la migración original de nueve guías.

| Slug bajo `/guias/` | Categoría | CTA principal |
| --- | --- | --- |
| `como-funciona-un-pull-request` | GitHub | Frontend Developer con React |
| `git-y-github-para-principiantes` | GitHub | Frontend Developer con React |
| `que-debe-saber-un-frontend-junior` | Frontend | Frontend Developer con React |
| `javascript-o-react-que-aprender-primero` | Frontend | Frontend Developer con React |
| `como-consumir-api-rest-react` | Frontend | Frontend Developer con React |
| `portfolio-desarrollador-frontend` | Empleabilidad | Frontend Developer con React |

Se conserva la categoría existente `GitHub`. Se incorporan `Frontend` y `Empleabilidad` porque los artículos no corresponden a instalación o herramientas; el modelo admite categorías de texto. La guía JavaScript/React añade un enlace contextual a Desde cero. Los nombres de programas se resuelven desde sus datos.

Enlaces relacionados:

- Pull Request → configurar Git, primer repositorio, primer PR y crear GitHub.
- Git/GitHub → instalar Git, crear GitHub, configurar Git, primer repositorio y primer PR.
- Frontend Junior → Git/GitHub, JavaScript/React, APIs y portfolio.
- JavaScript/React → instalar Node, Frontend Junior y APIs.
- APIs → instalar Postman, JavaScript/React y Frontend Junior.
- Portfolio → crear GitHub, primer repositorio, primer PR y Frontend Junior.

Archivos modificados: `src/data/campus/guides.ts`, `src/app/guias/[slug]/page.tsx`, `src/lib/guide-metadata.ts`, `tests/programs.test.mjs` y este reporte. El catálogo único incorpora campos opcionales `seoTitle`, `article`, `relatedSlugs` y `secondaryProgramSlug`. Los artículos usan sus propias secciones en lugar de los bloques genéricos de instalación; las nueve guías anteriores conservan su renderizado.

Metadata: H1 y títulos solicitados, description específica, canonical, Open Graph y Twitter. El template global añade la marca una sola vez. Se mantienen TechArticle y BreadcrumbList sin fechas, ratings ni autorías inventadas. Sitemap y rutas se generan automáticamente. El CTA conserva `guide_view` y `guide_program_cta_click`; su efecto depende de slug/programa y no se repite por un rerender con los mismos valores.

Validación de la ampliación:

- `npm test`: **13 tests aprobados**, incluidos render de las seis guías, enlaces, metadata, catálogo completo y ejecución del servicio fetch con éxito, error HTTP, contrato inválido y respuesta vacía.
- `npm run typecheck` y `npm run lint`: aprobados.
- `npm run build`: aprobado; **47 páginas generadas**. El mecanismo legacy existente también genera automáticamente seis redirects adicionales; no se modificaron rutas ni contenido del Campus privado.
- HTML del build: seis nuevos artículos con canonical, robots indexables, CTA y ambos schemas; marca no duplicada; 15 páginas de guías y sitemap de 25 URLs sin Campus.
- Programas, precios, duración, brochures, mentorías, entrevistas y auth: sin modificaciones.
- Warning existente: múltiples lockfiles al inferir la raíz del workspace. Sin dependencias nuevas. Sin revisión visual en navegador ni despliegue en esta ampliación.

El ejemplo de API declara expresamente su contrato hipotético `/api/productos`; no crea un backend. Referencias técnicas enlazadas en los artículos: [GitHub PR](https://docs.github.com/en/pull-requests/get-started/about-pull-requests), [MDN Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) y [React useEffect](https://react.dev/reference/react/useEffect).

## Rutas y contenido

- `/guias`: hub público agrupado por las categorías existentes, con enlaces a programas e instructor.
- `/guias/[slug]`: las nueve guías existentes, sin duplicar sus pasos ni crear artículos nuevos.
- `/campus/guias/[slug]`: redirect permanente 308 al mismo slug en `/guias`; slugs desconocidos devuelven 404.
- `/campus`: aviso de acceso todavía no habilitado y contacto. No importa ni sirve tareas o recursos de alumnos.

Slugs migrados: `instalar-vscode`, `instalar-git`, `instalar-node`, `crear-github`, `configurar-git`, `primer-repositorio`, `primer-pull-request`, `instalar-postman`, `instalar-docker`.

## Datos y componentes

`src/data/campus/guides.ts` sigue siendo la fuente única. Cada guía declara `visibility: public | campus` y `programSlug`. `src/data/guides.ts` filtra exclusivamente las públicas para rutas, sitemap y metadata. Una nueva guía privada nunca debe añadirse al catálogo público por defecto.

El contenido anterior del Campus se conserva en `src/components/campus/CampusContent.tsx`, sin importarlo desde ninguna ruta. `challenges.ts` y `resources.ts` siguen vinculados exclusivamente a ese contenido. No hay usuarios ni progreso inventados.

`GuideProgramCTA` reutiliza los nombres reales de programas. VS Code enlaza a Desde cero; Git/GitHub a Frontend React; Node, Docker y Postman a Full Stack. Emite `guide_view` y `guide_program_cta_click` mediante el adapter existente, con `guide` y `program`.

## SEO

- Campus hereda `noindex, nofollow` desde su layout y queda fuera del sitemap. El aviso es público; no se presenta como autenticación real.
- Se mantiene `robots.txt` rastreable para permitir descubrir el noindex.
- Guías: title y description por contenido, canonical propio, Open Graph, Twitter, breadcrumb visible y JSON-LD `TechArticle` + `BreadcrumbList`. Sin fechas ni autorías inventadas.
- Home: title orientado a desarrollo web y React online en Perú; description actualizada. Se conserva el claim de marca.
- Los tres cursos reciben títulos SEO específicos. Descripciones, horas, modalidad y JSON-LD comercial siguen consumiendo las fuentes actuales; precios y duración no cambian.
- `Course` conserva nombre, descripción, URL, horas, duración, modalidad y ofertas desde los datos de programas y `program-commerce.ts`.

Sitemap final: 19 URLs: `/`, `/programas`, `/sobre-mi`, `/contacto`, `/guias`, nueve guías, los tres cursos, `/mentorias` y `/programas/entrevistas`. Prioridades: home 1, programas 0.9, hub de guías 0.8 y otras páginas 0.7.

## Activación futura del Campus

No existe autenticación de alumnos en Academy. El Basic Auth de `src/proxy.ts` pertenece a Colegio y no proporciona sesiones ni autorización por matrícula para Academy; no se reutiliza.

Antes de servir `CampusContent` o crear `/campus/inicio`, `/campus/mi-programa`, `/campus/tareas`, `/campus/recursos` y `/campus/progreso`:

1. Integrar un proveedor real de identidad con sesiones verificadas en servidor.
2. Validar matrícula y pertenencia a cohorte antes de leer cualquier dato privado, también en endpoints y Server Actions; el layout SEO no es un control de acceso.
3. Evitar prerenderizado/caché compartida de datos de alumnos y proteger descargas privadas.
4. Probar acceso anónimo, sesión caducada y acceso cruzado entre alumnos/cohortes.

No hay interruptores de entorno que habiliten contenido sin estos controles. Hasta entonces, la ruta sirve únicamente el aviso de acceso no habilitado.

## Archivos

- Rutas: `src/app/guias/page.tsx`, `src/app/guias/[slug]/page.tsx`, `src/app/campus/page.tsx`, `src/app/campus/layout.tsx`, `src/app/campus/guias/[slug]/page.tsx`.
- SEO: `src/app/layout.tsx`, `src/app/sitemap.ts`, `src/lib/guide-metadata.ts`, `src/data/site.ts`.
- Datos: `src/data/guides.ts`, `src/data/campus/guides.ts`, los tres archivos de cursos en `src/data/programs/`.
- UI: `src/components/Navbar.tsx`, `src/components/guides/GuideProgramCTA.tsx`, `src/components/campus/CampusContent.tsx`, `src/components/campus/CampusUnavailable.tsx`.
- Analytics y tests: `src/lib/analytics.ts`, `tests/programs.test.mjs`.

## Validación

- `npm test`: 11 tests aprobados; rutas públicas, 308, 404, metadata, schemas, sitemap, noindex, analytics y regresiones comerciales.
- `npm run typecheck`: aprobado.
- `npm run lint`: aprobado, sin errores ni warnings de ESLint.
- `npm run build`: aprobado; 35 páginas generadas.
- HTML y metadatos del build: verificadas las nueve guías y sus nueve respuestas 308; Campus con noindex y sin retos; sitemap de 19 URLs; Course JSON-LD de los tres cursos.
- Advertencia existente: múltiples lockfiles al inferir la raíz del workspace. No impide compilar.
- No se realizó revisión visual en navegador ni despliegue.

Referencia de redirects: https://nextjs.org/docs/app/api-reference/functions/permanentRedirect
