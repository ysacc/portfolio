import type { Metadata } from "next";
import { programPath, type Program } from "@/data/programs";
import { liveHours } from "@/data/program-commerce";
export function programMetadata(p: Program): Metadata {
  const description = p.schedule ? `${p.seoDescription} ${p.duration}. ${liveHours(p)} h en vivo. ${p.modality}.` : p.seoDescription;
  return {
    title: p.seoTitle,
    description,
    alternates: { canonical: programPath(p) },
    openGraph: {
      title: p.seoTitle,
      description,
      url: programPath(p),
      type: "website",
      locale: "es_PE",
      images: [
        { url: "/opengraph-image", width: 1200, height: 630, alt: p.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: p.seoTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}
