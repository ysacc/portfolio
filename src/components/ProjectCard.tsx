import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ slug, title, shortDescription, image, stack, role, sector, compact = false }: Project & { compact?: boolean }) {
  const href = `/proyectos/${slug}`;
  return (
    <article className="project-card group">
      <Link href={href} aria-label={`Leer caso de estudio: ${title}`} className="relative block aspect-video overflow-hidden">
        <Image src={image} alt={image.endsWith(".svg") ? `Flujo conceptual de ${title}; sin datos de clientes` : title} fill sizes="(max-width: 767px) 100vw, 530px" className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
      </Link>
      <div className="p-6 md:p-8">
        <p className="eyebrow">{sector || "Productos digitales"}</p>
        <h3 className="mt-3 text-xl font-semibold"><Link href={href}>{title}</Link></h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{shortDescription}</p>
        {!compact && <><p className="mt-4 text-sm">Mi contribución: {role}</p><p className="mt-4 text-xs leading-relaxed text-muted">{stack.slice(0, 4).join(" / ")}</p></>}
        <Link className="editorial-link" href={href}>Leer caso de estudio<span className="sr-only">: {title}</span></Link>
      </div>
    </article>
  );
}
