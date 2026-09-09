"use client";
import { useState } from "react";
import type { FormEvent } from "react";
export function ContactForm({
  email,
  whatsapp,
  programs,
  selected,
}: {
  email: string;
  whatsapp: string;
  programs: { slug: string; title: string }[];
  selected: string;
}) {
  const [prepared, setPrepared] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const program =
      programs.find((p) => p.slug === data.get("programa"))?.title ||
      "Orientación para elegir un programa";
    const message = `Hola Ysacc, soy ${data.get("nombre")}.\nMi correo: ${data.get("email")}\nMe interesa: ${program}\n\n${data.get("mensaje")}`;
    window.location.href = whatsapp
      ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`
      : `mailto:${email}?subject=${encodeURIComponent("Academy · " + program)}&body=${encodeURIComponent(message)}`;
    setPrepared(true);
  }
  return (
    <form className="contact-form" onSubmit={submit}>
      <label htmlFor="nombre">Tu nombre</label>
      <input
        id="nombre"
        name="nombre"
        autoComplete="name"
        required
        maxLength={100}
        placeholder="¿Cómo te llamas?"
      />
      <label htmlFor="email">Correo electrónico</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="tu@correo.com"
      />
      <label htmlFor="programa">¿Qué te gustaría aprender?</label>
      <select id="programa" name="programa" defaultValue={selected}>
        <option value="">Necesito orientación</option>
        {programs.map((p) => (
          <option value={p.slug} key={p.slug}>
            {p.title}
          </option>
        ))}
      </select>
      <label htmlFor="mensaje">Cuéntame sobre ti</label>
      <textarea
        id="mensaje"
        name="mensaje"
        required
        maxLength={2000}
        rows={4}
        placeholder="Tu experiencia, tus objetivos y lo que te gustaría construir…"
      />
      <p className="form-note">
        Los datos se preparan en tu{" "}
        {whatsapp ? "WhatsApp" : "aplicación de correo"} para que revises y
        envíes el mensaje. No se guardan en esta web.
      </p>
      <button className="button" type="submit">
        Continuar por {whatsapp ? "WhatsApp" : "correo"} ↗
      </button>
      {prepared && (
        <p role="status">
          Tu mensaje está preparado. Completa el envío en tu aplicación. Si no
          se abrió, escribe a <a href={`mailto:${email}`}>{email}</a>.
        </p>
      )}
    </form>
  );
}
