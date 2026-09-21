"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  getRecommendedProgram,
  pathQuestions,
  type PathAnswers,
} from "@/lib/pathfinder";
import { track } from "@/lib/analytics";

export type RouteSummary = {
  slug: string;
  title: string;
  duration: string;
  modality: string;
  href: string;
};
export function Pathfinder({ routes }: { routes: RouteSummary[] }) {
  const [answers, setAnswers] = useState<PathAnswers>({});
  const [step, setStep] = useState(-1);
  const heading = useRef<HTMLHeadingElement>(null);
  const question = pathQuestions[step];
  const result =
    step === pathQuestions.length ? getRecommendedProgram(answers) : null;
  const program = routes.find((route) => route.slug === result?.slug);
  useEffect(() => {
    if (step >= 0) heading.current?.focus();
  }, [step]);

  function restart() {
    setAnswers({});
    setStep(-1);
    requestAnimationFrame(() => heading.current?.focus());
  }
  return (
    <section className="pathfinder" aria-label="Orientador de ruta">
      {step === -1 ? (
        <>
          <h2 ref={heading} tabIndex={-1}>
            Encuentra un punto de partida.
          </h2>
          <p>
            Seis preguntas sobre tus conocimientos y tu objetivo. Verás la
            recomendación al terminar, sin email ni registro. Las respuestas no
            se guardan al salir.
          </p>
          <button
            className="button"
            onClick={() => {
              track("pathfinder_start");
              setStep(0);
            }}
          >
            Empezar diagnóstico →
          </button>
        </>
      ) : result && program ? (
        <>
          <h2 ref={heading} tabIndex={-1}>
            Te recomendamos revisar: {program.title}
          </h2>
          <p>
            Por lo que respondiste, esta es la ruta que mejor encaja con tu
            punto de partida.
          </p>
          <p>{result.reason}</p>
          <p>
            <strong>
              {program.duration} · {program.modality}
            </strong>
          </p>
          <p>
            Es una orientación inicial. Revisa el programa y sus requisitos para
            decidir con más contexto.
          </p>
          <div className="actions">
            <Link
              className="button"
              href={program.href}
              onClick={() =>
                track("pathfinder_program_click", { program: program.slug })
              }
            >
              Ver programa recomendado →
            </Link>
            <button
              className="text-link"
              onClick={() => setStep(pathQuestions.length - 1)}
            >
              Volver a la pregunta anterior
            </button>
            <button className="text-link" onClick={restart}>
              Reiniciar
            </button>
          </div>
        </>
      ) : question ? (
        <>
          <p id="path-progress">
            Pregunta {step + 1} de {pathQuestions.length}
          </p>
          <progress
            aria-labelledby="path-progress"
            max={pathQuestions.length}
            value={step + 1}
          />
          <h2 ref={heading} tabIndex={-1} className="pathfinder-heading">
            Tu experiencia y tu objetivo
          </h2>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (!answers[question.id]) return;
              const next = step + 1;
              if (next === pathQuestions.length) {
                const recommendation = getRecommendedProgram(answers);
                if (recommendation)
                  track("pathfinder_result", { program: recommendation.slug });
              }
              setStep(next);
            }}
          >
            <fieldset key={question.id}>
              <legend>{question.label}</legend>
              {(question.id === "goal"
                ? [
                    { value: "frontend", label: "En frontend" },
                    {
                      value: "full-stack",
                      label: "En sistemas completos: frontend y backend",
                    },
                  ]
                : [
                    { value: "yes", label: "Sí, puedo hacerlo" },
                    { value: "no", label: "Todavía no / necesito reforzarlo" },
                  ]
              ).map(({ value, label }) => (
                <label className="path-option" key={value}>
                  <input
                    type="radio"
                    name={question.id}
                    value={value}
                    required
                    checked={answers[question.id] === value}
                    onChange={() => {
                      const answer = value as
                        "yes" | "no" | "frontend" | "full-stack";
                      setAnswers((previous) => ({
                        ...previous,
                        [question.id]: answer,
                      }));
                      track("pathfinder_answer", {
                        question: question.id,
                        answer,
                      });
                    }}
                  />
                  {label}
                </label>
              ))}
            </fieldset>
            <div className="actions">
              <button
                className="button"
                type="submit"
                disabled={!answers[question.id]}
              >
                {step === pathQuestions.length - 1
                  ? "Ver mi recomendación"
                  : "Siguiente"}{" "}
                →
              </button>
              {step > 0 && (
                <button
                  type="button"
                  className="text-link"
                  onClick={() => setStep(step - 1)}
                >
                  Anterior
                </button>
              )}
              <button type="button" className="text-link" onClick={restart}>
                Reiniciar
              </button>
            </div>
          </form>
        </>
      ) : null}
    </section>
  );
}
