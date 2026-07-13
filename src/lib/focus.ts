export type TaskStatus = "pending" | "in_progress" | "completed";
export type TaskPriority = "low" | "medium" | "high" | "critical";
export type PomodoroMode = "work" | "short-break" | "long-break";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  dueTime: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
  pomodoroEstimate?: number;
}

export interface FocusSession {
  id: string;
  type: PomodoroMode;
  durationMinutes: number;
  startedAt: string;
  completedAt: string;
  status: "completed" | "cancelled";
  taskId?: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
  allDay: boolean;
  location: string;
  meetingUrl: string;
  calendarId: string;
  htmlLink: string;
}

export interface DashboardPreferences {
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  theme: "light" | "dark" | "auto";
  notificationsEnabled: boolean;
  soundEnabled: boolean;
  timezone: string;
  calendarId: string;
  daysToLoad: number;
  displayName: string;
}

export interface EnvValidationResult {
  isValid: boolean;
  missing: string[];
}

export const DEFAULT_PREFERENCES: DashboardPreferences = {
  workDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  theme: "dark",
  notificationsEnabled: true,
  soundEnabled: true,
  timezone: "America/Lima",
  calendarId: "primary",
  daysToLoad: 7,
  displayName: "Ysacc",
};

export const DEFAULT_TASKS: Task[] = [
  {
    id: "task-1",
    title: "Revisar prioridades del sprint",
    description: "Organizar el backlog y preparar notas para la reunión de las 10:00.",
    status: "pending",
    priority: "high",
    dueDate: new Date().toISOString().slice(0, 10),
    dueTime: "09:30",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    pomodoroEstimate: 3,
  },
  {
    id: "task-2",
    title: "Actualizar propuesta de diseño",
    description: "Añadir feedback del cliente y preparar la versión final.",
    status: "in_progress",
    priority: "medium",
    dueDate: new Date().toISOString().slice(0, 10),
    dueTime: "15:00",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    pomodoroEstimate: 2,
  },
];

export function validateEnvironment(env: NodeJS.ProcessEnv): EnvValidationResult {
  const required = ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET", "GOOGLE_REFRESH_TOKEN"] as const;
  const missing = required.filter((key) => !env[key]);
  return {
    isValid: missing.length === 0,
    missing,
  };
}

export function getGreeting(date = new Date(), timezone = "America/Lima") {
  const hour = Number(new Intl.DateTimeFormat("en-GB", { hour: "numeric", hour12: false, timeZone: timezone }).format(date));
  if (hour < 12) return "Buenos días";
  if (hour < 18) return "Buenas tardes";
  return "Buenas noches";
}

export function formatDateLabel(date = new Date(), timezone = "America/Lima") {
  return new Intl.DateTimeFormat("es-PE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: timezone,
  }).format(date);
}

export function formatTime(date = new Date(), timezone = "America/Lima") {
  return new Intl.DateTimeFormat("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timezone,
  }).format(date);
}

export function sortCalendarEvents(events: CalendarEvent[]) {
  return [...events].sort((a, b) => {
    const aStart = new Date(a.start).getTime();
    const bStart = new Date(b.start).getTime();
    return aStart - bStart;
  });
}

export function getNextEvent(events: CalendarEvent[]) {
  return sortCalendarEvents(events)[0] ?? null;
}

export function getTodayEvents(events: CalendarEvent[], date = new Date(), timezone = "America/Lima") {
  const dayStart = new Date(date);
  dayStart.setHours(0, 0, 0, 0);

  const dayEnd = new Date(date);
  dayEnd.setHours(23, 59, 59, 999);

  return sortCalendarEvents(events).filter((event) => {
    const startTime = new Date(event.start).getTime();
    const endTime = new Date(event.end).getTime();
    return startTime <= dayEnd.getTime() && endTime >= dayStart.getTime();
  });
}

export function getTaskStats(tasks: Task[]) {
  const completed = tasks.filter((task) => task.status === "completed").length;
  const pending = tasks.filter((task) => task.status !== "completed").length;
  const rate = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;
  return { completed, pending, rate };
}

export function getPomodoroStats(sessions: FocusSession[]) {
  const today = new Date();
  const startOfDay = new Date(today);
  startOfDay.setHours(0, 0, 0, 0);

  const completedToday = sessions.filter((session) => {
    const completedAt = new Date(session.completedAt);
    return session.status === "completed" && completedAt >= startOfDay;
  });

  const focusSessions = completedToday.filter((session) => session.type === "work");
  const focusMinutes = focusSessions.reduce((total, session) => total + session.durationMinutes, 0);
  const streak = focusSessions.length ? Math.min(7, focusSessions.length) : 0;

  return {
    completedToday: completedToday.length,
    focusMinutes,
    streak,
    weeklyTotal: sessions.filter((session) => session.status === "completed").length,
    dailyAverage: focusSessions.length ? Math.round(focusMinutes / focusSessions.length) : 0,
  };
}

export function getCalendarSampleEvents(days = 7, maxResults = 8, timezone = "America/Lima") {
  const now = new Date();
  const events: CalendarEvent[] = [
    {
      id: "sample-1",
      title: "Reunión de producto",
      description: "Sincronización semanal con el equipo.",
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0).toISOString(),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 45).toISOString(),
      allDay: false,
      location: "Sala 3",
      meetingUrl: "https://meet.google.com/abc-defg-hij",
      calendarId: "primary",
      htmlLink: "https://calendar.google.com/",
    },
    {
      id: "sample-2",
      title: "Tareas personales",
      description: "Bloque para revisar agenda y prioridades.",
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13, 0).toISOString(),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 0).toISOString(),
      allDay: false,
      location: "Casa",
      meetingUrl: "",
      calendarId: "primary",
      htmlLink: "https://calendar.google.com/",
    },
    {
      id: "sample-3",
      title: "Día libre",
      description: "Evento de día completo para el fin de semana.",
      start: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0).toISOString(),
      end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 0, 0).toISOString(),
      allDay: true,
      location: "",
      meetingUrl: "",
      calendarId: "personal",
      htmlLink: "https://calendar.google.com/",
    },
  ];

  return sortCalendarEvents(events).slice(0, maxResults).map((event) => ({
    ...event,
    start: new Intl.DateTimeFormat("en-CA", {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(event.start)),
    end: new Intl.DateTimeFormat("en-CA", {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date(event.end)),
  }));
}
