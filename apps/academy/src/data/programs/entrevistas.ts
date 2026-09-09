import type { Program } from "../program-types";
import { sharedMethodology } from "./methodology";
const program: Omit<Program, "modality"> = {
  slug: "entrevistas",
  number: "05",
  title: "Preparación para entrevistas técnicas",
  headline: "No solo resuelvas el ejercicio. Explica tu decisión.",
  kind: "preparation",
  level: "Inicial → Intermedio",
  levelFrom: "Bases de JavaScript y React",
  levelTo: "Preparación técnica",
  duration: "Según diagnóstico y objetivos",
  description:
    "Practica ejercicios, explica tus decisiones y gana claridad con simulaciones de entrevistas.",
  longDescription:
    "Identifica tus puntos débiles, practica preguntas y ejercicios de JavaScript, React, Git y APIs, y recibe feedback sobre cómo razonas. Las simulaciones se ajustan al tipo de rol que buscas.",
  outcome:
    "Un diagnóstico, práctica revisada y un plan de mejora para afrontar entrevistas técnicas.",
  technologies: ["JavaScript", "React", "Git", "REST APIs", "Debugging"],
  prerequisites: [
    "Bases de JavaScript y React.",
    "Haber construido al menos un proyecto que puedas explicar.",
    "Tener un objetivo de rol o vacantes de referencia para orientar la práctica.",
  ],
  audience: [
    "Juniors que preparan sus primeras entrevistas.",
    "Developers que saben construir pero les cuesta explicar sus decisiones.",
    "Personas que quieren practicar live coding antes de un proceso.",
  ],
  outcomes: [
    "Responder preguntas técnicas con ejemplos propios.",
    "Descomponer un ejercicio y comunicar el razonamiento.",
    "Encontrar y explicar errores.",
    "Presentar tu proyecto, sus decisiones y sus límites.",
    "Transformar una simulación en un plan de práctica.",
  ],
  curriculum: [
    {
      period: "Etapa 1",
      title: "Diagnóstico técnico",
      description: "Reconoce tu punto de partida.",
      topics: [
        "Objetivo de rol",
        "JavaScript",
        "React",
        "Revisión de proyecto",
      ],
      deliverable: "Mapa de fortalezas y puntos de mejora.",
    },
    {
      period: "Etapa 2",
      title: "Práctica guiada",
      description: "Resuelve y explica ejercicios.",
      topics: [
        "Preguntas técnicas",
        "Git y APIs",
        "Debugging",
        "Live coding conceptual",
      ],
      deliverable: "Ejercicios con solución razonada y feedback.",
    },
    {
      period: "Etapa 3",
      title: "Simulación",
      description: "Ensaya una conversación técnica.",
      topics: [
        "Explicación de proyectos",
        "Preguntas de seguimiento",
        "Ejercicio en vivo",
        "Comunicación",
      ],
      deliverable: "Simulación revisada y observaciones.",
    },
    {
      period: "Etapa 4",
      title: "Plan de mejora",
      description: "Convierte el feedback en acciones.",
      topics: [
        "Priorización",
        "Práctica autónoma",
        "GitHub",
        "Siguientes pasos",
      ],
      deliverable: "Plan de preparación personalizado.",
    },
  ],
  portfolioResults: [
    "Ejercicios técnicos organizados y explicados",
    "README del caso de práctica",
    "Guion para presentar un proyecto propio",
    "Plan de mejora a partir del feedback",
  ],
  repositoryName: "technical-interview-practice",
  nextSteps: ["mentoria", "frontend-react"],
  workflow: [
    "Diagnóstico",
    "Práctica",
    "Feedback",
    "Simulación",
    "Plan de mejora",
  ],
  careerPreparation: [
    "Explicar decisiones técnicas y sus alternativas",
    "Presentar un proyecto y recorrer su GitHub",
    "Practicar debugging y ejercicios técnicos",
    "Responder preguntas de React y APIs",
    "Simular una entrevista y convertir el feedback en acciones",
  ],
  seoTitle: "Preparación de entrevistas técnicas | JavaScript y React",
  seoDescription:
    "Identifica tus puntos débiles, practica preguntas y ejercicios de JavaScript, React, Git y APIs, y recibe feedback sobre cómo razonas. Las simulaciones se ajustan al tipo de rol que buscas.",
  faq: [
    {
      question: "¿Necesito experiencia?",
      answer:
        "Bases de JavaScript y React. Haber construido al menos un proyecto que puedas explicar. Tener un objetivo de rol o vacantes de referencia para orientar la práctica.",
    },
    {
      question: "¿Voy a construir proyectos?",
      answer:
        "Trabajaremos con casos y ejercicios aplicados. El entregable depende del diagnóstico y del alcance acordado; no implica construir una aplicación completa desde cero.",
    },
    {
      question: "¿Me ayudan a preparar entrevistas?",
      answer:
        "Explicar decisiones técnicas y sus alternativas Presentar un proyecto y recorrer su GitHub Practicar debugging y ejercicios técnicos Responder preguntas de React y APIs Simular una entrevista y convertir el feedback en acciones",
    },
  ],
  methodology: sharedMethodology,
  projects: [
    {
      id: "interview-practice",
      title: "Caso técnico y defensa de proyecto",
      description:
        "Un ejercicio de interfaz o integración API para practicar cómo lees el problema, propones una solución y explicas los compromisos.",
      preview: "api",
      skills: ["JavaScript", "React", "Live coding", "Comunicación"],
      deliverable:
        "Solución comentada, feedback de simulación y plan de mejora.",
    },
  ],
};
export default program;
