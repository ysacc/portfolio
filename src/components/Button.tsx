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
    const baseStyles = "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";

    const variants = {
        primary: "bg-yellow-500 text-gray-900 hover:bg-yellow-400 focus:ring-yellow-500",
        secondary: "bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 focus:ring-gray-900",
        outline: "border border-gray-200 bg-transparent hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900 focus:ring-gray-200",
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
