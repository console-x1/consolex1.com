import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="site-alert">
        <p>
          Vous cherchiez le profil de consolex1 et non pas l’hébergeur ? Rendez-vous ici :{' '}
          <a href="https://me.consolex1.com">me.consolex1.com</a>
        </p>
      </div>

      <div className="hero-panel">
        <div className="topbar">
          <Link href="/" className="brand">
            consolex1
          </Link>

          <nav className="nav-links" aria-label="Navigation principale">
            <Link href="/tarif">Tarifs</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/#plans">Plans</Link>
          </nav>

          <a className="button button-outline" href="https://discord.consolex1.com">
            Discord
          </a>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Basé à Paris — datacenter Equinix PA5</p>
          <h1>Hébergez rapidement vos apps, bots et sites web.</h1>
          <p className="hero-text">
            Consolex1 met à disposition un serveur situé en France, avec un panneau Pterodactyl intuitif.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="https://discord.consolex1.com">
              Rejoindre Discord
            </a>
            <a className="button button-secondary" href="#plans">
              Découvrir nos offres
            </a>
          </div>

          <p className="hero-note">
            État des services : <a href="https://status.consolex1.com">status.consolex1.com</a>
          </p>
        </div>
      </div>
    </header>
  );
}
