import Link from 'next/link';

export const metadata = {
  title: 'Python Hosting in France | Consolex1',
  description:
    'Host your Python applications, scripts and services in France with Consolex1 and Pterodactyl.',
  keywords: [
    'python hosting',
    'python france',
    'python server',
    'python app hosting',
    'discord bot python',
    'consolex1',
  ],
};

const useCases = [
  {
    title: 'Scripts and bots',
    description:
      'Python bots, scheduled tasks and automation services all benefit from a stable machine and simple configuration access.',
  },
  {
    title: 'APIs and backends',
    description:
      'Deploy Python apps with dependency management, databases and fast restarts when needed.',
  },
  {
    title: 'Light web apps',
    description:
      'A good option for Python projects that must remain reachable and easier to manage over time.',
  },
];

const notes = [
  'Choose the right plan based on the number of services, memory needs and storage requirements.',
  'Pterodactyl makes it easy to manage instances with direct console and file access.',
  'Regular backups and monitoring are essential for production-grade Python projects.',
];

export default function EnHebergementPythonPage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Python • France</span>
          <h1>Python hosting in France</h1>
          <p className="section-description">
            Consolex1 supports Python applications, whether they are scripts, Discord bots, APIs or lightweight web services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Why consider Consolex1 for Python?</h2>
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
          <h2>Things to check before launching your service</h2>
        </div>
        <div className="cards-grid">
          {notes.map((item) => (
            <article key={item} className="card">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <h2>Need to host a Python project?</h2>
          <p>Consolex1 offers a simple and local base for launching your apps, scripts and bots in Europe.</p>
        </div>
        <Link className="button button-primary" href="/en/pricing">
          See plans
        </Link>
      </section>
    </>
  );
}
