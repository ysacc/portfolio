import type { Program } from "../program-types";
import { sharedMethodology } from "./methodology";
const program: Omit<Program, "modality"> = {
  slug: "desde-cero",
  number: "01",
  title: "Programación desde cero",
  headline: "Tu entrada al desarrollo web.",
  kind: "course",
  level: "Sin experiencia → Fundamentos",
  levelFrom: "Sin experiencia",
  levelTo: "Fundamentos web",
  duration: "Duración por confirmar",
  description:
    "Tu primera línea de código es el inicio. Construye bases sólidas y aprende a resolver problemas.",
  longDescription:
    "Una ruta introductoria para personas que nunca programaron o quieren ordenar bases débiles. Avanza desde la estructura de una página hasta la lógica de JavaScript y tu primer repositorio.",
  outcome:
    "Construir una web responsive, entender fundamentos y comenzar a trabajar con Git.",
  technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
  prerequisites: [
    "No necesitas experiencia programando.",
    "Manejo básico de archivos y navegación en tu computadora.",
    "Tiempo para practicar entre sesiones; dedicación por coordinar.",
  ],
  audience: [
    "Personas que nunca escribieron código.",
    "Quienes probaron tutoriales y necesitan una secuencia de aprendizaje.",
    "Personas con bases débiles que quieren avanzar a React.",
  ],
  outcomes: [
    "Estructurar páginas con HTML semántico.",
    "Construir layouts responsive con CSS.",
    "Resolver problemas con funciones, condiciones y arrays.",
    "Añadir interacciones con JavaScript.",
    "Versionar tu trabajo y documentarlo en GitHub.",
  ],
  curriculum: [
    {
      period: "Módulo 1",
      title: "Tu primera página",
      description: "Entiende cómo funciona una página web.",
      topics: [
        "Editor y navegador",
        "Archivos y carpetas",
        "HTML semántico",
        "Enlaces y formularios",
      ],
      deliverable: "Página personal con estructura semántica.",
    },
    {
      period: "Módulo 2",
      title: "Diseño responsive",
      description: "Adapta el contenido a distintos dispositivos.",
      topics: [
        "CSS",
        "Modelo de caja",
        "Flexbox y Grid",
        "Media queries",
        "Accesibilidad básica",
      ],
      deliverable: "Landing responsive.",
    },
    {
      period: "Módulo 3",
      title: "Pensar con JavaScript",
      description: "Descompón problemas en pasos pequeños.",
      topics: [
        "Variables",
        "Condiciones y bucles",
        "Funciones",
        "Arrays y objetos",
        "DOM y eventos",
      ],
      deliverable: "Lista de tareas interactiva.",
    },
    {
      period: "Módulo 4",
      title: "Publicar tu primer proyecto",
      description: "Guarda el progreso y comparte el resultado.",
      topics: [
        "Git y commits",
        "GitHub",
        "Debugging en navegador",
        "README",
        "Deploy estático",
      ],
      deliverable: "Web publicada y repositorio documentado.",
    },
  ],
  portfolioResults: [
    "Primera web responsive publicada",
    "Repositorio con commits y README",
    "Ejercicios de JavaScript explicados",
    "Base práctica para comenzar Frontend React",
  ],
  repositoryName: "mi-primera-web",
  brochureUrl: "/brochures/brochure-desde-cero.pdf",
  nextSteps: ["frontend-react"],
  careerPreparation: [
    "Explicar la estructura de tu primera web.",
    "Mostrar el repositorio y describir una interacción.",
    "Reconocer errores sencillos con las herramientas del navegador.",
  ],
  seoTitle: "Programación desde cero | HTML, CSS y JavaScript",
  workflow: [
    "Ticket",
    "Branch",
    "Código",
    "Pull Request",
    "Code Review",
    "Testing",
    "Deploy",
  ],
  seoDescription:
    "Una ruta introductoria para personas que nunca programaron o quieren ordenar bases débiles. Avanza desde la estructura de una página hasta la lógica de JavaScript y tu primer repositorio.",
  faq: [
    {
      question: "¿Necesito experiencia?",
      answer:
        "No necesitas experiencia programando. Manejo básico de archivos y navegación en tu computadora. Tiempo para practicar entre sesiones; dedicación por coordinar.",
    },
    {
      question: "¿Voy a construir proyectos?",
      answer:
        "Sí. El plan incluye los entregables y ejemplos de proyectos descritos en esta página. El alcance final se acuerda según los objetivos técnicos.",
    },
    {
      question: "¿Me ayudan a preparar entrevistas?",
      answer:
        "Explicar la estructura de tu primera web. Mostrar el repositorio y describir una interacción. Reconocer errores sencillos con las herramientas del navegador.",
    },
  ],
  methodology: sharedMethodology,
  projects: [
    {
      id: "first-web",
      title: "Tu primera web responsive",
      description:
        "Una página personal o de un proyecto con navegación, contenido semántico e interacciones sencillas.",
      preview: "app",
      skills: ["HTML", "CSS", "Responsive", "JavaScript"],
      deliverable:
        "Web que puedes abrir desde una URL y explicar desde su código.",
    },
  ],
};
export default program;
