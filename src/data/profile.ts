import { resumeData } from "./resume";

export interface Expertise {
  id: string;
  title: string;
  summary: string;
  description: string;
  skills: string[];
}

export const expertise: readonly Expertise[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    summary: "Interfaces escalables, arquitectura clara y componentes que se pueden mantener.",
    description: "Mi especialidad principal es el desarrollo Frontend con React, Next.js y TypeScript. Diseño arquitecturas SPA y microfrontends, sistemas de componentes e interfaces para procesos empresariales complejos. Trabajo con diseño y backend para cuidar la experiencia de uso y la calidad del código.",
    skills: [...resumeData.skills.Frontend, ...resumeData.skills["Arquitectura de interfaces"]],
  },
  {
    id: "full-stack",
    title: "Full Stack & Cloud",
    summary: "Conecto productos web con APIs, bases de datos y servicios en la nube.",
    description: "Complemento la ingeniería frontend con desarrollo Full Stack e integración de servicios empresariales. Desarrollo APIs con Node.js, Express, Python y FastAPI, trabajo con bases de datos y participo en soluciones serverless, despliegues y procesos CI/CD.",
    skills: resumeData.skills["Full Stack y cloud"],
  },
  {
    id: "ai",
    title: "Integración de IA",
    summary: "Integro servicios LLM existentes en interfaces y flujos de trabajo empresariales.",
    description: "Llevo capacidades de inteligencia artificial a aplicaciones web mediante OpenAI API, Claude API y AWS Bedrock. Mi experiencia incluye integrar una solución existente en la interfaz de un asistente para Principal y desarrollar búsquedas académicas multilingües con procesamiento LLM y automatización mediante prompts.",
    skills: resumeData.skills["IA aplicada"],
  },
];

export const about = {
  introduction: "Mi trabajo conecta la ingeniería de software con el diseño de interfaces: traduzco necesidades empresariales en productos claros, funcionales y mantenibles.",
  paragraphs: [
    "En más de siete años he desarrollado software para banca, salud, educación y retail. Mi especialidad es Frontend Engineering con React, Next.js y TypeScript: organizar interfaces complejas, diseñar componentes reutilizables y definir una arquitectura que permita evolucionar el producto.",
    "He trabajado en soluciones para Principal, Interbank, BBVA, Pacífico/SANNA, UTP y Supermercados Peruanos. Esa experiencia me ha enseñado a colaborar con diseño, negocio y backend, y a convertir los requisitos de cada equipo en decisiones de implementación concretas.",
    "Como líder técnico he definido estándares de desarrollo, acompañado decisiones de arquitectura y capacitado a desarrolladores. Me interesa que el equipo pueda comprender, mantener y ampliar lo que construimos.",
    "El desarrollo Full Stack y la integración de IA amplían esa perspectiva: conecto interfaces con servicios empresariales, cloud y modelos de lenguaje existentes cuando aportan valor al producto.",
  ],
};
