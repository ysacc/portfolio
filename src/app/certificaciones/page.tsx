import { InteriorPage } from "@/components/InteriorPage";
import { Credentials } from "@/components/Credentials";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Certificaciones y formación", "Credenciales de Ysacc Roncal en React, JavaScript, Python y Scrum, con entidades emisoras, años y distinción entre evaluación y finalización de cursos.", "/certificaciones");

export default function CertificationsPage() {
  return <InteriorPage title="Certificaciones y formación complementaria" description="Aprendizaje y evaluación de competencias que acompañan mi experiencia en ingeniería de software."><Credentials /></InteriorPage>;
}
