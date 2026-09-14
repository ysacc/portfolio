import { programs } from "@/data/programs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { publicGuides, publicGuideBySlug } from "@/data/guides";
import { guideMetadata, guideSchema } from "@/lib/guide-metadata";
import { GuideProgramCTA } from "@/components/guides/GuideProgramCTA";

export function generateStaticParams() {
  return publicGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const guide = publicGuideBySlug((await params).slug);
  if (!guide) notFound();
  return guideMetadata(guide);
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = publicGuideBySlug(slug);

  if (!guide) notFound();

  return (
    <article className="container section campus-guide-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema(guide)).replace(/</g, "\\u003c") }} />
      <nav aria-label="Breadcrumb"><Link href="/">Inicio</Link> / <Link href="/guias">Guías</Link> / <span aria-current="page">{guide.title}</span></nav>
      <Link className="text-link" href="/guias">
        <ArrowLeft size={16} /> Volver a guías
      </Link>
      <div className="campus-guide-header">
        <p className="eyebrow">GUÍA / {guide.category}</p>
        <h1>{guide.title}</h1>
        <p className="section-copy">{guide.description}</p>
      </div>

      <div className="campus-guide-meta">
        <span>{guide.level}</span>
        <span>{guide.estimatedMinutes ?? 15} min</span>
      </div>

      {guide.article ? guide.article.map((section) => (
        <section className="campus-guide-section" key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
          {section.command && <pre className="code-block"><code>{section.command}</code></pre>}
        </section>
      )) : <>
      <section className="campus-guide-section">
        <h2>Objetivo</h2>
        <p>
          Te ayudamos a dejar tu entorno listo para seguir las clases, practicar
          y construir con buena base técnica.
        </p>
      </section>

      <section className="campus-guide-section">
        <h2>Requisitos</h2>
        <ul className="plain-list">
          <li>Equipo con acceso a internet.</li>
          <li>Cuenta de GitHub activa.</li>
          <li>Terminal del sistema operativo disponible.</li>
        </ul>
      </section>

      <section className="campus-guide-section">
        <h2>Pasos</h2>
        <ol className="guide-steps">
          {guide.steps.map((step, index) => (
            <li key={`${guide.slug}-${step.title}`}>
              <strong>
                {String(index + 1).padStart(2, "0")} · {step.title}
              </strong>
              <p>{step.description}</p>
              {step.link && (
                <a
                  className="text-link"
                  href={step.link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {step.link.label} <ArrowUpRight size={14} />
                </a>
              )}
              {step.command && (
                <pre className="code-block">
                  <code>{step.command}</code>
                </pre>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="campus-guide-section">
        <h2>Verificación final</h2>
        <ul className="plain-list">
          <li>La configuración se puede repetir en otra máquina.</li>
          <li>El flujo de trabajo queda claro antes de empezar a programar.</li>
          <li>El entorno es útil para tus tareas y repositorios.</li>
        </ul>
      </section>

      <section className="campus-guide-section">
        <h2>Errores comunes</h2>
        <ul className="plain-list">
          <li>No instalar la versión recomendada de la herramienta.</li>
          <li>Saltarse la verificación final.</li>
          <li>Dejar la configuración sin documentar.</li>
        </ul>
      </section>

      </>}
      {guide.relatedSlugs && <section className="campus-guide-section">
        <h2>Guías relacionadas</h2>
        <ul className="plain-list">{guide.relatedSlugs.map((slug) => {
          const related = publicGuideBySlug(slug);
          return related ? <li key={slug}><Link href={`/guias/${slug}`}>{related.title}</Link></li> : null;
        })}</ul>
      </section>}
      {guide.secondaryProgramSlug && <p>Si necesitas empezar por los fundamentos, conoce <Link href={`/programas/${guide.secondaryProgramSlug}`}>{programs.find((p) => p.slug === guide.secondaryProgramSlug)!.title}</Link>.</p>}

      {guide.resources && guide.resources.length > 0 && (
        <section className="campus-guide-section">
          <h2>Recursos</h2>
          <ul className="resource-list compact">
            {guide.resources.map((resource) => (
              <li key={resource.label}>
                <a href={resource.url} target="_blank" rel="noreferrer">
                  {resource.label} <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <GuideProgramCTA slug={guide.slug} programSlug={guide.programSlug} title={programs.find((p) => p.slug === guide.programSlug)!.title} />
      <div className="actions guide-actions">
        <Link className="button" href="/guias">
          Volver a guías <Check size={16} />
        </Link>
      </div>
    </article>
  );
}
