import type { Metadata } from "next";
import { programPath, type Program } from "@/data/programs";
export function programMetadata(p: Program): Metadata {
  return {
    title: p.seoTitle,
    description: p.seoDescription,
    alternates: { canonical: programPath(p) },
    openGraph: {
      title: p.seoTitle,
      description: p.seoDescription,
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
      description: p.seoDescription,
      images: ["/opengraph-image"],
    },
  };
}
