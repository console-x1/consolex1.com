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
          <p className="eyebrow">Serveur français Equinix PA5</p>
          <h1>Hébergement Node.js, Python, Discord et sites web en France.</h1>
          <p className="hero-text">
            Consolex1 propose un accès direct à un serveur en France, avec un panneau Pterodactyl simple et HTTPS automatique.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="https://discord.consolex1.com">
              Rejoindre Discord
            </a>
            <a className="button button-secondary" href="#plans">
              Voir les offres
            </a>
          </div>

          <p className="hero-note">
            Statut public : <a href="https://status.consolex1.com">status.consolex1.com</a>
          </p>
        </div>
      </div>
    </header>
  );
}
