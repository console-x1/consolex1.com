import Link from 'next/link';
import StatusPill from './StatusPill';

type Locale = 'fr' | 'en';

type FooterProps = {
  locale: Locale;
};

const footerLinks = {
  fr: {
    text: '© 2026 consolex1. Hébergement européen, en français, pour tous vos projets.',
    legal: '/mentions',
    terms: '/cgu',
    privacy: '/politique-de-confidentialite',
    about: '/a-propos',
    panelUrl: 'https://panel.consolex1.com/',
    statusUrl: 'https://status.consolex1.com',
    mapsUrl: 'https://maps.app.goo.gl/K8AQ4841f52D5dqA9',
    trustpilotUrl: 'https://fr.trustpilot.com/review/consolex1.com',
    legalLabel: 'Mentions légales',
    termsLabel: 'CGU',
    privacyLabel: 'Politique de confidentialité',
    aboutLabel: 'À propos',
    panelLabel: 'Panel Pterodactyl',
    statusLabel: 'Statut',
    mapsLabel: 'Google Maps',
    trustpilotLabel: 'Trustpilot',
  },
  en: {
    text: '© 2026 consolex1. French hosting for bots, apps and websites.',
    legal: '/en/legal-notice',
    terms: '/en/terms',
    privacy: '/en/privacy-policy',
    about: '/en/about',
    panelUrl: 'https://panel.consolex1.com/',
    statusUrl: 'https://status.consolex1.com',
    mapsUrl: 'https://maps.app.goo.gl/K8AQ4841f52D5dqA9',
    trustpilotUrl: 'https://www.trustpilot.com/review/consolex1.com',
    legalLabel: 'Legal notice',
    termsLabel: 'Terms',
    privacyLabel: 'Privacy policy',
    aboutLabel: 'About',
    panelLabel: 'Pterodactyl panel',
    statusLabel: 'Status',
    mapsLabel: 'Google Maps',
    trustpilotLabel: 'Trustpilot',
  },
};

export default function Footer({ locale }: FooterProps) {
  const links = footerLinks[locale];
  const linkClass =
    'inline-flex min-h-9 items-center text-soft no-underline transition-colors hover:text-ink hover:underline hover:decoration-accent hover:underline-offset-[5px]';

  return (
    <footer className="mt-[clamp(3.5rem,8vw,6rem)] border-t border-line pt-8 pb-4 text-[.9rem] text-mute">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-104">
          <Link
            href={locale === 'fr' ? '/' : '/en'}
            className="inline-flex min-h-10 items-center gap-2.5 font-display text-[1.05rem] font-bold tracking-[-.02em] text-ink no-underline"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/avatar.png" alt="" width={24} height={24} />
            <span>consolex1</span>
          </Link>
          <p className="mt-2 mb-0 leading-[1.6]" data-six-seven>
            {links.text}
          </p>
          <div className="mt-3">
            <StatusPill locale={locale} />
          </div>
        </div>

        <nav
          aria-label={locale === 'en' ? 'Footer' : 'Pied de page'}
          className="grid grid-cols-2 gap-x-8 gap-y-0.5 sm:grid-cols-2 sm:gap-x-12"
        >
          <Link className={linkClass} href={links.legal} locale={locale}>
            {links.legalLabel}
          </Link>
          <a className={linkClass} href={links.panelUrl}>
            {links.panelLabel}
          </a>
          <Link className={linkClass} href={links.terms} locale={locale}>
            {links.termsLabel}
          </Link>
          <a className={linkClass} href={links.statusUrl}>
            {links.statusLabel}
          </a>
          <Link className={linkClass} href={links.privacy} locale={locale}>
            {links.privacyLabel}
          </Link>
          <a className={linkClass} href={links.mapsUrl} target="_blank" rel="noopener noreferrer">
            {links.mapsLabel}
          </a>
          <Link className={linkClass} href={links.about} locale={locale}>
            {links.aboutLabel}
          </Link>
          <a className={linkClass} href={links.trustpilotUrl} target="_blank" rel="noopener noreferrer">
            {links.trustpilotLabel}
          </a>
        </nav>
      </div>
    </footer>
  );
}