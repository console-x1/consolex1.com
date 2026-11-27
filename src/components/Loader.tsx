'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';

type Phase = 'show' | 'leaving' | 'gone';

const MIN_VISIBLE = 500; // ms : évite un flash trop bref
const MAX_VISIBLE = 5000; // ms : sécurité si l'événement load n'arrive jamais

// Écran de chargement affiché une fois par session (le script du <head> l'ignore ensuite)
export default function Loader() {
  const [phase, setPhase] = useState<Phase>('show');

  useEffect(() => {
    const root = document.documentElement;
    const timers: number[] = [];

    if (root.dataset.loader === 'done') {
      timers.push(window.setTimeout(() => setPhase('gone'), 0));
      return () => timers.forEach(window.clearTimeout);
    }

    const t0 = performance.now();
    const leave = () => setPhase((p) => (p === 'show' ? 'leaving' : p));
    const onReady = () => {
      timers.push(window.setTimeout(leave, Math.max(0, MIN_VISIBLE - (performance.now() - t0))));
    };

    if (document.readyState === 'complete') onReady();
    else window.addEventListener('load', onReady, { once: true });
    timers.push(window.setTimeout(leave, MAX_VISIBLE));

    return () => {
      window.removeEventListener('load', onReady);
      timers.forEach(window.clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (phase !== 'leaving') return;
    const id = window.setTimeout(() => {
      setPhase('gone');
      try {
        sessionStorage.setItem('loader-seen', '1');
      } catch {
        /* ignore */
      }
      document.documentElement.dataset.loader = 'done';
    }, 700);
    return () => window.clearTimeout(id);
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div
      role="status"
      aria-label="Chargement"
      className={`fixed inset-0 z-10001 hidden animate-loader-fallback place-items-center bg-page transition-[translate] duration-650 ease-[cubic-bezier(.7,0,.3,1)] in-[.js]:grid [html[data-loader=done]_&]:hidden ${phase === 'leaving' ? '-translate-y-full' : ''
        }`}
    >
      <div className="grid justify-items-center">
        <div className="relative grid size-28 place-items-center">
          <span className="absolute inset-0 animate-spin [animation-duration:2.2s]">
            <i className="absolute top-0 left-1/2 size-2.5 -translate-x-1/2 bg-accent" />
          </span>
          <span className="absolute inset-3.5 animate-spin [animation-direction:reverse] [animation-duration:3.4s]">
            <i className="absolute top-0 left-1/2 size-2 -translate-x-1/2 bg-brand" />
          </span>
          <Logo size={56} className="size-14 animate-pop" />
        </div>
        <p className="mt-6 mb-0 font-mono text-xs tracking-[.32em] text-mute uppercase">consolex1</p>
        <div className="mt-4 h-0.5 w-40 overflow-hidden rounded-full bg-line">
          <div
            className={`h-full origin-left bg-accent ${phase === 'leaving' ? 'transform-[scaleX(1)] transition-transform duration-300' : 'animate-bar'}`}
          />
        </div>
      </div>
    </div>
  );
}