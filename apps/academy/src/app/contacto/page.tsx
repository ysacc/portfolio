import { ContactForm } from "@/components/ContactForm";
import { programs } from "@/data/programs";
import { site } from "@/data/site";
export const metadata = {
  title: "Conversemos",
  alternates: { canonical: "/contacto" },
};
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ programa?: string }>;
}) {
  const { programa } = await searchParams;
  return (
    <section className="container section contact-layout">
      <div>
        <p className="eyebrow">EMPECEMOS POR UNA CONVERSACIÓN</p>
        <h1>
          ¿Qué quieres
          <br />
          <em>construir?</em>
        </h1>
        <p className="section-copy">
          Cuéntame dónde estás y adónde quieres llegar. Te ayudaré a encontrar
          una ruta que tenga sentido para ti.
        </p>
        <p>Formato, fechas y horarios se coordinan antes de empezar.</p>
        <a className="text-link" href={`mailto:${site.email}`}>
          {site.email} ↗
        </a>
      </div>
      <ContactForm
        email={site.email}
        whatsapp={site.whatsapp}
        programs={programs.map(({ slug, title }) => ({ slug, title }))}
        selected={programs.some((p) => p.slug === programa) ? programa! : ""}
      />
    </section>
  );
}
