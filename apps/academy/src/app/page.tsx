import {
  Hero,
  StackStrip,
  Differential,
  ProgramsSection,
  LearningPath,
  Methodology,
  InstructorSection,
  Audience,
  CTASection,
} from "@/components/Sections";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <Hero />
      <StackStrip />
      <Differential />
      <ProgramsSection />
      <LearningPath />
      <Methodology />
      <InstructorSection />
      <Audience />
      <CTASection />
    </>
  );
}
