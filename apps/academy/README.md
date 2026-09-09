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
npm run build
npm start
```

Los tests existentes pertenecen al portfolio: ejecutar `npm test` desde la raíz. Academy no tiene todavía una suite de tests propia.

## Estructura

- `src/app`: inicio, catálogo, cinco páginas de programa, mentorías, instructor, contacto y 404.
- `src/components/Navbar.tsx`: navegación desktop y móvil.
- `src/components/Sections.tsx`: Hero, ProgramCard, ProgramGrid, LearningPath, InstructorSection, Methodology, CTASection y Footer reutilizables.
- `src/components/ContactForm.tsx`: único componente cliente; validación nativa y preparación del mensaje.
- `src/data/programs.ts`: programas, resultados, temario, metodología y perfiles.
- `src/data/site.ts`: identidad, contacto y modalidad configurable.
- `src/app/globals.css`: diseño oscuro, responsive y movimiento reducido.
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

Revisar a 375, 768, 1024, 1440 y 1920 px: menú, hero, tarjetas, temario y formulario. Navegar con Tab, comprobar foco visible, abrir semanas con Enter y verificar la selección de programa en contacto. Las fechas y modalidad definitiva deben acordarse antes de abrir inscripciones.

## Validación realizada

- Lint y TypeScript de ambas aplicaciones: sin errores.
- Build de Academy y del portfolio: exitosos.
- Tests existentes del portfolio: 3 de 3 aprobados.
- Inicio comprobado visualmente a 1440 y 375 px; sin desbordamiento horizontal en los cinco anchos solicitados.
- Menú móvil abierto correctamente; rutas de programas, mentorías, instructor, contacto, sitemap, robots e imagen OpenGraph responden HTTP 200.
- No se ha publicado el proyecto ni enviado mensajes desde el formulario.
