import { InteriorPage } from "@/components/InteriorPage";
import { expertise } from "@/data/profile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Especialidades", "Frontend Engineering con React, Next.js y TypeScript. Arquitectura, microfrontends y sistemas de diseño, con Full Stack, AWS e IA aplicada.", "/especialidades");

export default function ExpertisePage() {
  return (
    <InteriorPage title="Especialidades" description="Profundidad en desarrollo Frontend y capacidades complementarias para construir productos empresariales de principio a fin.">
      <div className="grid gap-6 md:grid-cols-2">
        {expertise.map((item, index) => (
          <section key={item.id} className={`rounded-2xl border p-6 md:p-10 ${index === 0 ? "border-accent/40 bg-accent/5 md:col-span-2" : "border-hairline/15 bg-surface"}`}>
            <p className="eyebrow">{index === 0 ? "Especialidad principal" : "Fortaleza complementaria"}</p>
            <h2 className="mt-4 text-2xl font-semibold">{item.title}</h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted">{item.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Competencias de ${item.title}`}>
              {item.skills.map(skill => <li key={skill} className="rounded-lg border border-hairline/15 px-3 py-2 text-xs font-medium">{skill}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </InteriorPage>
  );
}
