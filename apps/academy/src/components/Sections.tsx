import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  GitBranch,
  GitPullRequest,
  Terminal,
  Code2,
} from "lucide-react";
import {
  programs,
  weeks,
  workflow,
  pillars,
  audiences,
  type Program,
} from "@/data/programs";
import { site } from "@/data/site";
import { Brand } from "./Navbar";
export function Hero() {
  return (
    <section className="container hero">
      <div>
        <p className="eyebrow">
          <span className="status-dot" /> APRENDE. CONSTRUYE. DESPLIEGA.
        </p>
        <h1>
          Aprende desarrollo web como se trabaja en <em>proyectos reales.</em>
        </h1>
        <p className="hero-copy">
          React, TypeScript, Next.js y Node.js. Del primer commit a producción,
          con el acompañamiento de un desarrollador Senior con más de 7 años de
          experiencia.
        </p>
        <div className="actions">
          <Link className="button" href="/programas">
            Ver programas <ArrowUpRight size={18} />
          </Link>
          <Link className="text-link" href="/sobre-mi">
            Conocer al instructor <ArrowRight size={17} />
          </Link>
        </div>
        <div className="hero-note">
          <span>01 /</span> De aprender código a trabajar como desarrollador.
        </div>
      </div>
      <div
        className="editor"
        aria-label="Ejemplo de flujo de trabajo profesional"
      >
        <div className="editor-top">
          <span className="dots">● ● ●</span>
          <span>tu-proximo-proyecto</span>
          <GitBranch size={15} />
        </div>
        <div className="editor-tab">
          <Code2 size={15} /> developer.ts <span>U</span>
        </div>
        <div className="code">
          <div>
            <b>01</b>
            <span className="comment">
              {"// Tu carrera, construida con intención."}
            </span>
          </div>
          <div>
            <b>02</b>
            <span>
              <i>const</i> developer = &#123;
            </span>
          </div>
          <div>
            <b>03</b>
            <span>
              {" "}
              skills: [<q>React</q>, <q>TypeScript</q>],
            </span>
          </div>
          <div>
            <b>04</b>
            <span>
              {" "}
              mindset: <q>resolver problemas</q>,
            </span>
          </div>
          <div>
            <b>05</b>
            <span>
              {" "}
              workflow: <q>trabajar en equipo</q>,
            </span>
          </div>
          <div>
            <b>06</b>
            <span>
              {" "}
              nextStep: <q>construir algo real</q>
            </span>
          </div>
          <div>
            <b>07</b>
            <span>&#125;;</span>
          </div>
          <div>
            <b>08</b>
          </div>
          <div>
            <b>09</b>
            <span>
              <i>await</i> deploy(developer.nextStep);
            </span>
          </div>
        </div>
        <div className="review">
          <GitPullRequest size={20} />
          <div>
            <strong>feat: mi primer proyecto real</strong>
            <small>Pull request · feedback que te hace crecer</small>
          </div>
          <span className="merged">Merged</span>
        </div>
        <div className="terminal">
          <span>
            <Terminal size={14} /> TERMINAL
          </span>
          <p>
            <span>❯</span> npm run build
          </p>
          <p className="success">✓ Proyecto listo para producción</p>
        </div>
        <div className="editor-bottom">
          <span>
            <GitBranch size={13} /> main
          </span>
          <span>
            TypeScript <span className="status-dot" />
          </span>
        </div>
      </div>
    </section>
  );
}
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
export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className={`program-card ${program.featured ? "featured" : ""}`}>
      <div className="card-top">
        <span className="program-number">/{program.number}</span>
        {program.featured ? (
          <span className="badge">PROGRAMA DESTACADO</span>
        ) : (
          <Code2 size={23} />
        )}
      </div>
      <p className="level">
        {program.level} <span>· {site.modality}</span>
      </p>
      <h3>{program.title}</h3>
      <p>{program.description}</p>
      <div className="tags">
        {program.technologies.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <Link className="card-link" href={`/programas/${program.slug}`}>
        Ver programa <ArrowUpRight size={19} />
      </Link>
    </article>
  );
}
export function ProgramGrid() {
  return (
    <div className="program-grid">
      {programs.map((program) => (
        <ProgramCard key={program.slug} program={program} />
      ))}
    </div>
  );
}
export function ProgramsSection() {
  return (
    <section className="section container" id="programas">
      <div className="section-heading">
        <p className="eyebrow">02 — TU SIGUIENTE PASO</p>
        <div>
          <h2>Una ruta para tu momento.</h2>
          <p>
            Empieza con buenas bases o lleva tu experiencia al siguiente nivel.
          </p>
        </div>
      </div>
      <ProgramGrid />
    </section>
  );
}
export function LearningPath() {
  return (
    <section className="section container" id="temario">
      <div className="path-layout">
        <div className="path-intro">
          <p className="eyebrow">EN PROFUNDIDAD / REACT</p>
          <span className="badge">8 SEMANAS · {site.modality}</span>
          <h2>
            De los fundamentos
            <br />a tu primer deploy.
          </h2>
          <p>
            Frontend Developer con React. Una ruta progresiva en la que cada
            semana construyes sobre lo aprendido.
          </p>
          <div className="outcome">
            <Check size={22} />
            <p>
              Termina con un proyecto real desplegado y publicable en GitHub y
              en tu CV.
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
export function InstructorSection() {
  return (
    <section className="section container instructor" id="instructor">
      <div className="portrait">
        <Image
          src="/instructor.jpg"
          alt="Ysacc Roncal, instructor de la academia"
          width={600}
          height={700}
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div>
          <strong>Ysacc Roncal</strong>
          <span>DEVELOPER. TECH LEAD. TU MENTOR.</span>
        </div>
      </div>
      <div>
        <p className="eyebrow">04 — TU INSTRUCTOR</p>
        <h2>
          Experiencia real.
          <br />
          Feedback directo.
        </h2>
        <p>
          Soy Ysacc Roncal, Senior Front-End Developer / Full Stack Engineer.
          Comparto lo que he aprendido construyendo software y acompañando a
          otros desarrolladores.
        </p>
        <div className="stats">
          <div>
            <strong>7+</strong>
            <span>años desarrollando software</span>
          </div>
          <div>
            <strong>2+</strong>
            <span>años en arquitectura y liderazgo técnico</span>
          </div>
        </div>
        <ul className="check-list">
          {[
            "Technical Lead y Front-End Architect.",
            "React, Next.js, TypeScript, Node.js, AWS y CI/CD.",
            "APIs, microservicios y arquitectura de software.",
            "Proyectos en banca, salud, educación y retail.",
            "Experiencia capacitando a desarrolladores junior y semisenior.",
          ].map((x) => (
            <li key={x}>
              <Check size={16} />
              {x}
            </li>
          ))}
        </ul>
        <a className="text-link" href="https://www.ysaccroncal.dev/">
          Ver trayectoria completa <ArrowUpRight size={18} />
        </a>
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
export function CTASection() {
  return (
    <section className="container cta">
      <p className="eyebrow">TU PRÓXIMO COMMIT EMPIEZA AQUÍ</p>
      <h2>
        No estudies únicamente
        <br />
        para terminar un curso.
        <br />
        <em>
          Prepárate para trabajar
          <br />
          como desarrollador.
        </em>
      </h2>
      <Link className="button" href="/contacto">
        Quiero aprender <ArrowUpRight size={18} />
      </Link>
      <p>Conversemos sobre tu experiencia y lo que quieres lograr.</p>
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
