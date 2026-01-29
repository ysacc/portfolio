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
    metadataBase: new URL(siteConfig.links.domain),
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.headline,
        url: siteConfig.links.domain,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
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
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased selection:bg-yellow-100 selection:text-yellow-900 dark:selection:bg-yellow-900 dark:selection:text-yellow-100`}>
                <ThemeProvider>
                    <BackgroundEffects />
                    <div className="relative flex min-h-screen flex-col">
                        <Navbar />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
