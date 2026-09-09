import { notFound } from "next/navigation";
import Link from "next/link";
import { programs } from "@/data/programs";
import { site } from "@/data/site";
import { LearningPath, Methodology, CTASection } from "@/components/Sections";
export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  return {
    title: p?.title || "Programa no encontrado",
    description: p?.description,
    alternates: { canonical: `/programas/${slug}` },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = programs.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <section className="container section detail-hero">
        <Link className="text-link" href="/programas">
          ← Todos los programas
        </Link>
        <p className="eyebrow">
          {p.level} · {site.modality}
        </p>
        <h1>{p.title}</h1>
        <p className="section-copy">{p.description}</p>
        <div className="tags">
          {p.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="outcome">
          <p>
            <strong>Lo que vas a lograr</strong>
            <br />
            {p.outcome}
          </p>
        </div>
        <Link className="button" href={`/contacto?programa=${p.slug}`}>
          Quiero conocer más ↗
        </Link>
      </section>
      {p.featured && <LearningPath />}
      <Methodology />
      <CTASection />
    </>
  );
}
