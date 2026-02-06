import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.headline,
    keywords: siteConfig.keywords,
    metadataBase: new URL(siteConfig.links.domain),
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.headline,
        url: siteConfig.links.domain,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.headline,
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
        icon: siteConfig.ogImage,
        shortcut: siteConfig.ogImage,
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
        description: siteConfig.subheadline,
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
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} font-sans antialiased selection:bg-yellow-100 selection:text-yellow-900 dark:selection:bg-yellow-900 dark:selection:text-yellow-100`}>
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-yellow-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                >
                    Skip to content
                </a>
                <ThemeProvider>
                    <BackgroundEffects />
                    <div className="relative flex min-h-screen flex-col">
                        <Navbar />
                        <main id="main-content" className="flex-1">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
