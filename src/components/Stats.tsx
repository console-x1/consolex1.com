'use client';

import { useEffect, useRef, useState } from 'react';
import { useStats } from './stats';

const copy = {
  fr: {
    eyebrow: 'En chiffres',
    live: 'Données en direct',
    unavailable: 'Statistiques momentanément indisponibles.',
    items: [
      { key: 'serverCount', label: 'Serveurs', hint: 'hébergés sur notre infrastructure à Paris' },
      { key: 'userCount', label: 'Utilisateurs', hint: 'comptes créés depuis Discord' },
      { key: 'eggCount', label: 'Environnements', hint: 'dont Node.js, Python, Java, Go et Rust' },
    ],
  },
  en: {
    eyebrow: 'By the numbers',
    live: 'Live data',
    unavailable: 'Statistics are temporarily unavailable.',
    items: [
      { key: 'serverCount', label: 'Servers', hint: 'hosted on our infrastructure in Paris' },
      { key: 'userCount', label: 'Users', hint: 'accounts created from Discord' },
      { key: 'eggCount', label: 'Environments', hint: 'including Node.js, Python, Java, Go and Rust' },
    ],
  },
} as const;

// Compte de 0 à la valeur quand la section devient visible (valeur finale directe si animations réduites)
function useCountUp(target: number | null, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (target === null || !start) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const id = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(id);
    }
    const duration = 1400;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setValue(Math.round(target * (1 - Math.pow(2, -10 * p))));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);

  return value;
}

function Figure({ target, start, loading }: { target: number | null; start: boolean; loading: boolean }) {
  const value = useCountUp(target, start);
  if (loading) {
    return <span className="inline-block h-[.8em] w-[3ch] animate-skeleton rounded bg-line align-middle" aria-hidden="true" />;
  }
  if (target === null) return <span aria-label="indisponible">—</span>;
  return <span>{value.toLocaleString('fr-FR')}</span>;
}

export default function Stats({ locale }: { locale: 'fr' | 'en' }) {
  const t = copy[locale];
  const { stats, ready, failed } = useStats();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="my-[clamp(3rem,7vw,5rem)]" aria-label={t.eyebrow}>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[.72rem] tracking-[.08em] text-mute uppercase">
        <span className="inline-flex items-center gap-2 before:size-[.4rem] before:bg-accent">{t.eyebrow}</span>
        {ready && !failed ? (
          <span className="inline-flex items-center gap-2 normal-case tracking-normal">
            <span aria-hidden="true" className="size-1.5 animate-pulse-dot rounded-full bg-ok text-ok shadow-[0_0_0_0_currentColor]" />
            {t.live}
          </span>
        ) : null}
      </div>

      <dl className="m-0 mt-4 grid border-y border-line sm:grid-cols-3">
        {t.items.map((item, i) => (
          <div
            key={item.key}
            className="border-line py-6 sm:px-6 sm:py-9 not-first:border-t sm:not-first:border-t-0 sm:not-first:border-l sm:first:pl-0 sm:last:pr-0"
          >
            <dt className="font-mono text-[.72rem] tracking-[.08em] text-mute uppercase">{item.label}</dt>
            <dd className="m-0 mt-3 font-display text-[clamp(2.8rem,7vw,4.6rem)] leading-none font-bold tracking-[-.035em] text-ink tabular-nums">
              <Figure target={stats ? stats[item.key as keyof typeof stats] : null} start={visible} loading={!ready} />
            </dd>
            <p className="mt-3 mb-0 text-[.92rem] leading-normal text-soft">{item.hint}</p>
            {i === 0 && failed ? <span className="sr-only">{t.unavailable}</span> : null}
          </div>
        ))}
      </dl>
      {failed ? <p className="mt-3 mb-0 text-[.82rem] text-mute">{t.unavailable}</p> : null}
    </section>
  );
}