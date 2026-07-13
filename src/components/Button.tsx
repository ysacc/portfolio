import { cn } from "@/lib/utils";

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    as?: "button" | "a";
    href?: string;
    target?: string;
    rel?: string;
    children: React.ReactNode;
}

export function Button({
    variant = "primary",
    as = "button",
    href,
    target,
    rel,
    className,
    children,
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all focus:outline-none disabled:opacity-50";

    const variants = {
        primary: "bg-gradient-to-r from-accent to-accent-strong text-accent-fg shadow-lg shadow-accent/25 hover:shadow-glow hover:brightness-105",
        secondary: "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200",
        outline: "border border-hairline/15 bg-surface/50 backdrop-blur hover:border-accent/40 hover:bg-accent/5",
    };

    const classes = cn(baseStyles, variants[variant], className);

    if (as === "a" && href) {
        const anchorProps = props as unknown as AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <a href={href} target={target} rel={rel} className={classes} {...anchorProps}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
