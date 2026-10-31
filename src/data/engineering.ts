export interface EngineeringCase {
  slug: string;
  title: string;
  summary: string;
  source: string;
  stack: string[];
  flow: { title: string; detail: string; relation?: string }[];
  sections: { title: string; text: string }[];
  pending: string;
}

export const engineeringCases: EngineeringCase[] = [
  {
    slug: "arquitectura-frontend-banca",
    title: "Arquitectura frontend para banca",
    summary: "SPA, microfrontends y componentes reutilizables en la experiencia bancaria con Interbank y BBVA.",
    source: "Entelgy SAC · Interbank y BBVA · 04/2024–12/2025; proyecto Interbank Erni.",
    stack: ["React", "Angular", "TypeScript", "REST", "CI/CD"],
    flow: [
      { title: "Aplicación SPA", detail: "Navegación y composición", relation: "Compone módulos" },
      { title: "Módulos frontend", detail: "React / Angular; límites conceptuales", relation: "Reutilizan patrones" },
      { title: "Componentes compartidos", detail: "Interfaz y contratos consistentes", relation: "Integración REST" },
      { title: "Servicios corporativos", detail: "APIs del dominio bancario" },
    ],
    sections: [
      { title: "Contexto y problema", text: "La experiencia en Entelgy incluye diseño de arquitecturas SPA y microfrontends para Interbank y BBVA. Erni documenta interfaces para gestión de inversiones e integración con servicios empresariales. El reto general es organizar interfaces complejas sin dificultar su evolución." },
      { title: "Objetivos técnicos", text: "Modularizar la interfaz, reutilizar componentes y mantener contratos de integración claros. Son objetivos de diseño derivados del trabajo documentado; no constituyen indicadores medidos." },
      { title: "Arquitectura de solución", text: "El esquema separa composición, módulos, componentes compartidos y APIs. Es una explicación conceptual de responsabilidades, sin reproducir infraestructura interna ni atribuir una composición concreta a cada banco." },
      { title: "Decisiones arquitectónicas y justificación", text: "La experiencia acredita SPA, microfrontends y definición de estándares técnicos. Como criterio general, una SPA simplifica la integración inicial; los microfrontends pueden permitir evolución por módulos, con costes de coordinación, dependencias y consistencia visual. La elección específica por producto está pendiente de validación." },
      { title: "Retos técnicos y cómo se abordaron", text: "La integración de APIs corporativas se acompañó de componentes reutilizables y colaboración con equipos bancarios. En Entelgy se documentan liderazgo de un equipo Scrum, definición de estándares y apoyo a decisiones de arquitectura y calidad." },
      { title: "Resultados e impacto", text: "El resultado documentado es el desarrollo de interfaces bancarias y componentes reutilizables, junto con integración de APIs. No se dispone de métricas confirmadas de rendimiento, adopción o reducción de tiempos." },
      { title: "Aprendizajes y posibles mejoras", text: "Propuesta de evolución, pendiente de validación: documentar contratos entre módulos, comprobar compatibilidad de componentes y evaluar si la autonomía de despliegue compensa la complejidad de los microfrontends." },
    ],
    pending: "Validar límites de módulos, decisiones por banco, estrategia de pruebas y despliegue. No se presenta el diagrama como arquitectura real de Interbank o BBVA.",
  },
  {
    slug: "arquitectura-backend-cloud-aws",
    title: "Arquitectura Backend y Cloud AWS",
    summary: "Integración de APIs y servicios cloud: experiencia documentada y una propuesta serverless ilustrativa.",
    source: "SafetyMind SAC (Node.js, API Gateway, DynamoDB y S3); Amaris / Principal (Lambda e integración de Bedrock); IPS Consulting (CI/CD).",
    stack: ["Node.js", "AWS Lambda", "API Gateway", "DynamoDB", "AWS S3", "CI/CD"],
    flow: [
      { title: "Cliente web", detail: "Solicitudes de la aplicación", relation: "HTTPS / API" },
      { title: "API Gateway", detail: "Entrada a servicios", relation: "Invocación propuesta" },
      { title: "AWS Lambda", detail: "Procesamiento serverless propuesto", relation: "Lectura / escritura" },
      { title: "DynamoDB", detail: "Persistencia de información" },
    ],
    sections: [
      { title: "Contexto y problema", text: "El portafolio documenta integración de servicios Node.js sobre AWS en SafetyMind y AWS Lambda en el stack de Principal. Son experiencias distintas: no existe evidencia de que todos estos servicios formen una única solución desplegada por Ysacc." },
      { title: "Objetivos técnicos", text: "Explicar cómo separar el contrato de API, el procesamiento y la persistencia. Seguridad, escalabilidad y observabilidad se presentan como criterios de una propuesta técnica; su implementación concreta no está documentada." },
      { title: "Arquitectura de solución", text: "El diagrama propone un flujo serverless API Gateway → Lambda → DynamoDB. Es ilustrativo y combina servicios presentes en distintas experiencias; no representa una implementación real confirmada. No se incluye SQS porque no existe respaldo en los proyectos disponibles." },
      { title: "Decisiones arquitectónicas y justificación", text: "En esta propuesta, Lambda permite procesar solicitudes sin administrar servidores, con límites de ejecución y posibles arranques en frío. DynamoDB exige diseñar las claves según los patrones de acceso. Son ventajas y limitaciones generales, no decisiones atribuidas a los clientes." },
      { title: "Retos técnicos y cómo se abordaron", text: "En Principal se documenta coordinación con backend para adaptar servicios e interfaces y resolución de incidencias de CSP, rutas y despliegues. En IPS Consulting se acredita participación en automatización de despliegues y pipelines CI/CD; no se atribuye ese pipeline a SafetyMind ni a Principal." },
      { title: "Resultados e impacto", text: "La evidencia respalda integración de servicios empresariales y de una solución de IA existente, además de participación en automatización de despliegues. No permite afirmar mejoras de costes, disponibilidad o latencia ni autoría de toda la arquitectura AWS." },
      { title: "Aprendizajes y posibles mejoras", text: "Propuesta pendiente de validación: aplicar permisos mínimos, validación de entradas, trazabilidad de solicitudes, alarmas y pruebas de carga; evaluar reintentos e idempotencia. Confirmar antes de describir estas prácticas como implementadas." },
    ],
    pending: "Confirmar responsabilidades backend/cloud, topología serverless, permisos, observabilidad y herramientas de CI/CD por proyecto. El flujo AWS es una propuesta, no un caso de despliegue acreditado.",
  },
  {
    slug: "monitoreo-tiempo-real",
    title: "Plataforma de monitoreo en tiempo real",
    summary: "Dashboards, notificaciones e integración de datos para operaciones en SafetyMind.",
    source: "SafetyMind SAC · contrato por proyecto / tiempo parcial · 05/2024–12/2024.",
    stack: ["React", "JavaScript", "Ionic", "Capacitor", "Node.js", "AWS"],
    flow: [
      { title: "Información de riesgos", detail: "Datos disponibles para operación", relation: "Ingreso de información" },
      { title: "Servicios backend", detail: "Servicios Node.js sobre AWS", relation: "Integración de datos" },
      { title: "Estado de interfaz", detail: "Organización conceptual de eventos", relation: "Presentación" },
      { title: "Panel operativo", detail: "Visualización y notificaciones" },
    ],
    sections: [
      { title: "Contexto y problema", text: "En SafetyMind se documenta desarrollo de aplicaciones web y móviles para monitoreo de riesgos, dashboards, notificaciones y visualización de datos. La necesidad operativa es presentar información útil para el seguimiento de eventos." },
      { title: "Objetivos técnicos", text: "Conectar frontend y backend y organizar la presentación de datos y notificaciones. La frecuencia de actualización, el volumen de eventos y los objetivos de latencia están pendientes de validación." },
      { title: "Arquitectura de solución", text: "El flujo conceptual muestra información de riesgos, servicios backend, estado de interfaz y panel operativo. No especifica transporte ni infraestructura interna. El título expresa el enfoque del caso; no acredita una garantía de tiempo real ni una latencia determinada." },
      { title: "Decisiones arquitectónicas y justificación", text: "React, Ionic y Capacitor están documentados en esta experiencia. Como criterio de diseño propuesto, separar datos de presentación facilita representar carga, errores y notificaciones. No se ha identificado una librería de estado ni evidencia para elegir entre polling, WebSockets o suscripciones en SafetyMind." },
      { title: "Retos técnicos y cómo se abordaron", text: "La experiencia acredita dashboards y notificaciones mediante integración de servicios Node.js sobre AWS. Quedan por validar las reglas de priorización, la deduplicación de eventos y el tratamiento de desconexiones; no se presentan como funcionalidades realizadas." },
      { title: "Resultados e impacto", text: "El resultado documentado son aplicaciones web y móviles de monitoreo con paneles y visualización de datos. No hay métricas confirmadas de tiempos de respuesta, usuarios o reducción de incidentes." },
      { title: "Aprendizajes y posibles mejoras", text: "Propuesta pendiente de validación: señalar datos desactualizados, distinguir alertas por prioridad y conservar contexto ante errores. Elegir la estrategia de actualización según los requisitos reales; la experiencia con WebSockets y onSnapshot en Oxiacore no se atribuye a SafetyMind." },
    ],
    pending: "Confirmar mecanismo de actualización, gestión de estado, reglas de notificación y resultados operativos antes de ampliar las afirmaciones del caso.",
  },
];
