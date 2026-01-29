"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    title?: string;
    className?: string;
}

export function Section({ children, id, title, className }: SectionProps) {
    return (
        <section id={id} className={cn("py-16 md:py-24", className)}>
            <motion.div
                className="section-container"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {title && (
                    <h2 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl">
                        {title}<span className="text-yellow-500">.</span>
                    </h2>
                )}
                {children}
            </motion.div>
        </section>
    );
}
