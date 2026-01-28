import { projectsData } from "@/data/projects";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Tag } from "@/components/SocialPill";
import { ArrowLeft, ExternalLink, Github, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
        title: `${project.title} | Projects`,
        description: project.shortDescription,
    };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <div className="pt-24 md:pt-32">
            <Section className="pb-10">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 transition-colors hover:text-yellow-500 dark:text-gray-400"
                >
                    <ArrowLeft className="size-4" />
                    Back to Projects
                </Link>
                <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                            {project.title}<span className="text-yellow-500">.</span>
                        </h1>
                        <p className="mt-4 text-xl text-yellow-600 dark:text-yellow-500 font-medium">
                            {project.role}
                        </p>
                    </div>
                    <div className="flex gap-4">
                        {project.links.github && (
                            <Button as="a" href={project.links.github} target="_blank" variant="outline">
                                <Github className="mr-2 size-4" />
                                Code
                            </Button>
                        )}
                        {project.links.live && (
                            <Button as="a" href={project.links.live} target="_blank" variant="primary">
                                <ExternalLink className="mr-2 size-4" />
                                Live Preview
                            </Button>
                        )}
                    </div>
                </div>
            </Section>

            <div className="section-container pb-24">
                <div className="aspect-video w-full overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 dark:border-gray-900 dark:bg-gray-950">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Overview</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Key Highlights</h2>
                            <ul className="space-y-4">
                                {project.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                                        <ChevronRight className="mt-1 size-4 text-yellow-500 shrink-0" />
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <aside className="space-y-12">
                        <div>
                            <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">Technologies Used</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((s) => (
                                    <Tag key={s}>{s}</Tag>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-950 border border-gray-100 dark:border-gray-900">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Interested in this project?</h3>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Let's discuss how I can bring similar solutions to your team.</p>
                            <Button as="a" href="/contact" variant="primary" className="mt-6 w-full">
                                Get in Touch
                            </Button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
