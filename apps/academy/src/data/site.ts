export const site = {
  name: "Ysacc Roncal Academy",
  url: process.env.ACADEMY_URL || "https://academy.ysaccroncal.dev",
  email: process.env.ACADEMY_CONTACT_EMAIL || "samironcal@gmail.com",
  whatsapp: (process.env.ACADEMY_WHATSAPP || "").replace(/\D/g, ""),
  modality: process.env.ACADEMY_MODALITY || "Remoto en vivo",
  linkedin: "https://www.linkedin.com/in/ysacc-roncal",
  github: "https://github.com/ysacc",
  discordUrl: process.env.ACADEMY_DISCORD_URL || "",
};
export const description =
  "Aprende React, TypeScript, Next.js, Node.js y desarrollo web con proyectos reales, mentoría y buenas prácticas profesionales.";
