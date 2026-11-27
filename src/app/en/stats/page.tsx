import type { Metadata } from 'next';
import { withSocial } from '@/lib/social';
import StatsDashboard from '@/components/StatsDashboard';

export const metadata: Metadata = withSocial('/en/stats', {
    alternates: {
        canonical: 'https://consolex1.com/en/stats',
        languages: {
            fr: 'https://consolex1.com/stats',
            en: 'https://consolex1.com/en/stats',
        },
    },
    title: 'consolex1 statistics | consolex1',
    description: 'Number of servers, users and eggs, plus average memory and disk used per server: figures from the consolex1 infrastructure.',
    keywords: ['consolex1 statistics', 'hosted servers', 'hosting availability', 'consolex1'],
} as Metadata);

export default function StatsPage() {
    return (
        <section className="my-[clamp(3rem,7vw,5rem)]">
            <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
                <span className="mb-4 inline-flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.08em] text-mute before:size-[.4rem] before:bg-accent">Statistics</span>
                <h1>Statistics</h1>
                <p>Figures from the consolex1 infrastructure: servers, users, eggs and resources used on average per server.</p>
            </div>
            <StatsDashboard locale="en" />
        </section>
    );
}