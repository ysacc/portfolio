export const navigation = [
  { name: "Inicio", href: "/", description: "Presentación profesional" },
  { name: "Especialidades", href: "/especialidades", description: "Frontend, Full Stack, cloud e IA" },
  { name: "Proyectos", href: "/proyectos", description: "Proyectos y casos de estudio" },
  { name: "Experiencia", href: "/experiencia", description: "Trayectoria profesional y CV" },
  { name: "Certificaciones", href: "/certificaciones", description: "Credenciales y formación complementaria" },
  { name: "Sobre mí", href: "/sobre-mi", description: "Enfoque de ingeniería y formación" },
  { name: "Contacto", href: "/contacto", description: "Oportunidades profesionales" },
] as const;

export function isNavigationActive(pathname: string, href: string): boolean {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}
