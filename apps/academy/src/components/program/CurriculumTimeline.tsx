import type { ProgramModule } from "@/data/programs";
export function CurriculumTimeline({ modules }: { modules: ProgramModule[] }) {
  return (
    <section
      className="container section curriculum-section"
      id="plan-de-estudios"
    >
      <div className="section-heading">
        <p className="eyebrow">04 / EL PLAN</p>
        <div>
          <h2>Un avance que puedes comprobar.</h2>
          <p>
            Cada módulo conecta lo que aprendes con algo que construyes, revisas
            y puedes explicar.
          </p>
        </div>
      </div>
      <div className="curriculum-list">
        {modules.map((module, i) => (
          <details key={module.title} data-module={module.title} open={i === 0}>
            <summary>
              <span className="module-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <small>{module.period}</small>
                <strong>{module.title}</strong>
              </span>
              <span className="module-plus" aria-hidden>
                +
              </span>
            </summary>
            <div className="module-content">
              <p>{module.description}</p>
              <ul>
                {module.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <p className="deliverable">
                <strong>Tu entregable</strong>
                {module.deliverable}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
