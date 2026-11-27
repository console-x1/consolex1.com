import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site-pages';

// /og/<nom>.png : « / » → home, « /en » → en, « /en/pricing » → en-pricing
export function ogName(path: string) {
    if (path === '/') return 'home';
    return path.replace(/^\/+|\/+$/g, '').replace(/\//g, '-');
}

export const ogUrl = (path: string) => `/og/${ogName(path)}.png`;

// Ajoute à une page ses balises Open Graph / Twitter (titre, description, image de partage dédiée)
export function withSocial(path: string, meta: Metadata): Metadata {
    const image = ogUrl(path);
    const title = typeof meta.title === 'string' ? meta.title : undefined;
    const description = typeof meta.description === 'string' ? meta.description : undefined;
    const locale = path.startsWith('/en') ? 'en_US' : 'fr_FR';

    return {
        ...meta,
        openGraph: {
            siteName: 'consolex1',
            type: 'website',
            locale,
            url: `${SITE_URL}${path === '/' ? '' : path}`,
            title,
            description,
            ...meta.openGraph,
            images: [{ url: image, width: 1200, height: 630, alt: title ?? 'consolex1' }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            ...meta.twitter,
            images: [image],
        },
    };
}