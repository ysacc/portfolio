import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { programs, programPath } from "@/data/programs";
import { publicGuides } from "@/data/guides";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/programas",
    "/guias",
    ...publicGuides.map((guide) => `/guias/${guide.slug}`),
    "/sobre-mi",
    "/contacto",
    ...programs.map(programPath),
  ].map((path) => ({
    url: site.url + path,
    changeFrequency: "monthly",
    priority: !path ? 1 : path === "/guias" ? 0.8 : path.startsWith("/programas") ? 0.9 : 0.7,
  }));
}
