# Sprint comercial, SEO y branding técnico

Fecha: 21 de septiembre de 2026. Alcance: `apps/academy`. Cambios locales, sin despliegue.

## 1. Auditoría inicial

Antes de implementar se revisaron layout, Home, datos de sitio/programas/comercio, componentes de Home y compartidos, navegación, fichas académicas, analytics, sitemap, robots, estilos responsive, assets públicos y tests.

- Existían cinco programas centralizados, cálculo de horas, precios aprobados, componentes de instructor/metodología/FAQ, brochures, quince guías, Course/TechArticle/BreadcrumbList, verificación Google, OG generado y adapter de analytics.
- Campus ya estaba fuera del navbar y sitemap, con `noindex, nofollow`.
- Faltaban iconos propios, las dos rutas comerciales, orientador, eventos comerciales y navegación interna de footer.
- La autoridad temprana ya estaba en el Hero. Se ajustó ese bloque, sin añadir otra sección duplicada.
- Riesgos principales: duplicación de precios/temario, intenciones SEO idénticas y presentar proyectos académicos como experiencia laboral. Las decisiones siguientes los abordan.

## 2. Arquitectura

Las páginas son Server Components. Solo enlaces instrumentados, registro de visita y diagnóstico requieren cliente. El diagnóstico recibe resúmenes de tres programas; no carga el catálogo académico completo en su bundle por importación propia.

`programs` sigue ensamblando los datos originales y la modalidad de `site`. La landing utiliza `liveHours`, `paymentPlans`, `formatPrice`, notas comerciales, metodología y FAQ existentes. `programContact` resuelve WhatsApp cuando está configurado y `/contacto?programa=frontend-react` en caso contrario. No se incorporaron dependencias, backend, CMS ni persistencia.

## 3. Archivos modificados y creados

Rutas y estilos:

- `src/app/layout.tsx`, `page.tsx`, `sitemap.ts`, `opengraph-image.tsx`, `programs.css`.
- Nuevos: `src/app/frontend-react/page.tsx`, `empieza/page.tsx`, `commerce.css`, `icon.svg`, `apple-icon.png`.

Componentes:

- `src/components/Navbar.tsx`, `Sections.tsx`, `home/Hero.tsx`, `home/ProgramsSection.tsx`.
- Nuevos: `src/components/Pathfinder.tsx`, `shared/TrackedLink.tsx`, `shared/LandingView.tsx`.

Datos, utilidades y pruebas:

- `src/data/site.ts`, `technologies.ts`, `src/lib/analytics.ts`, `program-metadata.ts`, `tests/programs.test.mjs`.
- Nuevos: `src/lib/contact.ts`, `landing-metadata.ts`, `pathfinder.ts` y este reporte.

Los archivos de `src/data/programs/`, los brochures, las guías y el código de Campus permanecen sin cambios.

## 4. Favicon e identidad

Monograma YR de trazos vectoriales, carbón y ámbar, sin foto ni icono de librería. La Navbar usa el mismo dibujo. `app/icon.svg` se escala a 16/32 px; `app/apple-icon.png` es una exportación de 180 × 180 del SVG.

Next.js genera los enlaces de metadata por convención de archivos. Se comprobó en el navegador `rel=icon` y `rel=apple-touch-icon`, y ambos recursos devolvieron HTTP 200. No se añadieron declaraciones manuales redundantes, ICO adicional ni manifest: no hay una función PWA que los requiera. Referencia: [convenciones oficiales de iconos de Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons).

Para regenerar el Apple icon desde la raíz del repositorio con la dependencia Sharp ya instalada:

```sh
node -e "require('sharp')('apps/academy/src/app/icon.svg').resize(180,180).png().toFile('apps/academy/src/app/apple-icon.png')"
```

## 5. Home y navegación comercial

Hero con formación práctica, proyectos profesionales, clases en vivo y acompañamiento. Dos acciones: «Ver programa Frontend» y «Ver todos los programas». Se conserva el claim y se aclara la autoridad profesional.

Los programas aparecen después de Hero/StackStrip y antes de las secciones académicas extensas. Las tarjetas incluyen orientación por punto de partida, duración, modalidad, horas y precio Fundadores desde los datos. Un enlace contextual lleva a `/empieza`. No se eliminaron secciones útiles.

Se reemplazó «proyectos reales» por «proyectos integradores» en las promesas de Home, descripción del sitio, resultados y OG. Navbar mantiene Programas, Guías, Sobre mí y Contacto; su CTA es «Solicitar información». Footer incorpora las cinco rutas solicitadas, incluida Empieza.

## 6. Landing `/frontend-react`

Incluye Hero, autoridad temprana, problema, aprendizajes, flujo profesional, proyecto integrador, público, modalidad, inversión, instructor, FAQ y CTA final. Enlaza a la ficha completa y a sus módulos sin copiar el temario.

Duración, horas, modalidad, stack, aprendizajes, fases, requisitos, FAQ y precios vienen de las fuentes existentes. Precios verificados: Fundadores S/499, regular S/649, 3 × S/230 = S/690, Premium S/899 y reserva S/50 descontable. No se añadieron beneficios Premium ni disponibilidad de cohortes.

El flujo reutiliza la secuencia profesional existente: Ticket → Branch → Desarrollo → Pull Request → Code Review → Testing → Deploy. Se aclara que el proyecto integrador es académico.

## 7. Landing `/empieza`

Seis preguntas, progreso, radios nativos, `fieldset`/`legend`, respuesta requerida, retroceso, reinicio y foco administrado. Resultado inmediato con razón, duración, modalidad y enlace. No pide email, no guarda datos personales y no bloquea el resultado con un formulario.

El contenido editorial y las tres rutas se renderizan también desde servidor, de modo que la página conserva valor explicativo y enlaces aunque no se ejecute el cuestionario.

## 8. Lógica del diagnóstico

`getRecommendedProgram(answers)` es una función pura:

- Respuestas incompletas: sin resultado.
- Falta programación, HTML/CSS o JavaScript: Desde cero.
- Fundamentos, React y APIs, con objetivo de sistemas completos: Full Stack.
- Los demás casos con fundamentos: Frontend React. Si el objetivo final era Full Stack, se explica la etapa intermedia.

Se usan recomendaciones orientativas, no afirmaciones de idoneidad definitiva. Las pruebas recorren las 64 combinaciones completas y verifican respuestas incompletas.

## 9–10. SEO, indexación y canonical

Se eligió la opción A: ambas páginas de React indexables y con intención diferenciada.

| Ruta | Intención | Title antes del sufijo Academy | Canonical |
| --- | --- | --- | --- |
| `/frontend-react` | Orientación comercial, inversión y contacto | Curso Frontend con React Online | Propio |
| `/programas/frontend-react` | Temario, requisitos, módulos y entregables | Programa Frontend React: temario y proyecto integrador | Propio |
| `/empieza` | Elección de ruta según fundamentos y objetivo | Qué curso de programación elegir | Propio |

Descriptions diferentes y enlaces entre landing y ficha. No se utiliza canonical cruzado entre páginas con propósitos distintos. `/empieza` es indexable por su contenido textual y comparación de rutas. La separación reduce la superposición de intención; la respuesta real del buscador debe observarse después de publicar en Search Console.

Se conserva Course JSON-LD en la ficha académica; la landing comercial no vuelve a emitirlo. No se añadieron ratings, reviews ni FAQ schema.

## 11. Sitemap y conteos

27 URLs públicas únicas, antes 25. Se incorporan `/frontend-react` y `/empieza`; siguen presentes las quince guías y los cinco programas. Campus continúa excluido y con `noindex, nofollow`, comprobado también en HTML.

Hay 28 páginas de contenido con URL canónica propia o acceso directo: 27 públicas y Campus. Además existen 16 rutas de redirección heredadas: quince guías de Campus y `/programas/mentoria`. Los iconos, OG, robots, sitemap y páginas internas de Next no son páginas editoriales.

## 12. Open Graph

Se reutiliza `/opengraph-image`, un PNG generado de 1200 × 630 con marca Academy, carbón/crema/ámbar y copy corregido. HTTP 200 y revisión visual correctos. Las nuevas rutas incluyen title, description, URL propia, siteName, locale `es_PE`, type `website` e imagen válida. Twitter usa `summary_large_image` y el mismo recurso. No faltan assets ni hay placeholders rotos.

## 13. Analytics y contacto

Eventos añadidos al adapter existente:

- `home_primary_cta_click`, `home_program_click`.
- `frontend_landing_view`, `frontend_landing_cta_click`, `frontend_landing_price_cta_click`.
- `pathfinder_start`, `pathfinder_answer`, `pathfinder_result`, `pathfinder_program_click`.

Solo se envían identificadores de programa/pregunta, opción cerrada, ubicación y canal; no texto libre ni identificadores personales. Los enlaces WhatsApp también utilizan `whatsapp_click`. No se integró GA directamente.

En navegador se observaron los eventos del Hero, visita, CTA de inversión y recorrido del diagnóstico. Se verificó el fallback a Contacto con Frontend preseleccionado. La rama WhatsApp se prueba con un número de fixture; no se configuró ni contactó ningún número real.

## 14. Responsive y accesibilidad

Chromium local mediante agent-browser. Rutas: `/`, `/frontend-react`, `/empieza`, `/programas/frontend-react`, `/guias`, `/campus`.

Tamaños: 320 × 700, 375 × 667, 390 × 844, 430 × 932, 768 × 1024, 1024 × 768 y 1440 × 900.

Resultado final: 42 combinaciones sin desbordamiento horizontal de página; un H1 por página y sin errores JavaScript observados. Se revisaron capturas, CTA, cards, estructura y cabecera sticky. La ficha académica tenía un desbordamiento móvil previo en el panel de IA: se corrigió con columnas adaptables y `min-width: 0`. La subnavegación académica conserva su desplazamiento horizontal interno intencional.

Por teclado se verificaron las tres recomendaciones, retroceso con respuesta conservada, cambio de resultado, reinicio y navegación al programa. Los estilos de foco existentes se mantienen. No se ejecutó una auditoría exhaustiva con lector de pantalla ni pruebas físicas en Safari/iOS.

Evidencias locales, excluidas de Git: `.verification/commercial-sprint/`, con capturas, snapshots y `responsive-final.jsonl`.

## 15–16. Tests, lint, typecheck y build

Todos los comandos se ejecutaron en `apps/academy`.

| Comando | Resultado |
| --- | --- |
| `npm test` | 18 tests aprobados |
| `npm run typecheck` | Aprobado |
| `npm run lint` | Aprobado, sin diagnósticos |
| `npm run build` | Aprobado; repetido después de la corrección responsive |
| `git diff --check` | Sin errores de whitespace |

La compilación informa `Generating static pages (51/51)`; incluye metadata, redirecciones y rutas internas, no 51 páginas públicas. El manifiesto final contiene 50 entradas prerenderizadas y Contacto se sirve dinámicamente.

Las pruebas cubren recomendaciones, datos comerciales reales, mutación de datos para detectar precios/horas/stack/modalidad hardcodeados en la landing, canonicals, intención SEO diferenciada, rutas, assets, contacto, analytics, sitemap, programas, brochures, quince guías y exclusión SEO de Campus. La metadata de iconos generada por Next también se comprobó en navegador.

## 17. Warnings

- Next detecta `pnpm-lock.yaml` raíz y `apps/academy/package-lock.json`, e infiere la raíz del workspace. Warning previo de configuración; no se eliminaron lockfiles ni se alteró despliegue.
- El script existente `npm run start` utiliza `next start` con `output: standalone`; Next recomienda ejecutar el servidor standalone generado. La preview respondió correctamente. No se cambió el script de producción dentro de este sprint.
- El primer `npm test` dentro del sandbox falló por `spawn EPERM`. Se repitió con permisos de ejecución y pasaron los 18 tests; no fue un fallo funcional.
- Git avisa sobre normalización LF/CRLF en Windows; `diff --check` no reporta errores.

## 18. Pendientes visuales y assets

Ningún asset pendiente para este alcance. Favicon, Apple icon y OG funcionan. Queda la comprobación posterior al despliegue de caché de favicon, previews sociales e indexación, porque este sprint no publica el sitio. Si se desea WhatsApp, debe configurarse el número real en `ACADEMY_WHATSAPP`; el fallback ya funciona.

## 19. Ajustes respecto a las sugerencias

- Se reutilizó la autoridad del Hero y el Instructor existente en lugar de añadir un bloque redundante.
- Se eligieron iconos por convención de archivos, sin repetir `metadata.icons` manualmente ni añadir manifest/ICO innecesarios.
- No se replicó Course JSON-LD en la landing comercial.
- Se corrigió el panel móvil de IA de la ficha existente al detectarlo en el QA expresamente solicitado.
- No se modificaron precios, duración, temarios, horarios/cohortes, brochures, autenticación ni contenido de Campus. No se añadieron testimonios, métricas comerciales o garantías.
