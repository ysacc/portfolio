import Link from "next/link";
import { programs, programPath } from "@/data/programs";
export function ProgramNextSteps({ slugs }: { slugs: string[] }) {
  return (
    <section className="container section next-routes">
      <p className="eyebrow">07 / ¿QUÉ SIGUE?</p>
      <h2>Tu aprendizaje tiene un siguiente paso.</h2>
      <div>
        {slugs.map((slug) => {
          const p = programs.find((item) => item.slug === slug);
          return p ? (
            <Link href={programPath(p)} key={slug}>
              <span>{p.level}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <strong>Empezar esta ruta ↗</strong>
            </Link>
          ) : null;
        })}
      </div>
    </section>
  );
}
