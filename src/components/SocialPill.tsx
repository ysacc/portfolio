import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SocialPillProps {
    href: string;
    icon: LucideIcon;
    label: string;
}

export function SocialPill({ href, icon: Icon, label }: SocialPillProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-hairline/12 bg-surface/60 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/5 hover:text-accent-strong dark:text-gray-300 dark:hover:text-accent"
        >
            <Icon className="size-4" />
            <span>{label}</span>
        </a>
    );
}

export function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-md border border-hairline/10 bg-hairline/[0.05] px-2 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-400">
            {children}
        </span>
    );
}
