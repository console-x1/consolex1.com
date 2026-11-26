'use client';

import { useRef, useState } from 'react';
import { TRUSTPILOT } from '@/lib/trustpilot';

const WIDGET_SRC = 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';

type TrustpilotWindow = Window & { Trustpilot?: { loadFromElement: (el: Element, force?: boolean) => void } };

const copy = {
    fr: {
        label: 'Avis',
        title: 'Ce qu’en disent les utilisateurs',
        text: 'Les avis sont publiés sur Trustpilot, indépendamment de consolex1. Consultez-les ou laissez le vôtre.',
        read: 'Lire les avis',
        show: 'Afficher les avis ici',
        privacy: 'Le widget Trustpilot ne se charge qu’après votre clic : aucun script tiers n’est chargé avant.',
        loading: 'Chargement des avis…',
    },
    en: {
        label: 'Reviews',
        title: 'What users say about us',
        text: 'Reviews are published on Trustpilot, independently from consolex1. Read them or leave yours.',
        read: 'Read the reviews',
        show: 'Show reviews here',
        privacy: 'The Trustpilot widget only loads after your click: no third-party script is loaded before.',
        loading: 'Loading reviews…',
    },
} as const;

export default function TrustReviews({ locale }: { locale: 'fr' | 'en' }) {
    const t = copy[locale];
    const [shown, setShown] = useState(false);
    const boxRef = useRef<HTMLDivElement>(null);
    const configured = TRUSTPILOT.businessUnitId !== '';

    function show() {
        setShown(true);
        const init = () => {
            const el = boxRef.current;
            const tp = (window as TrustpilotWindow).Trustpilot;
            if (el && tp) tp.loadFromElement(el, true);
        };
        if (document.querySelector('script[data-trustpilot]')) {
            window.setTimeout(init, 50);
            return;
        }
        const script = document.createElement('script');
        script.src = WIDGET_SRC;
        script.async = true;
        script.dataset.trustpilot = '';
        script.onload = init;
        document.body.appendChild(script);
    }

    return (
        <section className="my-[clamp(3rem,7vw,5rem)]" aria-labelledby="reviews-title">
            <div className="grid gap-6 rounded-2xl border border-line bg-panel p-5 sm:p-8 lg:grid-cols-[1fr_minmax(0,24rem)] lg:items-center">
                <div className="max-w-160">
                    <span className="inline-flex items-center gap-2 font-mono text-[.72rem] font-medium tracking-[.08em] text-mute uppercase before:size-[.4rem] before:bg-accent">
                        {t.label}
                    </span>
                    <h2 id="reviews-title" className="mt-3 text-[clamp(1.5rem,3.4vw,2.1rem)]">
                        {t.title}
                    </h2>
                    <p className="mt-3 mb-0 text-base leading-[1.65] text-soft">{t.text}</p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_0_var(--c-accent)] after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100 w-full sm:w-auto" href={TRUSTPILOT.url[locale]} target="_blank" rel="noopener noreferrer">
                            {t.read}
                        </a>
                        {configured && !shown && (
                            <button type="button" onClick={show} className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] border-line-strong bg-panel text-ink bg-[linear-gradient(var(--c-line),var(--c-line))] bg-size-[0%_100%] bg-left bg-no-repeat hover:bg-size-[100%_100%] hover:border-ink after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100 w-full sm:w-auto">
                                {t.show}
                            </button>
                        )}
                    </div>
                    {configured && !shown && <p className="mt-3 mb-0 text-[.82rem] text-mute">{t.privacy}</p>}
                </div>

                {configured && shown && (
                    <div
                        ref={boxRef}
                        className="trustpilot-widget min-h-37.5"
                        data-locale={TRUSTPILOT.locale[locale]}
                        data-template-id={TRUSTPILOT.templateId}
                        data-businessunit-id={TRUSTPILOT.businessUnitId}
                        data-style-height="150px"
                        data-style-width="100%"
                    >
                        <a href={TRUSTPILOT.url[locale]} target="_blank" rel="noopener noreferrer" className="text-soft">
                            {t.loading}
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}