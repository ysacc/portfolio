import { InteriorPage } from "@/components/InteriorPage";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { resumeData } from "@/data/resume";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Experiencia profesional", "Trayectoria de Ysacc Roncal: desarrollo Frontend Senior, arquitectura y liderazgo técnico en banca, salud, educación y retail.", "/experiencia");

export default function ExperiencePage() {
  return (
    <InteriorPage title="Experiencia profesional" description={resumeData.summary}>
      <a href={siteConfig.links.resume} className="mb-12 inline-flex rounded-xl border border-accent/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent/10">Descargar CV en español</a>
      <ExperienceTimeline items={resumeData.experience} />
    </InteriorPage>
  );
}
