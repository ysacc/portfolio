import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Campus para alumnos",
  description: "Acceso al espacio de alumnos de Ysacc Roncal Academy.",
  robots: { index: false, follow: false },
};
// SEO boundary only: authorization must also run at every private data entry point.
export default function CampusLayout({ children }: { children: React.ReactNode }) { return children; }
