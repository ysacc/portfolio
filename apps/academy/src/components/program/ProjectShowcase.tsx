import { GitBranch, Globe, Check, Code2 } from "lucide-react";
import type { ProgramProject } from "@/data/programs";
export function ProjectPreview({
  variant,
}: {
  variant: ProgramProject["preview"];
}) {
  return (
    <div className={`project-preview preview-${variant}`} aria-hidden="true">
      <div className="preview-chrome">
        <span>● ● ●</span>
        <span>
          <Globe size={11} /> workspace / demo
        </span>
      </div>
      <div className="preview-layout">
        <div className="preview-sidebar">
          <Code2 size={20} />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="preview-main">
          <div className="preview-heading">
            <strong>
              {variant === "api"
                ? "Explorar recursos"
                : variant === "app"
                  ? "Mi workspace"
                  : "Resumen de actividad"}
            </strong>
            <span>DEMO</span>
          </div>
          {variant === "api" ? (
            <>
              <div className="api-request">
                <b>GET</b> /api/resources <span>200 OK</span>
              </div>
              <div className="api-states">
                <span>Loading</span>
                <span>Success</span>
                <span>Error</span>
              </div>
              <div className="mock-resource">
                <Code2 size={20} />
                <div>
                  <strong>Recurso de ejemplo</strong>
                  <p>Datos conectados a tu interfaz</p>
                </div>
                <Check size={16} />
              </div>
              <div className="mock-code">
                {"{ status: 'success', data: [...] }"}
              </div>
            </>
          ) : (
            <>
              <div className="preview-metrics">
                <div>
                  <small>Proyectos</small>
                  <b>08</b>
                </div>
                <div>
                  <small>En revisión</small>
                  <b>03</b>
                </div>
                <div>
                  <small>Completados</small>
                  <b>05</b>
                </div>
              </div>
              <div className="preview-chart">
                {[35, 58, 45, 76, 65, 90, 82, 100].map((v, i) => (
                  <i key={i} style={{ height: v + "%" }} />
                ))}
              </div>
              <div className="preview-table">
                {[
                  "Interfaz responsive",
                  "Integración API",
                  "Documentación",
                ].map((x, i) => (
                  <div key={x}>
                    <span>{x}</span>
                    <span>{i === 1 ? "En revisión" : "Completado"}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="preview-footer">
        <GitBranch size={12} /> feature / construir{" "}
        <span>Datos de demostración</span>
      </div>
    </div>
  );
}
export function ProjectShowcase({ projects }: { projects: ProgramProject[] }) {
  return (
    <section className="container section" id="proyectos">
      <div className="section-heading">
        <p className="eyebrow">03 / CONSTRUYE</p>
        <div>
          <h2>Aprenderás construyendo.</h2>
          <p>
            Ejemplos de lo que podrás construir. Son demostraciones de
            interfaces y entregables posibles; no son proyectos de alumnos.
          </p>
        </div>
      </div>
      <div className="project-showcase">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className="project-example"
            data-project={project.id}
          >
            <ProjectPreview variant={project.preview} />
            <div className="project-description">
              <p className="eyebrow">PROYECTO / 0{i + 1}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <p className="deliverable">
                <strong>Entregable</strong>
                {project.deliverable}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
