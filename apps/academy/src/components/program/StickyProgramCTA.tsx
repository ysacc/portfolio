"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export function StickyProgramCTA({
  slug,
  title,
  duration,
}: {
  slug: string;
  title: string;
  duration: string;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("program-hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        setVisible(
          !entry.isIntersecting && entry.boundingClientRect.bottom <= 90,
        ),
      { rootMargin: "-90px 0px 0px 0px" },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [slug]);
  return (
    <aside
      className="sticky-program-cta"
      hidden={!visible}
      aria-label="Información del programa"
    >
      <div>
        <strong>{title}</strong>
        <span>{duration}</span>
      </div>
      <Link
        className="button"
        href={`/contacto?programa=${slug}`}
        data-program-cta="sticky"
      >
        Quiero información <span aria-hidden>↗</span>
      </Link>
    </aside>
  );
}
