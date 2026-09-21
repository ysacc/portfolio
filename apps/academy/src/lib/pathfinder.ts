export const pathQuestions = [
  { id: "programming", label: "¿Has programado antes?" },
  { id: "htmlCss", label: "¿Puedes construir una página con HTML y CSS?" },
  {
    id: "javascript",
    label: "¿Puedes trabajar con funciones, arrays y eventos en JavaScript?",
  },
  { id: "apis", label: "¿Has consumido una API y manejado sus respuestas?" },
  {
    id: "react",
    label: "¿Puedes construir con componentes, estado y hooks de React?",
  },
  { id: "goal", label: "¿En qué te gustaría enfocarte?" },
] as const;
export type PathAnswers = Partial<
  Record<Exclude<(typeof pathQuestions)[number]["id"], "goal">, "yes" | "no">
> & {
  goal?: "frontend" | "full-stack";
};
export type RecommendedSlug = "desde-cero" | "frontend-react" | "full-stack";

export function getRecommendedProgram(
  answers: PathAnswers,
): { slug: RecommendedSlug; reason: string } | null {
  if (pathQuestions.some(({ id }) => !answers[id])) return null;
  if (
    answers.programming !== "yes" ||
    answers.htmlCss !== "yes" ||
    answers.javascript !== "yes"
  ) {
    return {
      slug: "desde-cero",
      reason:
        "Conviene reforzar programación, HTML, CSS y JavaScript antes de avanzar hacia aplicaciones con React.",
    };
  }
  if (
    answers.react === "yes" &&
    answers.apis === "yes" &&
    answers.goal === "full-stack"
  ) {
    return {
      slug: "full-stack",
      reason:
        "Ya cuentas con bases de JavaScript, React y APIs, y quieres ampliar tu práctica hacia backend y bases de datos.",
    };
  }
  return {
    slug: "frontend-react",
    reason:
      answers.goal === "full-stack"
        ? "Tu objetivo es Full Stack. Primero te recomendamos consolidar React y el consumo de APIs para llegar con una base frontend más sólida."
        : "Tienes fundamentos web y quieres enfocarte en frontend. Revisa esta ruta para practicar React, APIs y un flujo de trabajo profesional.",
  };
}
