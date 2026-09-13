import Link from 'next/link';

export const metadata = {
  title: 'Hébergement Bot Discord Node.js en France | consolex1',
  description:
    'Découvrez le meilleur hébergement bot Discord Node.js en France avec consolex1, Pterodactyl, stabilité et simplicité.',
  keywords: [
    'hébergement bot discord nodejs',
    'bot discord node.js france',
    'hébergement discord node.js',
    'node.js bot discord',
    'consolex1',
  ],
};

const sections = [
  {
    title: 'Pourquoi Node.js pour un bot Discord ?',
    description:
      'Node.js est particulièrement adapté aux applications réactives, aux websockets et aux services qui doivent réagir en temps réel.',
  },
  {
    title: 'Quelle configuration choisir ?',
    description:
      'Selon le nombre de guildes, de commandes et de tâches lourdes, il faut souvent commencer avec un plan de base puis évoluer.',
  },
  {
    title: 'Ce que consolex1 apporte',
    description:
      'Un hébergement basé en France avec accès au panel Pterodactyl, au SFTP et à la console pour déployer ses bots plus facilement.',
  },
];

export default function HebergementBotDiscordNodejsPage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Node.js • Discord</span>
          <h1>Hébergement bot Discord Node.js en France</h1>
          <p className="section-description">
            Si vous voulez déployer un bot Discord en Node.js avec une base fiable et un environnement simple, consolex1 peut être une option intéressante.
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
          <h2>Tester ou lancer un bot Node.js ?</h2>
          <p>Commencez sur un plan adapté, puis adaptez les ressources selon la charge réelle de votre bot.</p>
        </div>
        <Link className="button button-primary" href="/tarif">
          Choisir un plan
        </Link>
      </section>
    </>
  );
}
