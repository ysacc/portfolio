"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    Briefcase,
    FileText,
    Github,
    Home,
    Linkedin,
    Mail,
    Moon,
    Search,
    Sun,
    type LucideIcon,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { siteConfig } from "@/data/site";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface Command {
    id: string;
    label: string;
    hint?: string;
    icon: LucideIcon;
    keywords?: string;
    run: () => void;
    external?: boolean;
}

/**
 * ⌘K / Ctrl+K command palette for navigation, theme and external links.
 * Mounted globally from the root layout.
 */
export function CommandPalette({ initiallyOpen = false }: { initiallyOpen?: boolean }) {
    const [open, setOpen] = useState(initiallyOpen);
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const router = useRouter();
    const { theme, toggleTheme } = useTheme();
    const reduceMotion = useReducedMotion();
    const inputRef = useRef<HTMLInputElement>(null);
    const dialogRef = useRef<HTMLDivElement>(null);

    const close = useCallback(() => {
        setOpen(false);
        setQuery("");
        setActive(0);
    }, []);

    const go = useCallback(
        (href: string) => {
            router.push(href);
            close();
        },
        [router, close]
    );

    const commands = useMemo<Command[]>(
        () => [
            ...navigation.map(item => ({ id: item.href, label: item.name, hint: item.description, icon: item.href === "/" ? Home : item.href === "/proyectos" ? Briefcase : item.href === "/contacto" ? Mail : FileText, run: () => go(item.href) })),
            { id: "theme", label: `Activar tema ${theme === "dark" ? "claro" : "oscuro"}`, hint: "Apariencia", icon: theme === "dark" ? Sun : Moon, keywords: "dark light mode", run: () => { toggleTheme(); close(); } },
            { id: "github", label: "GitHub", hint: siteConfig.links.github, icon: Github, external: true, keywords: "code source", run: () => { window.open(siteConfig.links.github, "_blank", "noopener,noreferrer"); close(); } },
            { id: "linkedin", label: "LinkedIn", hint: "Perfil profesional", icon: Linkedin, external: true, keywords: "connect", run: () => { window.open(siteConfig.links.linkedin, "_blank", "noopener,noreferrer"); close(); } },
            { id: "email", label: "Enviar correo", hint: siteConfig.email, icon: Mail, external: true, run: () => { window.location.href = `mailto:${siteConfig.email}`; close(); } },
        ],
        [go, theme, toggleTheme, close]
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return commands;
        return commands.filter((c) =>
            `${c.label} ${c.hint ?? ""} ${c.keywords ?? ""}`.toLowerCase().includes(q)
        );
    }, [commands, query]);

    // Global open shortcut (⌘K / Ctrl+K).
    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
                event.preventDefault();
                if (open) close();
                else setOpen(true);
            }
            if (event.key === "Escape") close();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, close]);

    useEffect(() => {
        if (open) {
            setActive(0);
            const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            const overflow = document.body.style.overflow;
            const shell = document.getElementById("site-shell");
            const wasInert = shell?.inert ?? false;
            document.body.style.overflow = "hidden";
            if (shell) shell.inert = true;
            inputRef.current?.focus();
            return () => {
                document.body.style.overflow = overflow;
                if (shell) shell.inert = wasInert;
                previous?.focus({ preventScroll: true });
            };
        }
    }, [open]);

    useEffect(() => {
        setActive(0);
    }, [query]);

    const onListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Tab") {
            const controls = dialogRef.current?.querySelectorAll<HTMLElement>('input, button, a[href], [tabindex="0"]');
            if (!controls?.length) return;
            const first = controls[0];
            const last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
            return;
        }
        if (event.target !== inputRef.current) return;
        if (event.key === "ArrowDown") {
            event.preventDefault();
            setActive((prev) => (prev + 1) % Math.max(filtered.length, 1));
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setActive((prev) => (prev - 1 + filtered.length) % Math.max(filtered.length, 1));
        } else if (event.key === "Enter") {
            event.preventDefault();
            filtered[active]?.run();
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[15vh]"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0 }}
                >
                    <div
                        className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm"
                        onClick={close}
                        aria-hidden
                    />
                    <motion.div
                        ref={dialogRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Paleta de comandos"
                        initial={reduceMotion ? false : { opacity: 0, scale: 0.97, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97, y: -8 }}
                        transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 30 }}
                        onKeyDown={onListKeyDown}
                        className="glass relative w-full max-w-xl overflow-hidden rounded-card"
                    >
                        <div className="flex items-center gap-3 border-b border-hairline/10 px-4">
                            <Search className="size-4 shrink-0 text-muted" />
                            <input
                                ref={inputRef}
                                aria-label="Buscar páginas y acciones"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Buscar páginas y acciones…"
                                className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-muted"
                            />
                            <kbd className="hidden rounded-md border border-hairline/15 px-1.5 py-0.5 text-[10px] font-medium text-muted sm:block">
                                ESC
                            </kbd>
                        </div>
                        <ul className="max-h-[320px] overflow-y-auto p-2">
                            {filtered.length === 0 && (
                                <li className="px-3 py-8 text-center text-sm text-muted">Sin resultados</li>
                            )}
                            {filtered.map((command, index) => {
                                const Icon = command.icon;
                                return (
                                    <li key={command.id}>
                                        <button
                                            onMouseEnter={() => setActive(index)}
                                            onClick={command.run}
                                            className={cn(
                                                "flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm transition-colors",
                                                index === active
                                                    ? "bg-accent/10 text-foreground"
                                                    : "text-foreground/80 hover:bg-hairline/[0.04]"
                                            )}
                                        >
                                            <span
                                                className={cn(
                                                    "flex size-8 shrink-0 items-center justify-center rounded-xl",
                                                    index === active ? "bg-accent/15 text-accent-strong dark:text-accent" : "bg-hairline/[0.06] text-muted"
                                                )}
                                            >
                                                <Icon className="size-4" />
                                            </span>
                                            <span className="flex-1">
                                                <span className="block font-medium">{command.label}</span>
                                                {command.hint && (
                                                    <span className="block truncate text-xs text-muted">{command.hint}</span>
                                                )}
                                            </span>
                                            {command.external && <ArrowUpRight className="size-4 text-muted" />}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="flex items-center justify-between border-t border-hairline/10 px-4 py-2.5 text-[11px] text-muted">
                            <span className="flex items-center gap-1.5">
                                <kbd className="rounded border border-hairline/15 px-1.5 py-0.5">↑</kbd>
                                <kbd className="rounded border border-hairline/15 px-1.5 py-0.5">↓</kbd>
                                navegar
                            </span>
                            <span className="flex items-center gap-1.5">
                                <kbd className="rounded border border-hairline/15 px-1.5 py-0.5">↵</kbd>
                                seleccionar
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
