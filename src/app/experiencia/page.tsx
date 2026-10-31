import { InteriorPage } from "@/components/InteriorPage";
import Link from "next/link";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { resumeData } from "@/data/resume";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Experiencia profesional", "Trayectoria de Ysacc Roncal: desarrollo Frontend Senior, arquitectura y liderazgo técnico en banca, salud, educación y retail.", "/experiencia");

export default function ExperiencePage() {
  return (
    <InteriorPage title="Experiencia profesional" description={resumeData.summary}>
      <a href={siteConfig.links.resume} className="mb-12 inline-flex rounded-xl border border-accent/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent/10">Descargar CV en español</a>
      <section aria-labelledby="experience-focus" className="mb-12 rounded-2xl border border-hairline/15 bg-surface p-6">
        <h2 id="experience-focus" className="text-2xl font-semibold">Arquitectura, integración y liderazgo</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">Diseño de SPA y microfrontends para banca en Entelgy; liderazgo técnico y participación en CI/CD en IPS Consulting; dashboards y notificaciones en SafetyMind. La trayectoria completa y las responsabilidades por empresa se conservan a continuación.</p>
        <Link href="/proyectos#ingenieria" className="editorial-link">Explorar estos desafíos técnicos</Link>
      </section>
      <ExperienceTimeline items={resumeData.experience} />
    </InteriorPage>
  );
}
