import { siteConfig } from "@/data/site";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-gray-100 py-8 dark:border-gray-900">
            <div className="section-container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} {siteConfig.name}. Desarrollado con Next.js.
                </p>
                <div className="flex gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <Link href="/contacto" className="transition-colors hover:text-accent-strong dark:hover:text-accent">Contacto</Link>
                    <a
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-500 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-500 transition-colors"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
