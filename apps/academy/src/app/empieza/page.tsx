import Link from "next/link";
import { programs, programPath } from "@/data/programs";
import { landingMetadata } from "@/lib/landing-metadata";
import { Pathfinder } from "@/components/Pathfinder";

export const metadata = landingMetadata(
  "/empieza",
  "Qué curso de programación elegir",
  "Descubre qué ruta de aprendizaje encaja mejor con tu nivel actual: programación desde cero, Frontend React o Full Stack JavaScript.",
);
const routes = programs.filter((p) =>
  ["desde-cero", "frontend-react", "full-stack"].includes(p.slug),
);
export default function StartPage() {
  return (
    <div className="container section path-page">
      <p className="eyebrow">TU SIGUIENTE PASO EN DESARROLLO WEB</p>
      <h1>Qué curso de programación elegir</h1>
      <p className="section-copy">
        Tu ruta depende de lo que ya puedes construir y de lo que quieres
        aprender. Este diagnóstico sencillo te ayuda a comparar opciones; no es
        un examen ni una certificación de nivel.
      </p>
      <Pathfinder
        routes={routes.map((p) => ({
          slug: p.slug,
          title: p.title,
          duration: p.duration,
          modality: p.modality,
          href:
            p.slug === "frontend-react" ? "/frontend-react" : programPath(p),
        }))}
      />
      <section className="section">
        <h2>Tres rutas, distintos puntos de partida.</h2>
        <p className="section-copy">
          Si aún necesitas reforzar HTML, CSS o JavaScript, empieza por los
          fundamentos. Con esas bases puedes avanzar hacia React. Si ya
          construyes con React y consumes APIs, revisa Full Stack para ampliar
          tu trabajo al servidor y los datos.
        </p>
        <div className="route-grid">
          {routes.map((p) => (
            <article key={p.slug}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p>
                {p.duration} · {p.modality}
              </p>
              <Link className="text-link" href={programPath(p)}>
                Consultar requisitos y programa →
              </Link>
            </article>
          ))}
        </div>
        <p className="route-help">
          La recomendación considera tus fundamentos antes de tu objetivo final.
          Puedes revisar todas las rutas y{" "}
          <Link href="/contacto" className="text-link">
            pedir orientación
          </Link>{" "}
          si tu experiencia está entre dos niveles.
        </p>
      </section>
    </div>
  );
}
