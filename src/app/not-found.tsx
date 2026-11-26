import type { Metadata } from 'next';
import NotFoundView from '@/components/NotFoundView';
import { getSitePages } from '@/lib/site-pages';

export const metadata: Metadata = {
    title: 'Page introuvable (404) | consolex1',
    robots: { index: false, follow: true },
};

export default function NotFound() {
    const pages = getSitePages().map((page) => ({
        path: page.path,
        title: page.title.replace(/\s*[|·]\s*consolex1\s*$/i, ''),
        locale: page.locale,
        kind: page.kind,
    }));
    return <NotFoundView pages={pages} />;
}