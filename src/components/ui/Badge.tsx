import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Tone = "neutral" | "accent" | "success" | "info";

const tones: Record<Tone, string> = {
    neutral: "bg-hairline/[0.06] text-foreground/70 dark:bg-hairline/[0.08]",
    accent: "bg-accent/10 text-accent-strong dark:text-accent",
    success: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    info: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
};

interface BadgeProps {
    children: ReactNode;
    tone?: Tone;
    className?: string;
}

/** Pill / tag primitive with semantic tones. */
export function Badge({ children, tone = "neutral", className }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
                tones[tone],
                className
            )}
        >
            {children}
        </span>
    );
}
