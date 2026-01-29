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
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-yellow-200 hover:bg-yellow-50 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:border-yellow-900 dark:hover:bg-yellow-950/30"
        >
            <Icon className="size-4" />
            <span>{label}</span>
        </a>
    );
}

export function Tag({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-md bg-gray-100 border border-gray-200 px-2 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:border-transparent">
            {children}
        </span>
    );
}
