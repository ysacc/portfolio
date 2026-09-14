# Separación de guías públicas y Campus

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
