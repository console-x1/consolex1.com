import Link from 'next/link';

export const metadata = {
  title: 'Hébergement Pterodactyl | Consolex1',
  description:
    'Découvrez comment utiliser Pterodactyl avec Consolex1 pour gérer vos apps, bots Discord et services web en toute simplicité.',
  keywords: [
    'hébergement pterodactyl',
    'pterodactyl france',
    'panel pterodactyl',
    'consolex1',
    'discord bot hosting',
  ],
};

const benefits = [
  {
    title: 'Gestion centralisée',
    description:
      'Pterodactyl aide à piloter plusieurs services depuis une même console, avec un accès rapide à la configuration et aux redémarrages.',
  },
  {
    title: 'Idéal pour les développeurs',
    description:
      'Que vous lanciez un bot Discord, une API Node.js ou un service Python, le panel permet d’organiser rapidement votre environnement.',
  },
  {
    title: 'Accessible et lisible',
    description:
      'La structure de Pterodactyl est pensée pour être simple à utiliser, même pour des projets qui évoluent rapidement.',
  },
];

export default function HebergementPterodactylPage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Pterodactyl • Consolex1</span>
          <h1>Hébergement avec Pterodactyl</h1>
          <p className="section-description">
            Consolex1 propose un environnement d’hébergement pensé pour des projets web, bots Discord et applications Node.js/Python, avec une gestion simplifiée via Pterodactyl.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Pourquoi utiliser Pterodactyl ?</h2>
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
          <h2>Prêt à gérer vos services plus simplement ?</h2>
          <p>Consolex1 peut être un point d’entrée pratique pour héberger des projets web, bots Discord et applications diverses.</p>
        </div>
        <Link className="button button-primary" href="/tarif">
          Voir les plans
        </Link>
      </section>
    </>
  );
}
