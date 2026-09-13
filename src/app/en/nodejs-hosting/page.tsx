import Link from 'next/link';

export const metadata = {
  title: 'Node.js Hosting in France | consolex1',
  description:
    'Host your Node.js applications in France with consolex1, including Pterodactyl, simple deployment and resources for APIs and web services.',
  keywords: [
    'node.js hosting',
    'node.js france',
    'host node.js app',
    'api node.js',
    'server node.js',
    'consolex1',
    'pterodactyl',
  ],
};

const useCases = [
  {
    title: 'APIs and web services',
    description:
      'Host REST APIs, webhooks and reliable services using a fast setup and a simple administrative interface.',
  },
  {
    title: 'Bots and automation tools',
    description:
      'A Discord bot, scheduler or automation service works well on a stable infrastructure located in France.',
  },
  {
    title: 'Fast deployment',
    description:
      'Pterodactyl helps you launch, configure and restart projects without unnecessary overhead.',
  },
];

const checklist = [
  'Choose a plan that fits your app RAM, storage and expected daily usage.',
  'Use the console and SFTP to deploy files and configure your project.',
  'Prefer regular backups to protect databases and critical files.',
  'Test your application through the domain, ports and environment variables.',
];

export default function EnHebergementNodejsPage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Node.js • France</span>
          <h1>Node.js hosting in France</h1>
          <p className="section-description">
            consolex1 offers hosting for Node.js projects, from APIs to Discord bots, with french infrastructure and a Pterodactyl panel.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>What is this hosting for?</h2>
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
          <h2>Production checklist</h2>
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
          <h2>Need reliable Node.js hosting?</h2>
          <p>consolex1 provides a solid base to start, test and scale your web apps or Discord services.</p>
        </div>
        <Link className="button button-primary" href="/en/pricing">
          Compare plans
        </Link>
      </section>
    </>
  );
}
