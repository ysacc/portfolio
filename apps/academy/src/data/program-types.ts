export type ProgramModule = {
  title: string;
  period: string;
  description: string;
  topics: string[];
  deliverable: string;
};
export type ProgramProject = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  preview: "dashboard" | "api" | "app";
  deliverable: string;
};
export type FAQItem = { question: string; answer: string };
export type Program = {
  slug: string;
  number: string;
  title: string;
  shortTitle?: string;
  headline: string;
  kind: "course" | "mentoring" | "preparation";
  level: string;
  levelFrom: string;
  levelTo: string;
  duration: string;
  modality: string;
  description: string;
  longDescription: string;
  outcome: string;
  technologies: string[];
  prerequisites: string[];
  audience: string[];
  outcomes: string[];
  curriculum: ProgramModule[];
  projects: ProgramProject[];
  methodology: string[];
  portfolioResults: string[];
  repositoryName: string;
  nextSteps: string[];
  faq: FAQItem[];
  workflow: string[];
  careerPreparation: string[];
  options?: { title: string; description: string }[];
  seoTitle: string;
  seoDescription: string;
  featured?: boolean;
};
export function programPath(program: Pick<Program, "slug">): string {
  return program.slug === "mentoria"
    ? "/mentorias"
    : "/programas/" + program.slug;
}
