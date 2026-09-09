import Link from 'next/link';

export const metadata = {
  title: 'Hébergement Python en France | Consolex1',
  description:
    'Hébergez vos applications Python, scripts et services web en France avec Consolex1 et Pterodactyl.',
  keywords: [
    'hébergement python',
    'python france',
    'serveur python',
    'application python',
    'bot python discord',
    'consolex1',
  ],
};

const useCases = [
  {
    title: 'Scripts et bots',
    description:
      'Les bots Python, tâches planifiées et services automatiques bénéficient d’une machine stable et d’un accès simple à la configuration.',
  },
  {
    title: 'APIs et backends',
    description:
      'Déployez des applications Python avec gestion des dépendances, bases de données et redémarrage rapide selon vos besoins.',
  },
  {
    title: 'Web apps légères',
    description:
      'Un hébergement adapté aux projets Python qui doivent rester accessibles en permanence et être facilement administrés.',
  },
];

const notes = [
  'Choisissez le plan le plus adapté au nombre de services, à la mémoire RAM et au stockage nécessaire.',
  'Pterodactyl permet de gérer les instances avec un accès direct à la console et aux fichiers.',
  'Un bon monitoring et des backups réguliers sont essentiels pour les projets Python en production.',
];

export default function HebergementPythonPage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Python • France</span>
          <h1>Hébergement Python en France</h1>
          <p className="section-description">
            Consolex1 prend en charge les applications Python, qu’il s’agisse de scripts, de bots Discord, d’APIs ou de petits services web.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Pourquoi considérer Consolex1 pour Python ?</h2>
        </div>
        <div className="cards-grid">
          {useCases.map((item) => (
            <article key={item.title} className="card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Points à vérifier avant de lancer votre service</h2>
        </div>
        <div className="cards-grid">
          {notes.map((item) => (
            <article key={item} className="card">
              <h2>Conseil</h2>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <h2>Vous avez un projet Python à héberger ?</h2>
          <p>Consolex1 offre une base simple et locale pour lancer vos applications, scripts et bots en Europe.</p>
        </div>
        <Link className="button button-primary" href="/tarif">
          Voir les plans
        </Link>
      </section>
    </>
  );
}
