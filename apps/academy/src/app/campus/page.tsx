import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Download, Sparkles } from "lucide-react";
import { guides } from "@/data/campus/guides";
import { challenges } from "@/data/campus/challenges";
import { campusResources } from "@/data/campus/resources";
import { site } from "@/data/site";

export const metadata = {
  title: "Campus Academy",
  description:
    "Guías, herramientas, retos y recursos para preparar tu entorno, practicar desarrollo web y acompañar tu formación en Ysacc Roncal Academy.",
  alternates: { canonical: "/campus" },
};

const firstSteps = [
  "Preparar PC",
  "Instalar VS Code",
  "Instalar Git",
  "Crear GitHub",
  "Instalar Node.js",
  "Configurar terminal",
  "Crear LinkedIn",
  "Entrar a Discord",
  "Completar primera práctica",
];

const resourceGroups = [
  { title: "Primeros pasos", items: ["Preparar PC", "Instalar herramientas", "Crear cuenta", "Organizar tu flujo"] },
  { title: "GitHub", items: ["Perfil profesional", "README", "Repositorios", "Commits y PR"] },
  { title: "LinkedIn", items: ["Foto", "Headline", "Acerca de", "Proyectos y GitHub"] },
  { title: "IA", items: ["Contexto", "Explicación", "Debugging", "Validación"] },
];

export default function CampusPage() {
  return (
    <div className="campus-page">
      <section className="container section campus-hero">
        <p className="eyebrow">CAMPUS ACADEMY</p>
        <h1>Prepara tu entorno. Practica. Construye. Mejora.</h1>
        <p className="section-copy">
          Guías, herramientas, tareas y recursos para acompañarte antes y durante el programa.
        </p>
        <div className="actions">
          <Link className="button" href="#primeros-pasos">
            Ver primeros pasos <ArrowRight size={17} />
          </Link>
          <Link className="text-link" href="/programas">
            Explorar programas <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section className="container section" id="primeros-pasos">
        <div className="section-heading">
          <p className="eyebrow">01 / PRIMEROS PASOS</p>
          <div>
            <h2>Llega a clase listo para construir.</h2>
          </div>
        </div>
        <div className="campus-checklist">
          {firstSteps.map((step, index) => (
            <div key={step} className="check-item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
              <Check size={16} />
            </div>
          ))}
        </div>
      </section>

      <section className="container section campus-grid">
        <div className="campus-panel">
          <p className="eyebrow">02 / PREPARA TU COMPUTADORA</p>
          <h2>Configuración mínima para las clases</h2>
          <p>
            Windows inicialmente. Mantén tu entorno limpio para que puedas concentrarte en aprender y practicar.
          </p>
          <ul className="plain-list">
            <li>Windows actualizado.</li>
            <li>Navegador Chrome o Edge.</li>
            <li>VS Code.</li>
            <li>Git.</li>
            <li>Node.js LTS actual.</li>
            <li>npm.</li>
            <li>Cuenta de GitHub.</li>
            <li>Postman.</li>
            <li>Terminal PowerShell o Windows Terminal.</li>
          </ul>
          <p className="inline-note">Full Stack: Docker Desktop y PostgreSQL opcional/local cuando se requiera.</p>
        </div>
        <div className="campus-panel">
          <p className="eyebrow">03 / HERRAMIENTAS</p>
          <h2>Tu entorno de trabajo</h2>
          <ul className="plain-list">
            <li>Editor principal: VS Code.</li>
            <li>Control de versiones: Git + GitHub.</li>
            <li>Entorno JavaScript: Node.js + npm.</li>
            <li>Testing y consumo de APIs: Postman.</li>
            <li>Terminal: PowerShell / Windows Terminal.</li>
            <li>Contenedores: Docker para Full Stack.</li>
          </ul>
        </div>
      </section>

      <section className="container section">
        <div className="section-heading">
          <p className="eyebrow">04 / MANUALES</p>
          <div>
            <h2>Guías rápidas para ponerte en marcha.</h2>
          </div>
        </div>
        <div className="guide-grid">
          {guides.map((guide) => (
            <Link href={`/campus/guias/${guide.slug}`} key={guide.slug} className="guide-card">
              <span className="guide-tag">{guide.category}</span>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              <small>{guide.level} · {guide.estimatedMinutes ?? 15} min</small>
              <span className="card-link">Ver guía <ArrowUpRight size={16} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container section campus-grid">
        <div className="campus-panel">
          <p className="eyebrow">05 / GITHUB</p>
          <h2>Tu GitHub también es parte del aprendizaje.</h2>
          <p>Crear cuenta, usar nombre profesional, foto, bio, repositorios, README, commits y proyectos pineados.</p>
          <ul className="plain-list">
            <li>Cuenta activa con nombre profesional.</li>
            <li>Foto y bio con tu foco de estudio.</li>
            <li>Repositorios limpios y documentados.</li>
            <li>Commits con mensajes claros.</li>
            <li>Proyectos reales y README útiles.</li>
          </ul>
          <p className="inline-note">GitHub listo para trabajar.</p>
        </div>
        <div className="campus-panel">
          <p className="eyebrow">06 / LINKEDIN</p>
          <h2>Empieza a construir tu presencia profesional desde el día 1.</h2>
          <p>La presencia profesional empieza con claridad, no con inventar experiencia laboral.</p>
          <ul className="plain-list">
            <li>Foto y headline.</li>
            <li>Ubicación y about.</li>
            <li>Estudios y habilidades.</li>
            <li>GitHub y portfolio.</li>
            <li>Proyectos identificados como académicos.</li>
          </ul>
          <p className="inline-note">Los proyectos académicos deben identificarse como proyectos, no como experiencia laboral.</p>
        </div>
      </section>

      <section className="container section campus-panel ai-panel">
        <p className="eyebrow">07 / IA COMO COPILOTO</p>
        <h2>IA como copiloto.</h2>
        <p>Usa la IA para investigar, pedir explicación, debugging, tests y comparación de soluciones.</p>
        <div className="ai-grid">
          {[
            "Cómo preguntar",
            "Dar contexto",
            "Pedir explicación",
            "Pedir debugging",
            "Pedir tests",
            "Revisar código",
          ].map((label, index) => (
            <div key={label} className="ai-box">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
        <p className="inline-note">Regla: No entregues código que no puedas explicar.</p>
        <ul className="plain-list">
          <li>No compartir tokens ni passwords.</li>
          <li>No subir código privado sin autorización.</li>
          <li>Validar respuestas y revisar seguridad.</li>
          <li>Usar la IA para acelerar, no para sustituir comprensión.</li>
        </ul>
      </section>

      <section className="container section">
        <div className="section-heading">
          <p className="eyebrow">08 / RETOS Y PRÁCTICAS</p>
          <div>
            <h2>Retos semanales.</h2>
          </div>
        </div>
        <div className="challenge-grid">
          {challenges.map((challenge) => (
            <article key={challenge.id} className="challenge-card">
              <span className="challenge-level">{challenge.difficulty}</span>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              <div className="tags">
                {challenge.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {challenge.externalUrl ? (
                <a className="text-link" href={challenge.externalUrl} target="_blank" rel="noreferrer">
                  Abrir reto <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="inline-note">Tarea interna del programa</span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="container section campus-grid">
        <div className="campus-panel">
          <p className="eyebrow">09 / COMUNIDAD</p>
          <h2>Tu comunidad continúa fuera de clase.</h2>
          <p>Cada cohorte contará con canales específicos para dudas, recursos, trabajo en equipo y code pairing.</p>
          <ul className="plain-list small-list">
            <li>#anuncios</li>
            <li>#cohorte-a</li>
            <li>#cohorte-b</li>
            <li>#dudas-frontend</li>
            <li>#dudas-backend</li>
            <li>#retos</li>
            <li>#github-portfolio</li>
            <li>#linkedin</li>
            <li>#ia</li>
            <li>#proyectos</li>
          </ul>
          {site.discordUrl ? (
            <a className="button small" href={site.discordUrl} target="_blank" rel="noreferrer">
              Ir a Discord <ArrowUpRight size={15} />
            </a>
          ) : (
            <p className="inline-note">El invite de Discord se configurará cuando el canal esté listo.</p>
          )}
        </div>
        <div className="campus-panel">
          <p className="eyebrow">10 / RECURSOS POR PROGRAMA</p>
          <h2>Material orientado a tu ruta.</h2>
          {resourceGroups.map((group) => (
            <div key={group.title} className="resource-group">
              <strong>{group.title}</strong>
              <ul className="plain-list small-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container section campus-panel">
        <p className="eyebrow">11 / RECURSOS EXTERNOS</p>
        <h2>Prácticas externas</h2>
        <div className="resource-list">
          {campusResources.map((resource) => (
            <a key={resource.title} href={resource.url} target="_blank" rel="noreferrer" className="resource-card">
              <span>{resource.type}</span>
              <strong>{resource.title}</strong>
              <p>{resource.description}</p>
              <small>Abrir recurso <ArrowUpRight size={14} /></small>
            </a>
          ))}
        </div>
      </section>

      <section className="container section cta">
        <p className="eyebrow">ESTÁNDARES DE TRABAJO</p>
        <h2>Academy no termina cuando acaba la clase.</h2>
        <div className="campus-summary">
          <span>Clases</span>
          <Sparkles size={14} />
          <span>Campus</span>
          <Sparkles size={14} />
          <span>Discord</span>
          <Sparkles size={14} />
          <span>Proyectos</span>
          <Sparkles size={14} />
          <span>Code Review</span>
        </div>
        <Link className="button" href="/programas">
          Explorar Campus <Download size={16} />
        </Link>
      </section>
    </div>
  );
}
