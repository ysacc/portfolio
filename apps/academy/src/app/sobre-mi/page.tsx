import { InstructorSection, CTASection } from "@/components/Sections";
export const metadata = {
  title: "Tu instructor · Ysacc Roncal",
  alternates: { canonical: "/sobre-mi" },
};
export default function Page() {
  return (
    <>
      <div className="container page-intro">
        <p className="eyebrow">CONOCE A TU INSTRUCTOR</p>
        <h1>
          Ingeniería que se aprende
          <br />
          <em>en la práctica.</em>
        </h1>
      </div>
      <InstructorSection />
      <CTASection />
    </>
  );
}
