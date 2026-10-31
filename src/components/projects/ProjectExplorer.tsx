"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";
import { Search, SlidersHorizontal } from "lucide-react";

export function ProjectExplorer({ projects }: { projects: readonly Project[] }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("Todos");

    const categories = ["Todos", "React", "Next.js", "Node.js", "Python", "AWS", "SQL"];

    const filteredProjects = projects.filter((p) => {
        const query = search.toLowerCase();
        const matchesSearch =
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.stack.some(s => s.toLowerCase().includes(query)) ||
            p.highlights.some(h => h.toLowerCase().includes(query));

        const matchesFilter = filter === "Todos" ||
            (filter === "SQL" ? p.stack.some(s => ["SQL", "MySQL", "PostgreSQL", "Oracle"].includes(s)) : p.stack.some(s => s === filter || (filter === "AWS" && s.startsWith("AWS"))));

        return matchesSearch && matchesFilter;
    });

    return (
        <div>
                <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            aria-label="Buscar proyectos o tecnologías"
                            placeholder="Buscar proyectos o tecnologías..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-xl border border-gray-100 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:ring-2 focus:ring-cyan-400 dark:border-gray-900 dark:bg-gray-950 dark:text-gray-300"
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar proyectos por tecnología">
                        <SlidersHorizontal className="size-4 text-gray-400 mr-2 shrink-0" />
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                aria-pressed={filter === cat}
                                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${filter === cat
                                    ? "bg-cyan-500 text-gray-900"
                                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            <p className="sr-only" role="status">{filteredProjects.length} proyectos encontrados</p>
            <h2 className="sr-only">Listado de proyectos</h2>
                {filteredProjects.length > 0 ? (
                    <div className="space-y-12">
                        {[
                            { title: "Experiencia empresarial", personal: false },
                            { title: "Proyectos propios", personal: true },
                        ].map(group => {
                            const items = filteredProjects.filter(project => (project.role === "Proyecto personal") === group.personal);
                            if (!items.length) return null;
                            return <section key={group.title} aria-label={group.title}>
                                <h2 className="mb-6 text-2xl font-semibold">{group.title}</h2>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">{items.map(project => <ProjectCard key={project.slug} {...project} />)}</div>
                            </section>;
                        })}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <p className="text-lg font-medium text-gray-600 dark:text-gray-400">No se encontraron proyectos con esos criterios.</p>
                        <button onClick={() => { setSearch(""); setFilter("Todos") }} className="mt-4 text-sm font-bold text-cyan-500 hover:underline">Limpiar filtros</button>
                    </div>
                )}
        </div>
    );
}
