import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { resumeData } from "@/data/resume";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Download, Mail, ExternalLink, GraduationCap, Award, Languages } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata = {
    title: "Resume | Ysacc Roncal",
    description: "Senior Front-End Developer Technical Resume and Professional Experience.",
};

export default function ResumePage() {
    return (
        <div className="pt-24 md:pt-32">
            <Section className="pb-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                            Professional Resume<span className="text-yellow-500">.</span>
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                            Detailed professional history, core competencies, and academic background.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button as="a" href={siteConfig.links.resume} target="_blank" variant="primary">
                            <Download className="mr-2 size-4" />
                            Download PDF
                        </Button>
                        <Button as="a" href={`mailto:${siteConfig.email}`} variant="outline">
                            <Mail className="mr-2 size-4" />
                            Copy Email
                        </Button>
                    </div>
                </div>
            </Section>

            <div className="section-container pb-24">
                {/* Main Grid: Left Column (Experience) + Right Column (Meta) */}
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-16">
                        {/* Experience */}
                        <div id="experience">
                            <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                Experience
                            </h2>
                            <ExperienceTimeline items={resumeData.experience} />
                        </div>

                        {/* Summary */}
                        <div id="summary">
                            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                Professional Summary
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                {resumeData.summary}
                            </p>
                        </div>
                    </div>

                    <aside className="space-y-12">
                        {/* Education */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <GraduationCap className="size-5 text-yellow-500" />
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Education</h2>
                            </div>
                            <div className="space-y-6">
                                {resumeData.education.map((edu, i) => (
                                    <div key={i}>
                                        <h3 className="font-bold text-gray-900 dark:text-gray-100">{edu.degree}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{edu.institution}</p>
                                        <p className="text-xs font-medium text-yellow-600 dark:text-yellow-500 mt-1">{edu.period}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Core Skills */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                < Award className="size-5 text-yellow-500" />
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Skills</h2>
                            </div>
                            <div className="space-y-4">
                                {Object.entries(resumeData.skills).map(([category, items]) => (
                                    <div key={category}>
                                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">
                                            {category}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map((skill) => (
                                                <span key={skill} className="rounded-lg bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700 dark:bg-gray-900 dark:text-gray-300 border border-gray-100 dark:border-gray-800">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Languages */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Languages className="size-5 text-yellow-500" />
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Languages</h2>
                            </div>
                            <ul className="space-y-3">
                                {resumeData.languages.map((lang) => (
                                    <li key={lang.name} className="flex items-center justify-between text-sm">
                                        <span className="font-semibold text-gray-900 dark:text-gray-100">{lang.name}</span>
                                        <span className="text-gray-500 dark:text-gray-400">{lang.level}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Certifications */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Award className="size-5 text-yellow-500" />
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Certifications</h2>
                            </div>
                            <ul className="space-y-2">
                                {resumeData.certifications.map((cert) => (
                                    <li key={cert} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                                        {cert}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
