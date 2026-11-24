import Link from 'next/link';

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

  return (
    <footer className="mt-[clamp(4rem,9vw,6.5rem)] grid gap-[1.4rem] border-t border-white/8 pt-8 text-[.9rem] text-mute">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <Link href={locale === 'fr' ? '/' : '/en'} className="group inline-flex items-center gap-[.6rem] text-[1.02rem] font-semibold tracking-[-.015em] text-white no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="transition-transform duration-500 ease-soft group-hover:rotate-[-8deg] group-hover:scale-[1.12]" src="/avatar.png" alt="" width={22} height={22} />
          <span>consolex1</span>
        </Link>
        <p className="m-0">{links.text}</p>
      </div>
      <div className="flex flex-wrap gap-x-[1.4rem] gap-y-2 [&_a]:relative [&_a]:whitespace-nowrap [&_a]:text-soft [&_a]:no-underline [&_a]:transition-colors [&_a]:after:absolute [&_a]:after:inset-x-0 [&_a]:after:-bottom-0.5 [&_a]:after:h-px [&_a]:after:origin-left [&_a]:after:scale-x-0 [&_a]:after:bg-brand [&_a]:after:transition-transform [&_a]:after:duration-350 [&_a]:after:ease-soft [&_a]:hover:text-white [&_a]:hover:after:scale-x-100">
        <Link href={links.legal} locale={locale}>
          {links.legalLabel}
        </Link>
        <Link href={links.terms} locale={locale}>
          {links.termsLabel}
        </Link>
        <Link href={links.privacy} locale={locale}>
          {links.privacyLabel}
        </Link>
        <Link href={links.about} locale={locale}>
          {links.aboutLabel}
        </Link>
        <a href={links.panelUrl}>{links.panelLabel}</a>
        <a href={links.statusUrl}>{links.statusLabel}</a>
        <a href={links.mapsUrl} target="_blank" rel="noopener noreferrer">
          {links.mapsLabel}
        </a>
        <a href={links.trustpilotUrl} target="_blank" rel="noopener noreferrer">
          {links.trustpilotLabel}
        </a>
      </div>
      <iframe
        src="https://status.consolex1.com/badge?theme=dark"
        title="Statut des services consolex1"
        width="250"
        height="30"
        frameBorder="0"
        scrolling="no"
        style={{ colorScheme: 'normal' }}
      />
    </footer>
  );
}