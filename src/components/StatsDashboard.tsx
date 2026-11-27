'use client';

import CountUp from './CountUp';
import { useStatsDetail } from './stats-detail';

type Locale = 'fr' | 'en';

const copy = {
    fr: {
        servers: { label: 'Serveurs', hint: 'hébergés sur notre infrastructure' },
        users: { label: 'Utilisateurs', hint: 'comptes créés depuis Discord' },
        eggs: { label: 'Eggs', hint: 'environnements disponibles' },
        ram: { label: 'Mémoire RAM', hint: 'utilisée en moyenne par serveur' },
        disk: { label: 'Disque', hint: 'utilisé en moyenne par serveur' },
        errorTitle: 'Statistiques indisponibles',
        errorText: 'L’API ne répond pas pour le moment. Revenez dans quelques instants.',
    },
    en: {
        servers: { label: 'Servers', hint: 'hosted on our infrastructure' },
        users: { label: 'Users', hint: 'accounts created from Discord' },
        eggs: { label: 'Eggs', hint: 'available environments' },
        ram: { label: 'RAM', hint: 'used on average per server' },
        disk: { label: 'Disk', hint: 'used on average per server' },
        errorTitle: 'Statistics unavailable',
        errorText: 'The API is not responding right now. Please come back in a few moments.',
    },
} as const;

const UNITS = { fr: ['o', 'Ko', 'Mo', 'Go', 'To'], en: ['B', 'KB', 'MB', 'GB', 'TB'] } as const;

// Unités binaires (1 Go = 1024 Mo), comme sur la page des offres
function formatBytes(bytes: number, locale: Locale) {
    let value = bytes;
    let i = 0;
    while (value >= 1024 && i < 4) {
        value /= 1024;
        i++;
    }
    const digits = i === 0 || value >= 100 ? 0 : 1;
    const number = value.toLocaleString(locale === 'fr' ? 'fr-FR' : 'en-US', { maximumFractionDigits: digits, minimumFractionDigits: digits });
    return `${number} ${UNITS[locale][i]}`;
}

const label = 'font-mono text-[.72rem] tracking-[.08em] text-mute uppercase';
const bigNumber = 'm-0 mt-3 font-display text-[clamp(2.8rem,7vw,4.6rem)] leading-none font-bold tracking-[-.035em] text-ink';

export default function StatsDashboard({ locale }: { locale: Locale }) {
    const t = copy[locale];
    const { data, ready } = useStatsDetail();
    const intl = locale === 'fr' ? 'fr-FR' : 'en-US';
    const count = (n: number) => Math.round(n).toLocaleString(intl);
    const bytes = (n: number) => formatBytes(n, locale);
    const start = data !== null;

    if (ready && !data) {
        return (
            <div role="alert" className="rounded-2xl border border-line-strong border-l-[3px] border-l-bad bg-panel p-6 sm:p-8">
                <h2 className="text-[1.3rem]">{t.errorTitle}</h2>
                <p className="mt-3 mb-0 max-w-136 text-soft">{t.errorText}</p>
            </div>
        );
    }

    const skeleton = <span className="inline-block h-[.8em] w-[3.2ch] animate-skeleton rounded bg-line align-middle" aria-hidden="true" />;

    const counts = [
        { key: 'servers', value: data?.serverCount ?? null, ...t.servers },
        { key: 'users', value: data?.userCount ?? null, ...t.users },
        { key: 'eggs', value: data?.eggCount ?? null, ...t.eggs },
    ];
    const resources = [
        { key: 'ram', value: data?.ramAverage ?? null, ...t.ram },
        { key: 'disk', value: data?.diskAverage ?? null, ...t.disk },
    ];

    return (
        <div className="grid gap-4 sm:gap-5">
            <dl className="m-0 grid overflow-hidden rounded-xl border border-line bg-panel sm:grid-cols-3">
                {counts.map((item) => (
                    <div key={item.key} className="border-line p-5 sm:p-7 not-first:border-t sm:not-first:border-t-0 sm:not-first:border-l">
                        <dt className={label}>{item.label}</dt>
                        <dd className={bigNumber}>{ready && item.value !== null ? <CountUp target={item.value} start={start} format={count} /> : ready ? '—' : skeleton}</dd>
                        <p className="mt-3 mb-0 text-[.92rem] leading-normal text-soft">{item.hint}</p>
                    </div>
                ))}
            </dl>

            <dl className="m-0 grid gap-4 sm:grid-cols-2 sm:gap-5">
                {resources.map((item) => (
                    <div key={item.key} className="rounded-xl border border-line bg-panel p-5 sm:p-7">
                        <dt className={label}>{item.label}</dt>
                        <dd className={bigNumber}>{ready && item.value !== null ? <CountUp target={item.value} start={start} format={bytes} /> : ready ? '—' : skeleton}</dd>
                        <p className="mt-3 mb-0 text-[.92rem] leading-normal text-soft">{item.hint}</p>
                    </div>
                ))}
            </dl>
        </div>
    );
}