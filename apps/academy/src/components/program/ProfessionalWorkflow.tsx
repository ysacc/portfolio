import { GitBranch, ArrowRight } from "lucide-react";
export function ProfessionalWorkflow({
  steps,
  methodology,
}: {
  steps: string[];
  methodology: string[];
}) {
  return (
    <section className="professional-workflow section" id="como-aprenderas">
      <div className="container">
        <p className="eyebrow">
          <GitBranch size={16} /> 05 / FLUJO PROFESIONAL
        </p>
        <h2>Así se trabaja aquí.</h2>
        <p className="section-copy">
          No solo aprenderás código. Aprenderás a trabajar como desarrollador.
          Reproduciremos parte del flujo de un equipo y adaptaremos la práctica
          al objetivo de esta ruta.
        </p>
        <ol className="git-timeline">
          {steps.map((step, i) => (
            <li key={step}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {i < steps.length - 1 && <ArrowRight size={15} />}
            </li>
          ))}
        </ol>
        <div className="program-method">
          <h3>Práctica, revisión e iteración.</h3>
          <ul>
            {methodology.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
