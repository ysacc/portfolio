import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { programs } from "@/data/programs";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/programas",
    "/mentorias",
    "/sobre-mi",
    "/contacto",
    ...programs.map((p) => "/programas/" + p.slug),
  ].map((path) => ({
    url: site.url + path,
    changeFrequency: "monthly",
    priority: path ? 0.7 : 1,
  }));
}
