import Link from 'next/link';

type Locale = 'fr' | 'en';

type HeaderProps = {
  locale: Locale;
};

const labels = {
  fr: {
    brand: 'consolex1',
    tariffs: 'Tarifs',
    faq: 'FAQ',
    plans: 'Plans',
    discord: 'Discord',
    heroButtonPrimary: 'Rejoindre Discord',
    heroButtonSecondary: 'Découvrir nos offres',
    eyebrow: 'Basé à Paris — datacenter Equinix PA5',
    title: 'Hébergez rapidement vos apps, bots et sites web.',
    description:
      'Consolex1 met à disposition un serveur situé en France, avec un panneau Pterodactyl intuitif.',
    statusText: "État des services :",
    alternate: 'English',
    alert: 'Vous cherchiez le profil de consolex1 et non pas l’hébergeur ?',
    profileLinkLabel: 'Rendez-vous ici',
  },
  en: {
    brand: 'consolex1',
    tariffs: 'Pricing',
    faq: 'FAQ',
    plans: 'Plans',
    discord: 'Discord',
    heroButtonPrimary: 'Join Discord',
    heroButtonSecondary: 'View plans',
    eyebrow: 'Hosted in Paris — Equinix PA5',
    title: 'Host your apps, bots and websites quickly.',
    description:
      'Consolex1 provides a French server with an easy Pterodactyl panel and automated HTTPS certificates.',
    statusText: 'Check service status:',
    alternate: 'Français',
    alert: 'Looking for the consolex1 profile instead of hosting?',
    profileLinkLabel: 'Visit here',
  },
};

const routeMap: Record<Locale, { pricing: string; faq: string; home: string }> = {
  fr: {
    pricing: './tarif',
    faq: './faq',
    home: './',
  },
  en: {
    pricing: './en/pricing',
    faq: './en/faq',
    home: './en',
  },
};

export default function Header({ locale }: HeaderProps) {
  const text = labels[locale];
  const alternateLocale = locale === 'fr' ? 'en' : 'fr';
  const alternateHref = alternateLocale === 'fr' ? '/' : '/en';

  return (
    <header>
      <div className="site-alert">
        <p>
          {text.alert}{' '}
          <a href="https://me.consolex1.com">me.consolex1.com</a>
        </p>
      </div>

      <div className="hero-panel">
        <div className="topbar">
          <Link href={routeMap[locale].home} className="brand">
            {text.brand}
          </Link>

          <nav className="nav-links" aria-label="Navigation principale">
            <Link href={routeMap[locale].pricing}>
              {text.tariffs}
            </Link>
            <Link href={routeMap[locale].faq}>
              {text.faq}
            </Link>
            <a href={`${routeMap[locale].home}#plans`}>
              {text.plans}
            </a>
          </nav>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a className="button button-outline" href="https://discord.consolex1.com">
              {text.discord}
            </a>
            <Link href={alternateHref} className="button button-secondary">
              {text.alternate}
            </Link>
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.title}</h1>
          <p className="hero-text">{text.description}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="https://discord.consolex1.com">
              {text.heroButtonPrimary}
            </a>
            <a className="button button-secondary" href={`${routeMap[locale].home}#plans`}>
              {text.heroButtonSecondary}
            </a>
          </div>

          <p className="hero-note">
            {text.statusText} <a href="https://status.consolex1.com">status.consolex1.com</a>
          </p>
        </div>
      </div>
    </header>
  );
}
