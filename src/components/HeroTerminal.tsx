'use client';

import { useEffect, useState } from 'react';

type Step = { kind: 'cmd' | 'ok' | 'dim'; text: string };

const scripts: Record<'fr' | 'en', Step[]> = {
    fr: [
        { kind: 'cmd', text: '/account register' },
        { kind: 'ok', text: '✓ Compte vérifié' },
        { kind: 'cmd', text: '/server create' },
        { kind: 'dim', text: '… déploiement à Paris (Equinix PA5)' },
        { kind: 'ok', text: '✓ Serveur en ligne' },
        { kind: 'dim', text: 'Plan Free · 256 Mo RAM · 512 Mo · 0 €' },
    ],
    en: [
        { kind: 'cmd', text: '/account register' },
        { kind: 'ok', text: '✓ Account verified' },
        { kind: 'cmd', text: '/server create' },
        { kind: 'dim', text: '… deploying in Paris (Equinix PA5)' },
        { kind: 'ok', text: '✓ Server online' },
        { kind: 'dim', text: 'Free plan · 256 MB RAM · 512 MB · €0' },
    ],
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function HeroTerminal({ locale }: { locale: 'fr' | 'en' }) {
    const [lines, setLines] = useState<Step[]>([]);
    const [typing, setTyping] = useState(false);

    useEffect(() => {
        const script = scripts[locale];
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let cancelled = false;

        (async () => {
            if (reduce) {
                await sleep(0);
                if (!cancelled) setLines(script);
                return;
            }
            while (!cancelled) {
                setLines([]);
                for (const step of script) {
                    if (cancelled) return;
                    if (step.kind === 'cmd') {
                        setTyping(true);
                        setLines((l) => [...l, { ...step, text: '' }]);
                        for (let i = 1; i <= step.text.length; i++) {
                            await sleep(38);
                            if (cancelled) return;
                            setLines((l) => [...l.slice(0, -1), { ...step, text: step.text.slice(0, i) }]);
                        }
                        setTyping(false);
                        await sleep(420);
                    } else {
                        await sleep(step.kind === 'ok' ? 650 : 450);
                        if (cancelled) return;
                        setLines((l) => [...l, step]);
                    }
                }
                await sleep(4200);
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [locale]);

    return (
        <div
            data-tilt
            aria-hidden="true"
            className="animate-rise overflow-hidden rounded-[20px] border border-white/16 bg-[rgba(8,11,18,.72)] font-mono text-[.84rem] shadow-[0_40px_90px_-20px_rgba(0,0,0,.7),inset_0_0_0_1px_rgba(255,255,255,.02)] backdrop-blur-md [animation-delay:250ms] transform-[perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] transition-transform duration-300 ease-out max-sm:text-[.78rem]"
        >
            <div className="flex items-center gap-[.4rem] border-b border-white/8 px-4 py-[.7rem] text-[.75rem] text-mute">
                <i className="size-2.25 rounded-full bg-[#ff5f57]/85" />
                <i className="size-2.25 rounded-full bg-[#febc2e]/85" />
                <i className="size-2.25 rounded-full bg-[#28c840]/85" />
                <span className="ml-[.6rem]">discord · consolex1</span>
            </div>
            <div className="min-h-[13.2rem] px-[1.2rem] pt-[1.1rem] pb-[1.3rem] leading-[1.85] text-soft max-sm:min-h-[12.4rem]">
                {lines.map((line, i) => (
                    <div className="animate-fade-in whitespace-pre-wrap" key={i}>
                        {line.kind === 'cmd' && <span className="text-brand">› </span>}
                        <span className={line.kind === 'ok' ? 'text-ok' : line.kind === 'dim' ? 'text-mute' : undefined}>
                            {line.text}
                        </span>
                        {typing && i === lines.length - 1 && <span className="ml-0.5 inline-block h-[1.05em] w-[.55em] animate-blink bg-soft align-[-.15em]" />}
                    </div>
                ))}
                {!typing && <span className="ml-0.5 inline-block h-[1.05em] w-[.55em] animate-blink bg-soft align-[-.15em]" />}
            </div>
        </div>
    );
}