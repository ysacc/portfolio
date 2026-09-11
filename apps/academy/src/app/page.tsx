import { OutcomesSection } from "@/components/home/OutcomesSection";
import { TechnologySection } from "@/components/home/TechnologySection";
import { LearningComparison } from "@/components/shared/LearningComparison";
import {
  Hero,
  StackStrip,
  Differential,
  ProgramsSection,
  LearningPath,
  CampusShortcutSection,
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
      <OutcomesSection />
      <ProgramsSection />
      <TechnologySection />
      <LearningPath />
      <CampusShortcutSection />
      <Methodology />
      <LearningComparison />
      <InstructorSection />
      <Audience />
      <CTASection />
    </>
  );
}
