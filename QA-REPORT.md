# QA del portafolio — 19 de octubre de 2026

## Alcance y entorno

Se revisaron las siete páginas principales y los dos casos de IA en 390×844, 768×1024, 1440×900 y 1920×1080, con temas oscuro y claro. El build de QA se genera en `.next-qa` y se sirve en el puerto 3100 para aislarlo del entorno de desarrollo. No se desplegó a producción.

Se conservaron la fotografía y el contenido profesional que el usuario había actualizado antes de esta fase. No se alteraron fechas, empleadores, credenciales ni el PDF.

## Problemas confirmados y correcciones

| Hallazgo | Solución | Evidencia |
| --- | --- | --- |
| El logo visible «YR.» tenía un nombre accesible que no incluía ese texto | Nombre accesible coherente con el texto visible | Axe deja de reportar `label-content-name-mismatch` |
| La paleta dejaba salir el foco hacia el fondo y no recuperaba el activador | Ciclo de tabulación, fondo inerte, bloqueo de scroll y recuperación del foco | Playwright con Tab, Shift+Tab y Escape |
| El enlace de salto no garantizaba un destino enfocable | `tabIndex=-1` en main y separación del header fijo | Prueba de teclado y foco real |
| Acciones de teclado podían interceptar Enter en botones de la paleta | Atajos de selección restringidos al input; botones conservan su interacción nativa | Pruebas funcionales |
| Tema persistido podía producir un destello oscuro; localStorage podía lanzar excepciones | Inicialización previa a pintura y acceso protegido al almacenamiento | Recarga, cambio de ruta y almacenamiento restringido |
| El hover del botón claro reducía el contraste | Tokens cyan más oscuros en tema claro, con texto blanco | Revisión visual, contraste y axe |
| Etiquetas de diagramas demasiado pequeñas en móvil | SVG propios con etiquetas mayores, saltos de línea y conectores claros | Capturas en móvil y casos de estudio |
| Enlaces de tarjetas no quedaban alineados | Layout flexible con CTA al pie | Comparativas responsive |
| Hero móvil más largo de lo necesario y reglas móviles contradictorias | Reglas unificadas, fotografía más compacta e indicadores en tres columnas | Capturas finales de 390 px |
| Certificaciones saltaba de H1 a H3 | Encabezado H2 accesible para el grupo de credenciales | Hallazgo Lighthouse corregido |
| Paleta y animaciones se descargaban aunque no se utilizasen | Carga diferida al invocarla | Revisión del JavaScript inicial y prueba de primer uso |
| Credenciales predeterminadas en el proxy y posibilidad de ignorar el host real con un forwarded host distinto | Sin credenciales predeterminadas; falta de configuración rechaza acceso; ambos hosts participan en la protección | Prueba HTTP sin credenciales y con forwarded host manipulado |
| Cabeceras de seguridad del middleware antiguo no garantizadas en el proxy actual | Cabeceras centralizadas en Next: nosniff, DENY, referrer policy, permissions policy y CSP limitada | Pruebas HTTP |

La CSP aplicada limita marcos, objetos y base URL. No se presenta como una política completa de prevención de XSS basada en nonces. El antivirus no se desactivó ni se omitió validación TLS.

## Revisión visual y capturas

Hay 72 capturas iniciales y 72 finales, más 16 hojas de revisión: nueve páginas por resolución y apariencia. Se inspeccionaron las hojas y las capturas detalladas relevantes de inicio, experiencia, certificaciones y ambos diagramas. Las capturas completas permiten revisar también la parte inferior de cada página.

- [Móvil antes](qa-artifacts/before/sheet-390-dark.png) y [móvil después](qa-artifacts/after/sheet-390-dark.png).
- [Tablet después](qa-artifacts/after/sheet-768-light.png).
- [Escritorio después](qa-artifacts/after/sheet-1440-dark.png).
- [Escritorio amplio después](qa-artifacts/after/sheet-1920-light.png).
- [Caso Principal en móvil](qa-artifacts/after/390-light-proyectos--principal-ai-assistant.png).
- [Caso de investigación en móvil](qa-artifacts/after/390-light-proyectos--scientific-research-ai.png).

En las 72 combinaciones finales no se detectaron imágenes rotas, desbordamientos horizontales, títulos tapados por el header ni errores JavaScript. Los datos y resultados de axe están en [results.json](qa-artifacts/after/results.json). La comparación inicial tenía un mismo fallo de etiqueta accesible en las 72 combinaciones; la revisión final no presenta infracciones automáticas dentro de las reglas WCAG A/AA probadas. Esto no constituye una certificación de conformidad WCAG completa ni una prueba con todas las tecnologías de asistencia.

## Pruebas y reproducibilidad

Comandos desde la raíz del repositorio:

```powershell
pnpm install --frozen-lockfile
pnpm lint
pnpm exec tsc --noEmit
pnpm test
pnpm qa:build
pnpm qa:serve
# En otra terminal:
pnpm test:e2e
pnpm qa:capture after
```

Playwright usa Chrome instalado de forma predeterminada. `QA_CHROME_PATH` permite usar otro ejecutable compatible. Para Lighthouse, las herramientas locales viven en `.qa-tools`; `CHROME_PATH` selecciona el navegador y `QA_LIGHTHOUSE_DIR` la carpeta de resultados.

- Lint, TypeScript y seis pruebas unitarias del portafolio: correctos.
- Build de producción aislado con Next.js 16.4.2 y React 19.3.1: correcto.
- La suite de navegador cubre las siete rutas, estado activo, menú móvil, Escape, foco, tema persistente, filtros, búsqueda, casos, paleta, descarga, redirecciones, 404, cabeceras, movimiento reducido, almacenamiento restringido y Focus.
- La última ejecución del portafolio en Chromium, con `--grep-invert Focus`, terminó con **58 pruebas aprobadas y dos omisiones intencionales**. La ejecución ampliada que incluye Focus tuvo **58 aprobadas, cuatro fallos de Focus y dos omisiones**; esos fallos se preservan en [playwright-with-focus.json](qa-artifacts/playwright-with-focus.json) y se reprodujeron por separado en [focus-hydration.json](qa-artifacts/focus-hydration.json). No se presenta la suite global como aprobada.
- Dos omisiones son intencionales: el escenario específico del menú móvil no se ejecuta en los proyectos desktop y wide.
- Academy: 18 pruebas existentes y build correctos con las dependencias compartidas. Once páginas comprobadas en navegador con HTTP 200 y sin excepciones JavaScript. Se conservaron sus archivos. Persisten advertencias previas de múltiples lockfiles y arranque standalone.
- Esto no valida una instalación independiente de Academy desde su propio lockfile: véase la auditoría separada siguiente.

## Seguridad de dependencias

Se utilizó pnpm 9.15.4 y se sincronizaron `package.json` y `pnpm-lock.yaml`. La instalación con lockfile congelado pasó. No se ejecutó `audit fix --force`.

| Auditoría | Críticas | Altas | Moderadas | Bajas |
| --- | --- | --- | --- | --- |
| Lockfile inicial | 3 | 43 | 21 | 2 |
| Final, todas las dependencias | 0 | 1 | 1 | 0 |
| Final, producción | 0 | 0 | 0 | 0 |

Se actualizaron versiones dentro de los rangos compatibles, incluidos Next.js 16.2.10 → 16.4.2, React/React DOM 19.2.7 → 19.3.1, PostCSS 8.5.17 → 8.5.31 y transitivas. Tailwind y TypeScript se clasificaron como herramientas de desarrollo. Playwright y axe son dependencias de desarrollo; Lighthouse se instaló solo en herramientas locales.

El aviso crítico de `next/og` está corregido a partir de Next.js 16.3.6; se instaló una versión posterior. [Aviso primario GHSA-vcvr-r3jv-pc5j](https://github.com/advisories/GHSA-vcvr-r3jv-pc5j).

Pendientes:

- `braces` 3.0.3, alta, transitiva de Tailwind y herramientas de lint: no tiene parche publicado para el aviso de agotamiento de pila. Se utiliza para patrones de archivos durante desarrollo/compilación; no para solicitudes de usuarios del portafolio. [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm).
- `postcss-selector-parser` 6.1.4, moderada, transitiva de Tailwind/PostCSS: el rango corregido comienza en 7.1.6. No se forzó una sustitución de versión mayor en la cadena de compilación. [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf).

Los 17 paquetes afectados están clasificados por severidad, relación y exposición en [classification.md](qa-artifacts/security/classification.md). Los rangos corregidos, avisos y rutas de dependencia figuran en [classification.json](qa-artifacts/security/classification.json), junto a los JSON originales de auditoría.

### Lockfile independiente de Academy

La auditoría de solo lectura de `apps/academy/package-lock.json` encontró **13 paquetes con avisos: uno crítico, diez altos y dos moderados**. Ese lockfile fija Next.js 16.3.5, aunque el build de regresión de esta fase utilizó Next.js 16.4.2 desde las dependencias compartidas de la raíz. Son contextos distintos y no se presentan como equivalentes.

El aviso crítico corresponde a Next.js; `sharp` y `source-map-js` son transitivas con correcciones disponibles. Los otros avisos se concentran en la cadena de Tailwind y lint. Los datos exactos, versiones, relación directa/transitiva y correcciones disponibles están en [academy-audit.json](qa-artifacts/security/academy-audit.json). Algunas recomendaciones automáticas implican cambios de versión mayor o incluso una rama anterior de ESLint: no se aplicaron de forma automática.

No se modificaron el manifest ni el lockfile de Academy porque el alcance exige conservar esa aplicación. Antes de desplegar Academy de manera independiente se debe actualizar y validar su propia instalación. La ausencia de avisos de producción informada arriba se refiere exclusivamente al lockfile pnpm de la raíz.

## Lighthouse y límites de medición

Se conservan los informes iniciales de Chrome en [lighthouse](qa-artifacts/lighthouse/summary.json). El antivirus del equipo inyectó un script HTTP de Kaspersky de aproximadamente 174 KB, ajeno al repositorio. Esto produjo Best Practices 81 y afectó rendimiento y JavaScript sin minificar. No se atribuye ese código a la aplicación.

Se descargó Chromium completo desde el CDN oficial de Playwright. Una comprobación puntual no mostró el script externo, pero la medición completa sí volvió a detectarlo; esos resultados se conservan en `qa-artifacts/lighthouse-chromium-interfered` y no se presentan como medición aislada de la aplicación.

La descarga adicional de Headless Shell falló inicialmente por una cadena TLS autofirmada. Se completó utilizando `NODE_USE_SYSTEM_CA=1`, es decir, el almacén de certificados ya confiados por Windows. No se desactivó TLS, no se añadió ningún certificado y no se alteró el antivirus. Headless Shell permitió medir sin la inyección externa.

Los resultados finales, separados de las mediciones interferidas, se guardan en [lighthouse-final](qa-artifacts/lighthouse-final/summary.json).

Las mediciones son de laboratorio en Windows, con throttling de Lighthouse. No equivalen a métricas de usuarios reales o a una evaluación CrUX; no hay medición de INP de campo. LCP, CLS y TBT se conservan en los informes.

<!-- LIGHTHOUSE_RESULTS_START -->

### Resultados finales de Lighthouse

| Modo | Página | Rendimiento | Accesibilidad | Best Practices | SEO | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| mobile | / | 88 | 100 | 100 | 100 | 2.91 s | 325 ms | 0.000 |
| mobile | /especialidades | 91 | 100 | 100 | 100 | 2.59 s | 288 ms | 0.000 |
| mobile | /proyectos | 90 | 100 | 100 | 100 | 3.13 s | 194 ms | 0.000 |
| mobile | /experiencia | 87 | 100 | 100 | 100 | 2.60 s | 374 ms | 0.000 |
| mobile | /certificaciones | 88 | 100 | 100 | 100 | 2.62 s | 353 ms | 0.000 |
| mobile | /sobre-mi | 89 | 100 | 100 | 100 | 2.76 s | 315 ms | 0.002 |
| mobile | /contacto | 88 | 100 | 100 | 100 | 2.61 s | 352 ms | 0.000 |
| mobile | /proyectos/principal-ai-assistant | 86 | 100 | 100 | 100 | 2.78 s | 401 ms | 0.000 |
| mobile | /proyectos/scientific-research-ai | 86 | 100 | 100 | 100 | 2.79 s | 388 ms | 0.000 |
| desktop | / | 100 | 100 | 100 | 100 | 0.62 s | 28 ms | 0.000 |

7 de las nueve mediciones móviles quedaron por debajo del objetivo orientativo de rendimiento 90. Se conservan los resultados reales, sin redondearlos hacia el objetivo. Lighthouse advierte que la CPU de este entorno es más lenta de lo esperado para su modelo de throttling. Son mediciones locales y no sustituyen una prueba sobre el hosting de destino.

<!-- LIGHTHOUSE_RESULTS_END -->

## Hallazgo separado: Focus

La regresión de navegador detectó errores recuperables de hidratación React #418 en Focus. Las rutas responden 200 y el panel termina mostrándose, pero su HTML incluye fechas/horas calculadas al compilar y el navegador produce valores distintos. Se reprodujo en las cuatro resoluciones.

No se silenció el error ni se cambió Focus: la instrucción de esta fase excluye modificarlo salvo efectos de configuración compartida. Se solicitó autorización para un ajuste mínimo del primer render. Mientras esté pendiente, la suite global conserva el fallo y no puede darse por aprobado todo el repositorio.

Google Calendar no está configurado en este entorno y devuelve datos de muestra. No se probaron credenciales reales ni integración autenticada. Antes de habilitar datos privados en producción, ese endpoint necesita un control de acceso adecuado; su implementación queda fuera del alcance autorizado de esta fase.

## Archivos de esta fase

- UI y accesibilidad: `src/app/globals.css`, `layout.tsx`, `page.tsx`, `not-found.tsx`; `Navbar.tsx`, `CommandPalette.tsx`, nuevo `CommandPaletteLauncher.tsx`, `ThemeProvider.tsx` y `Credentials.tsx`.
- Ilustraciones: `public/diagrams/principal-concept.svg` y `research-concept.svg`.
- Configuración y seguridad: `next.config.js`, `src/proxy.ts`, `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `.gitignore`.
- Pruebas: `playwright.config.ts`, `tests/e2e/portfolio.spec.ts`, utilidades en `scripts/qa/`.
- Informes y evidencias: este documento y la carpeta local `qa-artifacts/`, excluida de Git para evitar versionar capturas y trazas voluminosas.

## Estado de publicación

No se desplegó. El portafolio público tiene su revisión visual y funcional completada, pero la aprobación global del repositorio sigue condicionada a resolver o aceptar explícitamente el hallazgo de Focus, actualizar la instalación independiente de Academy y revisar los riesgos de herramientas de desarrollo documentados. No se ofrece una garantía de ausencia de vulnerabilidades ni conformidad WCAG certificada.
