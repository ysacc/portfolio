import { InteriorPage } from "@/components/InteriorPage";
import { EngineeringCases } from "@/components/EngineeringCases";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { projectsData } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Proyectos y casos de estudio", "Proyectos de Ysacc Roncal: interfaces empresariales, arquitectura frontend e integración de IA para Principal e Inclusión Empresarial.", "/proyectos");

export default function ProjectsPage() {
  return (
    <InteriorPage title="Proyectos y casos de estudio" description="Una selección de plataformas, interfaces y herramientas: el problema, mi contribución y las tecnologías utilizadas.">
      <section id="ingenieria" aria-labelledby="engineering-title" className="mb-16">
        <h2 id="engineering-title" className="mb-4 text-3xl font-semibold">Ingeniería en acción</h2>
        <p className="mb-8 max-w-3xl leading-relaxed text-muted">Casos técnicos basados en experiencia empresarial, con diagramas conceptuales y detalles pendientes de validación identificados.</p>
        <EngineeringCases />
      </section>
      <ProjectExplorer projects={projectsData} />
    </InteriorPage>
  );
}
