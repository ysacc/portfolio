import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
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
          Ver trayectoria profesional <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
