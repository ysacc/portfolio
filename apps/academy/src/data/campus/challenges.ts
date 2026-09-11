export type Challenge = {
  id: string;
  title: string;
  description: string;
  difficulty: "inicial" | "intermedio";
  technologies: string[];
  programSlugs: string[];
  externalUrl?: string;
  externalPlatform?: string;
};

export const challenges: Challenge[] = [
  {
    id: "landing-responsive",
    title: "Landing responsive",
    description: "Diseña una página simple con estructura semántica y adaptación móvil.",
    difficulty: "inicial",
    technologies: ["HTML", "CSS", "Responsive"],
    programSlugs: ["desde-cero", "frontend-react"],
    externalPlatform: "Frontend Mentor",
    externalUrl: "https://www.frontendmentor.io/",
  },
  {
    id: "todo-app",
    title: "Todo app con estado",
    description: "Crea una lista de tareas con filtros y estados de interacción.",
    difficulty: "intermedio",
    technologies: ["JavaScript", "React"],
    programSlugs: ["frontend-react"],
    externalPlatform: "freeCodeCamp",
    externalUrl: "https://www.freecodecamp.org/",
  },
  {
    id: "api-dashboard",
    title: "Dashboard con API",
    description: "Consume datos reales o mockeados y organiza estados de carga, error y éxito.",
    difficulty: "intermedio",
    technologies: ["React", "TypeScript", "API"],
    programSlugs: ["frontend-react", "full-stack"],
    externalPlatform: "HackerRank",
    externalUrl: "https://www.hackerrank.com/",
  },
  {
    id: "git-practice",
    title: "Flujo de Git y PR",
    description: "Practica ramas, commits, resolución de conflicto y pull requests en un caso simple.",
    difficulty: "inicial",
    technologies: ["Git", "GitHub"],
    programSlugs: ["desde-cero", "frontend-react", "full-stack"],
  },
];
