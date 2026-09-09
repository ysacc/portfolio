import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GitBranch,
  GitPullRequest,
  Terminal,
  Code2,
} from "lucide-react";
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
            Explorar programas <ArrowUpRight size={18} />
          </Link>
          <Link className="text-link" href="/#metodologia">
            Ver cómo aprenderás <ArrowRight size={17} />
          </Link>
        </div>
        <div className="hero-authority">
          <span>+7 años desarrollando software</span>
          <span>Technical Lead / Arquitecto Frontend</span>
          <span>Proyectos empresariales</span>
          <span>Mentoría directa</span>
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
