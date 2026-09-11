import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Download,
  Layers,
  Users,
} from "lucide-react";
import type { Program } from "@/data/programs";
import { ProjectPreview } from "./ProjectShowcase";
export function ProgramHero({ program: p }: { program: Program }) {
  return (
    <section className="container program-hero" id="program-hero">
      <Link className="text-link" href="/programas">
        ← Explorar programas
      </Link>
      <div className="program-hero-grid">
        <div>
          <p className="eyebrow">
            RUTA {p.number} / {p.title}
          </p>
          <h1>{p.headline}</h1>
          <p className="section-copy">{p.longDescription}</p>
          <div className="actions">
            <Link
              className="button"
              href={`/contacto?programa=${p.slug}`}
              data-program-cta="hero"
            >
              Quiero información <ArrowUpRight size={17} />
            </Link>
            {p.brochureUrl && (
              <a
                className="text-link"
                href={p.brochureUrl}
                download
                target="_blank"
                rel="noreferrer"
                data-program-cta="brochure"
                data-location="hero"
              >
                Descargar brochure <Download size={16} />
              </a>
            )}
            <a className="text-link" href="#plan-de-estudios">
              Ver plan de estudios ↓
            </a>
          </div>
        </div>
        <div className="program-hero-proof">
          <span className="eyebrow">TU OBJETIVO AL TERMINAR</span>
          <ProjectPreview variant={p.projects[0].preview} />
          <div className="proof-result">
            <Check size={20} />
            <strong>{p.outcome}</strong>
          </div>
          <small>
            Vista ilustrativa · el alcance se define durante el programa
          </small>
        </div>
      </div>
      <dl className="quick-facts">
        {[
          { icon: Layers, label: "Nivel", value: p.level },
          { icon: Clock3, label: "Duración", value: p.duration },
          { icon: Users, label: "Modalidad", value: p.modality },
        ].map(({ icon: Icon, label, value }) => {
          return (
            <div key={label}>
              <Icon size={19} />
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          );
        })}
        <div>
          <Check size={19} />
          <dt>Aprendizaje</dt>
          <dd>Práctica + feedback</dd>
        </div>
      </dl>
    </section>
  );
}
