import { credentials, credentialKindLabels, type Credential } from "@/data/credentials";

function CredentialCard({ credential }: { credential: Credential }) {
  return (
    <article className="rounded-2xl border border-hairline/15 bg-surface p-6">
      <p className="eyebrow leading-relaxed">{credentialKindLabels[credential.kind]}</p>
      <h3 className="mt-4 text-lg font-semibold leading-snug">{credential.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{credential.issuer}</p>
      <p className="mt-2 text-sm font-medium text-accent-strong dark:text-accent">{credential.year}</p>
      {credential.verificationUrl && (
        <a className="editorial-link" href={credential.verificationUrl} target="_blank" rel="noopener noreferrer">
          Verificar credencial<span className="sr-only">: {credential.name}</span>
        </a>
      )}
    </article>
  );
}

export function Credentials() {
  const additional = credentials.filter(credential => !credential.featured);
  return (
    <>
      <h2 className="sr-only">Credenciales destacadas</h2>
      <p className="section-lead">Credenciales en React, JavaScript, Python y trabajo ágil. Se distingue la evaluación de competencias de la finalización de cursos.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {credentials.filter(credential => credential.featured).map(credential => <CredentialCard key={credential.id} credential={credential} />)}
      </div>
      {additional.length > 0 && (
        <details className="mt-6 rounded-2xl border border-hairline/15 p-6">
          <summary className="cursor-pointer font-semibold">Más credenciales y formación</summary>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">{additional.map(credential => <CredentialCard key={credential.id} credential={credential} />)}</div>
        </details>
      )}
    </>
  );
}
