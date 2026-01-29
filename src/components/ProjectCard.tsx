"use client";

import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { Tag } from "./SocialPill";
import { motion } from "framer-motion";

export function ProjectCard({ slug, title, shortDescription, image, stack }: Project) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-950 dark:shadow-none"
        >
            <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                    {stack.slice(0, 3).map((s) => (
                        <Tag key={s}>{s}</Tag>
                    ))}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {shortDescription}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-yellow-600 dark:text-yellow-500">
                    <Link href={`/projects/${slug}`} className="hover:underline">
                        View Project
                    </Link>
                    <ArrowRight className="size-4" />
                </div>
            </div>
        </motion.div>
    );
}
