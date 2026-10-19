import Image from "next/image";
import { InteriorPage } from "@/components/InteriorPage";
import { about } from "@/data/profile";
import { resumeData } from "@/data/resume";
import { siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Sobre mí",
  "Conoce a Ysacc Roncal, desarrollador Frontend Senior en Lima: enfoque de ingeniería, arquitectura frontend, liderazgo, colaboración y formación académica.",
  "/sobre-mi",
);

export default function AboutPage() {
  return (
    <InteriorPage title="Sobre mí" description={about.introduction}>
      <div className="grid items-start gap-10 md:grid-cols-[240px_1fr]">
        <Image
          src="/me.png"
          alt="Ysacc Roncal"
          width={280}
          height={320}
          sizes="(max-width: 767px) 280px, 240px"
          className="w-full max-w-[280px] rounded-2xl object-cover"
        />
        <div className="space-y-5 leading-relaxed text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="text-sm font-medium">{siteConfig.location}</p>
        </div>
      </div>
      <div className="mt-14 grid gap-10 border-t border-hairline/15 pt-10 md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold">Formación académica</h2>
          <ul className="mt-6 space-y-6">
            {resumeData.education.map((item) => (
              <li key={item.institution}>
                <h3 className="font-semibold">{item.degree}</h3>
                <p className="mt-2 text-sm text-muted">{item.institution}</p>
                <p className="mt-1 text-sm text-muted">{item.period}</p>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Idiomas</h2>
          <ul className="mt-6 space-y-4">
            {resumeData.languages.map((language) => (
              <li
                key={language.name}
                className="flex flex-wrap justify-between gap-3 border-b border-hairline/10 pb-3"
              >
                <span className="font-medium">{language.name}</span>
                <span className="text-muted">{language.level}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </InteriorPage>
  );
}
