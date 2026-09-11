import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { weeks, workflow, pillars, audiences } from "@/data/programs";
import { site } from "@/data/site";
import { Brand } from "./Navbar";
export { Hero } from "./home/Hero";
export {
  ProgramCard,
  ProgramGrid,
  ProgramsSection,
} from "./home/ProgramsSection";
export { InstructorSection } from "./shared/InstructorSection";
export { CTASection } from "./shared/CTASection";
export function StackStrip() {
  return (
    <div className="stack-strip">
      <div className="container">
        <span>
          HERRAMIENTAS REALES.
          <br />
          HABILIDADES QUE PERDURAN.
        </span>
        {["React", "TypeScript", "Next.js", "Node.js", "Git", "AWS"].map(
          (x) => (
            <strong key={x}>{x}</strong>
          ),
        )}
      </div>
    </div>
  );
}
export function Differential() {
  return (
    <section className="container section">
      <div className="section-heading">
        <p className="eyebrow">01 — EL ENFOQUE</p>
        <div>
          <h2>
            No necesitas otro curso
            <br />
            de programación<span className="accent">.</span>
          </h2>
          <p>
            Contenido para aprender sintaxis hay de sobra. Aquí aprendes a tomar
            decisiones, colaborar y entregar software como parte de un equipo de
            desarrollo.
          </p>
        </div>
      </div>
      <div className="workflow">
        {workflow.map((step, i) => (
          <div key={step}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
            {i < workflow.length - 1 && <ArrowRight size={16} />}
          </div>
        ))}
      </div>
    </section>
  );
}
export function LearningPath() {
  return (
    <section className="section container" id="temario">
      <div className="path-layout">
        <div className="path-intro">
          <p className="eyebrow">EN PROFUNDIDAD / REACT</p>
          <span className="badge">12 SEMANAS · 3 MESES · {site.modality}</span>
          <h2>
            De los fundamentos
            <br />a construir y defender un proyecto profesional.
          </h2>
          <p>
            Frontend Developer con React. Dos meses de formación + un mes de
            proyecto integrador con mentoría y feedback real.
          </p>
          <div className="outcome">
            <Check size={22} />
            <p>
              Termina con un proyecto real desplegado, documentado y listo para
              explicar en una entrevista.
            </p>
          </div>
          <Link className="button" href="/contacto?programa=frontend-react">
            Me interesa este programa <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="weeks">
          {weeks.map(([title, description], i) => (
            <details key={title} open={i === 0}>
              <summary>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <small>SEMANA {i + 1}</small>
                  <h3>{title}</h3>
                </div>
                <span className="plus">+</span>
              </summary>
              <p>{description}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
export function CampusShortcutSection() {
  return (
    <section className="section container campus-shortcut">
      <p className="eyebrow">ACADEMY EN CONTINUIDAD</p>
      <div className="campus-shortcut-inner">
        <div>
          <h2>Academy no termina cuando acaba la clase.</h2>
          <p>
            Clases, Campus, Discord, proyectos y code review se complementan para
            que tu proceso siga moviéndose con claridad.
          </p>
        </div>
        <Link className="button" href="/campus">
          Explorar Campus <ArrowUpRight size={17} />
        </Link>
      </div>
    </section>
  );
}

export function Methodology() {
  return (
    <section className="methodology section" id="metodologia">
      <div className="container">
        <p className="eyebrow">03 — APRENDER HACIENDO</p>
        <h2>Menos mirar. Más construir.</h2>
        <p className="section-copy">
          Cada módulo termina con práctica real y revisión. El código se
          entiende mejor cuando lo pones a trabajar.
        </p>
        <div className="pillars">
          {pillars.map(([title, description], i) => (
            <article key={title}>
              <span className="pillar-number">
                0{i + 1} <ArrowRight size={20} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="method-note">
          <span className="status-dot" />
          <p>
            La propuesta incluye sesiones en vivo, ejercicios, repositorios Git,
            Pull Requests, code review, proyectos, feedback, buenas prácticas y
            deploy.{" "}
            <strong>
              {site.modality}; coordinaremos formato y horarios antes de
              empezar.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
export function Audience() {
  return (
    <section className="section container audience">
      <div>
        <p className="eyebrow">05 — ¿ES PARA TI?</p>
        <h2>
          No importa dónde estás.
          <br />
          Importa tu siguiente paso.
        </h2>
      </div>
      <ul>
        {audiences.map((x, i) => (
          <li key={x}>
            <span>0{i + 1}</span>
            {x}
            <ArrowUpRight size={18} />
          </li>
        ))}
      </ul>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="container footer">
      <div>
        <Brand />
        <p>De aprender código a trabajar como desarrollador.</p>
      </div>
      <div className="footer-links">
        <a href="https://www.ysaccroncal.dev/">ysaccroncal.dev ↗</a>
        <a href="https://brdigitalsystem.online/">BR Digital System ↗</a>
        <a href={site.linkedin}>LinkedIn ↗</a>
        <a href={site.github}>GitHub ↗</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ysacc Roncal Academy</span>
        <span>Construye con intención.</span>
      </div>
    </footer>
  );
}
