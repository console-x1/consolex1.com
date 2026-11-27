'use client';

import { STATUS_PAGE, useStatus, type StatusState } from './status';

const labels: Record<'fr' | 'en', Record<StatusState, string>> = {
  fr: {
    operational: 'Tous les services sont opérationnels',
    degraded: 'Performances dégradées',
    downtime: 'Incident en cours',
    maintenance: 'Maintenance en cours',
    unknown: 'État des services',
  },
  en: {
    operational: 'All systems operational',
    degraded: 'Degraded performance',
    downtime: 'Ongoing incident',
    maintenance: 'Maintenance in progress',
    unknown: 'Service status',
  },
};

const dots: Record<StatusState, string> = {
  operational: 'text-ok animate-pulse-dot',
  degraded: 'text-warn',
  downtime: 'text-bad',
  maintenance: 'text-brand',
  unknown: 'text-mute',
};

export default function StatusPill({ locale, className = '' }: { locale: 'fr' | 'en'; className?: string }) {
  const { state } = useStatus();

  return (
    <a
      href={STATUS_PAGE}
      aria-live="polite"
      className={`group inline-flex min-h-9 items-center gap-2.5 text-[.88rem] text-soft no-underline transition-colors hover:text-ink ${className}`}
    >
      <span
        aria-hidden="true"
        className={`size-2 shrink-0 rounded-full bg-current shadow-[0_0_0_0_currentColor] ${dots[state]}`}
      />
      <span>{labels[locale][state]}</span>
      <span aria-hidden="true" className="text-mute transition-transform duration-200 group-hover:translate-x-0.5">
        ↗
      </span>
    </a>
  );
}