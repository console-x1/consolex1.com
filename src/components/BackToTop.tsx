'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const label = pathname?.startsWith('/en') ? 'Back to top' : 'Retour en haut de page';

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function goTop() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    // le focus revient au début de la page pour la navigation clavier
    document.querySelector<HTMLElement>('header a')?.focus({ preventScroll: true });
  }

  return (
    <button
      type="button"
      onClick={goTop}
      aria-label={label}
      title={label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`group fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-90 grid size-12 cursor-pointer place-items-center rounded-full border-0 bg-panel text-ink shadow-[0_8px_24px_-8px_rgba(0,0,0,.45)] transition-[opacity,translate,background-color] duration-300 ease-soft hover:bg-panel-hover sm:right-6 sm:bottom-6 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
    >
      {/* anneau : progression de lecture de la page */}
      <svg viewBox="0 0 48 48" className="pointer-events-none absolute inset-0 -rotate-90" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="none" strokeWidth="2" className="stroke-line-strong" />
        <circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength="1"
          className="stroke-accent"
          style={{ strokeDasharray: 1, strokeDashoffset: 'calc(1 - var(--scroll, 0))' }}
        />
      </svg>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="transition-transform duration-200 ease-soft group-hover:-translate-y-0.5"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}