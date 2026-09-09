import Link from "next/link";
import { Methodology, CTASection } from "@/components/Sections";
export const metadata = {
  title: "Mentorías para desarrolladores",
  alternates: { canonical: "/mentorias" },
};
export default function Page() {
  return (
    <>
      <section className="container section">
        <p className="eyebrow">ACOMPAÑAMIENTO DIRECTO</p>
        <h1>
          Tu código.
          <br />
          Tus retos.
          <br />
          <em>Un siguiente nivel.</em>
        </h1>
        <p className="section-copy">
          Trabaja con Ysacc en code review, arquitectura, debugging y buenas
          prácticas. Partimos de tu experiencia para definir un plan de
          crecimiento de Junior a Mid-Level.
        </p>
        <ul className="check-list">
          <li>Revisamos tus objetivos y los retos de tu proyecto.</li>
          <li>Analizamos código y decisiones técnicas juntos.</li>
          <li>Definimos acciones concretas y revisamos tu progreso.</li>
        </ul>
        <Link className="button" href="/contacto?programa=mentoria">
          Conversar sobre mentoría ↗
        </Link>
      </section>
      <Methodology />
      <CTASection />
    </>
  );
}
