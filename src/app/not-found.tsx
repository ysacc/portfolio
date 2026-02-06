import Link from 'next/link';
import { Button } from '@/components/Button';

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-4xl font-bold">404 - Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
                The page you are looking for does not exist or has been moved.
            </p>
            <Button as="a" href="/" variant="primary">
                Return Home
            </Button>
        </div>
    );
}
