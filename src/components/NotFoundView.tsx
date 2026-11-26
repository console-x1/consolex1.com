'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState, useSyncExternalStore } from 'react';
import Footer from './Footer';
import Header from './Header';
import Logo from './Logo';

type Page = { path: string; title: string; locale: 'fr' | 'en'; kind: 'page' | 'hosting' | 'guide' };

const copy = {
    fr: {
        label: 'Erreur 404',
        title: 'Cette page est introuvable.',
        text: 'Le lien est peut-être ancien ou mal orthographié. Cherchez une page ci-dessous ou repartez de l’accueil.',
        home: 'Retour à l’accueil',
        guides: 'Voir les guides',
        maybe: 'Vous cherchiez peut-être',
        placeholder: 'rechercher une page…',
        none: 'aucun résultat',
        notFound: 'No such file or directory',
        hint: '↑ ↓ pour naviguer, Entrée pour ouvrir',
    },
    en: {
        label: 'Error 404',
        title: 'This page could not be found.',
        text: 'The link may be old or misspelled. Search for a page below or start again from the home page.',
        home: 'Back to home',
        guides: 'Browse the guides',
        maybe: 'Did you mean',
        placeholder: 'search for a page…',
        none: 'no results',
        notFound: 'No such file or directory',
        hint: '↑ ↓ to move, Enter to open',
    },
} as const;

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
const tokens = (s: string) => norm(s).split(/[^a-z0-9]+/).filter((t) => t.length > 1);
// mots trop génériques pour juger de la ressemblance
const STOP = new Set(['gratuit', 'gratuits', 'gratuite', 'hebergement', 'hebergeur', 'hosting', 'free', 'consolex1', 'page', 'www', 'html', 'les', 'des', 'the', 'for']);

const subscribe = () => () => { };
const getPath = () => window.location.pathname;

export default function NotFoundView({ pages }: { pages: Page[] }) {
    const router = useRouter();
    const path = useSyncExternalStore(subscribe, getPath, () => '');
    const locale: 'fr' | 'en' = path.startsWith('/en') ? 'en' : 'fr';
    const t = copy[locale];
    const [query, setQuery] = useState('');
    const [cursor, setCursor] = useState(0);

    const local = useMemo(() => pages.filter((p) => p.locale === locale), [pages, locale]);

    // pages dont l'adresse ressemble à celle demandée (l'adresse pèse plus que le titre)
    const similar = useMemo(() => {
        const wanted = tokens(path).filter((w) => !STOP.has(w));
        if (wanted.length === 0) return [];
        const near = (a: string, b: string) => a === b || (a.length >= 4 && b.length >= 4 && (a.startsWith(b) || b.startsWith(a)));
        return local
            .map((p) => {
                const inPath = tokens(p.path);
                const inTitle = tokens(p.title);
                const score = wanted.reduce(
                    (sum, w) => sum + (inPath.some((h) => near(h, w)) ? 3 : 0) + (inTitle.some((h) => near(h, w)) ? 1 : 0),
                    0,
                );
                return { p, score };
            })
            .filter((x) => x.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 3)
            .map((x) => x.p);
    }, [local, path]);

    const results = useMemo(() => {
        const q = tokens(query);
        if (q.length === 0) {
            const home = locale === 'en' ? '/en' : '/';
            const defaults = locale === 'en' ? ['/en/pricing', '/en/guides', '/en/faq', '/en/about'] : ['/tarif', '/guides', '/faq', '/a-propos'];
            return [home, ...defaults].map((d) => local.find((p) => p.path === d)).filter((p): p is Page => Boolean(p));
        }
        return local
            .map((p) => {
                const hay = norm(`${p.title} ${p.path}`);
                return { p, score: q.filter((w) => hay.includes(w)).length };
            })
            .filter((x) => x.score === q.length)
            .slice(0, 6)
            .map((x) => x.p);
    }, [query, local, locale]);

    const active = Math.min(cursor, Math.max(0, results.length - 1));
    const go = (p?: Page) => p && router.push(p.path);

    function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setCursor((c) => Math.min(c + 1, results.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setCursor((c) => Math.max(c - 1, 0));
        } else if (e.key === 'Enter') {
            go(results[active]);
        }
    }

    return (
        <div data-shell className="relative z-1 mx-auto w-full max-w-[100rem] px-4 pb-8 sm:px-6 lg:px-10 2xl:px-14">
            <Header locale={locale} />
            <main lang={locale} className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_minmax(0,34rem)] lg:gap-16 lg:py-24">
                <div className="min-w-0 *:animate-rise [&>:nth-child(2)]:[animation-delay:70ms] [&>:nth-child(3)]:[animation-delay:140ms] [&>:nth-child(4)]:[animation-delay:210ms]">
                    <p className="m-0 inline-flex items-center gap-2 font-mono text-[.74rem] tracking-[.08em] text-mute uppercase before:size-[.45rem] before:bg-accent">
                        {t.label}
                    </p>

                    <p className="mt-4 mb-0 flex items-center gap-1 font-display text-[clamp(5rem,22vw,11rem)] leading-[.9] font-bold tracking-tighter text-ink" aria-hidden="true">
                        4
                        <span className="relative grid size-[.78em] place-items-center">
                            <span className="absolute inset-0 animate-spin rounded-full border-[.09em] border-line-strong border-t-accent [animation-duration:2.8s]" />
                            <Logo size={48} className="size-[.34em] animate-pop" />
                        </span>
                        4
                    </p>

                    <div>
                        <h1 className="text-[clamp(1.7rem,4vw,2.6rem)]">{t.title}</h1>
                        <p className="mt-4 mb-0 max-w-136 text-base leading-[1.7] text-soft sm:text-[1.05rem]">{t.text}</p>
                        {similar.length > 0 && (
                            <p className="mt-5 mb-0 text-[.95rem] text-soft">
                                {t.maybe} :{' '}
                                {similar.map((p, i) => (
                                    <span key={p.path}>
                                        {i > 0 && ', '}
                                        <Link href={p.path} className="text-brand underline underline-offset-[3px] hover:text-ink">
                                            {p.title}
                                        </Link>
                                    </span>
                                ))}
                            </p>
                        )}
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <Link className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_0_var(--c-accent)] after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100 w-full sm:w-auto" href={locale === 'en' ? '/en' : '/'}>
                            {t.home}
                        </Link>
                        <Link className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] border-line-strong bg-panel text-ink bg-[linear-gradient(var(--c-line),var(--c-line))] bg-size-[0%_100%] bg-left bg-no-repeat hover:bg-size-[100%_100%] hover:border-ink after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100 w-full sm:w-auto" href={locale === 'en' ? '/en/guides' : '/guides'}>
                            {t.guides}
                        </Link>
                    </div>
                </div>

                {/* terminal : la recherche est un « ls | grep » */}
                <div className="min-w-0 animate-rise overflow-hidden rounded-xl border border-[#2b2e35] bg-[#0b0c0f] font-mono text-[.8rem] text-[#c9c7c1] shadow-[8px_8px_0_0_rgba(255,143,46,.18)] [animation-delay:200ms]">
                    <div className="flex items-center gap-1.5 border-b border-[#23262c] px-4 py-2.5 text-[.72rem] text-[#8d8c87]">
                        <i className="size-2.5 rounded-full bg-[#3a3d44]" />
                        <i className="size-2.5 rounded-full bg-[#3a3d44]" />
                        <i className="size-2.5 rounded-full bg-[#3a3d44]" />
                        <span className="ml-2">consolex1 · 404</span>
                    </div>
                    <div className="px-4 py-4 leading-[1.8] sm:px-5">
                        <div className="break-all text-[#8d8c87]">
                            <span className="text-[#5aa9ff]">› </span>cd {path || '/…'}
                        </div>
                        <div className="break-all text-[#ef6a5e]">cd: {path || '/…'}: {t.notFound}</div>

                        <label className="mt-3 flex items-center gap-2">
                            <span className="shrink-0 text-[#5aa9ff]">› ls | grep</span>
                            <input
                                value={query}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                    setCursor(0);
                                }}
                                onKeyDown={onKeyDown}
                                placeholder={t.placeholder}
                                aria-label={t.placeholder}
                                autoComplete="off"
                                spellCheck={false}
                                className="min-h-9 w-full min-w-0 border-0 bg-transparent p-0 text-[#f4f2ed] outline-none placeholder:text-[#5f5e5a]"
                            />
                        </label>

                        <ul role="listbox" className="m-0 mt-2 grid list-none gap-0.5 p-0">
                            {results.length === 0 && <li className="text-[#8d8c87]">{t.none}</li>}
                            {results.map((p, i) => (
                                <li key={p.path} role="option" aria-selected={i === active} className="min-w-0">
                                    <Link
                                        href={p.path}
                                        onMouseEnter={() => setCursor(i)}
                                        className={`flex min-h-9 min-w-0 items-baseline justify-between gap-3 rounded-sm px-2 no-underline transition-colors duration-150 ${i === active ? 'bg-[#5aa9ff]/15 text-[#f4f2ed]' : 'text-[#9d9b95]'
                                            }`}
                                    >
                                        <span className="min-w-0 truncate">{i === active ? '› ' : '  '}{p.title}</span>
                                        <span className="hidden shrink-0 text-[.74rem] text-[#6d6c68] sm:inline">{p.path}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-3 mb-0 text-[.72rem] text-[#6d6c68]">{t.hint}</p>
                    </div>
                </div>
            </main>
            <Footer locale={locale} />
        </div>
    );
}