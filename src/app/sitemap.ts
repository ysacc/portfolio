import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { projectsData } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/projects', '/resume', '/contact'].map((route) => ({
        url: `${siteConfig.links.domain}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const projectRoutes = projectsData.map((project) => ({
        url: `${siteConfig.links.domain}/projects/${project.slug}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...projectRoutes];
}
