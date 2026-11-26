import Link from 'next/link';
import CookieSettingsButton from './CookieSettingsButton';
import Logo from './Logo';
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
    cookiesLabel: 'Gérer mes cookies',
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
    cookiesLabel: 'Manage cookies',
  },
};

export default function Footer({ locale }: FooterProps) {
  const links = footerLinks[locale];
  const linkClass =
    'inline-flex min-h-9 items-center bg-[linear-gradient(var(--c-accent),var(--c-accent))] bg-[length:0%_2px] bg-[position:100%_calc(50%+.85em)] bg-no-repeat text-soft no-underline transition-[background-size,background-position,color] duration-300 ease-soft hover:bg-[length:100%_2px] hover:bg-[position:0%_calc(50%+.85em)] hover:text-ink';

  return (
    <footer className="[content-visibility:auto] [contain-intrinsic-size:auto_360px] mt-[clamp(3.5rem,8vw,6rem)] border-t border-line pt-8 pb-4 text-[.9rem] text-mute">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-104">
          <Link
            href={locale === 'fr' ? '/' : '/en'}
            className="inline-flex min-h-10 items-center gap-2.5 font-display text-[1.05rem] font-bold tracking-[-.02em] text-ink no-underline"
          >
            <Logo size={24} />
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
          <CookieSettingsButton label={links.cookiesLabel} className={`${linkClass} cursor-pointer border-0 bg-transparent p-0 text-left font-[inherit] text-inherit`} />
        </nav>
      </div>
    </footer>
  );
}