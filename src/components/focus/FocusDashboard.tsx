"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  ListTodo,
  Menu,
  Moon,
  RefreshCcw,
  Settings,
  Sparkles,
  Sun,
  TimerReset,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DEFAULT_PREFERENCES,
  DEFAULT_TASKS,
  getGreeting,
  getNextEvent,
  getPomodoroStats,
  getTaskStats,
  getTodayEvents,
  type CalendarEvent,
  type DashboardPreferences,
  type PomodoroMode,
  type Task,
  type TaskPriority,
  type TaskStatus,
} from "@/lib/focus";

const navItems = [
  { name: "Inicio", href: "/focus", icon: Sparkles },
  { name: "Calendario", href: "/focus/calendar", icon: CalendarDays },
  { name: "Pomodoro", href: "/focus/pomodoro", icon: Clock3 },
  { name: "Tareas", href: "/focus/tasks", icon: ListTodo },
  { name: "Configuración", href: "/focus/settings", icon: Settings },
] as const;

const priorityColors: Record<TaskPriority, string> = {
  low: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  medium: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
  high: "bg-orange-500/10 text-orange-700 dark:text-orange-300",
  critical: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
};

interface Props {
  activeSection?: "home" | "calendar" | "pomodoro" | "tasks" | "settings";
}

export function FocusDashboard({ activeSection = "home" }: Props) {
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [now, setNow] = useState(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState<string | null>(null);
  const [preferences, setPreferences] = useState<DashboardPreferences>(DEFAULT_PREFERENCES);
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);
  const [draftTask, setDraftTask] = useState({ title: "", description: "", dueDate: "", dueTime: "", priority: "medium" as TaskPriority });
  const [pomodoro, setPomodoro] = useState({
    mode: "work" as PomodoroMode,
    remainingSeconds: DEFAULT_PREFERENCES.workDuration * 60,
    status: "idle" as "idle" | "running" | "paused",
    targetAt: null as number | null,
    completedSessions: 0,
    focusMinutesToday: 0,
    sessions: [] as Array<{ id: string; type: PomodoroMode; durationMinutes: number; startedAt: string; completedAt: string; status: "completed" | "cancelled" }>,
  });

  useEffect(() => {
    setMounted(true);
    const storedPrefs = window.localStorage.getItem("focus-dashboard-preferences");
    const storedTasks = window.localStorage.getItem("focus-dashboard-tasks");
    const storedPomodoro = window.localStorage.getItem("focus-dashboard-pomodoro");

    if (storedPrefs) setPreferences(JSON.parse(storedPrefs));
    if (storedTasks) setTasks(JSON.parse(storedTasks));
    if (storedPomodoro) setPomodoro(JSON.parse(storedPomodoro));
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem("focus-dashboard-preferences", JSON.stringify(preferences));
  }, [preferences, mounted]);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem("focus-dashboard-tasks", JSON.stringify(tasks));
  }, [tasks, mounted]);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem("focus-dashboard-pomodoro", JSON.stringify(pomodoro));
  }, [pomodoro, mounted]);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = window.setInterval(() => {
      setPomodoro((current) => {
        if (current.status !== "running" || !current.targetAt) return current;
        const remainingSeconds = Math.max(0, Math.ceil((current.targetAt - Date.now()) / 1000));
        if (remainingSeconds === 0) {
          const completedAt = new Date().toISOString();
          const nextMode: PomodoroMode = current.mode === "work" ? (current.completedSessions + 1) % 4 === 0 ? "long-break" : "short-break" : "work";
          const sessionDuration = current.mode === "work" ? preferences.workDuration : current.mode === "short-break" ? preferences.shortBreakDuration : preferences.longBreakDuration;
          const nextState = {
            ...current,
            remainingSeconds: nextMode === "work" ? preferences.workDuration * 60 : nextMode === "short-break" ? preferences.shortBreakDuration * 60 : preferences.longBreakDuration * 60,
            status: "idle" as const,
            targetAt: null,
            completedSessions: current.mode === "work" ? current.completedSessions + 1 : current.completedSessions,
            focusMinutesToday: current.mode === "work" ? current.focusMinutesToday + sessionDuration : current.focusMinutesToday,
            sessions: [
              ...current.sessions,
              {
                id: crypto.randomUUID(),
                type: current.mode,
                durationMinutes: sessionDuration,
                startedAt: new Date(Date.now() - sessionDuration * 60000).toISOString(),
                completedAt,
                status: "completed" as const,
              },
            ],
            mode: nextMode,
          };
          if (typeof window !== "undefined" && "Notification" in window && Notification.permission === "granted") {
            new Notification("Pomodoro completado", { body: `${current.mode === "work" ? "Sesión de enfoque" : "Descanso"} finalizada.` });
          }
          if (preferences.soundEnabled) {
            const audioContext = new window.AudioContext();
            const oscillator = audioContext.createOscillator();
            oscillator.type = "sine";
            oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
            oscillator.connect(audioContext.destination);
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.2);
          }
          return nextState;
        }
        return { ...current, remainingSeconds };
      });
    }, 1000);
    return () => window.clearInterval(interval);
  }, [mounted, preferences.shortBreakDuration, preferences.longBreakDuration, preferences.soundEnabled, preferences.workDuration]);

  const loadEvents = useCallback(async () => {
    try {
      setEventsLoading(true);
      const response = await fetch(`/api/calendar/events?days=${preferences.daysToLoad}&maxResults=8`);
      if (!response.ok) throw new Error("No se pudieron cargar los eventos");
      const result = await response.json();
      setEvents(result.events || []);
      setEventsError(null);
    } catch (error) {
      setEventsError(error instanceof Error ? error.message : "Error inesperado");
      setEvents([]);
    } finally {
      setEventsLoading(false);
    }
  }, [preferences.daysToLoad]);

  useEffect(() => {
    if (!mounted) return;
    loadEvents();
    const onFocus = () => loadEvents();
    window.addEventListener("focus", onFocus);
    const interval = window.setInterval(loadEvents, 10 * 60 * 1000);
    return () => {
      window.removeEventListener("focus", onFocus);
      window.clearInterval(interval);
    };
  }, [mounted, loadEvents]);

  const todayEvents = useMemo(() => getTodayEvents(events, now, preferences.timezone), [events, now, preferences.timezone]);
  const nextEvent = useMemo(() => getNextEvent(events), [events]);
  const taskStats = useMemo(() => getTaskStats(tasks), [tasks]);
  const pomodoroStats = useMemo(() => getPomodoroStats(pomodoro.sessions), [pomodoro.sessions]);
  const greeting = useMemo(() => getGreeting(now, preferences.timezone), [now, preferences.timezone]);
  const formattedTime = useMemo(() => now.toLocaleTimeString("es-PE", { timeZone: preferences.timezone, hour: "2-digit", minute: "2-digit", second: "2-digit" }), [now, preferences.timezone]);
  const formattedDate = useMemo(() => now.toLocaleDateString("es-PE", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: preferences.timezone }), [now, preferences.timezone]);
  const minutes = Math.floor(pomodoro.remainingSeconds / 60);
  const seconds = pomodoro.remainingSeconds % 60;

  const addTask = () => {
    if (!draftTask.title.trim()) return;
    const task: Task = {
      id: crypto.randomUUID(),
      title: draftTask.title.trim(),
      description: draftTask.description.trim(),
      status: "pending",
      priority: draftTask.priority,
      dueDate: draftTask.dueDate,
      dueTime: draftTask.dueTime,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTasks((current) => [task, ...current]);
    setDraftTask({ title: "", description: "", dueDate: "", dueTime: "", priority: "medium" });
  };

  const toggleTask = (taskId: string) => {
    setTasks((current) => current.map((task) => task.id === taskId ? { ...task, status: task.status === "completed" ? "pending" : "completed", completedAt: task.status === "completed" ? undefined : new Date().toISOString(), updatedAt: new Date().toISOString() } : task));
  };

  const updateTaskStatus = (taskId: string, status: TaskStatus) => {
    setTasks((current) => current.map((task) => task.id === taskId ? { ...task, status, updatedAt: new Date().toISOString() } : task));
  };

  const startPomodoro = () => {
    if (pomodoro.status === "running") return;
    const targetAt = Date.now() + pomodoro.remainingSeconds * 1000;
    setPomodoro((current) => ({ ...current, status: "running", targetAt }));
  };

  const pausePomodoro = () => setPomodoro((current) => ({ ...current, status: "paused", targetAt: null }));
  const resetPomodoro = () => setPomodoro((current) => ({ ...current, remainingSeconds: current.mode === "work" ? preferences.workDuration * 60 : current.mode === "short-break" ? preferences.shortBreakDuration * 60 : preferences.longBreakDuration * 60, status: "idle", targetAt: null }));
  const skipPomodoro = () => {
    const nextMode = pomodoro.mode === "work" ? "short-break" : "work";
    setPomodoro((current) => ({ ...current, mode: nextMode, remainingSeconds: nextMode === "work" ? preferences.workDuration * 60 : nextMode === "short-break" ? preferences.shortBreakDuration * 60 : preferences.longBreakDuration * 60, status: "idle", targetAt: null }));
  };

  const changeMode = (mode: PomodoroMode) => {
    const duration = mode === "work" ? preferences.workDuration : mode === "short-break" ? preferences.shortBreakDuration : preferences.longBreakDuration;
    setPomodoro((current) => ({ ...current, mode, remainingSeconds: duration * 60, status: "idle", targetAt: null }));
  };

  const nextEventCard = (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-amber-500">Próximo evento</p>
          <h2 className="mt-2 text-2xl font-semibold">{nextEvent?.title ?? "Sin eventos próximos"}</h2>
        </div>
        <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-600 dark:text-amber-300">
          <CalendarDays className="size-5" />
        </div>
      </div>
      {nextEvent ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Horario</p>
            <p className="font-medium">{new Date(nextEvent.start).toLocaleTimeString("es-PE", { timeZone: preferences.timezone, hour: "2-digit", minute: "2-digit" })} - {new Date(nextEvent.end).toLocaleTimeString("es-PE", { timeZone: preferences.timezone, hour: "2-digit", minute: "2-digit" })}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Ubicación</p>
            <p className="font-medium">{nextEvent.location || "Sin ubicación"}</p>
          </div>
        </div>
      ) : (
        <p className="mt-6 text-sm text-gray-500">Tu agenda está despejada para el día.</p>
      )}
    </motion.div>
  );

  const timerCard = (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-gray-200 bg-gradient-to-br from-amber-500 to-orange-500 p-6 text-white shadow-xl">
      <p className="text-sm uppercase tracking-[0.3em] text-amber-100">Tiempo de enfoque</p>
      <div className="mt-4 flex items-end gap-2">
        <span className="text-5xl font-semibold">{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</span>
      </div>
      <p className="mt-4 text-sm text-amber-50">Modo actual: {pomodoro.mode === "work" ? "Trabajo" : pomodoro.mode === "short-break" ? "Descanso corto" : "Descanso largo"}</p>
    </motion.div>
  );

  const agendaCard = (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-amber-500">Agenda del día</p>
          <h3 className="text-lg font-semibold">Eventos y bloqueos</h3>
        </div>
        <div className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-400">{todayEvents.length} eventos</div>
      </div>
      <div className="mt-6 space-y-3">
        {eventsLoading ? (
          <div className="rounded-2xl border border-dashed border-gray-200 p-4 text-sm text-gray-500">Cargando agenda…</div>
        ) : todayEvents.length ? todayEvents.map((event) => (
          <div key={event.id} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50/70 p-4 dark:border-gray-800 dark:bg-gray-900/60">
            <div className="mt-1 rounded-full bg-amber-500/10 p-2 text-amber-600 dark:text-amber-300">
              <Clock3 className="size-4" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-semibold">{event.title}</p>
                {event.allDay && <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-700 dark:text-emerald-300">Todo el día</span>}
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{new Date(event.start).toLocaleTimeString("es-PE", { timeZone: preferences.timezone, hour: "2-digit", minute: "2-digit" })} - {new Date(event.end).toLocaleTimeString("es-PE", { timeZone: preferences.timezone, hour: "2-digit", minute: "2-digit" })}</p>
            </div>
          </div>
        )) : <div className="rounded-2xl border border-dashed border-gray-200 p-4 text-sm text-gray-500">No hay eventos para esta jornada.</div>}
      </div>
    </div>
  );

  const dailySummaryCard = (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <p className="text-sm font-medium text-amber-500">Resumen diario</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {[
          { label: "Eventos", value: todayEvents.length },
          { label: "Tareas", value: taskStats.pending },
          { label: "Completadas", value: taskStats.completed },
          { label: "Minutos de foco", value: pomodoroStats.focusMinutes },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const pomodoroCard = (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <p className="text-sm font-medium text-amber-500">Pomodoro</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {(["work", "short-break", "long-break"] as PomodoroMode[]).map((mode) => (
          <button key={mode} className={cn("rounded-full px-3 py-1.5 text-sm", pomodoro.mode === mode ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300")} onClick={() => changeMode(mode)}>
            {mode === "work" ? "Trabajo" : mode === "short-break" ? "Descanso corto" : "Descanso largo"}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={startPomodoro} className="rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white">{pomodoro.status === "running" ? "En marcha" : "Iniciar"}</button>
        <button onClick={pausePomodoro} className="rounded-2xl border border-gray-200 px-4 py-2 text-sm dark:border-gray-800">Pausar</button>
        <button onClick={resetPomodoro} className="rounded-2xl border border-gray-200 px-4 py-2 text-sm dark:border-gray-800"><TimerReset className="mr-2 inline size-4" />Reiniciar</button>
        <button onClick={skipPomodoro} className="rounded-2xl border border-gray-200 px-4 py-2 text-sm dark:border-gray-800">Saltar</button>
      </div>
      <div className="mt-5 flex items-center justify-between rounded-2xl bg-gray-50 p-4 dark:bg-gray-900">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Sesiones hoy</p>
          <p className="text-2xl font-semibold">{pomodoroStats.completedToday}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Racha</p>
          <p className="text-2xl font-semibold">{pomodoroStats.streak} días</p>
        </div>
      </div>
    </div>
  );

  const renderTasksCard = (limit?: number) => (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-amber-500">Tareas</p>
          <h3 className="text-lg font-semibold">Gestión personal</h3>
        </div>
        <div className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-400">{tasks.length} totales</div>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-[1.25fr_0.75fr]">
        <input value={draftTask.title} onChange={(event) => setDraftTask((current) => ({ ...current, title: event.target.value }))} className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm dark:border-gray-800 dark:bg-gray-900" placeholder="Nueva tarea" />
        <select value={draftTask.priority} onChange={(event) => setDraftTask((current) => ({ ...current, priority: event.target.value as TaskPriority }))} className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm dark:border-gray-800 dark:bg-gray-900">
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
          <option value="critical">Crítica</option>
        </select>
      </div>
      <textarea value={draftTask.description} onChange={(event) => setDraftTask((current) => ({ ...current, description: event.target.value }))} className="mt-3 w-full rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm dark:border-gray-800 dark:bg-gray-900" placeholder="Describe la tarea" rows={3} />
      <div className="mt-3 flex flex-wrap gap-3">
        <input type="date" value={draftTask.dueDate} onChange={(event) => setDraftTask((current) => ({ ...current, dueDate: event.target.value }))} className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm dark:border-gray-800 dark:bg-gray-900" />
        <input type="time" value={draftTask.dueTime} onChange={(event) => setDraftTask((current) => ({ ...current, dueTime: event.target.value }))} className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm dark:border-gray-800 dark:bg-gray-900" />
        <button onClick={addTask} className="rounded-2xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white">Agregar</button>
      </div>
      <div className="mt-6 space-y-3">
        {(limit ? tasks.slice(0, limit) : tasks).map((task) => (
          <div key={task.id} className="flex items-start justify-between rounded-2xl border border-gray-100 bg-gray-50/80 p-4 dark:border-gray-800 dark:bg-gray-900/60">
            <div className="flex items-start gap-3">
              <button onClick={() => toggleTask(task.id)} className="mt-0.5 text-amber-500">
                <CheckCircle2 className={cn("size-5", task.status === "completed" ? "fill-current" : "opacity-70")} />
              </button>
              <div>
                <p className="font-medium">{task.title}</p>
                {task.description ? <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{task.description}</p> : null}
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className={cn("rounded-full px-2 py-1 text-xs", priorityColors[task.priority])}>{task.priority}</span>
                  <span className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">{task.dueDate || "Sin fecha"}</span>
                </div>
              </div>
            </div>
            <select value={task.status} onChange={(event) => updateTaskStatus(task.id, event.target.value as TaskStatus)} className="rounded-full border border-gray-200 bg-white px-2 py-1 text-xs dark:border-gray-800 dark:bg-gray-950">
              <option value="pending">Pendiente</option>
              <option value="in_progress">En progreso</option>
              <option value="completed">Completada</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );

  const weeklyCard = (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <p className="text-sm font-medium text-amber-500">Vista semanal</p>
      <div className="mt-4 grid grid-cols-7 gap-2">
        {Array.from({ length: 7 }).map((_, index) => {
          const day = new Date(now);
          day.setDate(now.getDate() + index);
          return (
            <div key={index} className="rounded-2xl border border-gray-100 bg-gray-50 p-2 text-center text-sm dark:border-gray-800 dark:bg-gray-900">
              <p className="text-[11px] uppercase text-gray-400">{day.toLocaleDateString("es-PE", { weekday: "short" })}</p>
              <p className="mt-2 font-semibold">{day.getDate()}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
          <div>
            <p className="font-semibold">Tareas completadas</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{taskStats.completed} de {tasks.length}</p>
          </div>
          <div className="text-2xl font-semibold">{taskStats.rate}%</div>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
          <div>
            <p className="font-semibold">Sesiones</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Promedio diario {pomodoroStats.dailyAverage}m</p>
          </div>
          <div className="text-2xl font-semibold">{pomodoroStats.weeklyTotal}</div>
        </div>
      </div>
    </div>
  );

  const settingsCard = (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <p className="text-sm font-medium text-amber-500">Configuración</p>
      <h3 className="text-lg font-semibold">Preferencias del panel</h3>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Nombre a mostrar</span>
          <input value={preferences.displayName} onChange={(event) => setPreferences((current) => ({ ...current, displayName: event.target.value }))} className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-900" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Zona horaria</span>
          <input value={preferences.timezone} onChange={(event) => setPreferences((current) => ({ ...current, timezone: event.target.value }))} className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-900" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">ID de calendario</span>
          <input value={preferences.calendarId} onChange={(event) => setPreferences((current) => ({ ...current, calendarId: event.target.value }))} className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-900" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Días a cargar</span>
          <input type="number" min={1} max={30} value={preferences.daysToLoad} onChange={(event) => setPreferences((current) => ({ ...current, daysToLoad: Math.max(1, Number(event.target.value) || 1) }))} className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-900" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Duración trabajo (min)</span>
          <input type="number" min={1} value={preferences.workDuration} onChange={(event) => setPreferences((current) => ({ ...current, workDuration: Math.max(1, Number(event.target.value) || 1) }))} className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-900" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Descanso corto (min)</span>
          <input type="number" min={1} value={preferences.shortBreakDuration} onChange={(event) => setPreferences((current) => ({ ...current, shortBreakDuration: Math.max(1, Number(event.target.value) || 1) }))} className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-900" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Descanso largo (min)</span>
          <input type="number" min={1} value={preferences.longBreakDuration} onChange={(event) => setPreferences((current) => ({ ...current, longBreakDuration: Math.max(1, Number(event.target.value) || 1) }))} className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-900" />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          <span className="text-gray-500 dark:text-gray-400">Tema</span>
          <select value={preferences.theme} onChange={(event) => setPreferences((current) => ({ ...current, theme: event.target.value as DashboardPreferences["theme"] }))} className="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-800 dark:bg-gray-900">
            <option value="light">Claro</option>
            <option value="dark">Oscuro</option>
            <option value="auto">Automático</option>
          </select>
        </label>
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <label className="flex items-center gap-3 text-sm">
          <input type="checkbox" checked={preferences.notificationsEnabled} onChange={(event) => setPreferences((current) => ({ ...current, notificationsEnabled: event.target.checked }))} className="size-4 accent-amber-500" />
          <span>Notificaciones activadas</span>
        </label>
        <label className="flex items-center gap-3 text-sm">
          <input type="checkbox" checked={preferences.soundEnabled} onChange={(event) => setPreferences((current) => ({ ...current, soundEnabled: event.target.checked }))} className="size-4 accent-amber-500" />
          <span>Sonido al finalizar pomodoro</span>
        </label>
      </div>
      <button onClick={() => setPreferences(DEFAULT_PREFERENCES)} className="mt-6 rounded-2xl border border-gray-200 px-4 py-2 text-sm dark:border-gray-800">Restaurar valores por defecto</button>
    </div>
  );

  let main: React.ReactNode;
  if (activeSection === "calendar") {
    main = (
      <>
        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">{nextEventCard}{weeklyCard}</section>
        <section>{agendaCard}</section>
      </>
    );
  } else if (activeSection === "pomodoro") {
    main = <section className="grid gap-6 lg:grid-cols-2">{timerCard}{pomodoroCard}</section>;
  } else if (activeSection === "tasks") {
    main = (
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        {renderTasksCard()}
        <div className="space-y-6">{dailySummaryCard}{weeklyCard}</div>
      </section>
    );
  } else if (activeSection === "settings") {
    main = <section>{settingsCard}</section>;
  } else {
    main = (
      <>
        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">{nextEventCard}{timerCard}</section>
        <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {agendaCard}
          <div className="space-y-6">{dailySummaryCard}{pomodoroCard}</div>
        </section>
        <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">{renderTasksCard(4)}{weeklyCard}</section>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_35%)] pb-16 pt-24 text-gray-900 dark:text-gray-100">
      <div className="section-container flex gap-6">
        <aside className={cn("fixed inset-y-0 left-0 z-40 w-72 border-r border-gray-200 bg-white/80 p-6 backdrop-blur-xl transition-transform dark:border-gray-800 dark:bg-gray-950/80 lg:static lg:translate-x-0 lg:rounded-3xl", sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0") }>
          <div className="flex items-center justify-between lg:justify-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-500">Focus</p>
              <h2 className="mt-1 text-xl font-semibold">Panel personal</h2>
            </div>
            <button className="rounded-full border border-gray-200 p-2 lg:hidden dark:border-gray-800" onClick={() => setSidebarOpen(false)}>
              <X className="size-4" />
            </button>
          </div>
          <nav className="mt-8 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.href === (activeSection === "home" ? "/focus" : `/focus/${activeSection}`);
              return (
                <Link key={item.name} href={item.href} className={cn("flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition", isActive ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20" : "text-gray-600 hover:bg-amber-50 hover:text-amber-600 dark:text-gray-300 dark:hover:bg-amber-500/10") }>
                  <Icon className="size-4" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-10 rounded-3xl border border-amber-200 bg-amber-50/80 p-4 dark:border-amber-900/40 dark:bg-amber-950/20">
            <p className="text-sm font-semibold">Sincronización activa</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{eventsLoading ? "Cargando eventos" : eventsError ? "Sincronización con aviso" : "Google Calendar listo"}</p>
          </div>
        </aside>

        <div className="flex-1 space-y-6">
          <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-gray-200 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
            <div className="flex items-center gap-3">
              <button className="rounded-2xl border border-gray-200 p-2 lg:hidden dark:border-gray-800" onClick={() => setSidebarOpen(true)}>
                <Menu className="size-4" />
              </button>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{greeting}, {preferences.displayName}</p>
                <h1 className="text-xl font-semibold">{formattedDate}</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/20 dark:text-emerald-300">{formattedTime}</div>
              <button className="rounded-2xl border border-gray-200 p-2 transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900" onClick={loadEvents}>
                <RefreshCcw className="size-4" />
              </button>
              <button className="rounded-2xl border border-gray-200 p-2 transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900" onClick={() => setPreferences((current) => ({ ...current, theme: current.theme === "dark" ? "light" : "dark" }))}>
                {preferences.theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </button>
            </div>
          </header>

          {main}
        </div>
      </div>
    </div>
  );
}
