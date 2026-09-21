import Link from "next/link";
import { programs, programPath, workflow } from "@/data/programs";
import {
  liveHours,
  paymentPlans,
  formatPrice,
  reservationNote,
  scheduleNote,
} from "@/data/program-commerce";
import { programContact } from "@/lib/contact";
import { landingMetadata } from "@/lib/landing-metadata";
import { InstructorSection } from "@/components/shared/InstructorSection";
import { TrackedLink } from "@/components/shared/TrackedLink";
import { LandingView } from "@/components/shared/LandingView";
import { ProfessionalWorkflow } from "@/components/program/ProfessionalWorkflow";
import { ProgramFAQ } from "@/components/program/ProgramFAQ";
import { CheckList } from "@/components/program/ProgramOverview";

const program = programs.find((p) => p.slug === "frontend-react")!;
export const metadata = landingMetadata(
  "/frontend-react",
  "Curso Frontend con React Online",
  `Aprende React, TypeScript, APIs, Git y Code Review en ${program.durationWeeks} semanas con clases en vivo y proyecto integrador.`,
);

export default function FrontendLanding() {
  const contact = programContact(program);
  const cta = (placement: string) => (
    <TrackedLink
      href={contact.href}
      className="button"
      event={
        placement === "price"
          ? "frontend_landing_price_cta_click"
          : "frontend_landing_cta_click"
      }
      properties={{
        program: program.slug,
        placement,
        channel: contact.channel,
      }}
    >
      Solicitar información ↗
    </TrackedLink>
  );
  return (
    <>
      <LandingView />
      <section className="container conversion-hero">
        <div>
          <p className="eyebrow">FORMACIÓN PRÁCTICA · ACOMPAÑAMIENTO TÉCNICO</p>
          <h1>{program.title}</h1>
          <p className="conversion-lead">{program.headline}</p>
          <p>
            Convierte tus fundamentos en una aplicación que puedas construir,
            revisar y explicar. Practica con mentoría y decisiones técnicas,
            desde el primer ticket hasta el deploy.
          </p>
          <div className="actions">
            {cta("hero")}
            <Link className="text-link" href={programPath(program)}>
              Ver programa completo →
            </Link>
          </div>
          <p className="authority-note">
            Con Ysacc Roncal · +7 años desarrollando software
            <br />
            Senior Developer · Technical Lead · Full Stack Engineer
          </p>
        </div>
        <aside className="conversion-summary" aria-label="Resumen del programa">
          <p className="eyebrow">TU RECORRIDO</p>
          <dl>
            <dt>Duración</dt>
            <dd>{program.duration}</dd>
            <dt>Clases</dt>
            <dd>{liveHours(program)} horas en vivo</dd>
            <dt>Modalidad</dt>
            <dd>{program.modality}</dd>
          </dl>
          <div className="tags">
            {program.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
          <p>Git · Pull Requests · Code Review</p>
          <strong>{program.outcome}</strong>
        </aside>
      </section>
      <section className="container section conversion-columns">
        <div>
          <p className="eyebrow">DE LOS EJERCICIOS A UNA APLICACIÓN</p>
          <h2>Aprender la sintaxis es solo el comienzo.</h2>
          <p className="section-copy">
            Si puedes seguir un tutorial pero te cuesta organizar una
            aplicación, conectar sus datos o justificar tus decisiones,
            necesitas práctica con revisión. Aquí trabajas esas habilidades en
            un proyecto integrador académico con flujo profesional.
          </p>
        </div>
        <div>
          <h2>Qué aprenderás</h2>
          <CheckList items={program.outcomes} />
        </div>
      </section>
      <ProfessionalWorkflow
        steps={workflow.map((step) =>
          step === "Código" ? "Desarrollo" : step,
        )}
        methodology={program.methodology}
      />
      <section className="container section conversion-columns">
        <div>
          <p className="eyebrow">PROYECTO INTEGRADOR</p>
          <h2>Construye y defiende tus decisiones.</h2>
          <p className="section-copy">
            El último mes está dedicado a un proyecto individual: defines el
            alcance, implementas, recibes revisión y preparas una entrega
            técnica. Es una práctica académica; no representa experiencia
            laboral en una empresa.
          </p>
          <CheckList items={program.portfolioResults} />
        </div>
        <div className="conversion-summary">
          <p className="eyebrow">DEL APRENDIZAJE A LA ENTREGA</p>
          <ol className="conversion-phases">
            {program.phases?.map((phase) => (
              <li key={phase}>{phase}</li>
            ))}
          </ol>
          <Link
            className="text-link"
            href={`${programPath(program)}#plan-de-estudios`}
          >
            Consultar módulos y entregables →
          </Link>
        </div>
      </section>
      <section className="container section conversion-columns">
        <div>
          <p className="eyebrow">TU PUNTO DE PARTIDA</p>
          <h2>Para quién es</h2>
          <CheckList items={program.audience} />
          <Link href="/empieza" className="text-link">
            ¿Tienes dudas sobre tu nivel? Encuentra tu ruta →
          </Link>
        </div>
        <div>
          <h2>Modalidad y dedicación</h2>
          <p className="section-copy">
            {program.modality} · {program.duration} · {liveHours(program)} horas
            en vivo.
          </p>
          {program.schedule && (
            <p>
              {program.schedule.classesPerWeek} clases por semana de{" "}
              {program.schedule.hoursPerClass} horas, con práctica entre
              sesiones.
            </p>
          )}
          <p>{scheduleNote} Consulta disponibilidad antes de inscribirte.</p>
          <CheckList items={program.prerequisites} />
        </div>
      </section>
      <section className="conversion-investment section" id="inversion">
        <div className="container">
          <p className="eyebrow">INVERSIÓN</p>
          <h2>Elige cómo organizar tu formación.</h2>
          <p className="section-copy">
            Consulta disponibilidad y condiciones antes de reservar. El precio
            Fundadores no confirma una cohorte abierta.
          </p>
          <dl className="program-pricing-grid">
            {paymentPlans(program).map((plan) => (
              <div className="program-price" key={plan.name}>
                <dt>{plan.name}</dt>
                <dd>
                  <strong>{formatPrice(plan.price)}</strong>
                  <span>{plan.detail}</span>
                </dd>
              </div>
            ))}
          </dl>
          {program.pricing && (
            <p>
              <strong>
                Reserva: {formatPrice(program.pricing.reservation)}.
              </strong>{" "}
              {reservationNote}
            </p>
          )}
          {cta("price")}
        </div>
      </section>
      <InstructorSection />
      <ProgramFAQ items={program.faq} />
      <section className="container cta">
        <p className="eyebrow">TU SIGUIENTE PASO</p>
        <h2>Hablemos de lo que quieres construir.</h2>
        <p>
          Consulta si esta ruta encaja contigo, la disponibilidad y las
          condiciones. Pedir información no confirma una matrícula.
        </p>
        {cta("final")}
      </section>
    </>
  );
}
