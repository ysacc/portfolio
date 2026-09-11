export type ProjectTemplate = {
  id: string;
  title: string;
  description: string;
  allowedPrograms: ("frontend" | "full-stack")[];
  difficulty: "junior" | "junior-plus";
  coreRequirements: string[];
  optionalChallenges?: string[];
};

export const projectBank: ProjectTemplate[] = [
  {
    id: "mini-crm",
    title: "Mini CRM",
    description:
      "Un sistema para gestionar clientes, seguimientos y oportunidades con flujo de trabajo básico y una interfaz clara.",
    allowedPrograms: ["frontend", "full-stack"],
    difficulty: "junior",
    coreRequirements: [
      "Listado de clientes",
      "Detalle de cliente",
      "Creación y edición",
      "Validaciones básicas",
    ],
    optionalChallenges: ["Dashboard de rendimiento", "Búsqueda y filtros"],
  },
  {
    id: "ticket-system",
    title: "Sistema de tickets o incidencias",
    description:
      "Permite registrar incidencias, priorizar tareas y visualizar avances con una experiencia operativa útil.",
    allowedPrograms: ["frontend", "full-stack"],
    difficulty: "junior",
    coreRequirements: [
      "Crear tickets",
      "Cambiar estados",
      "Filtrar por prioridad",
      "Historial de cambios",
    ],
    optionalChallenges: ["Autenticación por rol", "Asignación de responsables"],
  },
  {
    id: "reservation-system",
    title: "Sistema de reservas",
    description:
      "Gestión de disponibilidad, horarios y confirmación en una interfaz sencilla y funcional.",
    allowedPrograms: ["frontend", "full-stack"],
    difficulty: "junior-plus",
    coreRequirements: [
      "Calendario de disponibilidad",
      "Reserva con validación",
      "Listado y detalle",
      "Estados de reserva",
    ],
    optionalChallenges: ["Confirmación por email", "Estadísticas de uso"],
  },
  {
    id: "financial-dashboard",
    title: "Dashboard financiero",
    description:
      "Visualiza métricas de negocio, movimientos y tendencias con foco en claridad y análisis.",
    allowedPrograms: ["frontend", "full-stack"],
    difficulty: "junior-plus",
    coreRequirements: [
      "Tarjetas de métricas",
      "Gráficos o tablas",
      "Filtros por periodo",
      "Paginación o agrupación",
    ],
    optionalChallenges: ["Exportación de datos", "Comparativa mensual"],
  },
  {
    id: "inventory-management",
    title: "Sistema de inventario",
    description:
      "Administra productos, stock, movimientos y alertas con un flujo de operación lógico.",
    allowedPrograms: ["frontend", "full-stack"],
    difficulty: "junior",
    coreRequirements: [
      "Productos con stock",
      "Altas y bajas",
      "Movimientos",
      "Alertas de stock",
    ],
    optionalChallenges: ["Búsqueda por categoría", "Reportes básicos"],
  },
  {
    id: "student-management",
    title: "Gestión de estudiantes",
    description:
      "Sistema académico para administrar estudiantes, cursos, estado y seguimiento de progresos.",
    allowedPrograms: ["frontend", "full-stack"],
    difficulty: "junior",
    coreRequirements: [
      "Listado de estudiantes",
      "Estados académicos",
      "Cursos y seguimiento",
      "Información resumida",
    ],
    optionalChallenges: ["Filtros por grupo", "Indicadores de progreso"],
  },
  {
    id: "project-manager",
    title: "Gestión de proyectos",
    description:
      "Centraliza tareas, plazos, estados y responsables para una actividad con múltiples dependencias.",
    allowedPrograms: ["frontend", "full-stack"],
    difficulty: "junior-plus",
    coreRequirements: [
      "Backlog y tareas",
      "Estados de proyecto",
      "Asignación de responsables",
      "Avance por sprint",
    ],
    optionalChallenges: ["Kanban", "Comentarios y reuniones"],
  },
  {
    id: "sales-dashboard",
    title: "Dashboard de ventas",
    description:
      "Presenta KPIs clave para liderar decisiones comerciales con una vista útil y accionable.",
    allowedPrograms: ["frontend", "full-stack"],
    difficulty: "junior-plus",
    coreRequirements: [
      "Ventas por periodo",
      "Top clientes o productos",
      "Indicadores clave",
      "Tablas y filtros",
    ],
    optionalChallenges: ["Comparativa mensual", "Segmentación por canal"],
  },
  {
    id: "appointment-system",
    title: "Sistema de citas",
    description:
      "Gestiona disponibilidad, reservas y estado de citas con una experiencia orientada al usuario final.",
    allowedPrograms: ["frontend", "full-stack"],
    difficulty: "junior",
    coreRequirements: [
      "Calendario de citas",
      "Creación de citas",
      "Cancelación y cambio de estado",
      "Listado de disponibilidad",
    ],
    optionalChallenges: [
      "Configuración de horarios",
      "Notificaciones de recordatorio",
    ],
  },
  {
    id: "ecommerce-admin",
    title: "Panel de administración e-commerce",
    description:
      "Controla productos, pedidos, clientes y métricas para operar un pequeño negocio digital.",
    allowedPrograms: ["frontend", "full-stack"],
    difficulty: "junior-plus",
    coreRequirements: [
      "Catálogo de productos",
      "Pedidos y estados",
      "Clientes",
      "Dashboard operativo",
    ],
    optionalChallenges: ["Carrito", "Integración con pagos simulados"],
  },
  {
    id: "order-management",
    title: "Sistema de pedidos",
    description:
      "Gestiona proveedores, pedidos, estado y entregas con un flujo de negocio claro y operable.",
    allowedPrograms: ["frontend", "full-stack"],
    difficulty: "junior",
    coreRequirements: [
      "Alta de pedidos",
      "Estado de pedido",
      "Detalle de líneas",
      "Consulta de historial",
    ],
    optionalChallenges: ["Filtrado por fecha", "Dashboard de entregas"],
  },
  {
    id: "customer-portal",
    title: "Gestión de clientes",
    description:
      "Recopila información, historial y seguimiento para una relación cliente-profesional con procesos ordenados.",
    allowedPrograms: ["frontend", "full-stack"],
    difficulty: "junior",
    coreRequirements: [
      "CRUD de clientes",
      "Estados y seguimientos",
      "Búsqueda y filtros",
      "Historial de interacciones",
    ],
    optionalChallenges: ["Notas internas", "Panel de actividad"],
  },
];
