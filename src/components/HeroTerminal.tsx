'use client';

import { useEffect, useState } from 'react';

type Locale = 'fr' | 'en';

const text = {
  fr: {
    title: 'discord · consolex1',
    demo: 'démo',
    registered: 'Compte vérifié',
    prompt: 'Choisis un environnement',
    picked: 'sélectionné',
    deploy: 'déploiement à Paris (Equinix PA5)',
    online: 'Serveur en ligne',
    ram: 'RAM',
  },
  en: {
    title: 'discord · consolex1',
    demo: 'demo',
    registered: 'Account verified',
    prompt: 'Pick an environment',
    picked: 'selected',
    deploy: 'deploying in Paris (Equinix PA5)',
    online: 'Server online',
    ram: 'RAM',
  },
} as const;

const ENVS = ['Node.js', 'Python', 'nginx', 'Java', 'Go', 'Rust'];
const SPINNER = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
const CMD = '/server create';

type Frame = {
  typed: string;
  menu: boolean;
  hover: number;
  picked: boolean;
  deploy: number | null;
  online: boolean;
  cpu: number;
  ram: number;
};

const EMPTY: Frame = { typed: '', menu: false, hover: 0, picked: false, deploy: null, online: false, cpu: 0, ram: 0 };
const FINAL: Frame = { typed: CMD, menu: true, hover: 0, picked: true, deploy: 100, online: true, cpu: 14, ram: 92 };

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function HeroTerminal({ locale }: { locale: Locale }) {
  const t = text[locale];
  const [f, setF] = useState<Frame>(EMPTY);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cancelled = false;
    const set = (patch: Partial<Frame>) => setF((prev) => ({ ...prev, ...patch }));

    (async () => {
      if (reduce) {
        await sleep(0);
        if (!cancelled) setF(FINAL);
        return;
      }
      while (!cancelled) {
        setF(EMPTY);
        await sleep(700);
        // 1. la commande est tapée
        for (let i = 1; i <= CMD.length; i++) {
          if (cancelled) return;
          set({ typed: CMD.slice(0, i) });
          await sleep(55);
        }
        await sleep(450);
        // 2. le menu des environnements apparaît, le curseur le parcourt puis choisit Node.js
        if (cancelled) return;
        set({ menu: true, hover: 0 });
        for (const idx of [1, 2, 3, 2, 1, 0]) {
          await sleep(300);
          if (cancelled) return;
          set({ hover: idx });
        }
        await sleep(450);
        if (cancelled) return;
        set({ picked: true });
        await sleep(500);
        // 3. déploiement avec barre de progression
        for (let p = 0; p <= 100; p += 4) {
          if (cancelled) return;
          set({ deploy: p });
          await sleep(p < 70 ? 55 : 85);
        }
        await sleep(250);
        // 4. serveur en ligne et métriques qui bougent
        if (cancelled) return;
        set({ online: true, cpu: 9, ram: 88 });
        for (let k = 0; k < 7; k++) {
          await sleep(650);
          if (cancelled) return;
          set({ cpu: 8 + Math.round(Math.abs(Math.sin(k * 1.7)) * 14), ram: 88 + Math.round(Math.abs(Math.cos(k * 1.3)) * 14) });
        }
        await sleep(2200);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [locale]);

  const typing = f.typed.length > 0 && f.typed.length < CMD.length;
  const spinner = SPINNER[Math.floor((f.deploy ?? 0) / 4) % SPINNER.length];

  // Fenêtre volontairement sombre dans les deux thèmes, comme un vrai terminal
  return (
    <div
      aria-hidden="true"
      className="min-w-0 animate-rise overflow-hidden rounded-xl border border-[#2b2e35] bg-[#0b0c0f] font-mono text-[.74rem] text-[#c9c7c1] shadow-[8px_8px_0_0_rgba(255,143,46,.18)] [animation-delay:200ms] sm:text-[.8rem]"
    >
      <div className="flex items-center gap-1.5 border-b border-[#23262c] px-4 py-2.5 text-[.72rem] text-[#8d8c87]">
        <i className="size-2.5 rounded-full bg-[#3a3d44]" />
        <i className="size-2.5 rounded-full bg-[#3a3d44]" />
        <i className="size-2.5 rounded-full bg-[#3a3d44]" />
        <span className="ml-2">{t.title}</span>
        <span className="ml-auto rounded border border-[#33363d] px-1.5 py-px text-[.64rem] tracking-[.08em] uppercase">
          {t.demo}
        </span>
      </div>

      <div className="min-h-70 px-4 pt-4 pb-5 leading-[1.8] sm:min-h-76 sm:px-5">
        <div className="text-[#8d8c87]">
          <span className="text-[#5aa9ff]">› </span>/account register
        </div>
        <div className="text-[#46c08a]">✓ {t.registered}</div>

        <div className="mt-2 min-h-[1.8em]">
          {f.typed && <span className="text-[#5aa9ff]">› </span>}
          {f.typed}
          {(typing || (!f.menu && f.typed.length === 0) || (f.typed.length === CMD.length && !f.menu)) && (
            <span className="ml-0.5 inline-block h-[1.05em] w-[.55em] animate-blink bg-[#c9c7c1] align-[-.15em]" />
          )}
        </div>

        {f.menu && (
          <div className="animate-fade-in">
            <div className="mt-1 text-[#8d8c87]">? {t.prompt}</div>
            <ul className="m-0 mt-1 grid list-none grid-cols-3 gap-x-2 gap-y-0.5 p-0">
              {ENVS.map((env, i) => {
                const active = f.picked ? i === 0 : i === f.hover;
                return (
                  <li
                    key={env}
                    className={`truncate rounded-sm px-1.5 transition-colors duration-150 ${active ? (f.picked ? 'bg-[#46c08a]/15 text-[#46c08a]' : 'bg-[#5aa9ff]/15 text-[#5aa9ff]') : 'text-[#6d6c68]'
                      }`}
                  >
                    {active ? (f.picked ? '✓ ' : '› ') : '  '}
                    {env}
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {f.deploy !== null && (
          <div className="mt-3 animate-fade-in">
            <div className="flex items-center justify-between gap-3 text-[#8d8c87]">
              <span className="min-w-0 truncate">
                {f.deploy < 100 ? <span className="text-[#5aa9ff]">{spinner} </span> : <span className="text-[#46c08a]">✓ </span>}
                {t.deploy}
              </span>
              <span className="tabular-nums">{f.deploy}%</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[#1d2025]">
              <div
                className={`h-full rounded-full transition-[width] duration-100 ease-linear ${f.deploy < 100 ? 'bg-[#5aa9ff]' : 'bg-[#46c08a]'}`}
                style={{ width: `${f.deploy}%` }}
              />
            </div>
          </div>
        )}

        {f.online && (
          <div className="mt-3 animate-fade-in rounded-lg border border-[#23262c] bg-[#101216] p-3">
            <div className="flex items-center gap-2 text-[#46c08a]">
              <span className="size-1.5 animate-pulse-dot rounded-full bg-current shadow-[0_0_0_0_currentColor]" />
              {t.online}
            </div>
            <div className="mt-2 grid gap-1.5">
              <div className="grid grid-cols-[2.2rem_1fr_4.6rem] items-center gap-2 text-[#8d8c87]">
                <span>CPU</span>
                <span className="h-1 overflow-hidden rounded-full bg-[#1d2025]">
                  <span className="block h-full rounded-full bg-[#ff8f2e] transition-[width] duration-500 ease-out" style={{ width: `${(f.cpu / 40) * 100}%` }} />
                </span>
                <span className="text-right tabular-nums">{f.cpu} / 40%</span>
              </div>
              <div className="grid grid-cols-[2.2rem_1fr_4.6rem] items-center gap-2 text-[#8d8c87]">
                <span>{t.ram}</span>
                <span className="h-1 overflow-hidden rounded-full bg-[#1d2025]">
                  <span className="block h-full rounded-full bg-[#5aa9ff] transition-[width] duration-500 ease-out" style={{ width: `${(f.ram / 256) * 100}%` }} />
                </span>
                <span className="text-right tabular-nums">{f.ram} / 256</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}