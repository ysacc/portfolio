import { Check } from "lucide-react";
import type { Program } from "@/data/programs";
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="result-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={16} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
export function ProgramOverview({ program: p }: { program: Program }) {
  return (
    <section className="container section" id="punto-de-partida">
      <p className="eyebrow">01 / TU PUNTO DE PARTIDA</p>
      <div className="overview-grid">
        <div>
          <h2>¿Esta ruta es para ti?</h2>
          <CheckList items={p.audience} />
        </div>
        <div className="prerequisites">
          <h3>Lo que necesitas antes de empezar</h3>
          <CheckList items={p.prerequisites} />
        </div>
      </div>
      <div className="program-outcomes">
        <h2>Lo que aprenderás a hacer.</h2>
        <CheckList items={p.outcomes} />
      </div>
      {p.options && (
        <div className="mentoring-options">
          {p.options.map((option) => (
            <article key={option.title}>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
export function TechStack({ technologies }: { technologies: string[] }) {
  return (
    <section className="container program-tech" aria-labelledby="program-stack">
      <p className="eyebrow">02 / HERRAMIENTAS CON PROPÓSITO</p>
      <h2 id="program-stack">El stack de esta ruta.</h2>
      <div className="tags">
        {technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </section>
  );
}

export function ProfessionalSkills({ program: p }: { program: Program }) {
  const professionalSkills = p.professionalSkills ?? [];
  const aiSkills = p.aiSkills ?? [];
  const scrumPractices = p.scrumPractices ?? [];

  if (
    !professionalSkills.length &&
    !aiSkills.length &&
    !scrumPractices.length
  ) {
    return null;
  }

  return (
    <section className="container section professional-skills">
      <div className="section-heading">
        <p className="eyebrow">03 / HABILIDADES PROFESIONALES</p>
        <div>
          <h2>Las habilidades que necesitas para trabajar en equipo.</h2>
          <p>
            Además de tecnologías, aprenderás a colaborar, revisar código y
            comunicar decisiones como parte de un producto real.
          </p>
        </div>
      </div>
      <div className="skills-grid">
        <article className="skills-panel">
          <h3>Habilidades profesionales</h3>
          <ul>
            {professionalSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          {scrumPractices.length > 0 && (
            <div className="scrum-badges">
              {scrumPractices.map((practice) => (
                <span key={practice}>{practice}</span>
              ))}
            </div>
          )}
        </article>
        <article className="skills-panel ai-panel">
          <h3>Workflow con IA</h3>
          <div className="ai-flow" aria-label="Flujo de trabajo con IA">
            {[
              "Pregunta",
              "Propuesta IA",
              "Revisión humana",
              "Testing",
              "Código aprobado",
            ].map((step, index) => (
              <div key={step} className="ai-step">
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <p className="ai-note">No copiar. Revisar, entender y mejorar.</p>
          <ul>
            {aiSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export function CareerPreparation({ items }: { items: string[] }) {
  return (
    <section className="container section career-section">
      <div>
        <p className="eyebrow">TAMBIÉN ES PARTE DEL TRABAJO</p>
        <h2>Aprende la parte que normalmente nadie explica.</h2>
        <p>
          No basta con que el proyecto funcione. Debes ser capaz de explicar por
          qué lo construiste así.
        </p>
      </div>
      <div>
        <CheckList items={items} />
        <p className="policy-note">
          La academia ofrece preparación técnica y acompañamiento, pero no
          garantiza contratación.
        </p>
      </div>
    </section>
  );
}
