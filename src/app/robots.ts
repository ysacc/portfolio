import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/focus/', '/api/'],
        },
        sitemap: `${siteConfig.links.domain}/sitemap.xml`,
    };
}
