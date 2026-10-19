'use client';

import { useEffect } from 'react';
import { Button } from '@/components/Button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold">No pudimos cargar la página</h2>
            <p className="text-gray-600 dark:text-gray-400">
                Ocurrió un error al mostrar esta página.
            </p>
            <Button onClick={() => reset()} variant="primary">
                Volver a intentar
            </Button>
        </div>
    );
}
