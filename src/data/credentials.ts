export type CredentialKind = "assessment" | "course" | "training";

export interface Credential {
  id: string;
  name: string;
  issuer: string;
  year: number;
  kind: CredentialKind;
  verificationUrl?: `https://${string}`;
  featured: boolean;
}

export const credentialKindLabels: Record<CredentialKind, string> = {
  assessment: "Certificación mediante evaluación",
  course: "Certificado de finalización de curso",
  training: "Formación complementaria",
};

// Fuente: CV final ES. No se proporcionaron identificadores ni URLs de verificación.
export const credentials: readonly Credential[] = [
  { id: "hackerrank-react", name: "Frontend Developer (React)", issuer: "HackerRank", year: 2024, kind: "assessment", featured: true },
  { id: "hackerrank-js", name: "JavaScript (Intermediate)", issuer: "HackerRank", year: 2023, kind: "assessment", featured: true },
  { id: "fcc-js", name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: 2023, kind: "assessment", featured: true },
  { id: "cisco-python", name: "Python Essentials 1", issuer: "Cisco Networking Academy / OpenEDG", year: 2023, kind: "course", featured: true },
  { id: "scrum-fundamentals", name: "Scrum Fundamentals Certified", issuer: "SCRUMstudy", year: 2025, kind: "assessment", featured: true },
];
