import type { Program } from "../program-types";
import { sharedMethodology } from "./methodology";
const program: Omit<Program, "modality"> = {
  slug: "mentoria",
  number: "04",
  title: "Mentoría para desarrolladores",
  headline: "Tu código. Tus retos. Un plan para avanzar.",
  kind: "mentoring",
  level: "Junior → Mid-Level",
  levelFrom: "Junior",
  levelTo: "Crecimiento hacia Mid-Level",
  duration: "Según diagnóstico y alcance",
  description:
    "Trabaja en tus retos técnicos con acompañamiento directo y feedback sobre tu código.",
  longDescription:
    "Partimos de tu proyecto, tus dudas y tu momento profesional. Revisamos decisiones de código, arquitectura y debugging; construimos un plan de mejora que también puede incluir GitHub, CV técnico y entrevistas.",
  outcome:
    "Un diagnóstico técnico, mejoras aplicadas a tu proyecto y un plan de crecimiento.",
  technologies: [
    "React",
    "TypeScript",
    "Node.js",
    "GitHub",
    "Arquitectura",
    "Debugging",
  ],
  prerequisites: [
    "Tener experiencia escribiendo código.",
    "Traer un proyecto propio o un caso que quieras trabajar.",
    "Compartir solo código que puedas mostrar; podemos usar un ejemplo aislado sin información confidencial.",
  ],
  audience: [
    "Juniors que quieren elevar la calidad de su código.",
    "Developers bloqueados con arquitectura o debugging.",
    "Personas que buscan feedback sobre GitHub, CV técnico o entrevistas.",
  ],
  outcomes: [
    "Identificar prioridades y evitar refactors sin objetivo.",
    "Aplicar feedback de code review.",
    "Depurar un problema con un método reproducible.",
    "Explicar decisiones y presentar mejor tu trabajo.",
  ],
  curriculum: [
    {
      period: "Etapa 1",
      title: "Diagnóstico",
      description: "Acordamos el problema y el objetivo.",
      topics: [
        "Proyecto actual",
        "GitHub",
        "Retos técnicos",
        "Objetivos profesionales",
      ],
      deliverable: "Prioridades y alcance de trabajo.",
    },
    {
      period: "Etapa 2",
      title: "Revisión aplicada",
      description: "Trabajamos sobre un caso concreto.",
      topics: ["Code review", "Arquitectura", "Debugging", "Buenas prácticas"],
      deliverable: "Cambios propuestos y razonamiento técnico.",
    },
    {
      period: "Etapa 3",
      title: "Iteración y proyección",
      description: "Revisa el progreso y define tu siguiente paso.",
      topics: [
        "Feedback",
        "CV técnico",
        "Entrevistas",
        "Crecimiento Junior → Mid",
      ],
      deliverable: "Plan de mejora y evidencias de progreso.",
    },
  ],
  portfolioResults: [
    "Revisión de GitHub y documentación",
    "Ejemplo de mejora de código justificada",
    "Registro de decisiones y feedback",
    "Plan de acción técnico y profesional",
  ],
  repositoryName: "mi-proyecto-en-revision",
  nextSteps: ["entrevistas", "full-stack"],
  workflow: [
    "Diagnóstico",
    "Objetivo",
    "Revisión",
    "Práctica",
    "Feedback",
    "Plan de mejora",
  ],
  careerPreparation: [
    "Revisar tu CV técnico y la presentación de GitHub.",
    "Practicar la explicación de tu proyecto.",
    "Priorizar competencias para crecer de Junior a Mid-Level.",
  ],
  options: [
    {
      title: "Sesión puntual",
      description: "Un reto acotado, una revisión o una decisión técnica.",
    },
    {
      title: "Pack de sesiones",
      description:
        "Un objetivo que necesita práctica e iteraciones entre encuentros.",
    },
    {
      title: "Acompañamiento",
      description: "Un plan de crecimiento con alcance y frecuencia acordados.",
    },
  ],
  seoTitle: "Mentorías para desarrolladores | Code review y arquitectura",
  seoDescription:
    "Partimos de tu proyecto, tus dudas y tu momento profesional. Revisamos decisiones de código, arquitectura y debugging; construimos un plan de mejora que también puede incluir GitHub, CV técnico y entrevistas.",
  faq: [
    {
      question: "¿Necesito experiencia?",
      answer:
        "Tener experiencia escribiendo código. Traer un proyecto propio o un caso que quieras trabajar. Compartir solo código que puedas mostrar; podemos usar un ejemplo aislado sin información confidencial.",
    },
    {
      question: "¿Voy a construir proyectos?",
      answer:
        "Trabajaremos con casos y ejercicios aplicados. El entregable depende del diagnóstico y del alcance acordado; no implica construir una aplicación completa desde cero.",
    },
    {
      question: "¿Me ayudan a preparar entrevistas?",
      answer:
        "Revisar tu CV técnico y la presentación de GitHub. Practicar la explicación de tu proyecto. Priorizar competencias para crecer de Junior a Mid-Level.",
    },
  ],
  methodology: sharedMethodology,
  projects: [
    {
      id: "mentoring-case",
      title: "Evolución de tu proyecto actual",
      description:
        "Revisa un módulo, una integración o un fallo reproducible. Si no tienes un proyecto compartible, acordamos un caso de práctica.",
      preview: "api",
      skills: ["Code review", "Debugging", "Arquitectura", "Git"],
      deliverable:
        "Propuesta de mejora aplicada a un caso con explicación del antes y después.",
    },
  ],
};
export default program;
