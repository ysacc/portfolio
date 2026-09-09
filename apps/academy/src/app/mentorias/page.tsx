import { programs } from "@/data/programs";
import { ProgramLanding } from "@/components/program/ProgramLanding";
import { programMetadata } from "@/lib/program-metadata";
const program = programs.find((p) => p.slug === "mentoria")!;
export const metadata = programMetadata(program);
export default function Page() {
  return <ProgramLanding program={program} />;
}
