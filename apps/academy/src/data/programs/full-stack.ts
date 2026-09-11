import type { Program } from "../program-types";
import { sharedMethodology } from "./methodology";

const program: Omit<Program, "modality"> = {
  slug: "full-stack",
  number: "03",
  title: "Full Stack JavaScript",
  headline:
    "Aprende a construir todo el sistema. Después aprende a construirlo con otros.",
  kind: "course",
  level: "Intermedio",
  levelFrom: "Frontend con bases sólidas",
  levelTo: "Desarrollo end-to-end",
  duration: "16 semanas · 4 meses",
  durationWeeks: 16,
  durationMonths: 4,
  phases: [
    "Mes 1 / Frontend avanzado / Next.js",
    "Mes 2 / Backend + APIs",
    "Mes 3 / Full Stack + arquitectura + proyecto individual",
    "Mes 4 / Proyecto profesional en equipo",
  ],
  professionalSkills: [
    "Git",
    "Scrum",
    "Code Review",
    "Debugging",
    "Testing",
    "IA",
    "Comunicación técnica",
    "Deploy",
  ],
  aiSkills: [
    "Prompting técnico",
    "Investigación de arquitectura",
    "Generación de código y revisión",
    "Depuración asistida",
    "Generación de tests",
    "Refactoring",
    "Documentación técnica",
    "Brainstorming de soluciones",
    "No copiar. Revisar, entender y mejorar.",
  ],
  scrumPractices: [
    "Product Backlog",
    "User Stories",
    "Acceptance Criteria",
    "Sprint Backlog",
    "Sprint Planning",
    "Daily",
    "Refinement",
    "Sprint Review",
    "Retrospective",
    "Definition of Done",
  ],
  capstone: true,
  teamProject: true,
  description:
    "Construye software end-to-end y trabaja en un proyecto grupal con Scrum.",
  longDescription:
    "Un programa Full Stack de 16 semanas que avanza desde React y Next.js hasta Node.js, NestJS, PostgreSQL, seguridad, infra, testing y despliegue. El recorrido combina trabajo individual durante el mes 3 y un proyecto final grupal donde aplicas Scrum de forma práctica con roles rotativos, gestión de tareas, Pull Requests, Code Review y demos de equipo.",
  outcome:
    "Una aplicación full stack funcionando con frontend, backend, base de datos, autenticación, documentación y despliegue.",
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Docker",
    "REST APIs",
    "GitHub",
    "Vercel",
  ],
  prerequisites: [
    "JavaScript, asincronía y consumo de APIs.",
    "Experiencia creando componentes y manejando estado en React.",
    "Uso básico de TypeScript y Git; idealmente haber completado Frontend React.",
  ],
  audience: [
    "Frontend developers que quieren ampliar su alcance a backend y datos.",
    "Personas con proyectos React que necesitan construir sistemas completos y persistentes.",
    "Developers que quieren entender, depurar y comunicar el recorrido completo de una aplicación.",
  ],
  outcomes: [
    "Construir interfaces con React, Next.js y TypeScript orientadas a producto.",
    "Implementar APIs con Node.js y NestJS, validaciones y manejo de errores.",
    "Modelar y consultar bases de datos con PostgreSQL y relaciones profesionales.",
    "Integrar autenticación, autorización, roles y variables de entorno.",
    "Aplicar testing, logging, debugging, arquitectura y Clean Code.",
    "Trabajar con Docker, CI/CD introductorios y despliegue funcional.",
    "Participar en Scrum con backlog, sprint planning, review y retrospective.",
    "Colaborar en equipos con GitHub, PRs, issues, review y documentación compartida.",
  ],
  curriculum: [
    {
      period: "Mes 1 / Semana 1",
      title: "React + Next.js avanzado",
      description:
        "Preparas la base del frontend productivo y la estructura de la aplicación.",
      topics: [
        "React",
        "Next.js",
        "TypeScript",
        "Rutas",
        "Componentes reutilizables",
        "Formularios",
      ],
      deliverable:
        "Frontend avanzado con arquitectura inicial y navegación clara.",
    },
    {
      period: "Mes 1 / Semana 2",
      title: "APIs y estado de la UI",
      description:
        "Conectas el frontend con datos reales y manejas estados del producto.",
      topics: [
        "HTTP",
        "REST",
        "fetch",
        "Loading/error/success",
        "Servicios",
        "Validaciones frontend",
      ],
      deliverable:
        "Interfaz conectada a una API con feedback de carga y error.",
    },
    {
      period: "Mes 1 / Semana 3",
      title: "Arquitectura y calidad frontend",
      description:
        "Organizas responsabilidades y mejoras el mantenimiento del código.",
      topics: [
        "Clean Code",
        "Separación de responsabilidades",
        "State management básico",
        "Debugging",
        "Testing frontend",
      ],
      deliverable: "Frontend más organizado, mantenible y verificable.",
    },
    {
      period: "Mes 1 / Semana 4",
      title: "MVP profesional",
      description:
        "Unificas interfaz y flujo para entregar un primer producto funcional.",
      topics: [
        "Integración UI/API",
        "Feedback de uso",
        "Documentación",
        "Preparación de demo",
        "Refactor",
      ],
      deliverable: "MVP funcional con documentación y demo interna.",
    },
    {
      period: "Mes 2 / Semana 5",
      title: "Backend con Node.js",
      description: "Definimos la capa de aplicación y su flujo lógico.",
      topics: [
        "Node.js",
        "Módulos",
        "Arquitectura de servidor",
        "Configuración",
        "Variables de entorno",
      ],
      deliverable: "Base del backend preparada para el negocio del proyecto.",
    },
    {
      period: "Mes 2 / Semana 6",
      title: "NestJS + APIs REST",
      description:
        "Conviertes la lógica en endpoints claros, seguros y verificables.",
      topics: [
        "NestJS",
        "Controllers",
        "Services",
        "Validaciones",
        "Errores HTTP",
        "DTOs",
      ],
      deliverable: "API REST con validaciones y estructura profesional.",
    },
    {
      period: "Mes 2 / Semana 7",
      title: "Datos y persistencia",
      description:
        "Modelas relaciones, consultas y decisiones de acceso a la información.",
      topics: [
        "PostgreSQL",
        "Relaciones",
        "Queries",
        "ORM",
        "Migraciones",
        "Consultas complejas",
      ],
      deliverable: "Modelo de datos con CRUD funcional y consultas útiles.",
    },
    {
      period: "Mes 2 / Semana 8",
      title: "Autenticación y seguridad",
      description:
        "Proteges recursos y defines el acceso según roles y responsabilidad.",
      topics: [
        "Authentication",
        "Authorization",
        "Roles",
        "JWT",
        "Variables de entorno",
        "Seguridad básica",
      ],
      deliverable:
        "Flujo autenticado con control de acceso y seguridad básica.",
    },
    {
      period: "Mes 3 / Semana 9",
      title: "Proyecto individual: frontend + backend",
      description: "Construyes una aplicación completa del extremo al extremo.",
      topics: [
        "Integración full stack",
        "CRUD",
        "Validaciones",
        "Manejo de errores",
        "Persistencia",
        "Documentación",
      ],
      deliverable: "Aplicación full stack con frontend y backend funcionales.",
    },
    {
      period: "Mes 3 / Semana 10",
      title: "Proyecto individual: UX y lógica de negocio",
      description:
        "Refinas el producto para que responda bien a casos reales de uso.",
      topics: [
        "Flujos de negocio",
        "Validación de reglas",
        "Estados del producto",
        "Depuración",
        "Feedback técnico",
      ],
      deliverable: "Versión más completa del proyecto individual.",
    },
    {
      period: "Mes 3 / Semana 11",
      title: "Proyecto individual: pruebas y calidad",
      description:
        "Validas el comportamiento y mejoras la confianza del entregable.",
      topics: [
        "Testing",
        "Logging",
        "Debugging",
        "Manejo de errores",
        "Refactor",
      ],
      deliverable: "Aplicación con verificación y calidad mejoradas.",
    },
    {
      period: "Mes 3 / Semana 12",
      title: "Proyecto individual: deploy",
      description:
        "Preparas la entrega final y explicas la decisión de arquitectura.",
      topics: [
        "Deploy",
        "README",
        "Documentación",
        "Defensa técnica",
        "Presentación",
      ],
      deliverable: "Proyecto individual desplegado y documentado.",
    },
    {
      period: "Mes 4 / Semana 13",
      title: "Scrum en equipo",
      description:
        "Aprendes a trabajar con backlog, historias, trazabilidad y objetivos compartidos.",
      topics: [
        "Sprint Planning",
        "Daily",
        "Refinement",
        "Review",
        "Retrospective",
        "Definition of Done",
      ],
      deliverable: "Plan de trabajo del equipo y enfoque de iteración.",
    },
    {
      period: "Mes 4 / Semana 14",
      title: "Trabajo en equipo: desarrollo y coordinación",
      description:
        "Integras módulos, tareas y revisiones de código con coordinación real.",
      topics: [
        "Branches",
        "Pull Requests",
        "Code Review",
        "Issues",
        "Backlog",
        "Integración",
      ],
      deliverable: "Avance del proyecto grupal con tareas coordinadas.",
    },
    {
      period: "Mes 4 / Semana 15",
      title: "Proyecto profesional en equipo",
      description:
        "Terminas la funcionalidad, resolves conflictos y preparas la demo final.",
      topics: [
        "Integración entre módulos",
        "Resolución de conflictos Git",
        "Demos",
        "Feedback",
        "Testing",
      ],
      deliverable: "Proyecto grupal casi listo para presentación final.",
    },
    {
      period: "Mes 4 / Semana 16",
      title: "Presentación final y retrospectiva",
      description:
        "Defiendes la solución, documentas el proceso y revisas lo aprendido.",
      topics: [
        "Presentación",
        "Arquitectura",
        "GitHub",
        "Documentación",
        "Retrospectiva",
        "Deploy final",
      ],
      deliverable:
        "Aplicación final desplegada con README, PRs y demo de equipo.",
    },
  ],
  portfolioResults: [
    "Aplicación completa con frontend, backend y base de datos",
    "Repositorio compartido con ramas, Pull Requests, issues y documentación",
    "Proyecto individual y proyecto grupal con evidencia de colaboración",
    "README, demo y presentación final con decisiones técnicas explicadas",
    "Deploy funcional y narrativa del proceso de desarrollo",
  ],
  repositoryName: "full-stack-workspace",
  nextSteps: ["mentoria", "entrevistas"],
  workflow: [
    "Frontend",
    "Backend",
    "Database",
    "Authentication",
    "APIs",
    "Testing",
    "Docker",
    "Deploy",
    "Sprint Planning",
    "Daily",
    "Refinement",
    "Review",
    "Retrospective",
  ],
  careerPreparation: [
    "Explicar el recorrido completo de una petición y su arquitectura.",
    "Justificar decisiones de base de datos, seguridad y despliegue.",
    "Participar en Scrum y documentación técnica con criterios claros.",
    "Presentar decisiones de implementación y trabajo en equipo.",
  ],
  seoTitle: "Programa Full Stack JavaScript | Ysacc Roncal Academy",
  seoDescription:
    "Aprende React, Next.js, Node.js, NestJS, PostgreSQL, APIs, Scrum e IA y participa en proyectos individuales y grupales.",
  faq: [
    {
      question: "¿Necesito experiencia?",
      answer:
        "Es recomendable haber trabajado con frontend, JavaScript, React y Git. El programa está pensado para ampliar esas bases y construir una aplicación completa en equipo.",
    },
    {
      question: "¿Puedo usar inteligencia artificial durante el curso?",
      answer:
        "Sí. Se usará como copiloto para investigar, proponer soluciones, generar código y documentar. Todo lo que se entregue debe entenderse, revisarse y explicarse antes de aceptarse.",
    },
    {
      question: "¿El proyecto es individual o grupal?",
      answer:
        "Durante el mes 3 cada alumno construye un proyecto individual y, en el mes 4, el programa incluye un proyecto grupal con Scrum y roles rotativos para simular un entorno profesional.",
    },
    {
      question: "¿Aprenderé Scrum?",
      answer:
        "Sí. Durante el proyecto grupal se aplican prácticas reales de Scrum: backlog, user stories, planning, daily, refinement, review, retrospective y definition of done.",
    },
    {
      question: "¿Qué herramientas se usan en el proyecto grupal?",
      answer:
        "Se simula un flujo profesional con GitHub, ramas, Pull Requests, Code Review, issues, backlog y despliegue. La herramienta exacta puede adaptarse según el proyecto y la operación del curso.",
    },
  ],
  methodology: sharedMethodology,
  projects: [
    {
      id: "full-stack-crm",
      title: "CRM o sistema administrativo",
      description:
        "Construye una aplicación con gestión de registros, datos persistentes, usuarios y una experiencia operativa clara. El alcance se acuerda según el nivel y el proyecto del equipo.",
      preview: "dashboard",
      skills: ["CRUD", "REST", "PostgreSQL", "Autenticación", "Docker"],
      deliverable:
        "Frontend y backend integrados con base de datos, documentación y deploy.",
    },
  ],
};
export default program;
