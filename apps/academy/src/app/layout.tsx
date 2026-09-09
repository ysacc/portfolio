import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Sections";
import { site, description } from "@/data/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Ysacc Roncal Academy | Aprende Desarrollo Web Profesional",
    template: "%s | Ysacc Roncal Academy",
  },
  description,
  openGraph: {
    title: site.name,
    description,
    siteName: site.name,
    locale: "es_PE",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: site.name, description },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
