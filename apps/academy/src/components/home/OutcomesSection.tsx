import { GitBranch, GitPullRequest, Globe, Check } from "lucide-react";
import { learningResults } from "@/data/technologies";
export function OutcomesSection() {
  return (
    <section className="container section home-outcomes">
      <div>
        <p className="eyebrow">LO QUE VAS A LOGRAR</p>
        <h2>
          Esto no termina en una clase. Termina en algo que puedes mostrar.
        </h2>
        <p>
          Estos son los resultados que trabajamos en las distintas rutas. Cada
          programa detalla su alcance y sus entregables.
        </p>
        <ul>
          {learningResults.map((result) => (
            <li key={result}>
              <Check size={15} />
              {result}
            </li>
          ))}
        </ul>
      </div>
      <div className="delivery-proof">
        <div className="delivery-browser">
          <span>● ● ●</span>
          <span>
            <Globe size={13} /> mi-proyecto / preview
          </span>
        </div>
        <div className="delivery-content">
          <p className="eyebrow">DEL PRIMER COMMIT A TU PORTFOLIO</p>
          <h3>
            Una funcionalidad.
            <br />
            Todo el recorrido.
          </h3>
          <div>
            <GitBranch size={20} />
            <span>
              feature / mi-primera-integracion
              <small>Rama con cambios claros</small>
            </span>
          </div>
          <div>
            <GitPullRequest size={20} />
            <span>
              Pull Request → Code Review
              <small>Feedback aplicado a tu código</small>
            </span>
          </div>
          <div>
            <Globe size={20} />
            <span>
              GET /api/projects → 200 OK
              <small>Datos que llegan a la interfaz</small>
            </span>
          </div>
          <div>
            <Check size={20} />
            <span>
              Deploy + README<small>Un proyecto que puedes mostrar</small>
            </span>
          </div>
          <p className="mockup-note">
            Ejemplo ilustrativo de un flujo de entrega.
          </p>
        </div>
      </div>
    </section>
  );
}
