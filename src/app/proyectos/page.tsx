import { InteriorPage } from "@/components/InteriorPage";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { projectsData } from "@/data/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Proyectos y casos de estudio", "Proyectos de Ysacc Roncal: interfaces empresariales, arquitectura frontend e integración de IA para Principal e Inclusión Empresarial.", "/proyectos");

export default function ProjectsPage() {
  return <InteriorPage title="Proyectos y casos de estudio" description="Una selección de plataformas, interfaces y herramientas: el problema, mi contribución y las tecnologías utilizadas."><ProjectExplorer projects={projectsData} /></InteriorPage>;
}
