import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { guides, guideBySlug } from "@/data/campus/guides";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export const metadata = {
  title: "Guías del Campus",
  description:
    "Guías de instalación, GitHub, prácticas y trabajo profesional para alumnos de Academy.",
};

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guideBySlug[slug];

  if (!guide) notFound();

  return (
    <article className="container section campus-guide-page">
      <Link className="text-link" href="/campus">
        <ArrowLeft size={16} /> Volver al Campus
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

      <section className="campus-guide-section">
        <h2>Objetivo</h2>
        <p>
          Te ayudamos a dejar tu entorno listo para seguir las clases, practicar y
          construir con buena base técnica.
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

      <div className="actions guide-actions">
        <Link className="button" href="/campus">
          Volver al Campus <Check size={16} />
        </Link>
      </div>
    </article>
  );
}
