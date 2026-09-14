import Link from "next/link";
export function CampusUnavailable() {
  return <section className="container section campus-hero">
    <p className="eyebrow">CAMPUS ACADEMY</p>
    <h1>Espacio para alumnos</h1>
    <p className="section-copy">El acceso al Campus todavía no está habilitado. Contacta con Academy para consultar sobre tu acceso y los materiales de tu programa.</p>
    <div className="actions"><Link className="button" href="/contacto">Contactar con Academy</Link><Link className="text-link" href="/guias">Ver guías gratuitas</Link></div>
  </section>;
}
