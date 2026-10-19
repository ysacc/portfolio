import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { CommandPaletteLauncher } from "@/components/CommandPaletteLauncher";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: {
        default: "Ysacc Roncal | Desarrollador Frontend Senior, Full Stack e IA",
        template: `%s | ${siteConfig.name}`,
    },
    description: "Portafolio de Ysacc Roncal, desarrollador Frontend Senior especializado en React, Next.js y TypeScript, con experiencia Full Stack, AWS e integración de inteligencia artificial en proyectos empresariales.",
    keywords: siteConfig.keywords,
    metadataBase: new URL(siteConfig.links.domain),
    openGraph: {
        title: `${siteConfig.name} | ${siteConfig.headline}`,
        description: "Portafolio de Ysacc Roncal, desarrollador Frontend Senior especializado en React, Next.js y TypeScript, con experiencia Full Stack, AWS e integración de inteligencia artificial en proyectos empresariales.",
        url: siteConfig.links.domain,
        siteName: siteConfig.name,
        locale: "es_PE",
        type: "website",
        images: [
            {
                url: siteConfig.ogImage,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} | ${siteConfig.headline}`,
        description: "Portafolio de Ysacc Roncal, desarrollador Frontend Senior especializado en React, Next.js y TypeScript, con experiencia Full Stack, AWS e integración de inteligencia artificial en proyectos empresariales.",
        images: [siteConfig.ogImage],
        creator: "@ysacc_roncal",
    },
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: "./",
    },
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: siteConfig.ogImage,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.name,
        jobTitle: siteConfig.headline,
        description: "Portafolio de Ysacc Roncal, desarrollador Frontend Senior especializado en React, Next.js y TypeScript, con experiencia Full Stack, AWS e integración de inteligencia artificial en proyectos empresariales.",
        url: siteConfig.links.domain,
        sameAs: [
            siteConfig.links.linkedin,
            siteConfig.links.github,
            siteConfig.links.twitter,
        ],
        address: {
            "@type": "PostalAddress",
            addressLocality: "Lima",
            addressCountry: "PE",
        },
    };

    return (
        <html className="dark" lang="es" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: "try{document.documentElement.classList.toggle('dark',localStorage.getItem('theme')!=='light')}catch{}" }} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} font-sans antialiased selection:bg-cyan-100 selection:text-cyan-900 dark:selection:bg-cyan-900 dark:selection:text-cyan-100`}>
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg focus:outline-none focus:ring-2 focus:ring-accent-strong focus:ring-offset-2"
                >
                    Saltar al contenido
                </a>
                <ThemeProvider>
                    <BackgroundEffects />
                    <CommandPaletteLauncher />
                    <div id="site-shell" className="relative flex min-h-screen flex-col">
                        <Navbar />
                        <main id="main-content" tabIndex={-1} className="flex-1">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
