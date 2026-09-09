import Link from 'next/link';

export const metadata = {
  title: 'Discord Bot Node.js Hosting in France | Consolex1',
  description:
    'Discover Node.js Discord bot hosting in France with Consolex1, including Pterodactyl, stability and simple deployment.',
  keywords: [
    'discord bot node.js hosting',
    'node.js bot discord europe',
    'host discord bot node.js',
    'consolex1',
  ],
};

const sections = [
  {
    title: 'Why Node.js for a Discord bot?',
    description:
      'Node.js is particularly well suited to reactive applications, websockets and services that need to respond instantly.',
  },
  {
    title: 'Which setup should you choose?',
    description:
      'Depending on guild count, commands and queued tasks, you usually start on a small plan and scale as needed.',
  },
  {
    title: 'What Consolex1 brings',
    description:
      'A France-based hosting setup with access to the Pterodactyl panel, SFTP and console tools for easier deployment.',
  },
];

export default function EnHebergementBotDiscordNodejsPage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Node.js • Discord</span>
          <h1>Discord bot Node.js hosting in France</h1>
          <p className="section-description">
            If you want to deploy a Discord bot in Node.js with a reliable base and a simple environment, Consolex1 can be a useful option.
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
          <h2>Testing or launching a Node.js bot?</h2>
          <p>Start with a plan that matches your real usage, then increase resources when your bot grows.</p>
        </div>
        <Link className="button button-primary" href="/en/pricing">
          Choose a plan
        </Link>
      </section>
    </>
  );
}
