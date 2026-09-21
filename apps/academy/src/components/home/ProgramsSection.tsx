import Link from "next/link";
import { TrackedLink } from "@/components/shared/TrackedLink";
import { formatPrice, liveHours } from "@/data/program-commerce";
import { MobileDisclosure } from "@/components/MobileDisclosure";
import { Code2, ArrowUpRight } from "lucide-react";
import { programs, programPath, type Program } from "@/data/programs";
const audienceCopy: Record<string, string> = {
  "desde-cero":
    "Para ti si todavía no tienes una base sólida en programación web.",
  "frontend-react":
    "Para ti si quieres construir aplicaciones frontend con un flujo profesional.",
  "full-stack":
    "Para ti si quieres trabajar frontend, backend y bases de datos.",
};
export function ProgramCard({
  program,
  placement,
}: {
  program: Program;
  placement?: "home";
}) {
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
      <p>{audienceCopy[program.slug] || program.description}</p>
      <p className="card-duration">
        {program.duration}
        {liveHours(program) ? ` · ${liveHours(program)} h en vivo` : ""}
      </p>
      {program.pricing && (
        <p>
          Fundadores: <strong>{formatPrice(program.pricing.founders)}</strong>
        </p>
      )}
      <div className="tags">
        {program.technologies.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      {placement === "home" ? (
        <TrackedLink
          className="card-link"
          href={programPath(program)}
          event="home_program_click"
          properties={{ program: program.slug, placement }}
        >
          Ver programa <ArrowUpRight size={19} />
        </TrackedLink>
      ) : (
        <Link className="card-link" href={programPath(program)}>
          Ver programa <ArrowUpRight size={19} />
        </Link>
      )}
    </article>
  );
}
export function ProgramGrid({ placement }: { placement?: "home" }) {
  return (
    <div className="program-grid">
      {programs.map((program) => (
        <MobileDisclosure key={program.slug} title={program.title}>
          <ProgramCard program={program} placement={placement} />
        </MobileDisclosure>
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
      <ProgramGrid placement="home" />
      <p className="route-help">
        ¿No sabes por dónde empezar?{" "}
        <Link className="text-link" href="/empieza">
          Encuentra tu ruta en seis preguntas →
        </Link>
      </p>
    </section>
  );
}
