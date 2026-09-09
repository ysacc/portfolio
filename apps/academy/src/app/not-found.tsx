import Link from "next/link";
export default function NotFound() {
  return (
    <section className="container section">
      <p className="eyebrow">404</p>
      <h1>
        Esta ruta aún
        <br />
        no tiene código.
      </h1>
      <Link className="button" href="/programas">
        Explorar programas ↗
      </Link>
    </section>
  );
}
