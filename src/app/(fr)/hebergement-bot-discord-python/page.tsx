import Link from 'next/link';

export const metadata = {
  title: 'Hébergement Bot Discord Python en France | Consolex1',
  description:
    'Hébergez votre bot Discord Python en France avec Consolex1, une infrastructure locale et des outils de gestion simplifiés.',
  keywords: [
    'hébergement bot discord python',
    'bot discord python france',
    'hébergement python discord',
    'consolex1',
    'bot python',
  ],
};

const sections = [
  {
    title: 'Pourquoi Python pour un bot Discord ?',
    description:
      'Python est très pratique pour des bots légers, des tâches programmatique et des intégrations APIs sans surcharger l’architecture.',
  },
  {
    title: 'Comment choisir le bon plan ?',
    description:
      'Pour un bot Python, la RAM, la stabilité et les logs sont souvent plus importantes que le CPU purement nominal.',
  },
  {
    title: 'Ce que Consolex1 apporte',
    description:
      'Une solution hébergement orientée développement, avec interface Pterodactyl et serveur localisé en France pour les projets européens.',
  },
];

export default function HebergementBotDiscordPythonPage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Python • Discord</span>
          <h1>Hébergement bot Discord Python en France</h1>
          <p className="section-description">
            Consolex1 propose une base simple pour héberger un bot Discord Python en France, avec un environnement stable et des outils de gestion accessibles.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="cards-grid">
          {sections.map((item) => (
            <article key={item.title} className="card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <h2>Un bot Discord Python à lancer ?</h2>
          <p>Commencez avec un plan adapté, puis augmentez la capacité selon votre trafic et vos besoins de stockage.</p>
        </div>
        <Link className="button button-primary" href="/tarif">
          Découvrir les offres
        </Link>
      </section>
    </>
  );
}
