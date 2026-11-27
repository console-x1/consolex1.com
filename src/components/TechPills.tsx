import Link from 'next/link';

type Tech = { label: string; href: string; color: string; page: boolean };

const techs: Record<'fr' | 'en', Tech[]> = {
    fr: [
        { label: 'Node.js', href: '/hebergement-nodejs', color: '#46c08a', page: true },
        { label: 'Python', href: '/hebergement-python', color: '#f0b43a', page: true },
        { label: 'Bots Discord', href: '/hebergement-bot-discord', color: '#5aa9ff', page: true },
        { label: 'Pterodactyl', href: '/hebergement-pterodactyl', color: '#ff8f2e', page: true },
        { label: 'Java', href: '/faq', color: '#ef6a5e', page: false },
        { label: 'Go', href: '/faq', color: '#5ad0e6', page: false },
        { label: 'Rust', href: '/faq', color: '#c9906a', page: false },
        { label: 'nginx', href: '/faq', color: '#46c08a', page: false },
    ],
    en: [
        { label: 'Node.js', href: '/en/nodejs-hosting', color: '#46c08a', page: true },
        { label: 'Python', href: '/en/python-hosting', color: '#f0b43a', page: true },
        { label: 'Discord bots', href: '/en/discord-bot-hosting', color: '#5aa9ff', page: true },
        { label: 'Pterodactyl', href: '/en/pterodactyl-hosting', color: '#ff8f2e', page: true },
        { label: 'Java', href: '/en/faq', color: '#ef6a5e', page: false },
        { label: 'Go', href: '/en/faq', color: '#5ad0e6', page: false },
        { label: 'Rust', href: '/en/faq', color: '#c9906a', page: false },
        { label: 'nginx', href: '/en/faq', color: '#46c08a', page: false },
    ],
};

const copy = {
    fr: { label: 'Technologies compatibles', text: 'Choisissez une technologie pour voir comment l’héberger chez consolex1.' },
    en: { label: 'Supported technologies', text: 'Pick a technology to see how to host it with consolex1.' },
};

export default function TechPills({ locale }: { locale: 'fr' | 'en' }) {
    const t = copy[locale];
    return (
        <section className="my-[clamp(3rem,7vw,5rem)]" aria-label={t.label}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <span className="inline-flex items-center gap-2 font-mono text-[.72rem] font-medium tracking-[.08em] text-mute uppercase before:size-[.4rem] before:bg-accent">
                    {t.label}
                </span>
                <p className="m-0 text-[.92rem] text-mute">{t.text}</p>
            </div>
            <ul className="m-0 mt-5 flex list-none flex-wrap gap-2.5 p-0 sm:gap-3">
                {techs[locale].map((tech) => (
                    <li key={tech.label}>
                        <Link
                            href={tech.href}
                            style={{ '--c': tech.color } as React.CSSProperties}
                            className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-line bg-panel px-4 text-[.95rem] font-medium text-soft no-underline transition-[border-color,translate,color,background-color] duration-200 ease-soft before:size-2 before:rounded-full before:bg-(--c) hover:-translate-y-0.5 hover:border-(--c) hover:bg-panel-hover hover:text-ink"
                        >
                            {tech.label}
                            <span aria-hidden="true" className="-ml-1 w-0 overflow-hidden text-(--c) opacity-0 transition-[width,margin,opacity] duration-200 group-hover:ml-0 group-hover:w-4 group-hover:opacity-100">
                                →
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}