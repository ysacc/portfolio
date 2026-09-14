import type { Program } from "@/data/programs";
import { formatPrice, liveHours, paymentPlans, reservationNote, scheduleNote } from "@/data/program-commerce";

export function ProgramPricing({ program: p }: { program: Program }) {
  if (!p.pricing) return null;
  return (
    <section className="container section" id="precios" aria-labelledby="pricing-title">
      <p className="eyebrow">INVERSIÓN EN TU FORMACIÓN</p>
      <h2 id="pricing-title">Precios y formas de pago</h2>
      <p className="section-copy">{p.title} · {p.duration} · {liveHours(p)} h en vivo · {p.modality}</p>
      {p.schedule && <p>{p.schedule.classesPerWeek} clases por semana · {p.schedule.hoursPerClass} horas por sesión.</p>}
      <dl className="program-pricing-grid">
        {paymentPlans(p).map((plan) => (
          <div className="program-price" key={plan.name}>
            <dt>{plan.name}</dt>
            <dd><strong>{formatPrice(plan.price)}</strong><span>{plan.detail}</span></dd>
          </div>
        ))}
      </dl>
      <p><strong>Reserva: {formatPrice(p.pricing.reservation)}.</strong> {reservationNote}</p>
      {p.schedule?.cohorts?.map((cohort) => <p key={cohort.name}><strong>{cohort.name}:</strong> {cohort.days}.</p>)}
      <p>{scheduleNote} Consulta disponibilidad antes de reservar.</p>
    </section>
  );
}
