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
            <h2 className="text-3xl font-bold">Something went wrong!</h2>
            <p className="text-gray-600 dark:text-gray-400">
                An error occurred while rendering this page.
            </p>
            <Button onClick={() => reset()} variant="primary">
                Try again
            </Button>
        </div>
    );
}
