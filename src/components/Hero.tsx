"use client";

import { siteConfig } from "@/data/site";
import { SocialPill } from "./SocialPill";
import { Linkedin, Github, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "./Button";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
    return (
        <section className="relative pb-20 pt-32 md:pb-28 md:pt-48">
            <div className="section-container">
                <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
                    <motion.div variants={item}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-hairline/12 bg-surface/60 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                            </span>
                            Available for new projects
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl"
                    >
                        Senior Full Stack Developer
                        <span className="block text-gradient">React · Next.js · TypeScript · Node.js</span>
                    </motion.h1>

                    <motion.p variants={item} className="mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-400">
                        {siteConfig.subheadline}
                    </motion.p>

                    <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
                        <Button as="a" href={siteConfig.links.resume} target="_blank" variant="primary">
                            <Download className="mr-2 size-4" />
                            Download Resume
                        </Button>
                        <Button as="a" href="/contact" variant="outline">
                            <Sparkles className="mr-2 size-4" />
                            Let&apos;s work together
                        </Button>
                    </motion.div>

                    <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
                        <SocialPill href={siteConfig.links.linkedin} icon={Linkedin} label="LinkedIn" />
                        <SocialPill href={siteConfig.links.github} icon={Github} label="GitHub" />
                        <SocialPill href={`mailto:${siteConfig.email}`} icon={Mail} label="Email" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
