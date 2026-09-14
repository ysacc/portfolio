import type { Metadata } from "next";
import type { Guide } from "@/data/guides";
import { site } from "@/data/site";
export function guideMetadata(guide: Guide): Metadata {
  const title = `Cómo ${guide.title.charAt(0).toLowerCase()}${guide.title.slice(1)}`;
  const url = `/guias/${guide.slug}`;
  return { title, description: guide.description, alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: { title, description: guide.description, url, type: "article", locale: "es_PE", images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description: guide.description, images: ["/opengraph-image"] } };
}
export function guideSchema(guide: Guide) {
  const url = `${site.url}/guias/${guide.slug}`;
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "TechArticle", headline: guide.title, description: guide.description, url, mainEntityOfPage: url, inLanguage: "es", publisher: { "@type": "Organization", name: site.name, url: site.url } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
      { "@type": "ListItem", position: 2, name: "Guías", item: `${site.url}/guias` },
      { "@type": "ListItem", position: 3, name: guide.title, item: url },
    ] },
  ] };
}
