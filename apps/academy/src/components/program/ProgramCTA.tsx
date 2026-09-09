import Link from "next/link";
import type { Program } from "@/data/programs";
import { site } from "@/data/site";
import { getProgramCohorts } from "@/data/cohorts";
export function ProgramCTA({ program: p }: { program: Program }) {
  const upcoming = getProgramCohorts(p.slug);
  const whatsapp = site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola Ysacc, quisiera información sobre " + p.title + ".")}`
    : null;
  return (
    <section className="container cta program-final-cta" id="informacion">
      <p className="eyebrow">TU SIGUIENTE PASO</p>
      <h2>
        {p.kind === "course"
          ? "Construye tu próxima etapa."
          : "Trabajemos en tu siguiente paso."}
      </h2>
      <p>
        {p.title} · {p.duration}
      </p>
      {upcoming.length > 0 ? (
        <div className="cohort-list">
          {upcoming.map((cohort) => (
            <p key={cohort.id}>
              {
                {
                  "coming-soon": "Próxima cohorte",
                  open: "Inscripciones abiertas",
                  full: "Cohorte completa",
                  closed: "Cerrada",
                }[cohort.status]
              }
              {cohort.startDate && ` · Inicio: ${cohort.startDate}`}
              {cohort.schedule && ` · ${cohort.schedule}`}
            </p>
          ))}
        </div>
      ) : (
        <p>
          Consulta disponibilidad, formato y condiciones. Las fechas y horarios
          se confirman antes de inscribirte.
        </p>
      )}
      <div className="actions">
        <Link
          className="button"
          href={`/contacto?programa=${p.slug}`}
          data-program-cta="final"
        >
          {p.kind === "course"
            ? "Consultar próxima cohorte"
            : "Hablar con Ysacc"}{" "}
          ↗
        </Link>
        {whatsapp && (
          <a
            className="text-link"
            href={whatsapp}
            data-program-cta="whatsapp"
            data-channel="whatsapp"
          >
            Consultar por WhatsApp ↗
          </a>
        )}
      </div>
      <p>
        Te orientaremos según tu experiencia. Consultar no confirma una
        matrícula.
      </p>
    </section>
  );
}
