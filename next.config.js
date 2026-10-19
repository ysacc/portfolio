/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    async headers() {
        return [{ source: '/:path*', headers: [
            { key: 'X-Content-Type-Options', value: 'nosniff' },
            { key: 'X-Frame-Options', value: 'DENY' },
            { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
            { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
            { key: 'Content-Security-Policy', value: "frame-ancestors 'none'; object-src 'none'; base-uri 'self'" },
        ] }];
    },
    // Build de QA aislado del servidor de desarrollo del usuario.
    distDir: process.env.PORTFOLIO_QA === '1' ? '.next-qa' : '.next',
    outputFileTracingExcludes: {
        '/*': ['./.qa-tools/**', './.pdf-tools/**', './qa-artifacts/**'],
    },
    async redirects() {
        return [
            { source: '/projects', destination: '/proyectos', permanent: true },
            // Los recursos públicos también viven en /projects: no redirigir extensiones.
            { source: '/projects/:slug([a-z0-9-]+)', destination: '/proyectos/:slug', permanent: true },
            { source: '/resume', destination: '/experiencia', permanent: true },
            { source: '/contact', destination: '/contacto', permanent: true },
        ];
    },
    async rewrites() {
        return [];
    },
};

export default nextConfig;
