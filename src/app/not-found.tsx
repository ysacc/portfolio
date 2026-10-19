import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
                La página que buscas no existe o cambió de ubicación.
            </p>
            <Link href="/" className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-fg hover:bg-accent-strong">
                Volver al inicio
            </Link>
        </div>
    );
}
