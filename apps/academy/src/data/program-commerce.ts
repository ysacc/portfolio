import type { Program } from "./program-types";

export const foundersNote = "Precio de lanzamiento / cupos limitados.";
export const reservationNote = "Se descuenta del precio final.";
export const scheduleNote = "Horario se confirma al abrir cohorte.";
export const formatPrice = (amount: number) =>
  `S/ ${new Intl.NumberFormat("en-US").format(amount)}`;
export function liveHours(p: Program): number | undefined {
  return p.durationWeeks && p.schedule
    ? p.durationWeeks * p.schedule.classesPerWeek * p.schedule.hoursPerClass
    : undefined;
}
export function paymentPlans(p: Program) {
  if (!p.pricing) return [];
  const { founders, regular, installments, premium } = p.pricing;
  return [
    { name: "Fundadores", price: founders, detail: foundersNote },
    { name: "Regular", price: regular, detail: "Pago único." },
    { name: "Cuotas", price: installments.count * installments.amount,
      detail: `${installments.count} x ${formatPrice(installments.amount)}` },
    ...(premium !== undefined ? [{ name: "Premium", price: premium,
      detail: "Consulta el alcance del acompañamiento Premium." }] : []),
  ];
}
