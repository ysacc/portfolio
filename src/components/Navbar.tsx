"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
];

import { Menu, X, Search } from "lucide-react";

function openCommandPalette() {
    window.dispatchEvent(
        new KeyboardEvent("keydown", { key: "k", metaKey: true, ctrlKey: true, bubbles: true })
    );
}

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => setIsOpen(false), [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled || isOpen
                    ? "border-b border-hairline/[0.06] bg-surface/70 py-4 backdrop-blur-xl"
                    : "bg-transparent py-6"
            )}
        >
            <nav className="section-container flex items-center justify-between" aria-label="Main Navigation">
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100"
                    aria-label="Ysacc Roncal - Home"
                >
                    YR<span className="text-gradient">.</span>
                </Link>

                <div className="flex items-center gap-4 lg:gap-8">
                    <ul className="hidden space-x-6 text-sm font-medium sm:flex">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        aria-current={isActive ? "page" : undefined}
                                        className={cn(
                                            "text-gray-600 transition-colors hover:text-accent-strong dark:text-gray-400 dark:hover:text-accent",
                                            isActive && "font-semibold text-accent-strong dark:text-accent"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={openCommandPalette}
                            className="hidden items-center gap-2 rounded-lg border border-hairline/12 bg-surface/60 px-3 py-1.5 text-sm text-muted backdrop-blur transition-colors hover:border-accent/40 hover:text-accent-strong dark:hover:text-accent sm:inline-flex"
                            aria-label="Abrir buscador de comandos"
                        >
                            <Search className="size-4" />
                            <kbd className="text-xs font-medium">⌘K</kbd>
                        </button>
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex size-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 sm:hidden"
                            aria-expanded={isOpen}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 top-full w-full border-t border-gray-100 bg-white p-6 shadow-xl dark:border-gray-900 dark:bg-gray-950 sm:hidden"
                >
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "block text-lg font-medium text-gray-600 transition-colors hover:text-yellow-500 dark:text-gray-400",
                                            isActive && "text-yellow-500 dark:text-yellow-400"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>
            )}
        </header>
    );
}
