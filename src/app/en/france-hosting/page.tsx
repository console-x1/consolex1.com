import Link from 'next/link';

export const metadata = {
  title: 'Hosting in France | consolex1',
  description:
    'Hosting in France for Discord bots, APIs, web services and Node.js/Python apps with consolex1.',
  keywords: [
    'hosting in france',
    'french hosting',
    'france server',
    'french host',
    'europe hosting',
    'europe server',
    'european hosting',
    'european server',
    'france hosting',
    'consolex1',
    'equinix pa5',
  ],
};

const benefits = [
  {
    title: 'Lower latency',
    description:
      'Hosting locally in France is especially useful for websites, APIs and bots serving users across Europe.',
  },
  {
    title: 'Clarity and proximity',
    description:
      'A France-based datacenter can be a useful signal for projects wanting a European deployment option with strong local identity.',
  },
  {
    title: 'Easy to manage',
    description:
      'The Pterodactyl panel helps you manage services quickly without forcing a complex technical stack.',
  },
];

export default function EnHebergementFrancePage() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">France • Equinix PA5</span>
          <h1>Hosting in France</h1>
          <p className="section-description">
            consolex1 offers hosting based in France for web projects, Discord bots, Node.js apps and Python applications.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Why choose French hosting?</h2>
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
          <h2>Looking for a French host?</h2>
          <p>consolex1 can be a practical option if you want a simple panel and a fast path to deployment.</p>
        </div>
        <Link className="button button-primary" href="/en/pricing">
          Explore plans
        </Link>
      </section>
    </>
  );
}
