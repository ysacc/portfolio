import { Experience } from "@/data/resume";

export function ExperienceTimeline({ items }: { items: Experience[] }) {
    return (
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3">
            {items.map((item, index) => (
                <ExperienceItem key={index} {...item} />
            ))}
        </div>
    );
}

function ExperienceItem({ company, role, period, description, highlights, tech }: Experience) {
    return (
        <div className="mb-10 last:mb-0 ml-6">
            <div className="absolute -left-[6.5px] mt-1.5 size-3 rounded-full border border-white bg-yellow-500 dark:border-gray-950" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{role}</h3>
                <span className="text-sm font-medium text-yellow-600 dark:text-yellow-500">{period}</span>
            </div>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400">{company}</h4>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {description}
            </p>
            {highlights && (
                <ul className="mt-4 space-y-2">
                    {highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className="mt-1.5 size-1.5 rounded-full bg-yellow-500 shrink-0" />
                            {h}
                        </li>
                    ))}
                </ul>
            )}
            {tech && (
                <div className="mt-4 flex flex-wrap gap-2">
                    {tech.map((t) => (
                        <span key={t} className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-500 dark:bg-gray-900 dark:text-gray-400 border border-gray-100 dark:border-gray-800">
                            {t}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
