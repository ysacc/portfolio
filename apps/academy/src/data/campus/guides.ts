export type GuideStep = {
  title: string;
  description: string;
  command?: string;
};

export type ResourceLink = {
  label: string;
  url: string;
};

export type CampusGuide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  level: "inicial" | "frontend" | "full-stack" | "todos";
  estimatedMinutes?: number;
  steps: GuideStep[];
  resources?: ResourceLink[];
};

export const guides: CampusGuide[] = [
  {
    slug: "instalar-vscode",
    title: "Instalar VS Code",
    description: "Configura tu editor principal para trabajar con archivos, terminal y extensiones.",
    category: "Primeros pasos",
    level: "todos",
    estimatedMinutes: 10,
    steps: [
      {
        title: "Descarga el editor",
        description: "Instala Visual Studio Code desde la página oficial y sigue la configuración por defecto.",
      },
      {
        title: "Abre una carpeta del proyecto",
        description: "Trabaja siempre desde una carpeta específica para que Git, archivos y extensiones queden organizados.",
      },
      {
        title: "Instala extensiones útiles",
        description: "Añade soporte para JavaScript, TypeScript, Markdown, Prettier y GitHub.",
      },
    ],
    resources: [
      { label: "VS Code", url: "https://code.visualstudio.com/" },
      { label: "Extensiones recomendadas", url: "https://code.visualstudio.com/docs/editor/extension-marketplace" },
    ],
  },
  {
    slug: "instalar-git",
    title: "Instalar Git",
    description: "Prepárate para versionar tu código y trabajar con ramas y pull requests.",
    category: "Herramientas",
    level: "todos",
    estimatedMinutes: 12,
    steps: [
      {
        title: "Descarga Git",
        description: "Instala Git para Windows desde la página oficial y acepta la configuración recomendada.",
      },
      {
        title: "Comprueba la instalación",
        description: "Abre la terminal y revisa que Git responda correctamente.",
        command: "git --version",
      },
      {
        title: "Configura tu nombre y correo",
        description: "Esto ayuda a dejar un historial claro de tus contribuciones.",
        command: "git config --global user.name \"Tu nombre\"\ngit config --global user.email \"tu-email@example.com\"",
      },
    ],
    resources: [
      { label: "Git", url: "https://git-scm.com/" },
      { label: "Documentación Git", url: "https://git-scm.com/doc" },
    ],
  },
  {
    slug: "instalar-node",
    title: "Instalar Node.js",
    description: "Necesario para ejecutar JavaScript, instalar paquetes y trabajar en proyectos reales.",
    category: "Herramientas",
    level: "todos",
    estimatedMinutes: 15,
    steps: [
      {
        title: "Instala la versión LTS actual",
        description: "Usa la versión LTS estable recomendada por la comunidad y por tus proyectos.",
      },
      {
        title: "Verifica la instalación",
        description: "Comprueba que Node.js y npm estén disponibles en la terminal.",
        command: "node -v\nnpm -v",
      },
      {
        title: "Prueba un comando sencillo",
        description: "Esto confirma que tu entorno ya sirve para instalar dependencias.",
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
    title: "Configurar GitHub",
    description: "Crea tu presencia profesional y comparte tus proyectos con claridad.",
    category: "GitHub",
    level: "todos",
    estimatedMinutes: 15,
    steps: [
      {
        title: "Crea tu cuenta",
        description: "Usa un nombre profesional y una foto acorde a tu perfil de desarrollo.",
      },
      {
        title: "Completa tu bio",
        description: "Incluye lo que estás aprendiendo y qué tipo de proyectos te interesan.",
      },
      {
        title: "Sube tu primer repositorio",
        description: "Empieza con un proyecto pequeño y documentado para dejar evidencia real de trabajo.",
      },
    ],
    resources: [
      { label: "GitHub", url: "https://github.com/" },
      { label: "Guía de perfil", url: "https://docs.github.com/es/account-and-profile" },
    ],
  },
  {
    slug: "configurar-git",
    title: "Configurar Git",
    description: "Deja tu entorno listo para colaborar con ramas, commits y pull requests.",
    category: "GitHub",
    level: "todos",
    estimatedMinutes: 10,
    steps: [
      {
        title: "Verifica tu identidad",
        description: "Usa tu nombre y email real para que cada commit se entienda en contexto.",
        command: "git config --global --list",
      },
      {
        title: "Activa el editor recomendado",
        description: "Configura tu editor preferido para abrir mensajes de commit y resolver conflictos.",
        command: "git config --global core.editor \"code --wait\"",
      },
      {
        title: "Comprueba el flujo básico",
        description: "Haz commit de pequeños cambios para acostumbrarte al ciclo real de trabajo.",
      },
    ],
  },
  {
    slug: "primer-repositorio",
    title: "Primer repositorio",
    description: "Crea tu primera estructura de proyecto y deja un historial limpio.",
    category: "GitHub",
    level: "inicial",
    estimatedMinutes: 20,
    steps: [
      {
        title: "Inicializa el repositorio",
        description: "Crea una carpeta nueva para cada proyecto y entra en ella desde la terminal.",
        command: "mkdir mi-primer-repo\ncd mi-primer-repo\ngit init",
      },
      {
        title: "Crea archivos base",
        description: "Añade un README y un primer archivo con una pequeña estructura de trabajo.",
      },
      {
        title: "Haz tu primer commit",
        description: "Usa mensajes claros y comprensibles para documentar tu avance.",
        command: "git add .\ngit commit -m \"Primer commit\"",
      },
    ],
  },
  {
    slug: "primer-pull-request",
    title: "Crear Pull Request",
    description: "Aprende a revisar, comparar e integrar cambios con una propuesta clara.",
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
        description: "Comparte tu trabajo en GitHub y explica el objetivo del cambio.",
      },
      {
        title: "Revisa y trabaja feedback",
        description: "El feedback es una parte del aprendizaje y del desarrollo profesional.",
      },
    ],
  },
  {
    slug: "instalar-postman",
    title: "Instalar Postman",
    description: "Usa una herramienta para probar APIs, entender endpoints y validar flujos reales.",
    category: "Herramientas",
    level: "frontend",
    estimatedMinutes: 10,
    steps: [
      {
        title: "Descarga Postman",
        description: "Instálalo como cliente de prueba para peticiones HTTP.",
      },
      {
        title: "Prueba una API pública",
        description: "Haz una llamada GET a una API que devuelva JSON para validar la estructura.",
      },
      {
        title: "Organiza colecciones",
        description: "Agrupa pruebas por rutas, proyectos o funcionalidades para mantener orden.",
      },
    ],
    resources: [
      { label: "Postman", url: "https://www.postman.com/downloads/" },
    ],
  },
  {
    slug: "instalar-docker",
    title: "Instalar Docker",
    description: "Necesario en Full Stack para ejecutar servicios locales y reproducir entornos reales.",
    category: "Herramientas",
    level: "full-stack",
    estimatedMinutes: 20,
    steps: [
      {
        title: "Instala Docker Desktop",
        description: "Usa Docker Desktop en Windows para ejecutar contenedores de forma local.",
      },
      {
        title: "Verifica la instalación",
        description: "Comprueba que el motor de Docker arranca correctamente.",
        command: "docker --version\ndocker compose version",
      },
      {
        title: "Prueba un contenedor sencillo",
        description: "Ejecuta una imagen pequeña para validar que todo funciona sin errores.",
        command: "docker run hello-world",
      },
    ],
    resources: [
      { label: "Docker Desktop", url: "https://www.docker.com/products/docker-desktop/" },
    ],
  },
];

export const guideBySlug = Object.fromEntries(guides.map((guide) => [guide.slug, guide]));
