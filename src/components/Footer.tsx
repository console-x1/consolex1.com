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
    legalLabel: 'Mentions légales',
    termsLabel: 'CGU',
    privacyLabel: 'Politique de confidentialité',
    statusLabel: 'Statut',
    mapsLabel: 'Google Maps',
  },
  en: {
    text: '© 2026 consolex1. French hosting for bots, apps and websites.',
    legal: '/en/legal-notice',
    terms: '/en/terms',
    privacy: '/en/privacy-policy',
    statusUrl: 'https://status.consolex1.com',
    mapsUrl: 'https://maps.app.goo.gl/K8AQ4841f52D5dqA9',
    legalLabel: 'Legal notice',
    termsLabel: 'Terms',
    privacyLabel: 'Privacy policy',
    statusLabel: 'Status',
    mapsLabel: 'Google Maps',
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
      </div>

      <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>

      <div className="trustpilot-widget" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="6a70fc65701e0ea478abf809" data-style-height="52px" data-style-width="100%" data-token="9bbb22b8-6ceb-49ad-ae58-488a62eb3245">
        <a href="https://www.trustpilot.com/review/consolex1.com" target="_blank" rel="noopener">Trustpilot</a>
      </div>
    </footer>
  );
}
