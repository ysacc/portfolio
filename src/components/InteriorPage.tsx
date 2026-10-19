import Link from "next/link";

export function ContactCta() {
  return (
    <section className="section-container pb-16 pt-10 md:pb-24" aria-labelledby="contact-cta-title">
      <div className="flex flex-col items-start justify-between gap-6 border-t border-hairline/15 pt-8 sm:flex-row sm:items-center">
        <div>
          <h2 id="contact-cta-title" className="text-2xl font-semibold tracking-tight">Hablemos de tu próximo producto.</h2>
          <p className="mt-2 text-sm text-muted">Frontend Senior, Full Stack e integración de IA.</p>
        </div>
        <Link href="/contacto" className="shrink-0 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-fg transition-colors hover:bg-accent-strong">Contactarme</Link>
      </div>
    </section>
  );
}

interface InteriorPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
  contactCta?: boolean;
}

export function InteriorPage({ title, description, children, contactCta = true }: InteriorPageProps) {
  return (
    <div className="pt-28 md:pt-36">
      <div className="section-container pb-10 md:pb-14">
        <nav aria-label="Ruta de navegación" className="mb-8 text-sm text-muted">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="underline-offset-4 hover:underline">Inicio</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{description}</p>
      </div>
      <div className="section-container pb-12 md:pb-16">{children}</div>
      {contactCta && <ContactCta />}
    </div>
  );
}
