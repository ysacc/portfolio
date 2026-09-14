import { notFound, permanentRedirect } from "next/navigation";
import { publicGuides, publicGuideBySlug } from "@/data/guides";
export function generateStaticParams() { return publicGuides.map(({ slug }) => ({ slug })); }
export default async function LegacyGuide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!publicGuideBySlug(slug)) notFound();
  permanentRedirect(`/guias/${slug}`);
}
