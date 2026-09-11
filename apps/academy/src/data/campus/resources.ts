export type CampusResource = {
  title: string;
  description: string;
  type: "documentation" | "video" | "practice" | "tool";
  url: string;
  programSlugs: string[];
};

export const campusResources: CampusResource[] = [
  {
    title: "MDN Web Docs",
    description: "Referencia segura para HTML, CSS y JavaScript.",
    type: "documentation",
    url: "https://developer.mozilla.org/es/",
    programSlugs: ["desde-cero", "frontend-react"],
  },
  {
    title: "React Docs",
    description: "Documentación oficial para aprender React con ejemplos y conceptos clave.",
    type: "documentation",
    url: "https://react.dev/",
    programSlugs: ["frontend-react", "full-stack"],
  },
  {
    title: "Next.js Docs",
    description: "Referencia para rutas, renderizado y arquitectura de aplicaciones web.",
    type: "documentation",
    url: "https://nextjs.org/docs",
    programSlugs: ["full-stack"],
  },
  {
    title: "GitHub Skills",
    description: "Recursos prácticos para trabajar con ramas, PR y flujo de colaboración.",
    type: "practice",
    url: "https://skills.github.com/",
    programSlugs: ["desde-cero", "frontend-react", "full-stack"],
  },
];
