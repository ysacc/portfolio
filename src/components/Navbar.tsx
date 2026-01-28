"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-white/70 py-4 backdrop-blur-md dark:bg-gray-950/70 shadow-sm"
                    : "bg-transparent py-6"
            )}
        >
            <nav className="section-container flex items-center justify-between">
                <Link
                    href="/"
                    className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100"
                >
                    YR<span className="text-yellow-500">.</span>
                </Link>

                <div className="flex items-center gap-6 lg:gap-8">
                    <ul className="hidden space-x-6 text-sm font-medium sm:flex">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-gray-600 transition-colors hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}
