import type { ProgramProject } from "./program-types";
export const reactProjects: ProgramProject[] = [
  {
    id: "dashboard",
    title: "Dashboard administrativo",
    preview: "dashboard",
    description:
      "Organiza información en un panel con tablas, filtros y estados. Una interfaz pensada para usarse en escritorio y móvil.",
    skills: [
      "Componentes",
      "Tablas y filtros",
      "Estado",
      "Responsive",
      "Organización de UI",
    ],
    deliverable: "Dashboard React con filtros y componentes reutilizables.",
  },
  {
    id: "api-app",
    title: "App conectada a una API",
    preview: "api",
    description:
      "Consulta datos y resuelve la experiencia completa: carga, resultados vacíos, errores y formularios.",
    skills: [
      "REST",
      "Fetching",
      "Loading y errors",
      "Formularios",
      "Manejo de estados",
    ],
    deliverable:
      "Aplicación con integración REST y estados de interfaz verificables.",
  },
  {
    id: "final-project",
    title: "Tu proyecto profesional",
    preview: "app",
    description:
      "Elige entre un CRM, SaaS, reservas, e-commerce, sistema administrativo o dashboard financiero. Acordaremos el alcance y las restricciones técnicas de frontend antes de construir.",
    skills: ["React", "TypeScript", "APIs", "Testing básico", "Deploy"],
    deliverable:
      "Aplicación integrada, desplegada y documentada. No incluye un backend propio dentro de la ruta frontend.",
  },
];
