"use client";
import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

export function LandingView() {
  const sent = useRef(false);
  useEffect(() => {
    if (!sent.current) {
      track("frontend_landing_view", { program: "frontend-react" });
      sent.current = true;
    }
  }, []);
  return null;
}
