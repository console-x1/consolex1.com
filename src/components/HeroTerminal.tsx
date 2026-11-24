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

  // Fenêtre volontairement sombre dans les deux thèmes, comme un vrai terminal
  return (
    <div
      aria-hidden="true"
      className="min-w-0 animate-rise overflow-hidden rounded-xl border border-[#2b2e35] bg-[#0b0c0f] font-mono text-[.74rem] text-[#c9c7c1] [animation-delay:200ms] sm:text-[.8rem]"
    >
      <div className="flex items-center gap-1.5 border-b border-[#23262c] px-4 py-2.5 text-[.72rem] text-[#8d8c87]">
        <i className="size-2.5 rounded-full bg-[#3a3d44]" />
        <i className="size-2.5 rounded-full bg-[#3a3d44]" />
        <i className="size-2.5 rounded-full bg-[#3a3d44]" />
        <span className="ml-2">discord · consolex1</span>
      </div>
      <div className="min-h-46 overflow-hidden px-4 pt-4 pb-5 leading-[1.85] sm:min-h-50 sm:px-5">
        {lines.map((line, i) => (
          <div className="animate-fade-in whitespace-pre-wrap" key={i}>
            {line.kind === 'cmd' && <span className="text-[#5aa9ff]">› </span>}
            <span className={line.kind === 'ok' ? 'text-[#46c08a]' : line.kind === 'dim' ? 'text-[#8d8c87]' : undefined}>
              {line.text}
            </span>
            {typing && i === lines.length - 1 && (
              <span className="ml-0.5 inline-block h-[1.05em] w-[.55em] animate-blink bg-[#c9c7c1] align-[-.15em]" />
            )}
          </div>
        ))}
        {!typing && <span className="ml-0.5 inline-block h-[1.05em] w-[.55em] animate-blink bg-[#c9c7c1] align-[-.15em]" />}
      </div>
    </div>
  );
}