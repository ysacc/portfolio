# Evolución de las landings de Academy

## Diagnóstico inicial

El Home tenía una identidad clara, un Hero tecnológico útil y componentes responsive. La ruta dinámica era adecuada; el problema era un modelo Program limitado, landings con poca información y un temario de React fuera del modelo. Sections.tsx mezclaba responsabilidades y había dos páginas de mentoría.

## Cambios y arquitectura

Se conservan la paleta clara/ámbar, tipografía, editor, PR y terminal del Hero. Cambian sus CTA y se incorpora una banda de autoridad con los datos ya proporcionados. Home añade resultados visuales, tecnologías por categoría y comparación respetuosa con recursos autodidactas.

La landing compartida es `components/program/ProgramLanding.tsx`. Las páginas solo buscan el programa y lo renderizan. No hay cinco implementaciones de landing.

- `components/home`: Hero, ProgramsSection (incluye ProgramCard y ProgramGrid), OutcomesSection y TechnologySection.
- `components/program`: ProgramHero, ProgramOverview (incluye TechStack y CareerPreparation), ProjectShowcase, CurriculumTimeline, ProfessionalWorkflow, PortfolioOutcome, ProgramNextSteps, ProgramFAQ, ProgramCTA, StickyProgramCTA y ProgramInteractions.
- `components/shared`: InstructorSection, CTASection y LearningComparison.
- `Sections.tsx`: conserva las secciones existentes que no requerían cambios y reexporta componentes extraídos para mantener compatibilidad.

## Modelo y contenido

`program-types.ts` define Program, ProgramModule, ProgramProject y FAQItem. El modelo incluye tipo de programa, headline, nivel inicial/final, duración, modalidad, descripción extensa, requisitos, audiencia, resultados, módulos, entregables, proyectos, metodología, evidencias de portfolio, siguientes rutas, FAQ y SEO.

`programs.ts` agrega los cinco archivos en `data/programs/`. La modalidad global y las FAQ comunes se incorporan allí; el resumen de ocho semanas del Home deriva del programa React. Para un sexto programa se agrega un archivo de datos y una entrada al catálogo, sin copiar páginas.

React tiene ocho módulos detallados, tres ejemplos de proyectos, TypeScript/arquitectura, APIs, Git, testing básico, deploy y explicación técnica. Desde cero tiene una progresión introductoria y enlace a React. Full Stack muestra el recorrido frontend → API → backend → datos → autenticación → deploy. Mentoría y entrevistas usan etapas y resultados adaptados a su propósito, sin atribuirles una duración inventada.

Los proyectos son mockups HTML/CSS identificados como demostraciones. No son testimonios ni trabajos de alumnos. No se publican precios, fechas, cupos ni certificados. Solo React tiene duración confirmada de ocho semanas; las demás rutas explicitan su estado pendiente o la dependencia de un diagnóstico.

## Rutas y SEO

- `/`: Home extendido, composición principal conservada.
- `/programas`: catálogo con datos enriquecidos y enlaces canónicos.
- `/programas/desde-cero`, `/programas/frontend-react`, `/programas/full-stack`, `/programas/entrevistas`: misma composición, contenidos diferentes.
- `/mentorias`: landing canónica de mentoría.
- `/programas/mentoria`: redirección permanente 308 a `/mentorias`.
- `/contacto`: conserva el formulario y su selección por programa; incorpora eventos sin datos personales.
- `/sobre-mi`: conserva el instructor extraído al componente compartido.
- `sitemap.xml`: únicamente URLs canónicas, sin duplicar mentoría.

Cada programa tiene metadata, canonical, OpenGraph y Twitter propios. Los cursos incluyen JSON-LD Course sin ofertas ni valoraciones inventadas, siguiendo [Schema.org](https://schema.org/Course). Mentoría y preparación de entrevistas no se etiquetan como cursos.

## Decisiones de UX y rendimiento

La historia de cada programa avanza desde el punto de partida hasta el resultado. El temario y las FAQ utilizan details/summary nativos, accesibles por teclado. Los mockups no tienen controles falsos interactivos y su decoración se oculta a tecnologías de asistencia.

La navegación contextual permite saltar a secciones. El CTA fijo aparece después de salir del Hero y respeta safe areas móviles; se reserva espacio final para poder alcanzar contenido y footer. Las animaciones son discretas y respetan prefers-reduced-motion.

Se priorizan Server Components. Solo el contacto, CTA fijo y observación de interacciones requieren JavaScript cliente. No se añadieron librerías ni dependencias de animación.

## Contacto, cohortes y analítica

El número sigue centralizado en site.ts. Si está configurado, la landing ofrece WhatsApp con el programa en el mensaje. El formulario conserva su envío mediante la aplicación externa del visitante, sin backend ni confirmación ficticia.

cohorts.ts comienza vacío y permite agregar futuras cohortes confirmadas. El esquema soporta precios y cupos pero la UI no los publica todavía.

analytics.ts expone un adaptador opcional y eventos locales: program_view, program_cta_click, curriculum_expand, project_view, whatsapp_click y contact_submit. No envía nombres, correos ni texto del mensaje. contact_submit significa handoff a correo/WhatsApp, no mensaje entregado. No se instaló proveedor externo.

## Validación

- Academy: lint, typecheck y build aprobados.
- Academy: cinco tests aprobados (integridad y enlaces del catálogo, ocho módulos React compartidos, canonical/sitemap de mentoría, cohortes vacías y fallo tolerado del adaptador de analytics).
- Portfolio principal: sus tres tests existentes aprobados; no se modificó su código en esta iteración.
- Home y React comprobados a 375, 390, 430, 768, 1024, 1280, 1440 y 1920 px: sin desbordamientos, un H1 y sin overlay de error.
- Catálogo, Desde cero, Full Stack, Mentorías, Entrevistas, Contacto y 404 comprobados a 375 y 1440 px.
- Temario abierto/cerrado con teclado; evento curriculum_expand observado y CTA fijo comprobado.
- Build servido localmente: nueve rutas HTTP 200, mentoría antigua 308, programa inexistente 404, sitemap canónico y JSON-LD válido.
- Navegación real de React a contacto sobre el build: programa preseleccionado correctamente.
- Sin publicación ni envío de mensajes durante la verificación.

## Pendientes y próxima iteración

1. Confirmar modalidad, carga semanal, fechas, horarios, grabaciones, recuperación, certificados y condiciones de pago antes de abrir inscripciones.
2. Revisar y aprobar el alcance curricular propuesto para las rutas que no tenían un temario detallado; el contenido es editable en datos.
3. Elegir proveedor de analítica y conectar el adaptador; hoy no hay almacenamiento de eventos ni CRM.
4. Definir una recepción de leads con backend si se necesita confirmar entrega; el formulario actual depende del cliente de correo/WhatsApp del visitante.
5. Incorporar evidencias y testimonios solo cuando existan y haya autorización para publicarlos.
6. Revisar reproducibilidad de dependencias: la app no tiene lockfile propio y en este entorno usa dependencias instaladas en la raíz.
7. Para despliegue propio con standalone, preparar el servidor y sus assets: el script start heredado usa next start y Next.js emite una advertencia por output: standalone. Esto no bloquea el build ni cambia el despliegue en Vercel.
8. Medir Core Web Vitals y realizar una auditoría completa de accesibilidad sobre el dominio desplegado. Esta iteración verifica layout, controles y flujo, no certifica métricas Lighthouse.
