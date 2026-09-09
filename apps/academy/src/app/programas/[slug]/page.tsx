import { notFound, permanentRedirect } from "next/navigation";
import { programs } from "@/data/programs";
import { ProgramLanding } from "@/components/program/ProgramLanding";
import { programMetadata } from "@/lib/program-metadata";
export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = programs.find((p) => p.slug === slug);
  if (!p) notFound();
  return programMetadata(p);
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = programs.find((p) => p.slug === slug);
  if (!p) notFound();
  if (slug === "mentoria") permanentRedirect("/mentorias");
  return <ProgramLanding program={p} />;
}
