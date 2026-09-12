import Link from 'next/link';

export const metadata = {
  title: 'Discord Bot Python Hosting in France | Consolex1',
  description:
    'Host your Discord bot in Python in France with Consolex1, using a local infrastructure and simplified management tools.',
  keywords: [
    'discord bot python hosting',
    'python bot discord france',
    'host python discord bot',
    'consolex1',
    'bot python',
  ],
};

const sections = [
  {
    title: 'Why Python for a Discord bot?',
    description:
      'Python is useful for lightweight bots, automated tasks and quick API integrations without adding unnecessary complexity.',
  },
  {
    title: 'How to pick the right plan?',
    description:
      'For a Python bot, RAM, stability and log handling are often more important than raw CPU power alone.',
  },
  {
    title: 'What Consolex1 provides',
    description:
      'A developer-focused hosting solution with a Pterodactyl interface and a France-based server for European projects.',
  },
];

export default function EnHebergementBotDiscordPythonPage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Python • Discord</span>
          <h1>Discord bot Python hosting in France</h1>
          <p className="section-description">
            Consolex1 offers a simple foundation for hosting a Discord bot in Python in France, with a stable environment and accessible management tools.
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
          <h2>Launching a Python Discord bot?</h2>
          <p>Start with a suitable plan and scale resources based on traffic, uptime and storage requirements.</p>
        </div>
        <Link className="button button-primary" href="/en/pricing">
          Discover plans
        </Link>
      </section>
    </>
  );
}
