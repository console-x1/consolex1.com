import Link from 'next/link';

export const metadata = {
  title: 'Hébergement bot Discord en France | Consolex1',
  description:
    'Hébergez votre bot Discord en France sur Consolex1 avec Node.js, Python, Pterodactyl, backups et infrastructure locale.',
  keywords: [
    'hébergement bot discord',
    'bot discord france',
    'hébergement discord',
    'node.js bot discord',
    'python bot discord',
    'pterodactyl',
    'consolex1',
    'discord bot hosting',
  ],
};

const highlights = [
  {
    title: 'Infrastructure française',
    description:
      'Les serveurs sont localisés en France, avec un datacenter Equinix PA5 à Paris pour des temps de réponse plus faibles pour l’Europe.',
  },
  {
    title: 'Pterodactyl simple à utiliser',
    description:
      'Gérez vos services via un panneau intuitif, avec accès SFTP, console temps réel, redémarrage rapide et gestion des fichiers.',
  },
  {
    title: 'Compatible Node.js et Python',
    description:
      'Consolex1 prend en charge les bots Discord Node.js, Python, Java, Golang, Rust et nginx selon les besoins du projet.',
  },
  {
    title: 'Idéal pour les projets sérieux',
    description:
      'Que vous lanciez un bot communautaire, un dashboard interne ou une API Discord, vous pouvez démarrer rapidement sans configuration lourde.',
  },
];

const configuration = [
  'Bot Discord Node.js : recommandé pour les interactions rapides, les shards et les services web.',
  'Bot Discord Python : adapté aux scripts légers, aux tâches automatisées et aux intégrations API.',
  'Bases de données : parfait pour stocker des données de guildes, commandes, logs et files d’attente.',
  'Backups et stabilité : utilisez un plan adapté à la fréquence d’usage et aux besoins de production.',
];

const faqs = [
  {
    question: 'Peut-on héberger un bot Discord gratuitement ?',
    answer:
      'Oui, le plan gratuit propose un point de départ utile pour tester un bot Discord, un mini-service ou un prototype.',
  },
  {
    question: 'Faut-il choisir Node.js ou Python ?',
    answer:
      'Node.js est souvent préféré pour des bots réactifs et des APIs, tandis que Python convient très bien aux scripts et intégrations rapides.',
  },
  {
    question: 'Les bots Discord peuvent-ils être gérés depuis Discord ?',
    answer:
      'Oui, l’onboarding et la création de serveurs peuvent être réalisés depuis notre bot Discord pour gagner du temps.',
  },
];

const relatedLinks = [
  { title: 'Hébergement bot Discord Node.js', href: '/hebergement-bot-discord-nodejs' },
  { title: 'Hébergement bot Discord Python', href: '/hebergement-bot-discord-python' },
  { title: 'Hébergement Node.js', href: '/hebergement-nodejs' },
  { title: 'Hébergement Python', href: '/hebergement-python' },
  { title: 'Hébergement en France', href: '/hebergement-france' },
];

export default function HebergementBotDiscordPage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Hébergement bot Discord • France</span>
          <h1>Hébergement de bot Discord en France</h1>
          <p className="section-description">
            Consolex1 vous aide à héberger rapidement un bot Discord en France, avec un environnement stable, des ressources adaptées et une gestion simple via Pterodactyl.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Pourquoi choisir Consolex1 pour un bot Discord ?</h2>
        </div>
        <div className="cards-grid">
          {highlights.map((item) => (
            <article key={item.title} className="card">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Configuration recommandée</h2>
          <p className="section-description">
            Le bon plan dépend surtout de votre usage : trafic, stockage, logs, base de données et fréquence d’exécution.
          </p>
        </div>
        <div className="cards-grid">
          {configuration.map((item) => (
            <article key={item} className="card">
              <h2>Bonnes pratiques</h2>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-header">
          <h2>FAQ</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((item) => (
            <article key={item.question} className="faq-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Pages utiles</h2>
        </div>
        <div className="cards-grid">
          {relatedLinks.map((item) => (
            <Link key={item.href} href={item.href} className="card" style={{ textDecoration: 'none' }}>
              <h2>{item.title}</h2>
              <p>Découvrir la page dédiée à ce cas d’usage.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <h2>Prêt à lancer votre bot Discord ?</h2>
          <p>Commencez sur Consolex1, en France, avec une infrastructure faite pour les applications et services Discord.</p>
        </div>
        <Link className="button button-primary" href="/tarif">
          Voir les offres
        </Link>
      </section>
    </>
  );
}
