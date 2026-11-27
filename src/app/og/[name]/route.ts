import { ogImageFor } from '@/lib/og';
import { ogName } from '@/lib/social';
import { getSitePages } from '@/lib/site-pages';

export const dynamic = 'force-static';
export const dynamicParams = false;

// Un fichier .png par page : /og/tarif.png, /og/en-pricing.png, /og/guides-…png
export function generateStaticParams() {
    return getSitePages().map((page) => ({ name: `${ogName(page.path)}.png` }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ name: string }> }) {
    const { name } = await params;
    const key = name.replace(/\.png$/, '');
    const page = getSitePages().find((p) => ogName(p.path) === key);
    return ogImageFor(page?.path ?? '/');
}