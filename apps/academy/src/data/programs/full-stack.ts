import type { Program } from "../program-types";
import { sharedMethodology } from "./methodology";
const program: Omit<Program, "modality"> = {
  slug: "full-stack",
  number: "03",
  title: "Full Stack JavaScript",
  headline: "Conecta la interfaz con todo lo que hay detrás.",
  kind: "course",
  level: "Intermedio",
  levelFrom: "Frontend con bases sólidas",
  levelTo: "Desarrollo end-to-end",
  duration: "Duración por confirmar",
  description:
    "Conecta todas las piezas: interfaces, lógica de negocio, APIs y bases de datos.",
  longDescription:
    "Recorre el camino de una petición desde React y Next.js hasta una API con Node.js/NestJS y PostgreSQL. Construye una aplicación funcional de punta a punta, con autenticación, pruebas y despliegue.",
  outcome:
    "Una aplicación end-to-end con interfaz, API, base de datos y autenticación.",
  technologies: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Docker",
    "REST APIs",
    "AWS",
    "Vercel",
  ],
  prerequisites: [
    "JavaScript, asincronía y consumo de APIs.",
    "Experiencia creando componentes y manejando estado en React.",
    "Uso básico de TypeScript y Git; idealmente haber completado Frontend React.",
  ],
  audience: [
    "Frontend developers que quieren construir su backend.",
    "Personas con proyectos React que necesitan datos persistentes.",
    "Developers que quieren entender y depurar el recorrido completo de una petición.",
  ],
  outcomes: [
    "Definir contratos entre frontend y backend.",
    "Implementar una API REST con validaciones y lógica de negocio.",
    "Modelar y consultar datos en PostgreSQL.",
    "Integrar autenticación y autorización.",
    "Verificar, contenerizar y desplegar una aplicación completa.",
  ],
  curriculum: [
    {
      period: "Módulo 1",
      title: "Frontend y contrato API",
      description: "Define el producto y sus límites.",
      topics: ["React / Next.js", "Rutas", "Formularios", "Contrato REST"],
      deliverable: "Interfaz y contrato de endpoints.",
    },
    {
      period: "Módulo 2",
      title: "Backend con Node.js y NestJS",
      description: "Separa responsabilidades en el servidor.",
      topics: [
        "Controllers y services",
        "Validación",
        "Errores HTTP",
        "Reglas de negocio",
      ],
      deliverable: "API REST con operaciones del proyecto.",
    },
    {
      period: "Módulo 3",
      title: "Datos y autenticación",
      description: "Persiste información y controla el acceso.",
      topics: [
        "PostgreSQL",
        "Relaciones",
        "Consultas",
        "Autenticación",
        "Autorización",
      ],
      deliverable: "Flujo autenticado con datos persistentes.",
    },
    {
      period: "Módulo 4",
      title: "Integración y calidad",
      description: "Verifica el recorrido completo.",
      topics: [
        "Integración frontend/API",
        "Debugging",
        "Pruebas",
        "Manejo de errores",
      ],
      deliverable: "Funcionalidad end-to-end verificada.",
    },
    {
      period: "Módulo 5",
      title: "Deploy y operación",
      description: "Prepara el proyecto para ejecutarlo fuera de tu equipo.",
      topics: [
        "Docker",
        "Variables de entorno",
        "AWS / Vercel",
        "Documentación",
      ],
      deliverable: "Aplicación desplegada con instrucciones de ejecución.",
    },
  ],
  portfolioResults: [
    "Código del frontend y del backend organizado",
    "Contrato y documentación de la API",
    "Modelo de datos y configuración de ejecución",
    "Demo desplegada y README",
    "Decisiones de autenticación, pruebas y arquitectura explicadas",
  ],
  repositoryName: "full-stack-workspace",
  nextSteps: ["mentoria", "entrevistas"],
  workflow: [
    "Frontend",
    "API",
    "Backend",
    "Database",
    "Authentication",
    "Deploy",
  ],
  careerPreparation: [
    "Explicar el recorrido de una petición.",
    "Justificar el modelo de datos y el control de acceso.",
    "Presentar decisiones de arquitectura y sus límites.",
  ],
  seoTitle: "Full Stack JavaScript | Next.js, NestJS y PostgreSQL",
  seoDescription:
    "Recorre el camino de una petición desde React y Next.js hasta una API con Node.js/NestJS y PostgreSQL. Construye una aplicación funcional de punta a punta, con autenticación, pruebas y despliegue.",
  faq: [
    {
      question: "¿Necesito experiencia?",
      answer:
        "JavaScript, asincronía y consumo de APIs. Experiencia creando componentes y manejando estado en React. Uso básico de TypeScript y Git; idealmente haber completado Frontend React.",
    },
    {
      question: "¿Voy a construir proyectos?",
      answer:
        "Sí. El plan incluye los entregables y ejemplos de proyectos descritos en esta página. El alcance final se acuerda según los objetivos técnicos.",
    },
    {
      question: "¿Me ayudan a preparar entrevistas?",
      answer:
        "Explicar el recorrido de una petición. Justificar el modelo de datos y el control de acceso. Presentar decisiones de arquitectura y sus límites.",
    },
  ],
  methodology: sharedMethodology,
  projects: [
    {
      id: "full-stack-crm",
      title: "CRM o sistema administrativo",
      description:
        "Construye una aplicación con gestión de registros, datos persistentes y acceso por usuario. Acordaremos un alcance viable; los servicios externos y sus posibles costes se revisan antes.",
      preview: "dashboard",
      skills: ["CRUD", "REST", "PostgreSQL", "Autenticación", "Docker"],
      deliverable:
        "Frontend y backend integrados con base de datos y documentación.",
    },
  ],
};
export default program;
