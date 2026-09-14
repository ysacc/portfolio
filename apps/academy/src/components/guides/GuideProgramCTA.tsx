"use client";
import Link from "next/link";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
export function GuideProgramCTA({ slug, programSlug, title }: { slug: string; programSlug: string; title: string }) {
  useEffect(() => { track("guide_view", { guide: slug, program: programSlug }); }, [slug, programSlug]);
  return <section className="campus-guide-section">
    <h2>¿Quieres aprender esto dentro de un flujo profesional?</h2>
    <Link className="button" href={`/programas/${programSlug}`} onClick={() => track("guide_program_cta_click", { guide: slug, program: programSlug })}>Conoce {title}</Link>
  </section>;
}
