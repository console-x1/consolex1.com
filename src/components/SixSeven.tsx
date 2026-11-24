'use client';

import { useCallback, useEffect, useMemo, useState, type CSSProperties } from 'react';

const WORDS = ['67', '6 7', '6-7', 'six seven', 'six-seven', 'sixseven'];
const COLORS = ['text-brand', 'text-accent', 'text-ok', 'text-warn'];

// petit générateur déterministe : le rendu reste pur, la pluie change à chaque déclenchement
function seeded(seed: number) {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export default function SixSeven() {
  const [active, setActive] = useState(false);
  const [calm, setCalm] = useState(false);
  const [round, setRound] = useState(0);

  const close = useCallback(() => setActive(false), []);

  useEffect(() => {
    let typed = '';
    let sizes: number[] = [];
    let current = 0;
    let timer = 0;

    const fire = () => {
      setCalm(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      setRound((r) => r + 1);
      setActive(true);
    };

    // Clavier : taper « 67 » ou « six seven » n'importe où sur la page
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActive(false);
        return;
      }
      if (e.ctrlKey || e.metaKey || e.altKey || e.key.length !== 1) return;
      const el = e.target as HTMLElement | null;
      if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return;
      typed = (typed + e.key.toLowerCase()).slice(-12);
      if (WORDS.some((w) => typed.endsWith(w))) {
        typed = '';
        fire();
      }
    };

    // Téléphone : 6 appuis rapides, une pause, puis 7 appuis rapides sur la ligne de copyright
    const onTap = (e: PointerEvent) => {
      if (!(e.target as Element | null)?.closest?.('[data-six-seven]')) return;
      current += 1;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        sizes = [...sizes, current].slice(-2);
        current = 0;
        if (sizes[0] === 6 && sizes[1] === 7) {
          sizes = [];
          fire();
        }
      }, 650);
    };

    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerup', onTap);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerup', onTap);
      window.clearTimeout(timer);
    };
  }, []);

  // secousse de la page, fermeture automatique
  useEffect(() => {
    if (!active) return;
    const shell = document.querySelector('[data-shell]');
    if (!calm) shell?.classList.add('animate-shake');
    const stopShake = window.setTimeout(() => shell?.classList.remove('animate-shake'), 1400);
    const autoClose = window.setTimeout(() => setActive(false), 6500);
    return () => {
      window.clearTimeout(stopShake);
      window.clearTimeout(autoClose);
      shell?.classList.remove('animate-shake');
    };
  }, [active, calm, round]);

  const drops = useMemo(() => {
    const rand = seeded(round + 7);
    return Array.from({ length: 26 }, (_, i) => ({
      id: i,
      left: `${Math.round(rand() * 96)}%`,
      size: `${(1.4 + rand() * 2.6).toFixed(2)}rem`,
      delay: `${(rand() * 2.4).toFixed(2)}s`,
      duration: `${(2.6 + rand() * 2.2).toFixed(2)}s`,
      rotate: `${Math.round(rand() * 120 - 60)}deg`,
      color: COLORS[i % COLORS.length],
    }));
  }, [round]);

  if (!active) return null;

  return (
    <div
      role="dialog"
      aria-label="six seven"
      onClick={close}
      className="fixed inset-0 z-10000 grid animate-fade-in cursor-pointer place-items-center overflow-hidden bg-page/85 backdrop-blur-sm"
    >
      {!calm && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          {drops.map((d) => (
            <span
              key={d.id}
              className={`absolute top-0 animate-fall font-display font-bold opacity-0 ${d.color}`}
              style={
                {
                  left: d.left,
                  fontSize: d.size,
                  animationDelay: d.delay,
                  '--fall-d': d.duration,
                  '--fall-r': d.rotate,
                } as CSSProperties
              }
            >
              67
            </span>
          ))}
        </div>
      )}

      <div className="relative px-6 text-center">
        <div className="flex items-end justify-center gap-4 font-display leading-none font-extrabold sm:gap-10">
          <span className={`animate-bob-a text-[clamp(7rem,34vw,17rem)] text-brand`}>6</span>
          <span className="animate-bob-b text-[clamp(7rem,34vw,17rem)] text-accent">7</span>
        </div>
        <p className="mt-6 mb-0 font-mono text-sm tracking-[.25em] text-soft uppercase">six seven</p>
        <p className="mt-2 mb-0 text-xs text-mute">Esc</p>
      </div>
    </div>
  );
}