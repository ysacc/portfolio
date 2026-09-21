import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Ysacc Roncal Academy, inicio">
      <span className="brand-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
          <rect width="32" height="32" rx="7" fill="#101110" />
          <path
            d="m5 8 5 7 5-7M10 15v9M19 24V8h4a4 4 0 0 1 0 8h-4m4 0 5 8"
            fill="none"
            stroke="#fbbf24"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>
        ysacc roncal<span className="brand-sub">ACADEMY</span>
      </span>
    </Link>
  );
}
const links = [
  ["Programas", "/programas"],
  ["Guías", "/guias"],
  ["Sobre mí", "/sobre-mi"],
  ["Contacto", "/contacto"],
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
          Solicitar información <ArrowUpRight size={16} />
        </Link>
        <details className="mobile-nav">
          <summary>Menú</summary>
          <nav aria-label="Navegación móvil">
            {links.map(([label, url]) => (
              <Link href={url} key={label}>
                {label}
              </Link>
            ))}
            <Link href="/contacto">Solicitar información ↗</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
