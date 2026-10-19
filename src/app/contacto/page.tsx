import { InteriorPage } from "@/components/InteriorPage";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Contacto", "Contacta con Ysacc Roncal en Lima, Perú, para oportunidades Frontend Senior, Full Stack e integración de inteligencia artificial.", "/contacto");

export default function ContactPage() {
  return (
    <InteriorPage title="Construyamos algo que genere impacto." description="¿Buscas un desarrollador Frontend Senior con experiencia empresarial y competencias Full Stack e integración de IA? Hablemos de tu equipo y tu producto." contactCta={false}>
      <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-10">
          <h2 className="text-xl font-semibold">Conversemos</h2>
          <a className="editorial-link break-all text-lg" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <p className="mt-8 text-sm text-muted">Ubicación: {siteConfig.location}</p>
        </div>
        <div className="rounded-2xl border border-hairline/15 bg-surface p-6 md:p-10">
          <h2 className="text-xl font-semibold">Perfil profesional y CV</h2>
          <ul className="mt-6 space-y-5 text-sm font-medium">
            <li><a className="underline underline-offset-4" href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <span className="sr-only">(abre en otra pestaña)</span></a></li>
            <li><a className="underline underline-offset-4" href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">GitHub <span className="sr-only">(abre en otra pestaña)</span></a></li>
            <li><a className="underline underline-offset-4" href={siteConfig.links.resume}>Descargar CV en español</a></li>
          </ul>
        </div>
      </div>
    </InteriorPage>
  );
}
