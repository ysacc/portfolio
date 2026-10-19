import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="hero-shell section-container">
      <div className="hero-copy">
        <p className="eyebrow">Ysacc Roncal / Lima, Perú</p>
        <h1>
          Desarrollador Frontend Senior
          <span className="block text-gradient">
            Full Stack e integración de IA.
          </span>
        </h1>
        <p className="hero-description">
          Más de siete años construyendo soluciones empresariales con React,
          Next.js y TypeScript. Combino arquitectura frontend, desarrollo Full
          Stack e IA aplicada para transformar necesidades complejas en
          productos mantenibles.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/proyectos"
            className="inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-strong"
          >
            Ver proyectos
          </Link>
          <Button as="a" href={siteConfig.links.resume} variant="outline">
            Descargar CV
          </Button>
          <Link
            href="/contacto"
            className="self-center px-2 py-3 text-sm font-semibold underline underline-offset-4"
          >
            Contactarme
          </Link>
        </div>
      </div>
      <div className="hero-portrait">
        <Image
          src="/me.png"
          alt="Ysacc Roncal, desarrollador Frontend Senior en Lima"
          fill
          priority
          sizes="(max-width: 767px) 90vw, 360px"
          className="object-cover"
        />
        <div className="portrait-caption">
          <span>YSACC RONCAL</span>
          <span>Ingeniería con propósito.</span>
        </div>
      </div>
      <div className="hero-proof">
        <p>
          <strong>Más de 7 años</strong>
          <span>Desarrollando software</span>
        </p>
        <p>
          <strong>Experiencia empresarial</strong>
          <span>Banca / Salud / Educación / Retail</span>
        </p>
        <p>
          <strong>IA aplicada</strong>
          <span>Interfaces conectadas a servicios LLM</span>
        </p>
      </div>
    </section>
  );
}
