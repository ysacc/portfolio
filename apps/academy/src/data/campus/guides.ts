export type GuideStep = {
  title: string;
  description: string;
  command?: string;
  link?: ResourceLink;
};

export type ResourceLink = {
  label: string;
  url: string;
};

export type CampusGuide = {
  visibility: "public" | "campus";
  programSlug: "desde-cero" | "frontend-react" | "full-stack";
  slug: string;
  title: string;
  description: string;
  category: string;
  level: "inicial" | "frontend" | "full-stack" | "todos";
  estimatedMinutes?: number;
  steps: GuideStep[];
  resources?: ResourceLink[];
  seoTitle?: string;
  article?: GuideStep[];
  relatedSlugs?: string[];
  secondaryProgramSlug?: "desde-cero";
};

export const guides: CampusGuide[] = [
{
  "slug": "como-funciona-un-pull-request",
  "title": "Cómo funciona un Pull Request en un equipo de desarrollo",
  "seoTitle": "Cómo funciona un Pull Request en GitHub",
  "description": "Aprende qué es un Pull Request, cómo se crea, qué ocurre durante el Code Review y cómo se integra una tarea en un flujo profesional de desarrollo.",
  "category": "GitHub",
  "visibility": "public",
  "programSlug": "frontend-react",
  "level": "frontend",
  "estimatedMinutes": 12,
  "steps": [],
  "relatedSlugs": [
    "configurar-git",
    "primer-repositorio",
    "primer-pull-request",
    "crear-github"
  ],
  "article": [
    {
      "title": "Introducción: proponer un cambio",
      "description": "Un Pull Request (PR) es una propuesta para integrar los cambios de una rama en otra. Permite discutir el código y revisar su comportamiento antes de incorporarlo. Abrirlo no publica automáticamente tu trabajo en producción: el deploy depende del proyecto."
    },
    {
      "title": "Qué vas a aprender y qué necesitas",
      "description": "Vas a seguir una tarea desde su ticket hasta el merge. Necesitas Git configurado, una cuenta de GitHub y permiso para colaborar en un repositorio de práctica. Si no tienes acceso de escritura, el equipo puede aceptar contribuciones mediante un fork."
    },
    {
      "title": "Ticket → Branch → Desarrollo",
      "description": "Empieza por un ticket concreto: corregir el mensaje de un formulario cuando el correo es inválido. Define el resultado esperado y cómo comprobarlo. Actualiza main y crea una rama; evita mezclar la corrección con un rediseño. Desarrolla el cambio y prueba entradas válidas, inválidas y vacías.",
      "command": "git switch main\ngit pull --ff-only\ngit switch -c fix/validacion-correo"
    },
    {
      "title": "Commit → Push → Pull Request",
      "description": "Revisa el diff antes de incluir archivos. Un commit debe contar un cambio coherente; el push lo comparte con el remoto. En GitHub abre el PR comparando tu rama con la rama base correcta. Resume el problema, la solución, las pruebas y cualquier limitación. Añade capturas si cambió la interfaz.",
      "command": "git diff\ngit add src/Formulario.jsx\ngit commit -m \"fix: mostrar error para correo invalido\"\ngit push -u origin fix/validacion-correo"
    },
    {
      "title": "Code Review → Cambios solicitados",
      "description": "Quien revisa comprueba legibilidad, casos límite y coherencia con el proyecto. Puede comentar, aprobar o solicitar cambios. Responde explicando tu razonamiento; si discrepas, muestra un caso o una prueba. Corrige en la misma rama, crea otro commit y haz push: el PR se actualiza. No abras otro PR para cada comentario."
    },
    {
      "title": "Aprobación → Merge",
      "description": "Solicita otra revisión cuando hayas atendido las observaciones. La aprobación puede no ser suficiente: las reglas del repositorio pueden exigir checks, resolver conversaciones o actualizar la rama. Ante un conflicto, entiende ambas versiones y prueba el resultado antes de marcarlo resuelto. Integra con el método acordado por el equipo y actualiza tu rama local."
    },
    {
      "title": "Ejemplo de descripción revisable",
      "description": "Una buena descripción permite reproducir el cambio sin preguntarte todo por chat. Para el formulario: problema, no aparecía feedback al enviar un correo inválido; solución, validación y mensaje asociado al campo; pruebas, vacío, formato incorrecto y dirección válida. Indica qué no cubre la tarea, como la validación final en el servidor."
    },
    {
      "title": "Errores comunes y buenas prácticas",
      "description": "Evita PR enormes, secretos en commits y frases como “ya funciona” sin evidencia. Revisa tu propio diff, elimina cambios accidentales y mantén los comentarios centrados en el código. Un PR pequeño facilita detectar defectos, pero no garantiza que esté libre de ellos."
    },
    {
      "title": "Qué practicar después",
      "description": "Abre un PR de práctica, pide a otra persona una observación concreta y responde con un cambio comprobable. Explica por qué lo aceptaste o qué alternativa propones. Verifica el comportamiento después del merge y conserva el enlace como evidencia de colaboración."
    }
  ],
  "resources": [
    {
      "label": "Pull Requests en GitHub",
      "url": "https://docs.github.com/en/pull-requests/get-started/about-pull-requests"
    }
  ]
},
{
  "slug": "git-y-github-para-principiantes",
  "title": "Git y GitHub para desarrolladores principiantes",
  "seoTitle": "Git y GitHub para principiantes",
  "description": "Aprende los conceptos esenciales de Git y GitHub, cómo trabajar con repositorios, commits, branches, Pull Requests y un flujo profesional básico.",
  "category": "GitHub",
  "visibility": "public",
  "programSlug": "frontend-react",
  "level": "frontend",
  "estimatedMinutes": 12,
  "steps": [],
  "relatedSlugs": [
    "instalar-git",
    "crear-github",
    "configurar-git",
    "primer-repositorio",
    "primer-pull-request"
  ],
  "article": [
    {
      "title": "Introducción y objetivos",
      "description": "Git registra versiones de tu proyecto; GitHub aloja repositorios y ofrece herramientas de colaboración como issues y Pull Requests. Puedes usar Git sin GitHub. Aprenderás a guardar cambios comprensibles, compartirlos y revisar una integración sin confundir tu carpeta local con el remoto."
    },
    {
      "title": "Requisitos y repositorio local frente a remoto",
      "description": "Instala Git, configura nombre y correo y crea una cuenta de GitHub. Usa un repositorio de práctica sin datos privados. El repositorio local vive en tu equipo y permite crear commits sin conexión. El remoto es otra copia: editar un archivo no lo sube automáticamente. Clonar descarga el repositorio y configura normalmente origin."
    },
    {
      "title": "Commit, staging y branch",
      "description": "El área de staging selecciona qué cambios entran en el próximo commit. Un commit registra una versión con su mensaje y relación con el historial. Una branch es una referencia que permite desarrollar una línea de trabajo; no es una segunda carpeta. Usa git status y git diff para saber qué estás a punto de guardar.",
      "command": "git status\ngit diff\ngit switch -c docs/instrucciones-locales\ngit add README.md\ngit diff --staged\ngit commit -m \"docs: explicar como iniciar el proyecto\""
    },
    {
      "title": "Push y pull",
      "description": "Push envía tus commits al remoto. Pull obtiene cambios y los integra según tu configuración; no significa simplemente descargar archivos sueltos. En una rama sin divergencias, git pull --ff-only evita crear una integración inesperada. Si falla, revisa el historial con el equipo en vez de forzar el push.",
      "command": "git push -u origin docs/instrucciones-locales\ngit log --oneline -5"
    },
    {
      "title": "Pull Request y merge",
      "description": "Después del push, abre un PR con una finalidad y pruebas claras. El PR es la conversación sobre el cambio; merge es la operación que lo integra. Una rama puede existir sin PR. Revisa comentarios, corrige en la misma rama y espera los controles que exija el repositorio antes de integrar."
    },
    {
      "title": "Conflictos básicos",
      "description": "Un conflicto puede ocurrir cuando Git no logra combinar cambios, por ejemplo dos ediciones de la misma línea. Abre los archivos afectados, entiende qué necesita conservar cada versión y elimina los marcadores después de resolverlo. Ejecuta las pruebas, añade los archivos resueltos y completa la operación indicada por git status. No elijas “mi versión” a ciegas."
    },
    {
      "title": "Buenas prácticas y errores comunes",
      "description": "Usa mensajes que expliquen la intención: “fix: evitar envío doble del formulario” aporta más que “cambios”. Agrupa una sola tarea por commit cuando sea posible. Revisa .gitignore antes de añadir dependencias generadas o archivos .env. Borrar un secreto del último archivo no lo elimina del historial: avisa al equipo y revócalo."
    },
    {
      "title": "Qué practicar después",
      "description": "Completa este ciclo con un README: ticket, rama, edición, commit, push, PR, revisión y merge. Después actualiza main y confirma que contiene el cambio. En un repositorio descartable, modifica una línea desde dos ramas para practicar un conflicto sin comprometer el trabajo de otras personas."
    }
  ]
},
{
  "slug": "que-debe-saber-un-frontend-junior",
  "title": "Qué debe saber un Frontend Junior para trabajar en un equipo",
  "seoTitle": "Qué debe saber un Frontend Junior",
  "description": "Conoce las habilidades técnicas y de trabajo que debería dominar un Frontend Junior: JavaScript, React, Git, APIs, debugging, Pull Requests y Code Review.",
  "category": "Frontend",
  "visibility": "public",
  "programSlug": "frontend-react",
  "level": "frontend",
  "estimatedMinutes": 12,
  "steps": [],
  "relatedSlugs": [
    "git-y-github-para-principiantes",
    "javascript-o-react-que-aprender-primero",
    "como-consumir-api-rest-react",
    "portfolio-desarrollador-frontend"
  ],
  "article": [
    {
      "title": "Introducción: habilidades que puedes demostrar",
      "description": "Una lista de tecnologías no demuestra que puedas resolver una tarea. Esta guía te ayuda a evaluar tu capacidad para construir, comprobar y explicar una interfaz dentro de un equipo. Las expectativas varían entre proyectos y empresas; estas prácticas no prometen empleo ni sustituyen los requisitos de una vacante."
    },
    {
      "title": "Qué aprender y cómo prepararte",
      "description": "Necesitas un proyecto pequeño que puedas ejecutar y modificar. Úsalo para detectar lo que haces con autonomía y lo que todavía requiere ayuda. El objetivo no es memorizar respuestas: es mostrar evidencia mediante código, pruebas y decisiones documentadas."
    },
    {
      "title": "HTML semántico, CSS y responsive",
      "description": "Elige botones para acciones, enlaces para navegación y labels asociados a campos. Comprueba navegación con teclado, foco visible y mensajes entendibles. Construye layouts con Flexbox o Grid y prueba anchos pequeños, texto largo y zoom. Una pantalla que solo funciona con tus datos ideales todavía necesita trabajo."
    },
    {
      "title": "JavaScript moderno, React y TypeScript",
      "description": "Debes poder transformar arrays, leer objetos, usar funciones y módulos y razonar sobre asincronía. En React, divide responsabilidades, pasa props y conserva en estado solo lo necesario. Usa TypeScript para describir props y respuestas; un tipo no valida automáticamente el JSON recibido en ejecución. Explica por qué un estado vive en un componente concreto."
    },
    {
      "title": "APIs y debugging",
      "description": "Una petición necesita estados de carga, error, vacío y éxito. Inspecciona URL, método, status y respuesta en Network antes de culpar al componente. Reproduce el fallo con pasos precisos, formula una hipótesis y usa breakpoints o registros acotados para comprobarla. Evita cambiar varias cosas a la vez porque dificulta saber qué corrigió el problema."
    },
    {
      "title": "Git, Pull Requests y Code Review",
      "description": "Crea ramas por tarea, commits legibles y PR con contexto. Revisa el diff antes de pedir revisión. Ante un comentario, explica tu criterio o incorpora una mejora; no lo trates como una evaluación personal. Comunica pronto los bloqueos incluyendo qué intentaste y qué evidencia encontraste."
    },
    {
      "title": "Testing básico y ejemplo práctico",
      "description": "Para una lista de productos, comprueba carga, resultado vacío, error del servidor y filtrado. Un test útil describe comportamiento observable: al escribir una búsqueda sin coincidencias aparece el estado vacío. Evita tests que solo repitan detalles internos; complementa con una prueba manual de teclado y pantalla estrecha."
    },
    {
      "title": "Criterio técnico y uso responsable de IA",
      "description": "Puedes usar IA para proponer hipótesis, ejemplos o casos de prueba. Lee cada cambio, contrástalo con documentación y ejecútalo. No compartas credenciales ni código privado sin autorización. Si no puedes explicar una solución, pide una explicación y simplifícala antes de entregarla. Documenta el coste de tus decisiones, no solo sus ventajas."
    },
    {
      "title": "Qué practicar después",
      "description": "Entrega una pequeña mejora de punta a punta: ticket, interfaz responsive, consumo de API, estados alternativos, test y PR. En el README explica una decisión y una limitación. Pide a otra persona que ejecute el proyecto con tus instrucciones y registra qué información faltó."
    }
  ]
},
{
  "slug": "javascript-o-react-que-aprender-primero",
  "title": "JavaScript o React: qué aprender primero",
  "seoTitle": "JavaScript o React: qué aprender primero",
  "description": "Descubre por qué conviene aprender primero JavaScript antes de React y qué fundamentos necesitas para avanzar con una base sólida.",
  "category": "Frontend",
  "visibility": "public",
  "programSlug": "frontend-react",
  "level": "frontend",
  "estimatedMinutes": 12,
  "steps": [],
  "relatedSlugs": [
    "instalar-node",
    "que-debe-saber-un-frontend-junior",
    "como-consumir-api-rest-react"
  ],
  "article": [
    {
      "title": "Introducción: React se apoya en JavaScript",
      "description": "React ayuda a construir interfaces mediante componentes, pero esos componentes se escriben con JavaScript. Si una transformación de datos o una promesa te resulta incomprensible, añadir JSX no elimina la dificultad. Empieza por fundamentos y pasa a React cuando puedas explicar pequeños programas, sin esperar a saber todo el lenguaje."
    },
    {
      "title": "Qué aprender y requisitos previos",
      "description": "Necesitas manejar archivos HTML, CSS y la consola del navegador. Practica con una lista de tareas sencilla. El objetivo es distinguir problemas del lenguaje, del navegador y de React: un array mal filtrado sigue siendo un problema de JavaScript dentro de un componente."
    },
    {
      "title": "Variables, funciones, arrays y objetos",
      "description": "Distingue valores, referencias y alcance. Usa funciones con entradas y salidas claras. Practica map para transformar y filter para seleccionar sin modificar el array original. Aprende a acceder a propiedades, usar destructuring y crear copias con spread; recuerda que esas copias son superficiales.",
      "command": "const tareas = [{ id: 1, titulo: \"Revisar PR\", lista: false }];\nconst pendientes = tareas.filter(({ lista }) => !lista);\nconst titulos = pendientes.map(({ titulo }) => titulo);\nconsole.log(titulos);"
    },
    {
      "title": "Módulos y organización",
      "description": "Exporta funciones desde archivos con una responsabilidad y utiliza import donde las necesites. Poder separar una transformación de datos de la interfaz facilita probarla. Evita colocar toda la aplicación en un archivo solo porque el ejemplo inicial era pequeño."
    },
    {
      "title": "Async/await, fetch y errores",
      "description": "Una petición tarda y puede fallar. Practica async/await y try/catch; comprende que fetch puede resolver incluso con un status HTTP de error. Verifica response.ok antes de interpretar el JSON. Explica qué mostrará la pantalla durante la espera y qué podrá hacer el usuario si falla."
    },
    {
      "title": "DOM básico antes de los componentes",
      "description": "Crea un formulario con addEventListener, lee su valor y actualiza texto con textContent. Esto permite entender eventos y cambios visibles. Cuando pases a React, describe la interfaz con props y estado; evita modificar manualmente los mismos nodos que React controla."
    },
    {
      "title": "Cuándo pasar a React",
      "description": "Estás en condiciones de empezar si puedes filtrar una lista, separar una función en otro módulo, responder a un evento y cargar datos explicando el camino de error. Recrea entonces tu lista con componentes, props y estado. Compara qué responsabilidad tenía el DOM manual y cuál asume ahora React."
    },
    {
      "title": "Señales de que faltan fundamentos",
      "description": "Si copias map sin saber qué devuelve, confundes el resultado de una promesa con sus datos o no puedes localizar una variable fuera de alcance, practica ese concepto aislado. No intentes resolver cada duda añadiendo otra biblioteca. Alterna ejercicios pequeños con un proyecto que les dé contexto."
    },
    {
      "title": "Qué practicar después",
      "description": "Construye la misma lista primero con JavaScript y después con React. Añade búsqueda y estado vacío; escribe qué lógica reutilizaste. Si todavía necesitas trabajar HTML, CSS y programación inicial, el programa Desde cero puede ser un punto de partida antes de Frontend."
    }
  ],
  "secondaryProgramSlug": "desde-cero"
},
{
  "slug": "como-consumir-api-rest-react",
  "title": "Cómo consumir una API REST con JavaScript y React",
  "seoTitle": "Cómo consumir una API REST con React",
  "description": "Aprende a consumir APIs REST con JavaScript y React, manejar loading, errores y respuestas, y organizar el código de forma mantenible.",
  "category": "Frontend",
  "visibility": "public",
  "programSlug": "frontend-react",
  "level": "frontend",
  "estimatedMinutes": 12,
  "steps": [],
  "relatedSlugs": [
    "instalar-postman",
    "javascript-o-react-que-aprender-primero",
    "que-debe-saber-un-frontend-junior"
  ],
  "article": [
    {
      "title": "Introducción y requisitos",
      "description": "Vas a separar la petición HTTP de la interfaz y representar carga, error y éxito. Necesitas JavaScript con módulos y async/await, además de un proyecto React. El ejemplo supone un endpoint GET /api/productos del mismo origen que devuelve un array de objetos con id y nombre. Debes conectarlo a tu backend o preparar ese contrato; no es una API incluida en Academy."
    },
    {
      "title": "Contrato HTTP, JSON y status codes",
      "description": "Antes del componente, inspecciona la respuesta con Network o Postman. Un 200 indica éxito; 401 requiere autenticación, 403 indica acceso denegado y 404 un recurso no encontrado. Un 500 señala un problema del servidor. JSON es un formato de intercambio, no un tipo validado. Si tu endpoint devuelve 204 sin contenido, no intentes leer JSON; este ejemplo espera una colección JSON, incluso vacía."
    },
    {
      "title": "Servicio: fetch y async/await",
      "description": "Guarda esta función en productos.js. Comprueba response.ok porque los errores HTTP no rechazan por sí solos la promesa de fetch. La validación mínima evita tratar una respuesta inesperada como una lista de productos. El signal permite cancelar desde el componente.",
      "command": "export async function obtenerProductos(signal) {\n  const response = await fetch(\"/api/productos\", { signal });\n  if (!response.ok) throw new Error(`HTTP ${response.status}`);\n  const data = await response.json();\n  if (!Array.isArray(data) || data.some((p) =>\n    !p || typeof p.id !== \"number\" || typeof p.nombre !== \"string\"\n  )) throw new Error(\"Respuesta inesperada\");\n  return data;\n}"
    },
    {
      "title": "Componente: loading, error y success",
      "description": "En Productos.jsx, usa try/catch para convertir el fallo en un estado visible. La limpieza aborta la petición al desmontar; la comprobación del signal evita aplicar una respuesta cancelada. Se muestra el array vacío como un éxito sin resultados. Si trabajas con Next.js App Router, este componente interactivo necesita la directiva use client; evalúa también la carga de datos del framework.",
      "command": "import { useEffect, useState } from \"react\";\nimport { obtenerProductos } from \"./productos\";\n\nexport default function Productos() {\n  const [estado, setEstado] = useState({ tipo: \"loading\" });\n  useEffect(() => {\n    const controller = new AbortController();\n    async function cargar() {\n      try {\n        const datos = await obtenerProductos(controller.signal);\n        if (!controller.signal.aborted)\n          setEstado({ tipo: \"success\", datos });\n      } catch {\n        if (!controller.signal.aborted)\n          setEstado({ tipo: \"error\" });\n      }\n    }\n    cargar();\n    return () => controller.abort();\n  }, []);\n  if (estado.tipo === \"loading\") return <p role=\"status\">Cargando…</p>;\n  if (estado.tipo === \"error\") return <p role=\"alert\">No se pudo cargar.</p>;\n  if (!estado.datos.length) return <p>No hay productos.</p>;\n  return <ul>{estado.datos.map((p) => <li key={p.id}>{p.nombre}</li>)}</ul>;\n}"
    },
    {
      "title": "Debugging y errores comunes",
      "description": "Prueba sin conexión, con respuesta 500 y con JSON inválido. Mira primero la pestaña Network: un fallo puede estar en la URL o el contrato. Postman no aplica las restricciones CORS del navegador; que funcione allí no garantiza acceso desde tu frontend. No uses mode: no-cors como arreglo: una respuesta opaca no te permite leer el JSON."
    },
    {
      "title": "Buenas prácticas",
      "description": "No pongas claves privadas en el bundle del navegador. Mantén la URL y validación en el servicio y los mensajes en la interfaz. No lances peticiones dentro del render. En aplicaciones mayores considera el mecanismo del framework para caché, deduplicación y carga en servidor; este ejemplo enseña el ciclo básico, no implementa esas capacidades."
    },
    {
      "title": "Qué practicar después",
      "description": "Añade una acción explícita de reintento y prueba que no se mezclen respuestas antiguas con nuevas. Documenta el contrato y crea pruebas para colección vacía, estructura inválida y error HTTP. Abre un PR que explique cómo reproducir cada estado y qué decisiones siguen pendientes."
    }
  ],
  "resources": [
    {
      "label": "Fetch API en MDN",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
    },
    {
      "label": "Efectos y carga de datos en React",
      "url": "https://react.dev/reference/react/useEffect"
    }
  ]
},
{
  "slug": "portfolio-desarrollador-frontend",
  "title": "Cómo crear un portfolio para desarrollador frontend",
  "seoTitle": "Cómo crear un portfolio de Frontend Developer",
  "description": "Aprende qué debe mostrar un portfolio de desarrollador frontend, cómo presentar proyectos, GitHub, README, deploy y decisiones técnicas.",
  "category": "Empleabilidad",
  "visibility": "public",
  "programSlug": "frontend-react",
  "level": "frontend",
  "estimatedMinutes": 12,
  "steps": [],
  "relatedSlugs": [
    "crear-github",
    "primer-repositorio",
    "primer-pull-request",
    "que-debe-saber-un-frontend-junior"
  ],
  "article": [
    {
      "title": "Introducción: evidencia además de diseño",
      "description": "Un portfolio permite entender qué construiste, cómo lo hiciste y qué puedes explicar. La apariencia ayuda a navegar, pero una captura no demuestra cómo funciona una aplicación. Prioriza proyectos accesibles, repositorios legibles y decisiones concretas; no presentes una colección de tecnologías sin contexto."
    },
    {
      "title": "Qué aprender y qué preparar",
      "description": "Vas a convertir un proyecto en un caso que otra persona pueda revisar. Necesitas un repositorio que puedas compartir, una versión ejecutable y permiso para publicar el material. Si el proyecto usa datos privados, prepara una demostración con datos ficticios claramente identificados y sin credenciales."
    },
    {
      "title": "Selecciona de dos a cuatro proyectos",
      "description": "Como criterio editorial, dos a cuatro proyectos bien explicados permiten profundizar más que una lista extensa de ejercicios incompletos. Elige trabajos con responsabilidades distintas: formularios, consumo de API o una interfaz responsive. No es un requisito universal ni una garantía de contratación; conserva solo lo que puedas mantener y defender."
    },
    {
      "title": "Describe problema, alcance y stack",
      "description": "Para cada proyecto explica quién lo usaría, qué tarea resuelve y qué quedó fuera. Enumera el stack junto con su función: React para componentes, TypeScript para contratos internos, CSS para layout. Evita justificar una herramienta únicamente porque es popular. En un trabajo grupal distingue tu contribución del resultado del equipo."
    },
    {
      "title": "Ejemplo de caso técnico",
      "description": "En un catálogo de productos, presenta búsqueda, estados de red y detalle del producto. Explica por qué separaste el servicio HTTP, cómo manejaste respuestas vacías y qué prueba comprueba el filtrado. Añade una limitación real, como ausencia de autenticación. Una decisión con sus costes es más útil que afirmar que la arquitectura es perfecta."
    },
    {
      "title": "Repositorio, README y deploy",
      "description": "Incluye enlaces visibles al código y a la aplicación. El README debe explicar instalación, comandos, variables necesarias sin secretos, pruebas y limitaciones. Usa capturas legibles con contexto. Abre el deploy en una ventana sin sesión: revisa carga, rutas directas y navegación móvil. Si requiere acceso de demostración, publica solo credenciales creadas para ese entorno y sin privilegios sensibles."
    },
    {
      "title": "Historial de commits y Pull Requests",
      "description": "Un historial comprensible ayuda a seguir cómo evolucionó el proyecto. Si trabajaste con revisión, enlaza un PR que muestre una mejora y explica qué aprendiste. No fabriques conversaciones ni participantes. En un proyecto individual también puedes usar PR para revisar tu propio diff, identificándolo como tal."
    },
    {
      "title": "Qué evitar y buenas prácticas",
      "description": "No conviertas proyectos académicos en empleos falsos ni atribuyas trabajo ajeno como propio. Identifica tutoriales y contribuciones externas, y explica lo que añadiste. Evita enlaces rotos, pantallas que ocultan fallos y cifras de impacto sin evidencia. No publiques datos de clientes, tokens ni código que no tengas autorización para compartir."
    },
    {
      "title": "Qué practicar después",
      "description": "Pide a otra persona que abra el portfolio, entienda un proyecto y lo ejecute con el README. Registra dudas, corrige instrucciones y comprueba enlaces. Añade una breve explicación de una decisión técnica y ensaya contarla sin leer el código. Mantén una lista de mejoras pendientes en el repositorio."
    }
  ]
},
  {
    slug: "instalar-vscode",
    visibility: "public",
    programSlug: "desde-cero",
    title: "Instalar VS Code",
    description:
      "Configura tu editor principal para trabajar con archivos, terminal y extensiones.",
    category: "Primeros pasos",
    level: "todos",
    estimatedMinutes: 10,
    steps: [
      {
        title: "Descarga el editor",
        description:
          "Descarga Visual Studio Code desde la página oficial y sigue la configuración por defecto.",
        link: {
          label: "Descargar VS Code",
          url: "https://code.visualstudio.com/download",
        },
      },
      {
        title: "Abre una carpeta del proyecto",
        description:
          "Trabaja siempre desde una carpeta específica para que Git, archivos y extensiones queden organizados.",
      },
      {
        title: "Instala extensiones útiles",
        description:
          "Añade soporte para JavaScript, TypeScript, Markdown, Prettier y GitHub.",
      },
    ],
    resources: [
      { label: "VS Code", url: "https://code.visualstudio.com/" },
      {
        label: "Extensiones recomendadas",
        url: "https://code.visualstudio.com/docs/editor/extension-marketplace",
      },
    ],
  },
  {
    slug: "instalar-git",
    visibility: "public",
    programSlug: "frontend-react",
    title: "Instalar Git",
    description:
      "Prepárate para versionar tu código y trabajar con ramas y pull requests.",
    category: "Herramientas",
    level: "todos",
    estimatedMinutes: 12,
    steps: [
      {
        title: "Descarga Git",
        description:
          "Descarga Git para Windows desde la página oficial y acepta la configuración recomendada.",
        link: {
          label: "Descargar Git",
          url: "https://git-scm.com/downloads/win",
        },
      },
      {
        title: "Comprueba la instalación",
        description:
          "Abre la terminal y revisa que Git responda correctamente.",
        command: "git --version",
      },
      {
        title: "Configura tu nombre y correo",
        description:
          "Esto ayuda a dejar un historial claro de tus contribuciones.",
        command:
          'git config --global user.name "Tu nombre"\ngit config --global user.email "tu-email@example.com"',
      },
    ],
    resources: [
      { label: "Git", url: "https://git-scm.com/" },
      { label: "Documentación Git", url: "https://git-scm.com/doc" },
    ],
  },
  {
    slug: "instalar-node",
    visibility: "public",
    programSlug: "full-stack",
    title: "Instalar Node.js",
    description:
      "Necesario para ejecutar JavaScript, instalar paquetes y trabajar en proyectos reales.",
    category: "Herramientas",
    level: "todos",
    estimatedMinutes: 15,
    steps: [
      {
        title: "Instala la versión LTS actual",
        description:
          "Usa la versión LTS estable recomendada por la comunidad y por tus proyectos.",
        link: {
          label: "Descargar Node.js LTS",
          url: "https://nodejs.org/en/download",
        },
      },
      {
        title: "Verifica la instalación",
        description:
          "Comprueba que Node.js y npm estén disponibles en la terminal.",
        command: "node -v\nnpm -v",
      },
      {
        title: "Prueba un comando sencillo",
        description:
          "Esto confirma que tu entorno ya sirve para instalar dependencias.",
        command: "npm --version",
      },
    ],
    resources: [
      { label: "Node.js", url: "https://nodejs.org/" },
      { label: "npm", url: "https://www.npmjs.com/" },
    ],
  },
  {
    slug: "crear-github",
    visibility: "public",
    programSlug: "frontend-react",
    title: "Configurar GitHub",
    description:
      "Crea tu presencia profesional y comparte tus proyectos con claridad.",
    category: "GitHub",
    level: "todos",
    estimatedMinutes: 15,
    steps: [
      {
        title: "Crea tu cuenta",
        description:
          "Usa un nombre profesional y una foto acorde a tu perfil de desarrollo.",
      },
      {
        title: "Completa tu bio",
        description:
          "Incluye lo que estás aprendiendo y qué tipo de proyectos te interesan.",
      },
      {
        title: "Sube tu primer repositorio",
        description:
          "Empieza con un proyecto pequeño y documentado para dejar evidencia real de trabajo.",
      },
    ],
    resources: [
      { label: "GitHub", url: "https://github.com/" },
      {
        label: "Guía de perfil",
        url: "https://docs.github.com/es/account-and-profile",
      },
    ],
  },
  {
    slug: "configurar-git",
    visibility: "public",
    programSlug: "frontend-react",
    title: "Configurar Git",
    description:
      "Deja tu entorno listo para colaborar con ramas, commits y pull requests.",
    category: "GitHub",
    level: "todos",
    estimatedMinutes: 10,
    steps: [
      {
        title: "Verifica tu identidad",
        description:
          "Usa tu nombre y email real para que cada commit se entienda en contexto.",
        command: "git config --global --list",
      },
      {
        title: "Activa el editor recomendado",
        description:
          "Configura tu editor preferido para abrir mensajes de commit y resolver conflictos.",
        command: 'git config --global core.editor "code --wait"',
      },
      {
        title: "Comprueba el flujo básico",
        description:
          "Haz commit de pequeños cambios para acostumbrarte al ciclo real de trabajo.",
      },
    ],
  },
  {
    slug: "primer-repositorio",
    visibility: "public",
    programSlug: "frontend-react",
    title: "Primer repositorio",
    description:
      "Crea tu primera estructura de proyecto y deja un historial limpio.",
    category: "GitHub",
    level: "inicial",
    estimatedMinutes: 20,
    steps: [
      {
        title: "Inicializa el repositorio",
        description:
          "Crea una carpeta nueva para cada proyecto y entra en ella desde la terminal.",
        command: "mkdir mi-primer-repo\ncd mi-primer-repo\ngit init",
      },
      {
        title: "Crea archivos base",
        description:
          "Añade un README y un primer archivo con una pequeña estructura de trabajo.",
      },
      {
        title: "Haz tu primer commit",
        description:
          "Usa mensajes claros y comprensibles para documentar tu avance.",
        command: 'git add .\ngit commit -m "Primer commit"',
      },
    ],
  },
  {
    slug: "primer-pull-request",
    visibility: "public",
    programSlug: "frontend-react",
    title: "Crear Pull Request",
    description:
      "Aprende a revisar, comparar e integrar cambios con una propuesta clara.",
    category: "GitHub",
    level: "frontend",
    estimatedMinutes: 15,
    steps: [
      {
        title: "Crea una rama",
        description: "Separa una idea o corrección de la rama principal.",
        command: "git checkout -b feature/mi-cambio",
      },
      {
        title: "Haz push y abre PR",
        description:
          "Comparte tu trabajo en GitHub y explica el objetivo del cambio.",
      },
      {
        title: "Revisa y trabaja feedback",
        description:
          "El feedback es una parte del aprendizaje y del desarrollo profesional.",
      },
    ],
  },
  {
    slug: "instalar-postman",
    visibility: "public",
    programSlug: "full-stack",
    title: "Instalar Postman",
    description:
      "Usa una herramienta para probar APIs, entender endpoints y validar flujos reales.",
    category: "Herramientas",
    level: "frontend",
    estimatedMinutes: 10,
    steps: [
      {
        title: "Descarga Postman",
        description:
          "Descarga Postman e instálalo como cliente de prueba para peticiones HTTP.",
        link: {
          label: "Descargar Postman",
          url: "https://www.postman.com/downloads/",
        },
      },
      {
        title: "Prueba una API pública",
        description:
          "Haz una llamada GET a una API que devuelva JSON para validar la estructura.",
      },
      {
        title: "Organiza colecciones",
        description:
          "Agrupa pruebas por rutas, proyectos o funcionalidades para mantener orden.",
      },
    ],
    resources: [
      { label: "Postman", url: "https://www.postman.com/downloads/" },
    ],
  },
  {
    slug: "instalar-docker",
    visibility: "public",
    programSlug: "full-stack",
    title: "Instalar Docker",
    description:
      "Necesario en Full Stack para ejecutar servicios locales y reproducir entornos reales.",
    category: "Herramientas",
    level: "full-stack",
    estimatedMinutes: 20,
    steps: [
      {
        title: "Instala Docker Desktop",
        description:
          "Usa Docker Desktop en Windows para ejecutar contenedores de forma local.",
        link: {
          label: "Descargar Docker Desktop",
          url: "https://www.docker.com/products/docker-desktop/",
        },
      },
      {
        title: "Verifica la instalación",
        description: "Comprueba que el motor de Docker arranca correctamente.",
        command: "docker --version\ndocker compose version",
      },
      {
        title: "Prueba un contenedor sencillo",
        description:
          "Ejecuta una imagen pequeña para validar que todo funciona sin errores.",
        command: "docker run hello-world",
      },
    ],
    resources: [
      {
        label: "Docker Desktop",
        url: "https://www.docker.com/products/docker-desktop/",
      },
    ],
  },
];

export const guideBySlug = Object.fromEntries(
  guides.map((guide) => [guide.slug, guide]),
);
