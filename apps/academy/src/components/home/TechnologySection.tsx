import { Code2, Server, Database, GitBranch, Cloud } from "lucide-react";
import { technologyGroups } from "@/data/technologies";
const icons = {
  frontend: Code2,
  backend: Server,
  data: Database,
  workflow: GitBranch,
  cloud: Cloud,
};
export function TechnologySection() {
  return (
    <section className="container section technology-section">
      <p className="eyebrow">EL ECOSISTEMA</p>
      <h2>
        Tecnologías que encontrarás
        <br />
        en nuestros programas.
      </h2>
      <p className="section-copy">
        Cada herramienta tiene un propósito. Consulta el stack de tu ruta: no
        todos los programas incluyen todas las tecnologías.
      </p>
      <div className="technology-groups">
        {technologyGroups.map((group) => {
          const Icon = icons[group.icon];
          return (
            <article key={group.title}>
              <Icon size={23} />
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
