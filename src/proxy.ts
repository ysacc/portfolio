import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};

export function proxy(req: NextRequest) {
    const host = req.headers.get('host') || '';

    // Solo protegemos si es el subdominio de colegio o localhost (para pruebas si quieres)
    const isColegio = host.startsWith('colegio.') || host.includes('colegio-');

    if (!isColegio) {
        return NextResponse.next();
    }

    const authHeader = req.headers.get('authorization');

    const BASIC_USER = process.env.BASIC_USER || 'admin';
    const BASIC_PASS = process.env.BASIC_PASS || 'colegio-dev-12345';

    if (authHeader?.startsWith('Basic ')) {
        try {
            const base64 = authHeader.slice('Basic '.length);
            const decoded = atob(base64);
            const [user, pass] = decoded.split(':');

            if (user === BASIC_USER && pass === BASIC_PASS) {
                return NextResponse.next();
            }
        } catch {
            // Fall through to 401
        }
    }

    return new NextResponse('Authentication required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Colegio Secure Zone", charset="UTF-8"',
        },
    });
}
