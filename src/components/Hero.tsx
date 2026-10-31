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
          Senior Full Stack Developer
          <span className="mt-4 block text-xl leading-snug tracking-normal text-gradient md:text-2xl">
            Software Architecture | Technical Leadership
          </span>
        </h1>
        <p className="hero-description">
          Diseño y desarrollo soluciones digitales escalables, combinando
          arquitectura de software, ingeniería frontend y backend, tecnologías
          cloud y liderazgo técnico.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/proyectos"
            className="inline-flex items-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-strong"
          >
            Explorar proyectos
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
        <div className="mt-5 flex flex-wrap gap-5 text-sm font-medium">
          <a href={siteConfig.links.linkedin} className="underline underline-offset-4">LinkedIn</a>
          <a href={siteConfig.links.github} className="underline underline-offset-4">GitHub</a>
        </div>
      </div>
      <div className="hero-portrait">
        <Image
          src="/me.png"
          alt="Ysacc Roncal, desarrollador Full Stack Senior en Lima"
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
