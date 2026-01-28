import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { Tag } from "./SocialPill";

export function ProjectCard({ slug, title, shortDescription, image, stack }: Project) {
    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-xl dark:border-gray-900 dark:bg-gray-950">
            <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
        </div>
    );
}
