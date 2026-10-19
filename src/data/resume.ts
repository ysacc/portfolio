export interface Experience { company: string; role: string; period: string; location?: string; engagement?: string; description: string; highlights?: string[]; tech?: string[]; }
export const resumeData = {
  "summary": "Desarrollador Frontend Senior con más de siete años de experiencia en software empresarial. Especializado en React, Next.js, TypeScript, arquitectura SPA y microfrontends, con experiencia en liderazgo técnico. Complemento el desarrollo frontend con Node.js, Python, FastAPI, AWS e integración de servicios LLM para banca, salud, educación y retail.",
  "experience": [
    {
      "company": "OXIACORE PROJECT CORP.",
      "role": "Full Stack Developer",
      "period": "09/03/2026 - 16/09/2026",
      "engagement": "Consultoría paralela",
      "description": "Desarrollo de aplicaciones web empresariales con React y Next.js, arquitectura de microfrontends, integración de microservicios con Node.js y NestJS, y funcionalidades en tiempo real mediante WebSockets y Cloud Firestore.",
      "highlights": [
        "Desarrollo de interfaces y componentes reutilizables con React y Next.js; implementación y mantenimiento de microfrontends.",
        "Desarrollo e integración de microservicios y APIs con Node.js y NestJS.",
        "Sincronización en tiempo real mediante WebSockets y listeners onSnapshot de Firestore.",
        "Integración de Firebase, Google Cloud Platform y Telegram API.",
        "Mantenimiento, optimización y resolución de incidencias; colaboración y control de versiones con Bitbucket."
      ],
      "tech": [
        "React", "Next.js", "Node.js", "NestJS", "Google Cloud Platform (GCP)",
        "Firebase", "Cloud Firestore", "WebSockets", "onSnapshot", "Telegram API",
        "Microservicios", "Microfrontends", "Bitbucket"
      ],
      "location": "Panamá"
    },
    {
      "company": "Amaris Consulting / Principal",
      "role": "Desarrollador Full Stack Senior",
      "period": "12/2025 - 07/2026",
      "description": "Desarrollo desde cero del frontend de un asistente comercial con IA para Principal.",
      "highlights": [
        "Arquitectura de interfaces, componentes reutilizables y formularios dinámicos con React, Next.js y TypeScript.",
        "Integración de una solución de IA existente en AWS Bedrock; coordinación con backend para adaptar servicios e interfaces.",
        "Implementación de diseños Figma e integración de APIs REST; resolución de incidencias de estilos, CSP, rutas y despliegues."
      ],
      "tech": [
        "React",
        "Next.js",
        "TypeScript",
        "AWS Bedrock (integración)",
        "AWS Lambda",
        "CloudFront",
        "REST",
        "Figma",
        "Jira"
      ]
    },
    {
      "company": "Inclusión Empresarial E.I.R.L.",
      "role": "Consultoría independiente: investigación científica con IA",
      "period": "07/2025 - 01/2026",
      "engagement": "Fuera del horario laboral y durante fines de semana",
      "description": "Desarrollo de una plataforma de búsqueda multilingüe de literatura científica para tesis y publicaciones académicas.",
      "highlights": [
        "Búsqueda en Google Académico y extracción de información mediante scraping en Python.",
        "Procesamiento asistido por LLM con OpenAI API y automatización mediante múltiples prompts.",
        "Construcción de servicios API con FastAPI para organizar las consultas y el procesamiento."
      ],
      "tech": [
        "Python",
        "FastAPI",
        "OpenAI API",
        "LLM",
        "Scraping académico"
      ]
    },
    {
      "company": "Entelgy SAC",
      "role": "Líder técnico / Arquitecto Frontend",
      "period": "04/2024 - 12/2025",
      "description": "Diseño de arquitecturas SPA y microfrontends para soluciones bancarias de Interbank y BBVA.",
      "highlights": [
        "Desarrollo de interfaces e integración de APIs corporativas.",
        "Liderazgo de un equipo Scrum, definición de estándares y apoyo a decisiones de arquitectura y calidad."
      ],
      "tech": [
        "Angular",
        "React",
        "TypeScript",
        "AWS",
        "REST",
        "CI/CD"
      ]
    },
    {
      "company": "SafetyMind SAC",
      "role": "Desarrollador Frontend Senior / Full Stack",
      "period": "05/2024 - 12/2024",
      "engagement": "Contrato por proyecto / tiempo parcial",
      "description": "Desarrollo de aplicaciones web y móviles para monitoreo de riesgos.",
      "highlights": [
        "Dashboards, notificaciones y visualización de datos; integración de servicios Node.js sobre AWS."
      ],
      "tech": [
        "React",
        "JavaScript",
        "Ionic",
        "Capacitor",
        "Node.js",
        "Python",
        "AWS S3",
        "DynamoDB",
        "API Gateway",
        "Java",
        "Spring Boot"
      ]
    },
    {
      "company": "CSTI SAC",
      "role": "Desarrollador Frontend Senior / Full Stack",
      "period": "12/2023 - 07/2024",
      "engagement": "Empleo principal",
      "description": "Desarrollo de aplicaciones internas para Laureate Education / UTP.",
      "highlights": [
        "Mejora de la reutilización de componentes y la mantenibilidad con React y TypeScript."
      ],
      "tech": [
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Python",
        "HubSpot",
        "Jira"
      ]
    },
    {
      "company": "OBI Consulting",
      "role": "Desarrollador Frontend Senior",
      "period": "01/2024 - 06/2024",
      "engagement": "Contrato por proyecto / tiempo parcial",
      "description": "Desarrollo de interfaces para una solución de gestión académica.",
      "tech": [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Pruebas unitarias",
        "Sonar",
        "Figma"
      ]
    },
    {
      "company": "Altimea SAC",
      "role": "Desarrollador Frontend Senior",
      "period": "12/2023 - 02/2024",
      "engagement": "Consultoría adicional / freelance",
      "description": "Construcción de la base frontend de un sistema de gestión académica para UTP.",
      "highlights": [
        "Capacitación y acompañamiento a desarrolladores junior."
      ],
      "tech": [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Azure",
        "Sonar",
        "Figma"
      ]
    },
    {
      "company": "IPS Consulting EIRL",
      "role": "Arquitecto de soluciones / Líder técnico Full Stack",
      "period": "05/2022 - 12/2023",
      "engagement": "Empleo principal",
      "description": "Diseño de soluciones web para Supermercados Peruanos.",
      "highlights": [
        "Desarrollo de aplicaciones React/Next.js e integración de microservicios Node.js y APIs REST.",
        "Participación en automatización de despliegues y pipelines CI/CD para producción."
      ],
      "tech": [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "REST",
        "Oracle",
        "MySQL",
        "GCP",
        "CI/CD"
      ]
    },
    {
      "company": "Beyond SAC",
      "role": "Desarrollador Frontend Senior",
      "period": "02/2022 - 02/2023",
      "engagement": "Consultoría adicional / freelance",
      "description": "Desarrollo de plataformas para Pacífico / SANNA.",
      "highlights": [
        "Construcción de componentes reutilizables con React, Next.js y TypeScript."
      ],
      "tech": [
        "React",
        "Next.js",
        "TypeScript",
        "GitLab",
        "Bitbucket",
        "Figma"
      ]
    },
    {
      "company": "FKSS SAC",
      "role": "Desarrollador Full Stack",
      "period": "01/2020 - 11/2022",
      "engagement": "Empleo principal",
      "description": "Desarrollo y mantenimiento del sitio web, funcionalidades conectadas a MySQL y CRM.",
      "highlights": [
        "Automatización de procesos internos mediante scripts Python."
      ],
      "tech": [
        "React",
        "JavaScript",
        "Node.js",
        "Express",
        "MySQL",
        "WordPress",
        "HTML",
        "CSS",
        "Python"
      ]
    }
  ],
  "skills": {
    "Frontend": [
      "React", "Next.js", "TypeScript", "JavaScript", "Angular", "Tailwind CSS",
      "SPA", "Microfrontends", "Componentes reutilizables", "Design Systems",
      "React Native", "Vue", "HTML5", "CSS3", "Figma", "Diseño adaptable"
    ],
    "Full Stack": [
      "Node.js", "NestJS", "Express", "Python", "FastAPI", "APIs REST",
      "Microservicios", "WebSockets", "Bases de datos", "CI/CD"
    ],
    "Cloud y servicios": [
      "AWS", "Google Cloud Platform (GCP)", "Firebase", "Cloud Firestore",
      "DynamoDB", "S3", "Lambda", "API Gateway", "CloudFront"
    ],
    "IA aplicada": [
      "AWS Bedrock (integración)", "OpenAI API", "Claude API", "LLM",
      "Automatización mediante prompts", "Web scraping"
    ]
  },
  "education": [
    {
      "degree": "Computación e Informática, formación técnica",
      "institution": "Instituto InterAmericano",
      "period": "2017 - 2019"
    },
    {
      "degree": "Estudios de Ingeniería de Sistemas",
      "institution": "Universidad Peruana de Ciencias Aplicadas (UPC)",
      "period": "2012 - 2015"
    }
  ],
  "languages": [
    {
      "name": "Español",
      "level": "Nativo"
    },
    {
      "name": "Inglés",
      "level": "B1 / Intermedio"
    },
    {
      "name": "Alemán",
      "level": "A1 / Básico"
    }
  ]
} satisfies {summary: string; experience: Experience[]; skills: Record<string,string[]>; education: {degree: string; institution: string; period: string}[]; languages: {name: string; level: string}[]};
