import Link from 'next/link';

export const metadata = {
  title: 'Hébergement en France | consolex1',
  description:
    'Hébergement en France pour bots Discord, APIs, services web et applications Node.js/Python avec consolex1.',
  keywords: [
    'hébergement france',
    'hébergement français',
    'hébergeur français',
    'hosting france',
    'serveur en france',
    'serveur hébergement france',
    'france hosting',
    'equinix pa5',
    'hebergement france',
    'consolex1',
  ],
};

const benefits = [
  {
    title: 'Latence réduite',
    description:
      'Un hébergement localisé en France est particulièrement intéressant pour les sites, APIs et bots utilisés dans l’Union européenne.',
  },
  {
    title: 'Conformité et proximité',
    description:
      'Avoir un datacenter en France apporte de la clarté pour les projets qui veulent un hébergement européen et facilement identifiable.',
  },
  {
    title: 'Simple à gérer',
    description:
      'Le panel Pterodactyl aide à gérer les services rapidement, sans étapes techniques complexes et sans dépendance à une stack lourde.',
  },
];

export default function HebergementFrancePage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">France • Datacenter Equinix PA5</span>
          <h1>Hébergement en France</h1>
          <p className="section-description">
            consolex1 propose un hébergement basé en France pour les projets web, les bots Discord, les applications Node.js et Python et les petits services utiles au quotidien.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Pourquoi un hébergement français ?</h2>
        </div>
        <div className="cards-grid">
          {benefits.map((item) => (
            <article key={item.title} className="card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <h2>Vous cherchez un hébergeur français ?</h2>
          <p>consolex1 peut être une solution pratique si vous voulez commencer rapidement avec un panel intuitif et des services plats.</p>
        </div>
        <Link className="button button-primary" href="/tarif">
          Explorer les offres
        </Link>
      </section>
    </>
  );
}
