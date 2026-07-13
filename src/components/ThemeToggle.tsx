"use client";

import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-hairline/12 bg-surface/60 text-gray-700 backdrop-blur transition-colors hover:border-accent/40 hover:text-accent-strong dark:text-gray-300 dark:hover:text-accent"
            aria-label="Toggle theme"
        >
            {theme === "light" ? (
                <Moon className="size-4" />
            ) : (
                <Sun className="size-4" />
            )}
        </button>
    );
}
