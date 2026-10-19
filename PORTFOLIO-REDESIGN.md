# Portafolio en español: arquitectura multipágina y QA

## Estado actual

El inicio se redujo a cuatro bloques: hero, tres especialidades resumidas, dos proyectos destacados de IA y contacto breve. La información detallada vive en páginas independientes. Se mantienen el posicionamiento Frontend Senior, el sistema navy/cyan, el CV actualizado en español y los datos profesionales de la fase anterior.

Sin despliegue, nuevas dependencias ni reconstrucción de la aplicación. No se modificó el código de Focus ni Academy.

La frase anterior describe el cierre de fase 3. En fase 4 se añadieron Playwright y axe como herramientas de desarrollo, se actualizaron dependencias compatibles y se ejecutó QA real en navegador. El informe actual, las capturas, resultados de seguridad y límites de publicación están en [QA-REPORT.md](QA-REPORT.md). Se conservan debajo los detalles de arquitectura y comprobaciones de fase 3.

## Rutas canónicas

| Navegación | Ruta | Contenido |
| --- | --- | --- |
| Inicio | `/` | Presentación breve, tres especialidades y los dos casos de IA |
| Especialidades | `/especialidades` | Frontend prioritario, Full Stack, cloud e IA; competencias tomadas de los datos existentes |
| Proyectos | `/proyectos` | Archivo con filtros y 13 casos de estudio |
| Experiencia | `/experiencia` | Las 11 experiencias completas y acceso al CV |
| Certificaciones | `/certificaciones` | Cinco credenciales con emisor, año y tipo |
| Sobre mí | `/sobre-mi` | Enfoque de ingeniería, liderazgo, colaboración, formación académica e idiomas |
| Contacto | `/contacto` | Correo, LinkedIn, GitHub, Lima y CV |

Los casos completos utilizan `/proyectos/[slug]` y se prerenderizan con `generateStaticParams`. Los slugs no cambiaron.

## Compatibilidad

Redirecciones permanentes 308 de un solo paso en `next.config.js`:

- `/projects` → `/proyectos`.
- `/projects/:slug` → `/proyectos/:slug`.
- `/resume` → `/experiencia`.
- `/contact` → `/contacto`.

La redirección de casos solo acepta slugs con letras minúsculas, números y guiones. Los archivos con extensión de `/public/projects/` (SVG, JPG y PNG) quedan excluidos para evitar redirigir las imágenes a páginas de proyecto.

Los dos diagramas conceptuales se sirven desde `/diagrams/` para evitar que los navegadores reutilicen las redirecciones permanentes erróneas que pudieran haber almacenado para las URLs antiguas. Las tarjetas y casos usan esos destinos mediante los datos centralizados de proyectos.

Se comprobaron las tres rutas antiguas principales y los 13 casos antiguos: 16 redirecciones directas a respuestas 200. `/resume.pdf` conserva su URL y el archivo de la fase anterior.

## Componentes y datos compartidos

- `src/data/navigation.ts`: única lista de siete destinos para Navbar, Command Palette y sitemap; función de estado activo que incluye los casos bajo Proyectos.
- `src/data/profile.ts`: resúmenes, enfoque por especialidad y presentación personal. Las listas técnicas se derivan de `resumeData.skills`.
- `src/components/InteriorPage.tsx`: encabezado, breadcrumb, contenedor y CTA final compartidos.
- `src/lib/metadata.ts`: títulos, descripciones, canonical y metadata social por página.
- `Hero`, `Section`, `ProjectCard`, `Credentials` y datos de proyectos reutilizados. `ProjectCard` admite una versión compacta para el inicio.
- `ExperienceTimeline` ahora es una lista editorial renderizada en servidor, sin animaciones ni JavaScript para mostrar la trayectoria.
- `ProjectExplorer` conserva búsqueda y filtros como componente cliente; la página y sus metadatos se definen en servidor. El contenido inicial se comprobó en HTML.

## Inicio y navegación

El hero presenta Desarrollador Frontend Senior, Full Stack e integración de IA, con CTAs a `/proyectos`, `/resume.pdf` y `/contacto`. Se retiraron la repetición del stack, la cronología, las certificaciones y la presentación larga del inicio.

Las tres tarjetas de especialidad enlazan a `/especialidades`. Solo se muestran Principal e Inclusión Empresarial, con acceso a cada caso y al archivo completo.

El navbar usa exclusivamente rutas absolutas sin fragmentos y mantiene el orden solicitado en todas las páginas. Usa `next/link`, estado activo y `aria-current="page"` tanto en escritorio como en móvil. El menú cierra al navegar; Escape lo cierra y devuelve el foco al botón. Conserva tema claro/oscuro, estilos de foco y soporte global para reducción de movimiento. Footer y Command Palette apuntan a los nuevos destinos.

## SEO

Cada página y caso tiene un H1, título único en español, descripción, canonical y Open Graph con su propia URL. Se mantiene `lang="es"` y locale `es_PE`. El sitemap solo enumera las siete rutas canónicas y los 13 casos; no incluye los alias antiguos. JSON-LD Person conserva el dominio principal y los perfiles profesionales existentes, sin referencias internas antiguas.

## Validaciones ejecutadas

- Portafolio: ESLint, TypeScript noEmit y build de producción correctos.
- Seis pruebas aprobadas: tres existentes de Focus y tres de navegación, estado activo y compatibilidad de rutas. En este entorno Windows se ejecutaron sin aislamiento de procesos: `node --test --experimental-test-isolation=none tests/focus.test.mjs tests/navigation.test.mjs`.
- HTTP: siete páginas principales y 13 casos responden 200; un slug inexistente responde 404.
- H1 único, títulos únicos, canonical, Open Graph y estado activo del navbar comprobados en las 20 páginas.
- Inicio: exactamente dos tarjetas de proyectos; sin cronología, credenciales ni formación académica.
- Enlaces internos sin redirecciones innecesarias; sitemap y descarga del CV comprobados. El PDF servido coincide byte por byte con `public/resume.pdf`.
- Focus: cinco rutas comprobadas con HTTP 200.
- Academy: lint, 18 pruebas y build correctos. Quince comprobaciones HTTP de inicio, programas, guías, Campus, contacto, sobre mí, sitemap y robots pasaron. Su build local previo estaba incompleto y se regeneró; no se cambió su código. Persisten advertencias de configuración preexistentes sobre múltiples lockfiles y ejecución standalone.
- `git diff --check`: correcto.

## Datos profesionales conservados

Oxiacore figura primero como Full Stack Developer, 09/03/2026-16/09/2026, consultoría paralela, empresa en Panamá; sin tecnologías añadidas. Se conservan las 11 experiencias, las dos contribuciones de IA y la formación sin atribuir un título universitario concluido.

Las cinco credenciales proceden del CV final. No se añadieron URLs personales de verificación ni otras credenciales porque no fueron proporcionadas. El PDF actual contiene íntegramente el DOCX final ES y fue renderizado e inspeccionado durante la fase anterior.

## Estado tras QA de fase 4

- Se habilitaron Chrome y Chromium para probar la interacción real y capturar las nueve páginas en 390/768/1440/1920 px, con ambas apariencias.
- Se corrigieron accesibilidad de la paleta, foco, nombre del logo, contraste de botones claros, legibilidad de diagramas y alineación de tarjetas.
- Auditoría de producción: cero avisos. Quedan dos avisos transitivos en herramientas de desarrollo, detallados en el informe de QA.
- El resultado anterior se refiere a la raíz. El lockfile independiente de Academy conserva 13 avisos, incluido uno crítico; no se modificó por la restricción de alcance.
- Focus presenta un desajuste de hidratación por fecha/hora. Se solicitó autorización para el ajuste mínimo; no se modificó su código mientras está pendiente.
- Disponibilidad externa de Cumpa Perú y Bubba Bags: en la fase anterior respondieron 429; no se cambiaron sus destinos por ese bloqueo.
- Material adicional para otras credenciales o enlaces personales de verificación.
- No desplegar sin autorización del usuario.
