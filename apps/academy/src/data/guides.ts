// Shared catalog; only explicitly public guides can reach acquisition routes.
import { guides } from "./campus/guides";
export type { CampusGuide as Guide } from "./campus/guides";
export const publicGuides = guides.filter((guide) => guide.visibility === "public");
export const publicGuideBySlug = (slug: string) => publicGuides.find((guide) => guide.slug === slug);
