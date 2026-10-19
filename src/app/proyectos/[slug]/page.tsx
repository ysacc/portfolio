import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { InteriorPage } from "@/components/InteriorPage";
import { Button } from "@/components/Button";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";

export function generateStaticParams() {
  return projectsData.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find(project => project.slug === slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    ...pageMetadata(project.title, project.shortDescription, `/proyectos/${slug}`),
    openGraph: { title: project.title, description: project.shortDescription, images: [{ url: project.image }], url: `/proyectos/${slug}`, locale: "es_PE" },
    twitter: { card: "summary_large_image", title: project.title, description: project.shortDescription, images: [project.image] },
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find(project => project.slug === slug);
  if (!project) notFound();

  return (
    <InteriorPage title={project.title} description={project.shortDescription}>
      <Link href="/proyectos" className="mb-6 inline-block text-sm font-medium underline underline-offset-4">Volver a proyectos</Link>
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-hairline/15 bg-surface">
        <Image src={project.image} alt={project.image.endsWith(".svg") ? `Esquema conceptual de ${project.title}, sin datos de clientes` : project.title} fill priority sizes="(max-width: 1100px) 100vw, 1100px" className="object-cover" />
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold">Descripción del proyecto</h2>
            <p className="mt-5 leading-relaxed text-muted">{project.description}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Mi contribución</h2>
            <p className="mt-4 text-sm font-medium text-accent-strong dark:text-accent">{project.role}</p>
            <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-muted">{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
          </section>
        </div>
        <aside className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold">Tecnologías utilizadas</h2>
            <ul className="mt-5 flex flex-wrap gap-2">{project.stack.map(tech => <li key={tech} className="rounded-lg border border-hairline/15 px-3 py-2 text-xs font-medium">{tech}</li>)}</ul>
          </section>
          <div className="flex flex-wrap gap-3">
            {project.links.github && <Button as="a" href={project.links.github} target="_blank" rel="noopener noreferrer" variant="outline">Ver código</Button>}
            {project.links.live && <Button as="a" href={project.links.live} target="_blank" rel="noopener noreferrer" variant="outline">Ver sitio</Button>}
          </div>
        </aside>
      </div>
    </InteriorPage>
  );
}
