"use client";
import Link from "next/link";
import {
  track,
  type AcademyEvent,
  type EventProperties,
} from "@/lib/analytics";

export function TrackedLink({
  href,
  className,
  event,
  properties,
  children,
}: {
  href: string;
  className?: string;
  event: AcademyEvent;
  properties?: EventProperties;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        track(event, properties);
        if (properties?.channel === "whatsapp")
          track("whatsapp_click", properties);
      }}
    >
      {children}
    </Link>
  );
}
