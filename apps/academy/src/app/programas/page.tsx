import { ProgramGrid, CTASection } from "@/components/Sections";
export const metadata = {
  title: "Programas",
  alternates: { canonical: "/programas" },
};
export default function Page() {
  return (
    <>
      <section className="container section">
        <p className="eyebrow">ELIGE TU RUTA</p>
        <h1>
          Una ruta para
          <br />
          <em>tu siguiente paso.</em>
        </h1>
        <p className="section-copy">
          Fundamentos, desarrollo profesional y acompañamiento técnico.
          Encuentra el programa que conecta con tu momento.
        </p>
        <ProgramGrid />
      </section>
      <CTASection />
    </>
  );
}
