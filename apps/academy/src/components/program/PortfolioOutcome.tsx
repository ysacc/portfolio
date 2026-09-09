import {
  GitBranch,
  GitPullRequest,
  BookOpen,
  ExternalLink,
  Folder,
} from "lucide-react";
import { CheckList } from "./ProgramOverview";
export function PortfolioOutcome({
  results,
  repositoryName,
  outcome,
}: {
  results: string[];
  repositoryName: string;
  outcome: string;
}) {
  return (
    <section className="container section portfolio-outcome" id="resultado">
      <div>
        <p className="eyebrow">06 / TU GITHUB AL TERMINAR</p>
        <h2>Tu objetivo no es terminar un curso. Es tener algo que mostrar.</h2>
        <p className="section-copy">{outcome}</p>
        <CheckList items={results} />
      </div>
      <div className="repository-preview">
        <div className="repo-owner">
          <Folder size={20} />
          <strong>tu-github / {repositoryName}</strong>
        </div>
        <div className="repo-tabs">
          <span>Code</span>
          <span>
            <GitPullRequest size={14} /> Pull Requests
          </span>
        </div>
        <div className="repo-branch">
          <GitBranch size={14} /> main <span>Historial de aprendizaje</span>
        </div>
        {["src/", "docs/", "README.md"].map((file) => (
          <div className="repo-file" key={file}>
            <Folder size={15} />
            {file}
            <span>
              {file === "README.md"
                ? "Cómo ejecutar y entender el proyecto"
                : "Responsabilidades claras"}
            </span>
          </div>
        ))}
        <div className="repo-readme">
          <BookOpen size={18} />
          <h3>Mi proyecto, explicado.</h3>
          <p>Problema → solución → decisiones → cómo ejecutarlo.</p>
          <span>
            <ExternalLink size={13} /> Enlace a la demo, cuando corresponda
          </span>
        </div>
        <p className="mockup-note">
          Representación ilustrativa del repositorio objetivo.
        </p>
      </div>
    </section>
  );
}
