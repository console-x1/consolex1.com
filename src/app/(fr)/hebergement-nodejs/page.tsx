import Link from 'next/link';

export const metadata = {
  title: 'Hébergement Node.js en France | Consolex1',
  description:
    'Hébergez vos applications Node.js en France avec Consolex1, Pterodactyl, deployment simple et ressources adaptées aux APIs et services web.',
  keywords: [
    'hébergement nodejs',
    'hébergement node.js',
    'node.js france',
    'api node.js',
    'serveur node.js',
    'consolex1',
    'pterodactyl',
  ],
};

const useCases = [
  {
    title: 'APIs et services web',
    description:
      'Hébergez des APIs REST, des webhooks et des services fiables avec des déploiements rapides et un accès administratif simple.',
  },
  {
    title: 'Bots et outils automatiques',
    description:
      'Un bot Discord, un scheduler ou un service d’automatisation fonctionne bien sur une infrastructure stable et localisée en France.',
  },
  {
    title: 'Déploiement rapide',
    description:
      'Pterodactyl permet de garder un workflow simple pour lancer, configurer et redémarrer un projet sans overhead.',
  },
];

const checklist = [
  'Choisissez un plan adapté à la RAM, au stockage et à la fréquence d’usage de votre application.',
  'Utilisez la console et le SFTP pour déployer vos fichiers et configurer votre projet.',
  'Privilégiez des backups réguliers pour sécuriser la base de données et les fichiers critiques.',
  'Testez votre application via le domaine, les ports et les variables d’environnement.',
];

export default function HebergementNodejsPage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Node.js • France</span>
          <h1>Hébergement Node.js en France</h1>
          <p className="section-description">
            Consolex1 est une solution d’hébergement pour les projets Node.js, des APIs aux bots Discord, avec une infrastructure basée en France et un panel Pterodactyl.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>À quoi sert ce type d’hébergement ?</h2>
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
          <h2>Checklist de mise en production</h2>
        </div>
        <div className="cards-grid">
          {checklist.map((item) => (
            <article key={item} className="card">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <h2>Besoin d’un hébergement Node.js fiable ?</h2>
          <p>Consolex1 propose une base solide pour démarrer, tester et faire évoluer vos applications web ou Discord.</p>
        </div>
        <Link className="button button-primary" href="/tarif">
          Comparer les plans
        </Link>
      </section>
    </>
  );
}
