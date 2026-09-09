import type { Program } from "@/data/programs";
import { programPath } from "@/data/programs";
import { site } from "@/data/site";
import { ProgramHero } from "./ProgramHero";
import {
  ProgramOverview,
  TechStack,
  CareerPreparation,
} from "./ProgramOverview";
import { ProjectShowcase } from "./ProjectShowcase";
import { CurriculumTimeline } from "./CurriculumTimeline";
import { ProfessionalWorkflow } from "./ProfessionalWorkflow";
import { PortfolioOutcome } from "./PortfolioOutcome";
import { ProgramFAQ } from "./ProgramFAQ";
import { ProgramNextSteps } from "./ProgramNextSteps";
import { ProgramCTA } from "./ProgramCTA";
import { StickyProgramCTA } from "./StickyProgramCTA";
import { ProgramInteractions } from "./ProgramInteractions";
import { LearningComparison } from "@/components/shared/LearningComparison";
import { InstructorSection } from "@/components/shared/InstructorSection";
export function ProgramLanding({ program: p }: { program: Program }) {
  const schema =
    p.kind === "course"
      ? {
          "@context": "https://schema.org",
          "@type": "Course",
          name: p.title,
          description: p.seoDescription,
          url: site.url + programPath(p),
          inLanguage: "es",
          provider: { "@type": "Organization", name: site.name, url: site.url },
          coursePrerequisites: p.prerequisites.join(" "),
          teaches: p.outcomes,
        }
      : null;
  return (
    <div className="program-page" data-program-page={p.slug}>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <ProgramHero program={p} />
      <nav className="program-subnav" aria-label="Secciones del programa">
        <div className="container">
          <a href="#punto-de-partida">Para ti</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#plan-de-estudios">Temario</a>
          <a href="#como-aprenderas">Metodología</a>
          <a href="#resultado">Resultado</a>
          <a href="#preguntas">Preguntas</a>
        </div>
      </nav>
      <ProgramOverview program={p} />
      <TechStack technologies={p.technologies} />
      <ProjectShowcase projects={p.projects} />
      <CurriculumTimeline modules={p.curriculum} />
      <ProfessionalWorkflow steps={p.workflow} methodology={p.methodology} />
      <PortfolioOutcome
        results={p.portfolioResults}
        repositoryName={p.repositoryName}
        outcome={p.outcome}
      />
      <CareerPreparation items={p.careerPreparation} />
      <LearningComparison />
      <InstructorSection />
      <ProgramNextSteps slugs={p.nextSteps} />
      <ProgramFAQ items={p.faq} />
      <ProgramCTA program={p} />
      <StickyProgramCTA
        slug={p.slug}
        title={p.shortTitle || p.title}
        duration={p.duration}
      />
      <ProgramInteractions slug={p.slug} />
    </div>
  );
}
