export type AcademyEvent =
  | "program_view"
  | "program_cta_click"
  | "curriculum_expand"
  | "project_view"
  | "whatsapp_click"
  | "contact_submit"
  | "brochure_download";
export type EventProperties = {
  program?: string;
  placement?: string;
  module?: string;
  project?: string;
  channel?: "email" | "whatsapp";
  action?: "handoff";
  location?: string;
};
type AnalyticsAdapter = (
  event: AcademyEvent,
  properties: EventProperties,
) => void;
let adapter: AnalyticsAdapter | undefined;
export function setAnalyticsAdapter(next: AnalyticsAdapter | undefined) {
  adapter = next;
}
export function track(event: AcademyEvent, properties: EventProperties = {}) {
  if (typeof window === "undefined") return;
  // Never include form values, names, email addresses, or message text.
  try {
    adapter?.(event, properties);
  } catch {
    /* Analytics cannot interrupt navigation. */
  }
  window.dispatchEvent(
    new CustomEvent("academy:analytics", { detail: { event, properties } }),
  );
}
