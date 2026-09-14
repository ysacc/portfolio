import type { Metadata } from "next";
import Link from "next/link";
import { publicGuides } from "@/data/guides";
const title = "Guías gratuitas para aprender desarrollo web";
const description = "Prepara tu entorno, aprende herramientas profesionales y mejora tu flujo de trabajo como desarrollador.";
export const metadata: Metadata = { title, description, alternates: { canonical: "/guias" }, robots: { index: true, follow: true }, openGraph: { title, description, url: "/guias", type: "website", images: ["/opengraph-image"] } };
export default function GuidesPage() {
  return <div className="container section">
    <p className="eyebrow">GUÍAS GRATUITAS</p><h1>{title}</h1><p className="section-copy">{description}</p>
    {[...new Set(publicGuides.map((guide) => guide.category))].map((category) => <section className="campus-guide-section" key={category}>
      <h2>{category}</h2><div className="guide-grid">{publicGuides.filter((guide) => guide.category === category).map((guide) => <Link className="guide-card" href={`/guias/${guide.slug}`} key={guide.slug}>
        <h3>{guide.title}</h3><p>{guide.description}</p><small>{guide.level} · {guide.estimatedMinutes} min</small><span className="card-link">Ver guía →</span>
      </Link>)}</div>
    </section>)}
    <div className="actions"><Link className="button" href="/programas">Explora nuestros programas</Link><Link className="text-link" href="/sobre-mi">Conoce a tu instructor</Link></div>
  </div>;
}
