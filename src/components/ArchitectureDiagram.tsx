import type { EngineeringCase } from "@/data/engineering";

export function ArchitectureDiagram({ study }: { study: EngineeringCase }) {
  return (
    <figure className="my-6 rounded-2xl border border-hairline/15 bg-surface p-5 md:p-8">
      <figcaption className="mb-6 text-sm leading-relaxed text-muted">
        Diagrama conceptual ilustrativo: {study.title}. No reproduce una implementación interna de clientes.
      </figcaption>
      <ol aria-label={`Flujo de arquitectura: ${study.title}`} className="grid gap-4 sm:grid-cols-2">
        {study.flow.map((node, index) => (
          <li key={node.title} className="min-w-0 rounded-xl border border-accent/30 bg-accent/5 p-5">
            <p className="text-xs font-medium text-accent-strong dark:text-accent">0{index + 1}</p>
            <p className="mt-2 font-semibold">{node.title}</p>
            <p className="mt-2 text-sm text-muted">{node.detail}</p>
            {node.relation && <p className="mt-4 flex items-center gap-2 text-xs text-muted"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 12h16m-6-6 6 6-6 6" /></svg><span>{node.relation} → paso {index + 2}</span></p>}
          </li>
        ))}
      </ol>
    </figure>
  );
}
