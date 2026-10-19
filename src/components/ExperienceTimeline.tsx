import type { Experience } from "@/data/resume";

export function ExperienceTimeline({ items }: { items: readonly Experience[] }) {
  return (
    <ol className="space-y-10">
      {items.map(item => (
        <li key={`${item.company}-${item.period}`} className="border-t border-hairline/15 pt-6">
          <article>
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <h2 className="text-xl font-semibold">{item.role}</h2>
              <p className="shrink-0 text-sm font-medium text-accent-strong dark:text-accent">{item.period}</p>
            </div>
            <h3 className="mt-2 font-medium">{item.company}</h3>
            {(item.engagement || item.location) && <p className="mt-2 text-xs leading-relaxed text-muted">{[item.engagement, item.location && `Empresa en ${item.location}`].filter(Boolean).join(" · ")}</p>}
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">{item.description}</p>
            {item.highlights && <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">{item.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>}
            {item.tech && <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Tecnologías en ${item.company}`}>{item.tech.map(tech => <li key={tech} className="rounded-lg border border-hairline/15 px-3 py-1.5 text-xs text-muted">{tech}</li>)}</ul>}
          </article>
        </li>
      ))}
    </ol>
  );
}
