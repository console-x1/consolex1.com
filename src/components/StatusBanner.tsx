'use client';

import { useEffect, useState } from 'react';
import { STATUS_PAGE, useStatus, type StatusState } from './status';

const WIDGET_SRC = 'https://incidents.betterstack.com/widgets/announcement.js';
const WIDGET_ID = '262405';
const STORAGE_KEY = 'status-dismissed';

const copy = {
  fr: {
    title: { operational: 'Information', degraded: 'Performances dégradées.', downtime: 'Incident en cours.', maintenance: 'Maintenance.', unknown: '' },
    link: 'Voir le statut',
    close: 'Fermer l’annonce',
  },
  en: {
    title: { operational: 'Notice', degraded: 'Degraded performance.', downtime: 'Ongoing incident.', maintenance: 'Maintenance.', unknown: '' },
    link: 'View status',
    close: 'Dismiss notice',
  },
};

const tones: Record<StatusState, string> = {
  operational: 'border-brand/40 bg-brand/10 text-brand',
  maintenance: 'border-brand/40 bg-brand/10 text-brand',
  degraded: 'border-warn/50 bg-warn/10 text-warn',
  downtime: 'border-bad/50 bg-bad/10 text-bad',
  unknown: 'border-line bg-panel text-mute',
};

export default function StatusBanner({ locale }: { locale: 'fr' | 'en' }) {
  const { state, announcement, ready, failed } = useStatus();
  const [dismissed, setDismissed] = useState<string | null>(() => {
    try {
      return typeof window === 'undefined' ? null : sessionStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  });

  // Si l'API n'est pas lisible depuis le navigateur, on retombe sur le widget officiel Better Stack
  useEffect(() => {
    if (!failed || document.querySelector('script[data-betterstack-widget]')) return;
    const script = document.createElement('script');
    script.src = WIDGET_SRC;
    script.async = true;
    script.dataset.id = WIDGET_ID;
    script.dataset.betterstackWidget = '';
    document.body.appendChild(script);
  }, [failed]);

  const key = `${state}|${announcement ?? ''}`;
  const hasIssue = state === 'degraded' || state === 'downtime' || state === 'maintenance';
  if (!ready || failed || (!announcement && !hasIssue) || dismissed === key) return null;

  const t = copy[locale];

  function dismiss() {
    setDismissed(key);
    try {
      sessionStorage.setItem(STORAGE_KEY, key);
    } catch {
      /* stockage indisponible : on masque seulement pour cette page */
    }
  }

  return (
    <div
      role="status"
      className={`mb-2 flex items-start gap-3 rounded-lg border px-4 py-3 text-[.92rem] leading-normal ${tones[state]}`}
    >
      <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-current" />
      <p className="m-0 min-w-0 flex-1 text-ink">
        {t.title[state] && <strong className="font-semibold">{t.title[state]} </strong>}
        {announcement}{' '}
        <a href={STATUS_PAGE} className="whitespace-nowrap underline underline-offset-[3px] hover:text-brand">
          {t.link}
        </a>
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label={t.close}
        className="-my-2 -mr-3 grid size-11 shrink-0 cursor-pointer place-items-center rounded-lg border-0 bg-transparent text-mute transition-colors hover:text-ink"
      >
        <span aria-hidden="true">✕</span>
      </button>
    </div>
  );
}