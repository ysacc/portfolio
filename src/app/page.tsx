import Link from "next/link";
import { Hero } from "@/components/Hero";
import { EngineeringCases } from "@/components/EngineeringCases";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactCta } from "@/components/InteriorPage";
import { expertise } from "@/data/profile";
import { projectsData } from "@/data/projects";

const featuredProjects = projectsData.filter(project =>
  ["principal-ai-assistant", "scientific-research-ai"].includes(project.slug)
);

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="ingenieria" title="Ingeniería en acción" className="py-12 md:py-16">
        <p className="mb-8 max-w-3xl leading-relaxed text-muted">Tres lecturas técnicas de mi experiencia: problemas, decisiones y límites. Diagramas ilustrativos y alcance documentado en cada caso.</p>
        <EngineeringCases />
      </Section>
      <Section title="Frontend como especialidad. Visión integral del producto." className="py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {expertise.map((item, index) => (
            <Link key={item.id} href="/especialidades" className={`expertise-summary group flex flex-col rounded-2xl border p-6 transition-colors hover:border-accent/60 ${index === 0 ? "border-accent/40 bg-accent/5" : "border-hairline/15 bg-surface"}`}>
              <p className="eyebrow">{index === 0 ? "Especialidad principal" : "Capacidad complementaria"}</p>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
              <span className="editorial-link">Conocer mi enfoque<span className="sr-only"> en {item.title}</span></span>
            </Link>
          ))}
        </div>
      </Section>
      <Section title="IA aplicada en proyectos reales" className="py-12 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map(project => <ProjectCard key={project.slug} {...project} compact />)}
        </div>
        <Link className="editorial-link" href="/proyectos">Ver todos los proyectos</Link>
      </Section>
      <ContactCta />
    </>
  );
}
