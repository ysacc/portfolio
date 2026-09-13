import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { programs, programPath } from "@/data/programs";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/programas",
    "/sobre-mi",
    "/contacto",
    ...programs.map(programPath),
  ].map((path) => ({
    url: site.url + path,
    changeFrequency: "monthly",
    priority: path ? 0.7 : 1,
  }));
}
