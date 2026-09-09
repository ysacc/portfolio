# Ysacc Roncal Academy

Aplicación Next.js App Router independiente del portfolio. Reutiliza TypeScript, Tailwind, Lucide y el acento ámbar de la marca; tiene layout, estilos, rutas, datos y configuración propios. No importa código del portfolio. La única modificación al proyecto principal es excluir `apps` de su comprobación TypeScript.

## Ejecutar

Con Node.js 22, desde la raíz:

```powershell
cd apps/academy
npm install
npm run dev
```

Abrir http://localhost:3001. En esta sesión también funciona con las dependencias ya instaladas en la raíz. Para una instalación independiente, ejecutar siempre `npm install` dentro de Academy.

```powershell
npm run lint
npm run typecheck
npm test
npm run build
npm start
```

Academy tiene cinco tests de integridad de datos, rutas y analítica. Los tres tests existentes del portfolio se ejecutan con `npm test` desde la raíz.

## Estructura

- `src/app`: inicio, catálogo, ruta dinámica de programas, mentorías, instructor, contacto y 404.
- `src/components/Navbar.tsx`: navegación desktop y móvil.
- `src/components/home`: Hero conservado, catálogo, resultados y tecnologías.
- `src/components/program`: composición compartida de las landings, temario, proyectos, resultados, FAQ, CTA e interacciones.
- `src/components/shared`: instructor, CTA general y comparación con aprendizaje autodidacta.
- `src/components/Sections.tsx`: secciones existentes del Home y exportaciones compatibles.
- `src/components/ContactForm.tsx`: validación nativa y preparación del mensaje; los otros componentes cliente son StickyProgramCTA y ProgramInteractions.
- `src/data/programs.ts`: catálogo público y resumen del temario de React derivado de la misma fuente.
- `src/data/programs/*.ts`: contenido independiente de cada programa, sin páginas duplicadas.
- `src/data/program-types.ts`: Program, ProgramModule, ProgramProject, FAQItem y rutas canónicas.
- `src/data/faq.ts`, `projects.ts`, `technologies.ts`, `cohorts.ts`: contenido compartido y cohortes pendientes.
- `src/data/site.ts`: identidad, contacto y modalidad configurable.
- `src/app/globals.css`: identidad clara y ámbar existente; `programs.css` extiende los componentes nuevos.
- `src/app/opengraph-image.tsx`, `sitemap.ts`, `robots.ts`: SEO.
- `public/instructor.jpg`: copia de la foto real del portfolio para mantener independencia.

## Configuración

Copiar `.env.example` a `.env.local` si se necesitan otros valores. Ninguna variable es obligatoria para ejecutar localmente.

| Variable | Valor por defecto / uso |
| --- | --- |
| `ACADEMY_URL` | `https://academy.ysaccroncal.dev`; URL absoluta de metadata y sitemap |
| `ACADEMY_CONTACT_EMAIL` | `samironcal@gmail.com` |
| `ACADEMY_WHATSAPP` | Vacío; número internacional con dígitos, sin signo + |
| `ACADEMY_MODALITY` | `Modalidad por confirmar` |

Recompilar al modificar variables porque hay contenido prerenderizado. Los textos y el temario se editan en los archivos de datos. No hay precios, testimonios, matrículas, autenticación ni promesas de empleo.

El formulario prepara un mensaje en el cliente de correo del visitante, o abre WhatsApp si existe un número configurado. El visitante debe completar el envío allí; esta web no almacena datos ni informa un envío confirmado. Probar con datos ficticios, sin enviar mensajes durante la verificación.

## Desplegar academy.ysaccroncal.dev

1. Crear un proyecto independiente en Vercel desde este mismo repositorio.
2. Elegir **Root Directory: apps/academy**, framework Next.js, Node.js 22.
3. Usar `npm install` como Install Command y `npm run build` como Build Command; dejar la salida predeterminada de Next.js.
4. Añadir las variables anteriores en el nuevo proyecto. Configurar `ACADEMY_URL=https://academy.ysaccroncal.dev`.
5. Desplegar y revisar la URL de preview.
6. Añadir `academy.ysaccroncal.dev` en Settings → Domains del nuevo proyecto. En el proveedor DNS, crear el registro para `academy` con el valor exacto que indique Vercel.
7. Esperar la validación de DNS y TLS; revisar inicio, programas, contacto, sitemap y OpenGraph.

No cambiar el dominio, la raíz ni la configuración del proyecto existente del portfolio. Vercel permite proyectos separados con diferentes directorios raíz del mismo repositorio: [documentación oficial](https://vercel.com/docs/monorepos).

También puede instalarse esta carpeta como un repositorio independiente y ejecutarse en un servidor Node.js con `npm run build` y `npm start`.

## Revisión manual

Revisar a 375, 390, 430, 768, 1024, 1280, 1440 y 1920 px: menú, hero, tarjetas, temario y formulario. Navegar con Tab, comprobar foco visible, abrir semanas con Enter y verificar la selección de programa en contacto. Las fechas y modalidad definitiva deben acordarse antes de abrir inscripciones.

## Agregar un programa

Crear un archivo tipado en `src/data/programs/` y añadirlo al catálogo de `src/data/programs.ts`. El catálogo genera la landing, tarjetas, contacto, metadata y sitemap. Definir al menos un proyecto ilustrativo y validar los slugs de `nextSteps` con `npm test`. No crear otro archivo page.tsx.

La mentoría utiliza `/mentorias` como única landing; `/programas/mentoria` redirige permanentemente (308). Todas las tarjetas, siguientes rutas, metadata y sitemap usan `programPath`.

## Analítica opcional

`src/lib/analytics.ts` ofrece `setAnalyticsAdapter` y `track`. Sin proveedor no almacena ni transmite datos; emite un CustomEvent local `academy:analytics`. Conectar un adaptador desde un componente cliente cuando se elija la plataforma. Los errores del proveedor no deben interrumpir las acciones.

Eventos: `program_view`, `program_cta_click`, `curriculum_expand`, `project_view`, `whatsapp_click` y `contact_submit`. El último representa la preparación del mensaje (`action: handoff`), nunca confirma un envío. Solo se incluyen identificadores de programa, módulo, proyecto, ubicación y canal; no nombres, correos ni mensajes.

## Cohortes y políticas

`cohorts.ts` empieza vacío. Admite fechas, horarios, cupos, precios, moneda y estado sin inventarlos. La UI puede anunciar cohortes y horarios confirmados; precios y cupos no se muestran todavía. Modalidad, grabaciones, recuperación, certificados y pagos tienen respuestas neutrales editables en los datos.

Los mockups son HTML/CSS ilustrativos y están identificados como demostraciones. No representan alumnos ni proyectos existentes.

Ver [el informe de esta iteración](ITERATION.md) para diagnóstico, alcance, validación y pendientes.
