"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
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
export function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(0);
    const router = useRouter();
    const { theme, toggleTheme } = useTheme();
    const inputRef = useRef<HTMLInputElement>(null);

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
            { id: "home", label: "Home", hint: "Landing page", icon: Home, run: () => go("/") },
            { id: "projects", label: "Projects", hint: "Work archive", icon: Briefcase, keywords: "work portfolio", run: () => go("/projects") },
            { id: "resume", label: "Resume", hint: "Experience & CV", icon: FileText, keywords: "cv experience", run: () => go("/resume") },
            { id: "contact", label: "Contact", hint: "Get in touch", icon: Mail, keywords: "email message", run: () => go("/contact") },
            { id: "theme", label: `Switch to ${theme === "dark" ? "light" : "dark"} theme`, hint: "Appearance", icon: theme === "dark" ? Sun : Moon, keywords: "dark light mode", run: () => { toggleTheme(); close(); } },
            { id: "github", label: "GitHub", hint: siteConfig.links.github, icon: Github, external: true, keywords: "code source", run: () => { window.open(siteConfig.links.github, "_blank"); close(); } },
            { id: "linkedin", label: "LinkedIn", hint: "Professional profile", icon: Linkedin, external: true, keywords: "connect", run: () => { window.open(siteConfig.links.linkedin, "_blank"); close(); } },
            { id: "email", label: "Send email", hint: siteConfig.email, icon: Mail, external: true, run: () => { window.location.href = `mailto:${siteConfig.email}`; close(); } },
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
                setOpen((prev) => !prev);
            }
            if (event.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        if (open) {
            setActive(0);
            const id = window.setTimeout(() => inputRef.current?.focus(), 20);
            return () => window.clearTimeout(id);
        }
    }, [open]);

    useEffect(() => {
        setActive(0);
    }, [query]);

    const onListKeyDown = (event: React.KeyboardEvent) => {
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div
                        className="absolute inset-0 bg-gray-950/40 backdrop-blur-sm"
                        onClick={close}
                        aria-hidden
                    />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-label="Paleta de comandos"
                        initial={{ opacity: 0, scale: 0.97, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: -8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        onKeyDown={onListKeyDown}
                        className="glass relative w-full max-w-xl overflow-hidden rounded-card"
                    >
                        <div className="flex items-center gap-3 border-b border-hairline/10 px-4">
                            <Search className="size-4 shrink-0 text-muted" />
                            <input
                                ref={inputRef}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search pages, actions…"
                                className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-muted"
                            />
                            <kbd className="hidden rounded-md border border-hairline/15 px-1.5 py-0.5 text-[10px] font-medium text-muted sm:block">
                                ESC
                            </kbd>
                        </div>
                        <ul className="max-h-[320px] overflow-y-auto p-2">
                            {filtered.length === 0 && (
                                <li className="px-3 py-8 text-center text-sm text-muted">No results</li>
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
                                navigate
                            </span>
                            <span className="flex items-center gap-1.5">
                                <kbd className="rounded border border-hairline/15 px-1.5 py-0.5">↵</kbd>
                                select
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
