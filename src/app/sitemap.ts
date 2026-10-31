import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { projectsData } from '@/data/projects';
import { navigation } from '@/data/navigation';
import { engineeringCases } from '@/data/engineering';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = navigation.map(({ href }) => ({
        url: `${siteConfig.links.domain}${href}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: href === '/' ? 1 : 0.8,
    }));

    const projectRoutes = projectsData.map((project) => ({
        url: `${siteConfig.links.domain}/proyectos/${project.slug}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    const engineeringRoutes = engineeringCases.map(({ slug }) => ({
        url: `${siteConfig.links.domain}/proyectos/ingenieria/${slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...projectRoutes, ...engineeringRoutes];
}
