import Link from 'next/link';

export const metadata = {
  title: 'Discord Bot Hosting in France | Consolex1',
  description:
    'Host your Discord bot in France with Consolex1, using Node.js, Python, Pterodactyl, backups and a local infrastructure.',
  keywords: [
    'discord bot hosting',
    'discord bot europe',
    'host discord bot',
    'node.js bot discord',
    'python bot discord',
    'pterodactyl',
    'consolex1',
  ],
};

const highlights = [
  {
    title: 'France-based infrastructure',
    description:
      'Servers are located in France, with the Equinix PA5 datacenter in Paris for lower latency across Europe.',
  },
  {
    title: 'Simple Pterodactyl management',
    description:
      'Manage your services through an intuitive panel with SFTP access, live console, and quick restarts.',
  },
  {
    title: 'Compatible with Node.js and Python',
    description:
      'Consolex1 supports Discord bots in Node.js, Python, Java, Golang, Rust and nginx depending on project needs.',
  },
  {
    title: 'Great for serious projects',
    description:
      'Whether you are launching a community bot, a dashboard service or a Discord API, you can get started quickly.',
  },
];

const configuration = [
  'Discord bot in Node.js: recommended for fast interactions, shards and web services.',
  'Discord bot in Python: well suited for lightweight scripts, automation and API integrations.',
  'Databases: useful for storing guild data, commands, logs and queues.',
  'Backups and stability: choose a plan that matches your usage frequency and production requirements.',
];

const faqs = [
  {
    question: 'Can I host a Discord bot for free?',
    answer:
      'Yes, the free plan is a good starting point for testing a bot, a mini-service or a prototype.',
  },
  {
    question: 'Should I choose Node.js or Python?',
    answer:
      'Node.js is often preferred for reactive bots and APIs, while Python works very well for scripts and quick integrations.',
  },
  {
    question: 'Can Discord bots be managed from Discord?',
    answer:
      'Yes, onboarding and instance setup can be handled through our Discord bot to save time.',
  },
];

const relatedLinks = [
  { title: 'Discord bot Node.js hosting', href: '/en/bot-discord-nodejs-hosting' },
  { title: 'Discord bot Python hosting', href: '/en/bot-discord-python-hosting' },
  { title: 'Node.js hosting', href: '/en/nodejs-hosting' },
  { title: 'Python hosting', href: '/en/python-hosting' },
  { title: 'Hosting in France', href: '/en/france-hosting' },
];

export default function EnHebergementBotDiscordPage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Discord bot hosting • France</span>
          <h1>Discord bot hosting in France</h1>
          <p className="section-description">
            Consolex1 helps you host a Discord bot in France with a stable environment, appropriate resources and simple management through Pterodactyl.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Why choose Consolex1 for a Discord bot?</h2>
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
          <h2>Recommended setup</h2>
          <p className="section-description">
            The right plan depends mainly on usage: traffic, storage, logs, databases and execution frequency.
          </p>
        </div>
        <div className="cards-grid">
          {configuration.map((item) => (
            <article key={item} className="card">
              <h2>Best practice</h2>
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
          <h2>Useful pages</h2>
        </div>
        <div className="cards-grid">
          {relatedLinks.map((item) => (
            <Link key={item.href} href={item.href} className="card" style={{ textDecoration: 'none' }}>
              <h2>{item.title}</h2>
              <p>Explore the dedicated page for this use case.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <h2>Ready to launch your Discord bot?</h2>
          <p>Start with Consolex1 in France, using infrastructure made for Discord apps and services.</p>
        </div>
        <Link className="button button-primary" href="/en/pricing">
          View plans
        </Link>
      </section>
    </>
  );
}
