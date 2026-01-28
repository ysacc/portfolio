"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";
import { Search, SlidersHorizontal } from "lucide-react";

export default function ProjectsPage() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const categories = ["All", "React", "Next.js", "Node.js", "Python", "AWS", "SQL"];

    const filteredProjects = projectsData.filter((p) => {
        const query = search.toLowerCase();
        const matchesSearch =
            p.title.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.stack.some(s => s.toLowerCase().includes(query)) ||
            p.highlights.some(h => h.toLowerCase().includes(query));

        const matchesFilter = filter === "All" ||
            (filter === "SQL" ? p.stack.some(s => ["SQL", "MySQL", "PostgreSQL", "Oracle"].includes(s)) : p.stack.includes(filter));

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="pt-24 md:pt-32">
            <Section className="pb-10">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                    Projects Archive<span className="text-yellow-500">.</span>
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                    A collection of platforms, interfaces, and tools built over the years.
                </p>

                {/* Filters */}
                <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search projects or technologies..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-xl border border-gray-100 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:ring-2 focus:ring-yellow-400 dark:border-gray-900 dark:bg-gray-950 dark:text-gray-300"
                        />
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                        <SlidersHorizontal className="size-4 text-gray-400 mr-2 shrink-0" />
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${filter === cat
                                    ? "bg-yellow-500 text-gray-900"
                                    : "bg-gray-50 text-gray-500 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="pb-24 pt-0">
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.slug} {...project} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <p className="text-lg font-medium text-gray-600 dark:text-gray-400">No projects found matching your criteria.</p>
                        <button onClick={() => { setSearch(""); setFilter("All") }} className="mt-4 text-sm font-bold text-yellow-500 hover:underline">Clear all filters</button>
                    </div>
                )}
            </Section>
        </div>
    );
}
