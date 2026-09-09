import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
