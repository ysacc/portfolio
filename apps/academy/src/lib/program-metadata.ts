import type { Metadata } from "next";
import { programPath, type Program } from "@/data/programs";
import { site } from "@/data/site";
import { liveHours } from "@/data/program-commerce";
export function programMetadata(p: Program): Metadata {
  const title =
    p.slug === "frontend-react"
      ? "Programa Frontend React: temario y proyecto integrador"
      : p.seoTitle;
  const description = p.schedule
    ? `${p.slug === "frontend-react" ? "Consulta el plan de estudios, módulos, requisitos y entregables de Frontend Developer con React." : p.seoDescription} ${p.duration}. ${liveHours(p)} h en vivo. ${p.modality}.`
    : p.seoDescription;
  return {
    title,
    description,
    alternates: { canonical: programPath(p) },
    openGraph: {
      title,
      description,
      url: programPath(p),
      type: "website",
      siteName: site.name,
      locale: "es_PE",
      images: [
        { url: "/opengraph-image", width: 1200, height: 630, alt: p.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
