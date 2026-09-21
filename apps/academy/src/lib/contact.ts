import { site } from "@/data/site";

export function programContact(
  program: { slug: string; title: string },
  whatsapp = site.whatsapp,
) {
  return whatsapp
    ? {
        href: `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hola Ysacc, quisiera información sobre ${program.title}.`)}`,
        channel: "whatsapp" as const,
      }
    : {
        href: `/contacto?programa=${encodeURIComponent(program.slug)}`,
        channel: "email" as const,
      };
}
