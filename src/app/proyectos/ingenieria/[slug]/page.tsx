import Link from "next/link";
import { notFound } from "next/navigation";
import { InteriorPage } from "@/components/InteriorPage";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { engineeringCases } from "@/data/engineering";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return engineeringCases.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = engineeringCases.find(item => item.slug === slug);
  if (!study) return { title: "Caso no encontrado" };
  return pageMetadata(study.title, study.summary, `/proyectos/ingenieria/${slug}`);
}

export default async function EngineeringDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = engineeringCases.find(item => item.slug === slug);
  if (!study) notFound();

  return (
    <InteriorPage title={study.title} description={study.summary}>
      <Link href="/proyectos#ingenieria" className="text-sm underline underline-offset-4">Volver a Ingeniería en acción</Link>
      <aside aria-label="Alcance y evidencia del caso" className="my-8 rounded-2xl border border-accent/30 bg-accent/5 p-6">
        <p className="font-semibold">Experiencia documentada y análisis conceptual</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">Fuente: {study.source} <Link href="/experiencia" className="underline underline-offset-4">Consultar experiencia</Link>.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">Pendiente de validación: {study.pending}</p>
      </aside>
      <div className="max-w-4xl space-y-10">
        {study.sections.map((section, index) => (
          <section key={section.title}>
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <p className="mt-4 leading-relaxed text-muted">{section.text}</p>
            {index === 2 && <>
              <ArchitectureDiagram study={study} />
              <h2 className="mt-10 text-2xl font-semibold">Tecnologías utilizadas</h2>
              <p className="mt-3 text-sm text-muted">Documentadas en las experiencias citadas; su presencia no confirma la topología del diagrama.</p>
              <ul className="mt-4 flex flex-wrap gap-2">{study.stack.map(tech => <li key={tech} className="rounded-lg border border-hairline/15 px-3 py-2 text-sm">{tech}</li>)}</ul>
            </>}
          </section>
        ))}
      </div>
      <nav aria-label="Otros casos de ingeniería" className="mt-12 border-t border-hairline/15 pt-8">
        <h2 className="text-xl font-semibold">Seguir explorando</h2>
        <ul className="mt-4 flex flex-col gap-4 sm:flex-row sm:flex-wrap">{engineeringCases.filter(item => item.slug !== slug).map(item => <li key={item.slug}><Link className="underline underline-offset-4" href={`/proyectos/ingenieria/${item.slug}`}>{item.title}</Link></li>)}</ul>
      </nav>
    </InteriorPage>
  );
}
