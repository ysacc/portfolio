import type { FAQItem } from "@/data/programs";
export function ProgramFAQ({ items }: { items: FAQItem[] }) {
  return (
    <section className="container section faq-section" id="preguntas">
      <div>
        <p className="eyebrow">08 / ANTES DE EMPEZAR</p>
        <h2>
          Preguntas claras.
          <br />
          Respuestas honestas.
        </h2>
        <p>
          Las condiciones pendientes se confirmarán antes de tu inscripción.
        </p>
      </div>
      <div>
        {items.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
              <span aria-hidden>+</span>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
