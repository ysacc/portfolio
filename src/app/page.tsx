"use client";

import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectCard } from "@/components/ProjectCard";
import { Card } from "@/components/ui/Card";
import { resumeData } from "@/data/resume";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/Button";
import { ArrowRight, Code2, Cpu, Globe, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const stack = [
    { icon: Code2, title: "Front-End", stack: "React, Next.js, TypeScript, TailwindCSS, Design Systems." },
    { icon: Cpu, title: "Back-End", stack: "Node.js, Express, integration with REST & GraphQL APIs." },
    { icon: Globe, title: "Cloud & DevOps", stack: "AWS, Google Cloud (GCP), CI/CD, GitLab, Docker." },
    { icon: Rocket, title: "Testing & Quality", stack: "Testing with Jest, code reviews, Agile." },
];

export default function Home() {
    const topProjects = projectsData.slice(0, 4);
    const featuredExperience = resumeData.experience.slice(0, 3);

    return (
        <div className="flex flex-col">
            <Hero />

            {/* Tech Stack — bento */}
            <Section title="Stack & Focus" id="stack">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {/* Feature tile — solid accent surface (not glass) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative flex flex-col justify-between overflow-hidden rounded-card bg-gradient-to-br from-accent to-accent-strong p-7 text-accent-fg shadow-glow lg:row-span-2"
                    >
                        {/* subtle sheen */}
                        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-white/20 blur-3xl" />
                        <div className="relative">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-fg/70">Experience</p>
                            <p className="mt-4 text-6xl font-extrabold leading-none">7+</p>
                            <p className="mt-2 text-lg font-medium">years building product</p>
                        </div>
                        <p className="relative mt-8 text-sm leading-relaxed text-accent-fg/80">
                            Scalable, user-centric applications for enterprise teams —
                            BBVA, Interbank, SANNA — integrating modern front-end with robust back-end.
                        </p>
                        <div className="relative mt-6 flex flex-wrap gap-2">
                            <span className="rounded-full bg-black/15 px-2.5 py-1 text-xs font-medium text-accent-fg">Enterprise</span>
                            <span className="rounded-full bg-black/15 px-2.5 py-1 text-xs font-medium text-accent-fg">Design Systems</span>
                            <span className="rounded-full bg-black/15 px-2.5 py-1 text-xs font-medium text-accent-fg">Performance</span>
                        </div>
                    </motion.div>

                    {/* Stack cards */}
                    {stack.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <Card spotlight interactive className="h-full p-6">
                                <div className="flex size-11 items-center justify-center rounded-2xl bg-accent/12 text-accent-strong dark:text-accent">
                                    <item.icon className="size-5" />
                                </div>
                                <h3 className="mt-4 font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.stack}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Experience */}
            <Section title="Experience" id="experience">
                <ExperienceTimeline items={featuredExperience} />
                <div className="mt-12 flex justify-center md:justify-start">
                    <Button as="a" href="/resume" variant="outline">
                        View Full Resume <ArrowRight className="ml-2 size-4" />
                    </Button>
                </div>
            </Section>

            {/* Projects */}
            <Section title="Featured Projects" id="projects">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {topProjects.map((project) => (
                        <ProjectCard key={project.slug} {...project} />
                    ))}
                </div>
                <div className="mt-12 flex justify-center">
                    <Button as="a" href="/projects" variant="outline">
                        Explore All Projects <ArrowRight className="ml-2 size-4" />
                    </Button>
                </div>
            </Section>

            {/* About */}
            <Section title="About Me" id="about">
                <Card className="p-8 md:p-10">
                    <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
                        <div className="max-w-3xl flex-1">
                            <p className="text-lg italic leading-relaxed text-gray-600 dark:text-gray-400">
                                &ldquo;Software engineering is not just about writing code; it&apos;s about solving
                                complex problems and creating tools that empower people.&rdquo;
                            </p>
                            <div className="mt-8 space-y-6 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                <p>
                                    Hey there! I&apos;m Ysacc, a developer with a deep-seated passion for creating
                                    high-performance, user-centric web applications. My journey began with a curiosity
                                    for how the internet works, and over 7+ years it has evolved into a career focused on
                                    building robust systems for leading enterprises in the banking and health industries.
                                </p>
                                <p>
                                    I thrive on challenges that require a mix of technical precision and creative thinking.
                                    Whether it&apos;s optimizing a complex data dashboard or architecting a reusable
                                    component library from scratch, my goal is always the same: delivering excellence that
                                    drives business value and enhances the user experience.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-square w-full max-w-[280px] shrink-0 overflow-hidden rounded-card border border-hairline/10 lg:sticky lg:top-24">
                            <Image
                                src="/me.jpg"
                                alt="Ysacc"
                                fill
                                className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                                sizes="(max-width: 768px) 100vw, 280px"
                            />
                        </div>
                    </div>
                </Card>
            </Section>
        </div>
    );
}
