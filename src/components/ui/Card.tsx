"use client";

import { cn } from "@/lib/utils";
import { useRef, type MouseEvent, type ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    /** Enables a cursor-following highlight on hover. */
    spotlight?: boolean;
    /** Lifts the card on hover. */
    interactive?: boolean;
}

/**
 * Glass surface primitive. The single card used across the site so radius,
 * blur, border and shadow stay consistent. `spotlight` adds a pointer-tracked
 * accent glow — a subtle, senior-feeling micro-interaction.
 */
export function Card({ children, className, spotlight = false, interactive = false }: CardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        el.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };

    return (
        <div
            ref={ref}
            onMouseMove={spotlight ? handleMouseMove : undefined}
            className={cn(
                "glass group/card relative overflow-hidden rounded-card transition-all duration-300",
                interactive && "hover:-translate-y-1 hover:shadow-glow",
                className
            )}
        >
            {spotlight && (
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                    style={{
                        background:
                            "radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--accent) / 0.16), transparent 60%)",
                    }}
                />
            )}
            <div className="relative">{children}</div>
        </div>
    );
}
