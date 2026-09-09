export type Program = {
  slug: string;
  number: string;
  title: string;
  level: string;
  technologies: string[];
  description: string;
  outcome: string;
  featured?: boolean;
};
export const programs: Program[] = [
  {
    slug: "desde-cero",
    number: "01",
    title: "Programación desde cero",
    level: "Inicial",
    technologies: ["HTML", "CSS", "JavaScript", "Git"],
    description:
      "Tu primera línea de código es el inicio. Construye bases sólidas y aprende a resolver problemas.",
    outcome: "Construir una web responsive y mantener su código en Git.",
  },
  {
    slug: "frontend-react",
    number: "02",
    title: "Frontend Developer con React",
    level: "Inicial → Intermedio",
    technologies: ["React", "TypeScript", "APIs"],
    description:
      "De los fundamentos a una aplicación real. Aprende a construir interfaces que llegan a producción.",
    outcome: "Un proyecto real desplegado y publicable en GitHub y en tu CV.",
    featured: true,
  },
  {
    slug: "full-stack",
    number: "03",
    title: "Full Stack JavaScript",
    level: "Intermedio",
    technologies: ["Next.js", "NestJS", "PostgreSQL"],
    description:
      "Conecta todas las piezas: interfaces, lógica de negocio, APIs y bases de datos.",
    outcome:
      "Desarrollar una aplicación de punta a punta con React, Node.js y persistencia de datos.",
  },
  {
    slug: "mentoria",
    number: "04",
    title: "Mentoría para desarrolladores",
    level: "Junior → Mid-Level",
    technologies: ["Code review", "Arquitectura", "Debugging"],
    description:
      "Trabaja en tus retos técnicos con acompañamiento directo y feedback sobre tu código.",
    outcome:
      "Definir un plan de mejora y aplicar buenas prácticas a tus proyectos.",
  },
  {
    slug: "entrevistas",
    number: "05",
    title: "Preparación para entrevistas técnicas",
    level: "Inicial → Intermedio",
    technologies: ["JavaScript", "React", "Git", "APIs"],
    description:
      "Practica ejercicios, explica tus decisiones y gana claridad con simulaciones de entrevistas.",
    outcome:
      "Identificar puntos de mejora con ejercicios técnicos y simulaciones.",
  },
];
export const weeks = [
  [
    "HTML, CSS y responsive",
    "Construye una interfaz que funcione en cualquier pantalla.",
  ],
  [
    "JavaScript moderno",
    "Trabaja con funciones, arrays, objetos y asincronía.",
  ],
  [
    "Git, GitHub y flujo profesional",
    "Crea ramas, commits y tu primer Pull Request.",
  ],
  [
    "React: componentes, props y estado",
    "Divide una interfaz en componentes reutilizables.",
  ],
  [
    "Hooks, formularios y validaciones",
    "Gestiona interacciones y valida los datos del usuario.",
  ],
  [
    "APIs REST y manejo de errores",
    "Conecta datos reales con estados de carga y error.",
  ],
  [
    "TypeScript y arquitectura",
    "Tipa tu código y organiza un proyecto mantenible.",
  ],
  [
    "Proyecto final, deploy y entrevista",
    "Publica tu aplicación y practica cómo explicar tus decisiones.",
  ],
];
export const workflow = [
  "Código",
  "Git",
  "Pull Request",
  "Code Review",
  "Jira",
  "APIs",
  "Testing",
  "Deploy",
];
export const pillars = [
  ["Aprender", "Entiende el porqué de cada decisión técnica."],
  ["Construir", "Lleva cada módulo a una práctica real en tu proyecto."],
  [
    "Recibir feedback",
    "Revisa tu código, pregunta y mejora con acompañamiento.",
  ],
  ["Publicar", "Haz deploy y convierte tu trabajo en parte de tu portfolio."],
];
export const audiences = [
  "Empiezas desde cero y necesitas una ruta clara.",
  "Eres junior y buscas tu primer trabajo.",
  "Sabes React y quieres trabajar en proyectos empresariales.",
  "Quieres dar el siguiente paso de Junior a Mid-Level.",
  "Necesitas preparar una entrevista técnica.",
];
