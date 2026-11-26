import type { MetadataRoute } from 'next';
import { SITE_URL, getSitePages } from '@/lib/site-pages';

export const dynamic = 'force-static';

const url = (path: string) => `${SITE_URL}${path === '/' ? '/' : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
    return getSitePages().map((page) => ({
        url: url(page.path),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        // hreflang : chaque page déclare sa version dans l'autre langue
        ...(page.alternate
            ? {
                alternates: {
                    languages: {
                        [page.locale]: url(page.path),
                        [page.locale === 'fr' ? 'en' : 'fr']: url(page.alternate),
                    },
                },
            }
            : {}),
    }));
}