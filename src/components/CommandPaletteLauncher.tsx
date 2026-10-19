"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CommandPalette = dynamic(() => import("./CommandPalette").then(module => module.CommandPalette), { ssr: false });

// La paleta y su motor de animación se descargan solo al invocarla.
export function CommandPaletteLauncher() {
  const [activated, setActivated] = useState(false);
  useEffect(() => {
    if (activated) return;
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setActivated(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activated]);
  return activated ? <CommandPalette initiallyOpen /> : null;
}
