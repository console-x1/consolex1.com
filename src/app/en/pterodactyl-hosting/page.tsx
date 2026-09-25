import Link from 'next/link';

export const metadata = {
  title: 'Pterodactyl Hosting | consolex1',
  description:
    'Learn how to use Pterodactyl with consolex1 to manage your apps, Discord bots and web services with ease.',
  keywords: [
    'pterodactyl hosting',
    'hosting pterodactyl',
    'pterodactyl france',
    'pterodactyl panel',
    'panel hosting',
    'discord bot hosting',
    'node.js hosting',
    'python hosting',
    'consolex1',
  ],
};

const benefits = [
  {
    title: 'Centralized management',
    description:
      'Pterodactyl lets you run multiple services from one place, with direct access to configuration and quick restarts.',
  },
  {
    title: 'Great for developers',
    description:
      'Whether you are launching a Discord bot, a Node.js API or a Python service, the panel keeps the environment organized.',
  },
  {
    title: 'Accessible and clear',
    description:
      'The structure of Pterodactyl is designed to be simple to use, even as a project grows and changes.',
  },
];

export default function EnHebergementPterodactylPage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Pterodactyl • consolex1</span>
          <h1>Hosting with Pterodactyl</h1>
          <p className="section-description">
            consolex1 offers a hosting environment for web projects, Discord bots and Node.js/Python applications, with simple service management through Pterodactyl.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Why use Pterodactyl?</h2>
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
          <h2>Ready to manage services more simply?</h2>
          <p>consolex1 can be a practical starting point for hosting web projects, Discord bots and various applications.</p>
        </div>
        <Link className="button button-primary" href="/en/pricing">
          View plans
        </Link>
      </section>
    </>
  );
}
