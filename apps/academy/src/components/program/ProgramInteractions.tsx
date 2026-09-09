"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
export function ProgramInteractions({ slug }: { slug: string }) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-program-page]");
    if (!root) return;
    track("program_view", { program: slug });
    function click(event: Event) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLElement>("[data-program-cta]");
      if (!link) return;
      track("program_cta_click", {
        program: slug,
        placement: link.dataset.programCta,
      });
      if (link.dataset.channel === "whatsapp")
        track("whatsapp_click", {
          program: slug,
          placement: link.dataset.programCta,
        });
    }
    function toggle(event: Event) {
      const target = event.target;
      if (
        target instanceof HTMLDetailsElement &&
        target.open &&
        target.dataset.module
      )
        track("curriculum_expand", {
          program: slug,
          module: target.dataset.module,
        });
    }
    root.addEventListener("click", click);
    root.addEventListener("toggle", toggle, true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            track("project_view", {
              program: slug,
              project: (entry.target as HTMLElement).dataset.project,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 },
    );
    root
      .querySelectorAll("[data-project]")
      .forEach((el) => observer.observe(el));
    return () => {
      root.removeEventListener("click", click);
      root.removeEventListener("toggle", toggle, true);
      observer.disconnect();
    };
  }, [slug]);
  return null;
}
