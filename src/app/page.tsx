import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectCard } from "@/components/ProjectCard";
import { resumeData } from "@/data/resume";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/Button";
import { ArrowRight, Code2, Cpu, Globe, Rocket } from "lucide-react";

export default function Home() {
    const topProjects = projectsData.slice(0, 4);
    const featuredExperience = resumeData.experience.slice(0, 3);

    return (
        <div className="flex flex-col">
            <Hero />

            {/* Tech Stack Section */}
            <Section title="Tech Stack" id="stack" className="bg-gray-50/50 dark:bg-gray-950/20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:shadow-none">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
                            <Code2 className="size-5 text-yellow-600 dark:text-yellow-500" />
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-gray-100">Front-End</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">React, Next.js, TypeScript, TailwindCSS, Design Systems.</p>
                    </div>
                    <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:shadow-none">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                            <Cpu className="size-5 text-blue-600 dark:text-blue-500" />
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-gray-100">Back-End</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Node.js, Express, Integration with REST & GraphQL APIs.</p>
                    </div>
                    <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:shadow-none">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                            <Globe className="size-5 text-green-600 dark:text-green-500" />
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-gray-100">Cloud & DevOps</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">AWS, Google Cloud (GCP), CI/CD, GitLab, Docker.</p>
                    </div>
                    <div className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 dark:shadow-none">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                            <Rocket className="size-5 text-purple-600 dark:text-purple-500" />
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-gray-100">Testing & Quality</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Unit Testing with Jest, Code Reviews, Agile Methodologies.</p>
                    </div>
                </div>
            </Section>

            {/* Experience Section */}
            <Section title="Experience" id="experience">
                <ExperienceTimeline items={featuredExperience} />
                <div className="mt-12 flex justify-center md:justify-start">
                    <Button as="a" href="/resume" variant="outline">
                        View Full Resume <ArrowRight className="ml-2 size-4" />
                    </Button>
                </div>
            </Section>

            {/* Projects Section */}
            <Section title="Featured Projects" id="projects" className="bg-gray-50/50 dark:bg-gray-950/20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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

            {/* About Section */}
            <Section title="About Me" id="about">
                <div className="max-w-3xl">
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic">
                        "Software engineering is not just about writing code; it's about solving complex problems and creating tools that empower people."
                    </p>
                    <div className="mt-8 space-y-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        <p>
                            Hey there! I'm Ysacc, a Senior Front-End Developer with a deep-seated passion for creating high-performance, user-centric web applications. My journey began with a curiosity for how things work on the internet, and over the past 7+ years, it has evolved into a professional career focused on building robust systems for leading enterprises in banking and health industries.
                        </p>
                        <p>
                            I thrive on challenges that require a mix of technical precision and creative thinking. Whether it's optimizing a complex data dashboard for high efficiency or architecting a reusable component library from scratch, my goal is always the same: delivering excellence that drives business value and enhances the user experience.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
