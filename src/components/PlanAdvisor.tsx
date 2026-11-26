'use client';

import { useState } from 'react';
import { formatSize, PLANS, recommend } from '@/lib/plans';
import { PlanIcon } from './PlanCard';

type Locale = 'fr' | 'en';

const copy = {
    fr: {
        label: 'Assistant',
        title: 'Quelle offre pour votre projet ?',
        intro: 'Trois questions, une recommandation basée sur les ressources réelles de chaque offre.',
        step: (n: number) => `Question ${n} sur 3`,
        back: 'Retour',
        restart: 'Recommencer',
        questions: [
            {
                q: 'Que souhaitez-vous héberger ?',
                options: [
                    { label: 'Un bot Discord', hint: 'Un seul processus Node.js ou Python' },
                    { label: 'Un site ou une API', hint: 'Express, FastAPI, site statique…' },
                    { label: 'Une application plus lourde', hint: 'Plusieurs services, traitements, jeux…' },
                ],
            },
            {
                q: 'Quelle fréquentation prévoyez-vous ?',
                options: [
                    { label: 'Un test ou un projet perso', hint: 'Vous seul ou quelques amis' },
                    { label: 'Quelques dizaines d’utilisateurs', hint: 'Usage régulier' },
                    { label: 'Une communauté active', hint: 'Beaucoup de requêtes ou de joueurs' },
                ],
            },
            {
                q: 'De combien de bases de données avez-vous besoin ?',
                options: [
                    { label: 'Aucune', hint: 'Fichiers ou mémoire suffisent' },
                    { label: 'Une base', hint: '' },
                    { label: 'Deux bases', hint: '' },
                    { label: 'Trois bases', hint: '' },
                ],
            },
        ],
        result: {
            kicker: 'Notre recommandation',
            available: 'Disponible',
            soon: 'Bientôt',
            ram: (v: string) => `${v} de RAM`,
            cpu: (v: number) => `${v} % de CPU`,
            storage: (v: string) => `${v} de stockage`,
            db0: 'Aucune base de données nécessaire',
            db: (n: number) => `${n} base${n > 1 ? 's' : ''} de données incluse${n > 1 ? 's' : ''}`,
            soonNote: (plan: string) =>
                `L’offre ${plan} n’est pas encore disponible à l’achat. En attendant, vous pouvez tester votre projet sur l’offre Free (256 Mo de RAM, 512 Mo de stockage).`,
            cta: 'Rejoindre Discord',
            all: 'Voir toutes les offres',
        },
    },
    en: {
        label: 'Advisor',
        title: 'Which plan fits your project?',
        intro: 'Three questions and a recommendation based on the real resources of each plan.',
        step: (n: number) => `Question ${n} of 3`,
        back: 'Back',
        restart: 'Start over',
        questions: [
            {
                q: 'What do you want to host?',
                options: [
                    { label: 'A Discord bot', hint: 'A single Node.js or Python process' },
                    { label: 'A website or an API', hint: 'Express, FastAPI, static site…' },
                    { label: 'A heavier application', hint: 'Several services, processing, games…' },
                ],
            },
            {
                q: 'How much traffic do you expect?',
                options: [
                    { label: 'A test or a personal project', hint: 'Just you or a few friends' },
                    { label: 'A few dozen users', hint: 'Regular use' },
                    { label: 'An active community', hint: 'Lots of requests or players' },
                ],
            },
            {
                q: 'How many databases do you need?',
                options: [
                    { label: 'None', hint: 'Files or memory are enough' },
                    { label: 'One database', hint: '' },
                    { label: 'Two databases', hint: '' },
                    { label: 'Three databases', hint: '' },
                ],
            },
        ],
        result: {
            kicker: 'Our recommendation',
            available: 'Available',
            soon: 'Soon',
            ram: (v: string) => `${v} of RAM`,
            cpu: (v: number) => `${v}% CPU`,
            storage: (v: string) => `${v} of storage`,
            db0: 'No database needed',
            db: (n: number) => `${n} database${n > 1 ? 's' : ''} included`,
            soonNote: (plan: string) =>
                `The ${plan} plan is not available for purchase yet. In the meantime you can test your project on the Free plan (256 MB RAM, 512 MB storage).`,
            cta: 'Join Discord',
            all: 'See all plans',
        },
    },
} as const;

export default function PlanAdvisor({ locale }: { locale: Locale }) {
    const t = copy[locale];
    const [answers, setAnswers] = useState<number[]>([]);
    const step = answers.length;
    const done = step >= t.questions.length;
    const plan = done ? recommend(answers) : null;
    const question = !done ? t.questions[step] : null;

    const answer = (i: number) => setAnswers((a) => [...a, i]);
    const back = () => setAnswers((a) => a.slice(0, -1));
    const restart = () => setAnswers([]);

    return (
        <section className="my-[clamp(3rem,7vw,5rem)]" aria-labelledby="advisor-title">
            <div className="rounded-2xl border border-line bg-panel p-5 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-160">
                        <span className="inline-flex items-center gap-2 font-mono text-[.72rem] font-medium tracking-[.08em] text-mute uppercase before:size-[.4rem] before:bg-accent">
                            {t.label}
                        </span>
                        <h2 id="advisor-title" className="mt-3 text-[clamp(1.5rem,3.4vw,2.1rem)]">
                            {t.title}
                        </h2>
                        <p className="mt-3 mb-0 text-base leading-[1.65] text-soft">{t.intro}</p>
                    </div>
                    {!done && (
                        <div className="flex items-center gap-1.5" aria-hidden="true">
                            {t.questions.map((_, i) => (
                                <span key={i} className={`h-1.5 w-8 rounded-full transition-colors duration-300 ${i <= step ? 'bg-accent' : 'bg-line'}`} />
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-7" aria-live="polite">
                    {question && (
                        <div key={step} className="animate-rise">
                            <div className="flex items-center justify-between gap-3">
                                <p className="m-0 font-mono text-[.74rem] tracking-[.08em] text-mute uppercase">{t.step(step + 1)}</p>
                                {step > 0 && (
                                    <button
                                        type="button"
                                        onClick={back}
                                        className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 border-0 bg-transparent px-1 text-[.88rem] text-soft transition-colors hover:text-ink"
                                    >
                                        <span aria-hidden="true">←</span> {t.back}
                                    </button>
                                )}
                            </div>
                            <h3 className="mt-2 text-[1.25rem] font-semibold tracking-normal">{question.q}</h3>
                            <div className={`mt-5 grid gap-3 ${question.options.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'}`}>
                                {question.options.map((option, i) => (
                                    <button
                                        key={option.label}
                                        type="button"
                                        onClick={() => answer(i)}
                                        className="group flex min-h-16 cursor-pointer flex-col items-start gap-1 rounded-xl border border-line bg-page p-4 text-left transition-[border-color,translate,background-color] duration-200 ease-soft hover:-translate-y-0.5 hover:border-brand hover:bg-panel-hover active:translate-y-0"
                                    >
                                        <span className="font-semibold text-ink">{option.label}</span>
                                        {option.hint && <span className="text-[.86rem] leading-[1.4] text-mute">{option.hint}</span>}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {plan && (
                        <div className="animate-rise">
                            <p className="m-0 font-mono text-[.74rem] tracking-[.08em] text-mute uppercase">{t.result.kicker}</p>
                            <div className="group/plan mt-4 grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr]">
                                <div
                                    className={`self-start rounded-xl border bg-page p-5 ${plan.available ? 'border-brand' : 'border-line-strong'} ${{ green: '[--plan:#46c08a]', blue: '[--plan:#5aa9ff]', yellow: '[--plan:#f0b43a]', orange: '[--plan:#ff8f2e]' }[plan.accent]}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-[color-mix(in_srgb,var(--plan)_16%,transparent)] text-(--plan)">
                                            <PlanIcon accent={plan.accent} />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="m-0 font-display text-[1.5rem] leading-none font-bold text-ink">{plan.name}</p>
                                            <p className="mt-1.5 mb-0 text-[.92rem] text-mute">{plan.price[locale]}</p>
                                        </div>
                                        <span
                                            className={`shrink-0 rounded px-2 py-0.5 text-[.7rem] font-semibold ${plan.available ? 'bg-brand text-on-brand' : 'border border-line font-medium text-mute'
                                                }`}
                                        >
                                            {plan.available ? t.result.available : t.result.soon}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <ul className="m-0 grid list-none gap-2.5 p-0 text-[1rem] text-soft">
                                        <li className="flex gap-3 before:mt-[.6em] before:size-1.5 before:shrink-0 before:bg-(--plan)">
                                            {t.result.ram(formatSize(plan.ramMb, locale))} · {t.result.cpu(plan.cpu)}
                                        </li>
                                        <li className="flex gap-3 before:mt-[.6em] before:size-1.5 before:shrink-0 before:bg-(--plan)">
                                            {t.result.storage(formatSize(plan.storageMb, locale))}
                                        </li>
                                        <li className="flex gap-3 before:mt-[.6em] before:size-1.5 before:shrink-0 before:bg-(--plan)">
                                            {plan.databases === 0 ? t.result.db0 : t.result.db(plan.databases)}
                                        </li>
                                    </ul>
                                    {!plan.available && (
                                        <p className="mt-4 mb-0 max-w-152 text-[.92rem] leading-[1.6] text-mute">{t.result.soonNote(plan.name)}</p>
                                    )}
                                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                        <a className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_0_var(--c-accent)] after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100 w-full sm:w-auto" href="https://discord.consolex1.com">
                                            {t.result.cta}
                                        </a>
                                        <a className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] border-line-strong bg-panel text-ink bg-[linear-gradient(var(--c-line),var(--c-line))] bg-size-[0%_100%] bg-left bg-no-repeat hover:bg-size-[100%_100%] hover:border-ink after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100 w-full sm:w-auto" href="#plans">
                                            {t.result.all}
                                        </a>
                                        <button
                                            type="button"
                                            onClick={restart}
                                            className="inline-flex min-h-11 cursor-pointer items-center justify-center border-0 bg-transparent px-2 text-[.9rem] text-soft underline decoration-line-strong underline-offset-[3px] transition-colors hover:text-ink hover:decoration-accent"
                                        >
                                            {t.restart}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}