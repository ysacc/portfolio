import { site } from "./site";
import { generalFAQ } from "./faq";
import type { Program } from "./program-types";
import desdeCero from "./programs/desde-cero";
import frontendReact from "./programs/frontend-react";
import fullStack from "./programs/full-stack";
import mentoria from "./programs/mentoria";
import entrevistas from "./programs/entrevistas";
export type {
  Program,
  ProgramModule,
  ProgramProject,
  FAQItem,
} from "./program-types";
export { programPath } from "./program-types";
export const programs: Program[] = [
  desdeCero,
  frontendReact,
  fullStack,
  mentoria,
  entrevistas,
].map((p) => ({
  ...p,
  modality: site.modality,
  faq: [...p.faq, ...generalFAQ],
}));
export const weeks = programs
  .find((p) => p.slug === "frontend-react")!
  .curriculum.map((m) => [m.title, m.description]);
export const workflow = [
  "Ticket",
  "Branch",
  "Código",
  "Pull Request",
  "Code Review",
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
