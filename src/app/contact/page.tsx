import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/site";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export const metadata = {
    title: "Contact | Ysacc Roncal",
    description: "Get in touch for Senior Front-End and Full Stack opportunities.",
};

export default function ContactPage() {
    return (
        <div className="pt-24 md:pt-32">
            <Section className="pb-10">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                    Get in Touch<span className="text-yellow-500">.</span>
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                    Have a project in mind or a position available? I'm always open to discussing new opportunities.
                </p>
            </Section>

            <div className="section-container pb-24">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Contact Information</h2>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                You can reach me through my social channels or by sending an email directly.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-yellow-200 hover:shadow-md dark:border-gray-900 dark:bg-gray-950"
                            >
                                <div className="flex size-12 items-center justify-center rounded-xl bg-yellow-100 dark:bg-yellow-900/30">
                                    <Mail className="size-6 text-yellow-600 dark:text-yellow-500" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Me</p>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-1">{siteConfig.email}</p>
                                </div>
                            </a>

                            <a
                                href={siteConfig.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-md dark:border-gray-900 dark:bg-gray-950"
                            >
                                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                                    <Linkedin className="size-6 text-blue-600 dark:text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Connect</p>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-1">ysacc-roncal</p>
                                </div>
                            </a>

                            <a
                                href={siteConfig.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-900 dark:bg-gray-950"
                            >
                                <div className="flex size-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-900/50">
                                    <Github className="size-6 text-gray-900 dark:text-gray-100" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Source Code</p>
                                    <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-1">@ysacc</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="rounded-3xl border border-gray-100 bg-white p-8 dark:border-gray-900 dark:bg-gray-950 shadow-sm">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-8">Send a Message</h2>
                        <form action="https://formspree.io/f/samironcal@gmail.com" method="POST" className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-gray-700 dark:text-gray-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-yellow-400 dark:border-gray-900 dark:bg-gray-900 dark:text-gray-100"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-yellow-400 dark:border-gray-900 dark:bg-gray-900 dark:text-gray-100"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={6}
                                    required
                                    placeholder="How can I help you?"
                                    className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-yellow-400 dark:border-gray-900 dark:bg-gray-900 dark:text-gray-100"
                                />
                            </div>
                            <Button type="submit" variant="primary" className="w-full py-4">
                                <Send className="mr-2 size-4" />
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
