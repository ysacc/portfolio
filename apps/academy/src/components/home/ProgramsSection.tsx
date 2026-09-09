import Link from "next/link";
import { Code2, ArrowUpRight } from "lucide-react";
import { programs, programPath, type Program } from "@/data/programs";
export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className={`program-card ${program.featured ? "featured" : ""}`}>
      <div className="card-top">
        <span className="program-number">/{program.number}</span>
        {program.featured ? (
          <span className="badge">PROGRAMA DESTACADO</span>
        ) : (
          <Code2 size={23} />
        )}
      </div>
      <p className="level">
        {program.level} <span>· {program.modality}</span>
      </p>
      <h3>{program.title}</h3>
      <p>{program.description}</p>
      <p className="card-duration">{program.duration}</p>
      <div className="tags">
        {program.technologies.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <Link className="card-link" href={programPath(program)}>
        Ver programa <ArrowUpRight size={19} />
      </Link>
    </article>
  );
}
export function ProgramGrid() {
  return (
    <div className="program-grid">
      {programs.map((program) => (
        <ProgramCard key={program.slug} program={program} />
      ))}
    </div>
  );
}
export function ProgramsSection() {
  return (
    <section className="section container" id="programas">
      <div className="section-heading">
        <p className="eyebrow">02 — TU SIGUIENTE PASO</p>
        <div>
          <h2>Una ruta para tu momento.</h2>
          <p>
            Empieza con buenas bases o lleva tu experiencia al siguiente nivel.
          </p>
        </div>
      </div>
      <ProgramGrid />
    </section>
  );
}
