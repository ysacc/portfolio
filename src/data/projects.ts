export interface Project {
    sector?: string;
    slug: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    stack: string[];
    links: {
        github?: string;
        live?: string;
    };
    highlights: string[];
    role: string;
}

export const projectsData: Project[] = [
  {
    "slug": "principal-ai-assistant",
    "title": "Asistente inteligente para Principal",
    "sector": "Servicios financieros · Amaris Consulting",
    "shortDescription": "Una interfaz empresarial que ayuda a agentes a revisar información de clientes y conocer servicios potencialmente adecuados.",
    "description": "Desarrollé desde cero el frontend de un asistente comercial e integré una solución de IA existente basada en AWS Bedrock. Coordiné con backend los ajustes de servicios e interfaces. El caso muestra un diagrama conceptual propio, sin datos ni capturas del cliente; la propiedad intelectual pertenece a sus titulares.",
    "image": "/diagrams/principal-concept.svg",
    "stack": [
      "React",
      "Next.js",
      "TypeScript",
      "AWS Bedrock"
    ],
    "links": {},
    "role": "Desarrollo frontend e integración de IA",
    "highlights": [
      "Arquitectura de la interfaz, componentes reutilizables y flujos de interacción.",
      "Adaptación a requisitos empresariales y coordinación de ajustes con backend.",
      "Integración del servicio existente; no desarrollé ni entrené el modelo LLM."
    ]
  },
  {
    "slug": "scientific-research-ai",
    "title": "Plataforma de investigación científica con IA",
    "sector": "Investigación académica · Inclusión Empresarial",
    "shortDescription": "Automatización de la búsqueda multilingüe de literatura científica para tesis y publicaciones.",
    "description": "Consultoría independiente para Inclusión Empresarial E.I.R.L., de julio de 2025 a enero de 2026, fuera del horario laboral y durante fines de semana. Desarrollé búsquedas en Google Académico, extracción mediante scraping y procesamiento asistido por LLM con múltiples prompts. Se muestra únicamente una ilustración conceptual sin datos privados.",
    "image": "/diagrams/research-concept.svg",
    "stack": [
      "Python",
      "FastAPI",
      "OpenAI API"
    ],
    "links": {},
    "role": "Desarrollo Full Stack · Consultoría independiente",
    "highlights": [
      "Construcción de servicios backend con Python y FastAPI.",
      "Integración de OpenAI API para procesamiento asistido por LLM.",
      "Automatización de búsquedas académicas multilingües y extracción de información."
    ]
  },
  {
    "slug": "interbank-erni",
    "title": "Interbank Erni",
    "shortDescription": "Plataforma de gestión de inversiones para clientes de Interbank.",
    "description": "Desarrollo de interfaces para una plataforma de fondos de inversión, con foco en la experiencia de usuario y la integración de servicios empresariales. Parte de mi experiencia bancaria incluye arquitectura SPA y microfrontends para Interbank y BBVA.",
    "image": "/projects/erni.png",
    "stack": [
      "React",
      "Angular",
      "Flutter",
      "TailwindCSS",
      "Braze",
      "TypeScript",
      "GTM",
      "Hotjar"
    ],
    "links": {
      "live": "https://erni.interfondos.com.pe/"
    },
    "highlights": [
      "Desarrollo de interfaces e integración de APIs corporativas.",
      "Construcción de componentes reutilizables y colaboración con equipos bancarios."
    ],
    "role": "Ingeniería frontend",
    "sector": "Banca e inversiones"
  },
  {
    "slug": "chambita",
    "title": "Chambita",
    "shortDescription": "Sitio web de servicios de empleo.",
    "description": "Plataforma de contratación con filtros y seguimiento de postulaciones, desarrollada con Next.js, React y Styled Components.",
    "image": "/projects/chambita.jpg",
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Styled Components",
      "TailwindCSS",
      "Node.js"
    ],
    "links": {
      "live": "https://chambita-jet.vercel.app/"
    },
    "highlights": [
      "Optimización SEO.",
      "Diseño adaptable con prioridad en dispositivos móviles."
    ],
    "role": "Desarrollo frontend",
    "sector": "Empleo"
  },
  {
    "slug": "silbia-utp",
    "title": "Sistema Silbia UTP",
    "shortDescription": "Gestión interna de sílabos y contenido académico para UTP.",
    "description": "Plataforma administrativa para organizar contenido académico y procesos internos de UTP, desarrollada con Next.js, React e integración de servicios empresariales.",
    "image": "/projects/Silvia.jpg",
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Azure DevOps",
      "AWS",
      "Docker",
      "SonarQube"
    ],
    "links": {},
    "highlights": [
      "Integración de microservicios.",
      "Interfaces reutilizables para gestión académica."
    ],
    "role": "Desarrollo frontend",
    "sector": "Educación"
  },
  {
    "slug": "erp-spsa",
    "title": "ERP de Supermercados Peruanos",
    "shortDescription": "Sistema de gestión empresarial para Supermercados Peruanos.",
    "description": "Desarrollo de soluciones web para el grupo Intercorp con aplicaciones React, servicios Node.js y bases de datos MySQL, en un entorno GCP.",
    "image": "/projects/ERP1.jpg",
    "stack": [
      "React",
      "Node.js",
      "MySQL",
      "Oracle",
      "GCP",
      "CI/CD",
      "Docker"
    ],
    "links": {},
    "highlights": [
      "Desarrollo de interfaces empresariales.",
      "Integración de servicios backend y APIs REST."
    ],
    "role": "Desarrollo Full Stack",
    "sector": "Retail"
  },
  {
    "slug": "sanna-scheduling",
    "title": "Agendamiento de citas SANNA",
    "shortDescription": "Interfaz para reservar citas médicas en SANNA.",
    "description": "Sistema de agendamiento médico desarrollado desde cero con Next.js, React y Styled Components para organizar el proceso de reserva mediante formularios de varios pasos.",
    "image": "/projects/sanna.jpg",
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Styled Components",
      "Context API",
      "Unit Testing"
    ],
    "links": {
      "live": "https://web-sanna.vercel.app/"
    },
    "highlights": [
      "Trabajo en accesibilidad de interfaces.",
      "Gestión del estado de formularios de varios pasos."
    ],
    "role": "Desarrollo frontend",
    "sector": "Salud"
  },
  {
    "slug": "cumpa-peru",
    "title": "Cumpa Perú",
    "shortDescription": "Plataforma de comercio electrónico para Cumpa Perú.",
    "description": "Tienda desarrollada en Shopify con WordPress y Elementor, integraciones de Google Analytics y MercadoPago.",
    "image": "/projects/cumpa.jpg",
    "stack": [
      "Shopify",
      "WordPress",
      "Elementor",
      "Google Analytics",
      "MercadoPago"
    ],
    "links": {
      "live": "https://cumpaperu.com/"
    },
    "highlights": [
      "Integración de MercadoPago.",
      "Conexión entre Shopify y WordPress."
    ],
    "role": "Liderazgo de desarrollo",
    "sector": "Comercio electrónico"
  },
  {
    "slug": "bubba-bags",
    "title": "Bubba Bags",
    "shortDescription": "Comercio electrónico de Bubba Bags en Perú.",
    "description": "Tienda desarrollada con WooCommerce, WordPress y Elementor, con mantenimiento y actualización de funcionalidades.",
    "image": "/projects/bubba.jpg",
    "stack": [
      "WooCommerce",
      "WordPress",
      "Elementor",
      "PHP",
      "MySQL"
    ],
    "links": {
      "live": "https://bubbabags.com.pe/"
    },
    "highlights": [
      "Mantenimiento de funcionalidades de compra.",
      "Optimización para dispositivos móviles."
    ],
    "role": "Mantenimiento de la plataforma",
    "sector": "Comercio electrónico"
  },
  {
    "slug": "valhalla",
    "title": "Valhalla",
    "shortDescription": "Aplicación para monitorear la contaminación del aire.",
    "description": "Aplicación desarrollada desde cero con React y Styled Components. Visualización de datos con Chart.js y MUI, integración de APIs backend y despliegue en AWS S3.",
    "image": "/projects/valhalla.jpg",
    "stack": [
      "React",
      "AWS S3",
      "Python (Backend)",
      "Node.js",
      "Chart.js",
      "MUI",
      "PostgreSQL"
    ],
    "links": {},
    "highlights": [
      "Visualización de datos en tiempo real.",
      "Despliegue en AWS."
    ],
    "role": "Desarrollo frontend",
    "sector": "Monitoreo ambiental"
  },
  {
    "slug": "rick-and-morty-wiki",
    "title": "Rick and Morty Wiki",
    "shortDescription": "Explorador de personajes de Rick and Morty.",
    "description": "Aplicación personal con filtros por nombre y estado de personajes, desarrollada con React, Redux, Express, Node.js, PostgreSQL y CSS.",
    "image": "/projects/rickandmorty.jpg",
    "stack": [
      "React",
      "Redux",
      "Express",
      "Node.js",
      "PostgreSQL",
      "CSS3"
    ],
    "links": {
      "live": "https://rick-and-morty-iota-cyan.vercel.app/",
      "github": "https://github.com/ysacc/rick-and-morty"
    },
    "highlights": [
      "Filtrado de personajes.",
      "Gestión del estado con Redux."
    ],
    "role": "Proyecto personal",
    "sector": "Proyecto personal"
  },
  {
    "slug": "redflix",
    "title": "RedFlix",
    "shortDescription": "Catálogo de películas inspirado en una plataforma de streaming.",
    "description": "Proyecto de práctica desarrollado desde cero con React, HTML y CSS para explorar interfaces de catálogos audiovisuales.",
    "image": "/projects/RedFlix.jpg",
    "stack": [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Firebase"
    ],
    "links": {
      "live": "https://redflix-two.vercel.app/",
      "github": "https://github.com/ysacc/RedFlix"
    },
    "highlights": [
      "Interfaz adaptable.",
      "Listado dinámico de películas."
    ],
    "role": "Proyecto personal",
    "sector": "Proyecto personal"
  },
  {
    "slug": "web-model",
    "title": "Web-Model",
    "shortDescription": "Página de práctica de diseño y desarrollo de interfaces.",
    "description": "Página personal desarrollada con React, HTML y CSS como práctica de interfaces modernas.",
    "image": "/projects/WebModel.jpg",
    "stack": [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Framer Motion"
    ],
    "links": {
      "live": "https://web-model.vercel.app/",
      "github": "https://github.com/ysacc/WebModel"
    },
    "highlights": [
      "Práctica de animaciones CSS.",
      "Diseño con prioridad en dispositivos móviles."
    ],
    "role": "Proyecto personal",
    "sector": "Proyecto personal"
  }
];
