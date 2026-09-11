import type { Program } from "../program-types";
import { sharedMethodology } from "./methodology";
import { reactProjects } from "../projects";

const program: Omit<Program, "modality"> = {
  slug: "frontend-react",
  number: "02",
  title: "Frontend Developer con React",
  shortTitle: "Frontend con React",
  headline: "Aprende desarrollo web como se trabaja en proyectos reales.",
  kind: "course",
  level: "Inicial → Junior",
  levelFrom: "Inicial",
  levelTo: "Bases para un rol Junior",
  duration: "12 semanas · 3 meses",
  durationWeeks: 12,
  durationMonths: 3,
  phases: [
    "Mes 1 / Fundamentos profesionales",
    "Mes 2 / React y desarrollo de aplicaciones",
    "Mes 3 / Proyecto integrador",
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
    "Cómo pedir ayuda correctamente",
    "Prompting técnico",
    "Generación de código",
    "Revisión de código generado",
    "Debugging con IA",
    "Generación de tests",
    "Documentación y explicación de código",
    "Refactoring asistido",
    "Investigación técnica",
    "No copiar. Revisar, entender y mejorar.",
  ],
  scrumPractices: [
    "Product Backlog",
    "Sprint Backlog",
    "User Stories",
    "Acceptance Criteria",
    "Definition of Done",
    "Sprint",
    "Planning",
    "Daily",
    "Review",
    "Retrospective",
    "Refinement",
  ],
  capstone: true,
  teamProject: false,
  description:
    "De los fundamentos a construir y defender un proyecto profesional con mentoría.",
  longDescription:
    "Una formación frontend de 12 semanas diseñada para que aprendas, practiques y demuestres lo aprendido construyendo software real. Los dos primeros meses desarrollan fundamentos y React, y el tercer mes se centra en un proyecto integrador individual con mentoría, revisión de decisiones, Code Review y entrega profesional.",
  outcome:
    "Un proyecto frontend funcional, desplegado, documentado y explicado con claridad.",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "REST APIs",
    "Git",
    "GitHub",
    "Vercel",
  ],
  prerequisites: [
    "Manejo básico de una computadora, archivos y navegador.",
    "Conviene reconocer HTML, CSS y conceptos básicos de programación; empezamos con un repaso.",
    "Si nunca programaste, recomendamos la ruta Desde cero antes de este programa.",
    "Disponibilidad para practicar entre sesiones, con trabajo semanal y entregables.",
  ],
  audience: [
    "Personas con bases iniciales que quieren construir con React desde un enfoque profesional.",
    "Juniors que necesitan pasar de ejercicios a un proyecto completo y defendible.",
    "Autodidactas que buscan orden, revisión, feedback y experiencia real con Git y diseño técnico.",
  ],
  outcomes: [
    "Construir interfaces responsive y mantenibles con componentes reutilizables.",
    "Aplicar JavaScript moderno, manejo de errores, asincronía y consumo de APIs reales.",
    "Desarrollar con React usando props, state, eventos, hooks, formularios y validaciones.",
    "Tipar props, servicios y respuestas de APIs con TypeScript.",
    "Separar UI, hooks y servicios con responsabilidades claras.",
    "Trabajar con GitHub, ramas, Pull Requests, Code Review y testing básico.",
    "Participar en ceremonias Scrum y aplicar un flujo de trabajo profesional.",
    "Usar IA como copiloto sin reemplazar la comprensión del código entregado.",
    "Presentar, documentar y desplegar un proyecto con criterio técnico.",
  ],
  curriculum: [
    {
      period: "Mes 1 / Semana 1",
      title: "Fundamentos web profesionales",
      description:
        "Construyes la base semántica y visual de una interfaz profesional.",
      topics: [
        "HTML semántico",
        "Accesibilidad básica",
        "CSS",
        "Flexbox",
        "Grid",
        "Responsive",
        "DevTools",
      ],
      deliverable: "Landing responsive.",
    },
    {
      period: "Mes 1 / Semana 2",
      title: "JavaScript moderno I",
      description:
        "Entiendes los bloques del lenguaje y su uso real en la interfaz.",
      topics: [
        "Variables",
        "Tipos",
        "Funciones",
        "Arrays",
        "Objetos",
        "Destructuring",
        "Spread / rest",
        "Módulos",
      ],
      deliverable: "Lógica reutilizable con JavaScript moderno.",
    },
    {
      period: "Mes 1 / Semana 3",
      title: "JavaScript moderno II",
      description:
        "Aprendes a consumir datos y manejar flujos asíncronos con criterio.",
      topics: [
        "Asincronía",
        "Promises",
        "async / await",
        "fetch",
        "Manejo de errores",
        "JSON",
      ],
      deliverable: "Aplicación JavaScript consumiendo una API.",
    },
    {
      period: "Mes 1 / Semana 4",
      title: "Git + trabajo profesional",
      description:
        "Practicas el flujo real de un equipo de desarrollo con ramas, revisión y entrega.",
      topics: [
        "Git",
        "GitHub",
        "Branches",
        "Commits",
        "Pull Requests",
        "Merge",
        "Conflictos",
        "Code Review",
        "Conventional Commits",
        "Ticket → Branch → Código → PR → Review → Merge",
      ],
      deliverable:
        "Repositorio con historial, ramas y Pull Requests documentados.",
    },
    {
      period: "Mes 2 / Semana 5",
      title: "React Fundamentals",
      description:
        "Separas la UI en componentes y comienzas a controlar el estado.",
      topics: [
        "Componentes",
        "Props",
        "State",
        "Eventos",
        "Listas",
        "Render condicional",
        "Composición",
      ],
      deliverable: "Dashboard o interfaz React con componentes reutilizables.",
    },
    {
      period: "Mes 2 / Semana 6",
      title: "React aplicado",
      description:
        "Resuelves interacciones reales y reutilizas lógica con criterio.",
      topics: [
        "Hooks",
        "useEffect",
        "Formularios",
        "Validaciones",
        "Custom hooks",
        "Reutilización",
      ],
      deliverable: "Formulario validado con lógica reutilizable.",
    },
    {
      period: "Mes 2 / Semana 7",
      title: "APIs + arquitectura frontend",
      description:
        "Conectas la interfaz con servicios y defines una estructura clara.",
      topics: [
        "HTTP",
        "REST",
        "Loading / error / success",
        "Services",
        "Separación de responsabilidades",
        "Manejo de errores",
        "Autenticación conceptual",
      ],
      deliverable:
        "Aplicación con estados bien definidos y servicios separados.",
    },
    {
      period: "Mes 2 / Semana 8",
      title: "TypeScript + calidad",
      description:
        "Haces explícitos los contratos y mejoras la mantenibilidad de tu código.",
      topics: [
        "Tipos",
        "Interfaces",
        "Props tipadas",
        "APIs tipadas",
        "Generics básicos",
        "Clean Code",
        "Debugging",
        "Testing básico",
        "Refactor",
      ],
      deliverable: "Proyecto tipado y refactorizado con mejor calidad técnica.",
    },
    {
      period: "Mes 3 / Semana 9",
      title: "Asignación del proyecto integrador",
      description:
        "Recibes un proyecto realista desde un banco de casos y defines el alcance.",
      topics: [
        "Asignación",
        "Análisis del problema",
        "Backlog",
        "Diseño técnico",
        "Arquitectura inicial",
        "Planificación semanal",
      ],
      deliverable: "Backlog y diseño técnico del proyecto asignado.",
    },
    {
      period: "Mes 3 / Semana 10",
      title: "Desarrollo del proyecto I",
      description:
        "Construyes la base funcional del producto con revisión y iteración.",
      topics: [
        "Implementación incremental",
        "Componentes clave",
        "Estados de la aplicación",
        "Validaciones",
        "PRs",
        "Revisión técnica",
      ],
      deliverable: "Primera versión funcional del proyecto integrador.",
    },
    {
      period: "Mes 3 / Semana 11",
      title: "Desarrollo del proyecto II",
      description:
        "Refinas la experiencia, resuelves bugs y validas la calidad del entregable.",
      topics: [
        "Code Review",
        "Testing",
        "Debugging",
        "Manejo de errores",
        "Optimización",
        "Documentación",
      ],
      deliverable: "Versión casi final con flujo de trabajo profesional.",
    },
    {
      period: "Mes 3 / Semana 12",
      title: "Deploy, presentación y defensa",
      description:
        "Preparas la entrega final, la demostración y la explicación técnica.",
      topics: [
        "Deploy",
        "README",
        "Explicación técnica",
        "GitHub",
        "Presentación",
        "Defensa del proyecto",
      ],
      deliverable:
        "Proyecto desplegado, explicado y listo para presentar en entrevista.",
    },
  ],
  portfolioResults: [
    "Repositorio con ramas, commits y Pull Requests de trabajo real",
    "README con instalación, decisiones técnicas y alcance del proyecto",
    "Proyecto desplegado y funcional",
    "Historial de feedback y revisión de código",
    "Explicación técnica clara para entrevistas y portfolio",
  ],
  repositoryName: "frontend-capstone-project",
  brochureUrl: "/brochures/brochure-frontend-react.pdf",
  nextSteps: ["full-stack", "entrevistas", "mentoria"],
  careerPreparation: [
    "Explicar decisiones técnicas y sus alternativas",
    "Presentar un proyecto y recorrer su GitHub",
    "Resolver dudas de arquitectura, debugging y testing",
    "Responder preguntas de React y APIs",
    "Simular una entrevista con mayor confianza y criterio",
  ],
  featured: true,
  seoTitle: "Curso Frontend con React de 12 semanas | Ysacc Roncal Academy",
  seoDescription:
    "Aprende JavaScript, TypeScript, React, Git, APIs, Scrum e IA aplicada y desarrolla un proyecto integrador con mentoría.",
  workflow: [
    "Asignación",
    "Análisis",
    "Backlog",
    "Diseño técnico",
    "Desarrollo",
    "Pull Requests",
    "Code Review",
    "Testing",
    "Deploy",
    "Presentación",
  ],
  faq: [
    {
      question: "¿Necesito experiencia?",
      answer:
        "No necesitas experiencia profesional, pero sí una base inicial en programación y mucha disposición para practicar. Si aún tienes dudas, la ruta Desde cero te ayuda a preparar el punto de partida antes de este programa.",
    },
    {
      question: "¿Puedo usar inteligencia artificial durante el curso?",
      answer:
        "Sí. Aprenderás a utilizar IA como herramienta profesional. Todo código asistido deberá ser entendido, revisado y explicable, y nunca sustituirá tus fundamentos ni tu criterio técnico.",
    },
    {
      question: "¿Qué sucede durante el último mes de Frontend?",
      answer:
        "Se asignará un proyecto integrador individual para aplicar lo aprendido con acompañamiento, revisión de decisiones, Code Review y feedback técnico. El objetivo es simular un trabajo profesional sin quitarte la responsabilidad de resolverlo.",
    },
    {
      question: "¿El proyecto es individual?",
      answer:
        "Sí. El proyecto integrador de Frontend es individual. La finalidad es que puedas demostrar tu capacidad para analizar, desarrollar, revisar, desplegar y defender una solución completa.",
    },
    {
      question: "¿Aprenderé Scrum?",
      answer:
        "Sí. Se enseñarán las ceremonias y conceptos necesarios para desenvolverte dentro de un equipo de desarrollo: backlog, sprint, planning, daily, review y retrospective, siempre en un contexto práctico y accesible.",
    },
  ],
  methodology: sharedMethodology,
  projects: reactProjects,
};
export default program;
