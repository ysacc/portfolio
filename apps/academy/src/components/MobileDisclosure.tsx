"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function MobileDisclosure({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="mobile-disclosure" data-open={open}>
      <button
        type="button"
        className="mobile-disclosure-toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{title}</span>
        <ChevronDown size={20} aria-hidden="true" />
      </button>
      <div id={id} className="mobile-disclosure-content">{children}</div>
    </div>
  );
}
