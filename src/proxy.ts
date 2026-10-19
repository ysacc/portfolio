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
    const xForwardedHost = req.headers.get('x-forwarded-host');
    const hostHeader = req.headers.get('host');
    // Un forwarded host manipulado no debe desactivar la protección del host real.
    const isColegio = [hostHeader, xForwardedHost].some(value => {
        const host = value?.toLowerCase() ?? '';
        return host.startsWith('colegio.') || host.includes('colegio-');
    });

    if (!isColegio) {
        return NextResponse.next();
    }

    const authHeader = req.headers.get('authorization');

    const BASIC_USER = process.env.BASIC_USER;
    const BASIC_PASS = process.env.BASIC_PASS;
    if (!BASIC_USER || !BASIC_PASS) {
        return new NextResponse('Servicio no configurado', { status: 503 });
    }

    if (authHeader?.startsWith('Basic ')) {
        try {
            const base64 = authHeader.slice('Basic '.length);
            const decoded = atob(base64);
            const separator = decoded.indexOf(':');
            const user = decoded.slice(0, separator);
            const pass = decoded.slice(separator + 1);

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

export default proxy;
