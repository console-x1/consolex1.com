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
    statusUrl: 'https://status.consolex1.com',
    mapsUrl: 'https://maps.app.goo.gl/K8AQ4841f52D5dqA9',
    trustpilotUrl: 'https://www.trustpilot.com/review/consolex1.com',
    legalLabel: 'Mentions légales',
    termsLabel: 'CGU',
    privacyLabel: 'Politique de confidentialité',
    statusLabel: 'Statut',
    mapsLabel: 'Google Maps',
    trustpilotLabel: 'Trustpilot',
  },
  en: {
    text: '© 2026 consolex1. French hosting for bots, apps and websites.',
    legal: '/en/legal-notice',
    terms: '/en/terms',
    privacy: '/en/privacy-policy',
    statusUrl: 'https://status.consolex1.com',
    mapsUrl: 'https://maps.app.goo.gl/K8AQ4841f52D5dqA9',
    trustpilotUrl: 'https://www.trustpilot.com/review/consolex1.com',
    legalLabel: 'Legal notice',
    termsLabel: 'Terms',
    privacyLabel: 'Privacy policy',
    statusLabel: 'Status',
    mapsLabel: 'Google Maps',
    trustpilotLabel: 'Trustpilot',
  },
};

export default function Footer({ locale }: FooterProps) {
  const links = footerLinks[locale];

  return (
    <footer className="footer-bar">
      <p>{links.text}</p>
      <div className="footer-links">
        <Link href={links.legal} locale={locale}>
          {links.legalLabel}
        </Link>
        <Link href={links.terms} locale={locale}>
          {links.termsLabel}
        </Link>
        <Link href={links.privacy} locale={locale}>
          {links.privacyLabel}
        </Link>
        <a href={links.statusUrl}>{links.statusLabel}</a>
        <a href={links.mapsUrl} target="_blank" rel="noopener noreferrer">
          {links.mapsLabel}
        </a>
        <a href={links.trustpilotUrl} target="_blank" rel="noopener noreferrer">
          {links.trustpilotLabel}
        </a>
      </div>
    </footer>
  );
}
