export type Cohort = {
  id: string;
  programSlug: string;
  startDate?: string;
  schedule?: string;
  seats?: number;
  regularPrice?: number;
  promotionalPrice?: number;
  currency: "PEN" | "USD";
  status: "coming-soon" | "open" | "full" | "closed";
};
// Publicar solo cohortes confirmadas. La ausencia de datos no implica inscripción abierta.
export const cohorts: Cohort[] = [];
export function getProgramCohorts(slug: string) {
  return cohorts.filter(
    (cohort) => cohort.programSlug === slug && cohort.status !== "closed",
  );
}
