import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Ysacc Roncal Academy, inicio">
      <span className="brand-icon">
        <Code2 size={23} />
      </span>
      <span>
        ysacc roncal<span className="brand-sub">ACADEMY</span>
      </span>
    </Link>
  );
}
const links = [
  ["Programas", "/programas"],
  ["Metodología", "/#metodologia"],
  ["Tu instructor", "/sobre-mi"],
  ["Mentorías", "/mentorias"],
];
export function Navbar() {
  return (
    <header className="header">
      <div className="container nav">
        <Brand />
        <nav className="desktop-nav" aria-label="Principal">
          {links.map(([label, url]) => (
            <Link href={url} key={label}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button small nav-cta" href="/contacto">
          Hablemos <ArrowUpRight size={16} />
        </Link>
        <details className="mobile-nav">
          <summary>Menú</summary>
          <nav aria-label="Navegación móvil">
            {links.map(([label, url]) => (
              <Link href={url} key={label}>
                {label}
              </Link>
            ))}
            <Link href="/contacto">Hablemos ↗</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
