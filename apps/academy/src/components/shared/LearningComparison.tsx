import { learningComparison } from "@/data/technologies";
import { CheckList } from "@/components/program/ProgramOverview";
export function LearningComparison() {
  return (
    <section className="container section learning-comparison">
      <div>
        <p className="eyebrow">CONTENIDO + ACOMPAÑAMIENTO</p>
        <h2>¿Por qué no simplemente aprender con YouTube?</h2>
        <p>
          El contenido existe. Lo difícil es saber qué aprender, en qué orden y
          si realmente lo estás aplicando correctamente.
        </p>
        <p>
          Los recursos autodidactas son valiosos y seguirán siendo parte de tu
          aprendizaje. Academy añade un recorrido con práctica y feedback.
        </p>
      </div>
      <div className="comparison-columns">
        <article>
          <h3>Contenido autodidacta</h3>
          <CheckList items={learningComparison.selfDirected} />
        </article>
        <article>
          <h3>Academy</h3>
          <CheckList items={learningComparison.academy} />
        </article>
      </div>
    </section>
  );
}
