import { siteConfig } from "@/data/site";
import { SocialPill } from "./SocialPill";
import { Linkedin, Github, Mail, Download } from "lucide-react";
import { Button } from "./Button";

export function Hero() {
    return (
        <section className="pb-20 pt-32 md:pb-32 md:pt-48">
            <div className="section-container">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl">
                        {siteConfig.headline}
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
                        {siteConfig.subheadline}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Button as="a" href={siteConfig.links.resume} target="_blank" variant="primary">
                            <Download className="mr-2 size-4" />
                            Download Resume
                        </Button>
                        <Button as="a" href="#contact" variant="secondary">
                            Contact Me
                        </Button>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                        <SocialPill href={siteConfig.links.linkedin} icon={Linkedin} label="LinkedIn" />
                        <SocialPill href={siteConfig.links.github} icon={Github} label="GitHub" />
                        <SocialPill href={`mailto:${siteConfig.email}`} icon={Mail} label="Email" />
                    </div>
                </div>
            </div>
        </section>
    );
}
