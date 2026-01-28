import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const host = req.headers.get('host');
    const forwardedHost = req.headers.get('x-forwarded-host');
    const referer = req.headers.get('referer');

    const ALLOWED_DOMAIN = 'ysaccroncal.dev';

    // Verificamos si la petición viene de nuestro dominio principal
    // NOTA: Cuando Vercel hace un rewrite, el 'host' puede seguir siendo el del lab, 
    // pero el 'x-forwarded-host' suele ser el original.
    const isFromMainDomain =
        host?.includes(ALLOWED_DOMAIN) ||
        forwardedHost?.includes(ALLOWED_DOMAIN) ||
        referer?.includes(ALLOWED_DOMAIN);

    // Si intentan entrar directamente a *.vercel.app
    if (!isFromMainDomain) {
        return new NextResponse('Access Forbidden: Use ysaccroncal.dev/labs to access this content.', {
            status: 403,
        });
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/:path*',
};
