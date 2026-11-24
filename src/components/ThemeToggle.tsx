'use client';

import { useEffect } from 'react';

export default function ThemeToggle({ locale }: { locale: 'fr' | 'en' }) {
  // Tant que la personne n'a pas choisi, on suit les changements de thème du système
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = () => {
      try {
        if (localStorage.getItem('theme')) return;
      } catch {
        /* ignore */
      }
      document.documentElement.dataset.theme = query.matches ? 'light' : 'dark';
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
  }

  const label = locale === 'fr' ? 'Changer de thème (clair / sombre)' : 'Switch theme (light / dark)';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-lg border border-line bg-transparent text-soft transition-colors hover:bg-panel-hover hover:text-ink sm:size-10"
    >
      {/* soleil : affiché en thème sombre */}
      <svg className="hidden dark:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      {/* lune : affichée en thème clair */}
      <svg className="hidden light:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}