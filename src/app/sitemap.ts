import { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { projectsData } from '@/data/projects';
import { navigation } from '@/data/navigation';

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

    return [...routes, ...projectRoutes];
}
