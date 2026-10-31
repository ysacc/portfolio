import Link from "next/link";
import { engineeringCases } from "@/data/engineering";

export function EngineeringCases() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {engineeringCases.map((item, index) => (
        <div key={item.slug} className="flex flex-col rounded-2xl border border-hairline/15 bg-surface p-6 transition-colors hover:border-accent/60">
          <p className="eyebrow">Caso técnico / 0{index + 1}</p>
          <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
          <ul aria-label={`Tecnologías: ${item.title}`} className="my-5 flex flex-wrap gap-2">
            {item.stack.map(tech => <li key={tech} className="rounded-lg border border-hairline/15 px-2 py-1 text-xs text-muted">{tech}</li>)}
          </ul>
          <Link href={`/proyectos/ingenieria/${item.slug}`} className="editorial-link mt-auto">Explorar caso<span className="sr-only">: {item.title}</span></Link>
        </div>
      ))}
    </div>
  );
}
