import type { Metadata } from 'next';
import { withSocial } from '@/lib/social';
import StatsDashboard from '@/components/StatsDashboard';

export const metadata: Metadata = withSocial('/stats', {
    alternates: {
        canonical: 'https://consolex1.com/stats',
        languages: {
            fr: 'https://consolex1.com/stats',
            en: 'https://consolex1.com/en/stats',
        },
    },
    title: 'Statistiques de consolex1 | consolex1',
    description: 'Nombre de serveurs, d’utilisateurs et d’eggs, mémoire et disque utilisés en moyenne par serveur : les chiffres de l’infrastructure consolex1.',
    keywords: ['statistiques consolex1', 'serveurs hébergés', 'disponibilité hébergement', 'consolex1'],
} as Metadata);

export default function StatsPage() {
    return (
        <section className="my-[clamp(3rem,7vw,5rem)]">
            <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
                <span className="mb-4 inline-flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.08em] text-mute before:size-[.4rem] before:bg-accent">Statistiques</span>
                <h1>Statistiques</h1>
                <p>Les chiffres de l’infrastructure consolex1 : serveurs, utilisateurs, eggs et ressources utilisées en moyenne par serveur.</p>
            </div>
            <StatsDashboard locale="fr" />
        </section>
    );
}