import Section from '@/components/Section';
import PlanCard from '@/components/PlanCard';

export const metadata = {
  title: 'Home',
  description: 'Consolex1 provides French hosting for Discord bots, websites and Python applications.',
  keywords: [
    'french hosting',
    'discord bot hosting',
    'node.js',
    'python',
    'pterodactyl',
    'free hosting',
    'hosting',
    'free',
    'host free',
    'host',
    'free host',
    'cloud',
    'server',
    'nodejs',
    'node',
    'py',
    'js'
  ],
  openGraph: {
    title: 'consolex1 — French hosting for bots and applications',
    description: 'Consolex1 provides French hosting for Discord bots, websites and Python applications.',
    url: 'https://consolex1.com/en',
    siteName: 'consolex1',
    images: ['/consolex1-host.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'consolex1 — French hosting',
    description: 'Consolex1 provides French hosting for Discord bots, websites and Python applications.',
    images: ['/consolex1-host.png'],
  },
};

const features = [
  {
    title: 'France-based server',
    description:
      'Hosted in Paris to reduce latency for Europe, with an Equinix PA5 datacenter and high-speed network.',
  },
  {
    title: 'Accessible Pterodactyl panel',
    description:
      'A clear management interface for services: SFTP access, live console, and restart in a few clicks.',
  },
];

const plans = [
  {
    title: 'Free Plan',
    price: '0 €/month',
    description: 'Ideal for testing: bots, mini-sites and prototypes.',
    accent: 'green' as const,
    features: [
      'CPU: 40%',
      'RAM: 256 MB',
      'Swap: 128 MB',
      'Storage: 512 MB',
      'Databases: not included',
      'I/O: low priority',
    ],
  },
  {
    title: 'Basic Plan',
    price: '1.39 €/month',
    description: 'Entry-level offer for light projects with database support.',
    accent: 'blue' as const,
    features: [
      'CPU: 60%',
      'RAM: 512 MB',
      'Swap: 256 MB',
      'Storage: 1 GB',
      'Databases: 1',
      'I/O: standard usage',
    ],
  },
  {
    title: 'Pro',
    price: '2.99 €/month',
    description: 'For active bots, small APIs and regular traffic sites.',
    accent: 'yellow' as const,
    features: [
      'CPU: 80%',
      'RAM: 1 GB',
      'Swap: 512 MB',
      'Storage: 2 GB',
      'Databases: 2',
      'I/O: medium priority',
    ],
  },
  {
    title: 'Premium',
    price: '4.49 €/month',
    description: 'Stronger resources for production services and heavier traffic.',
    accent: 'orange' as const,
    features: [
      'CPU: 100%',
      'RAM: 1.5 GB',
      'Swap: 512 MB',
      'Storage: 3 GB',
      'Databases: 3',
      'I/O: high priority',
    ],
  },
];

const faqs = [
  {
    question: 'Is the Free Plan really free?',
    answer: 'Yes — the Free plan requires no payment details and is meant for testing and small projects.',
  },
  {
    question: 'Which technologies are supported?',
    answer: 'Node.js, Python, Java, Golang, Rust, and nginx are supported.',
  },
  {
    question: 'Can I manage my instance via Discord?',
    answer: 'Yes, creation and configuration are currently done through our Discord bot for speed and convenience.',
  },
  {
    question: 'Where are servers hosted?',
    answer: 'The infrastructure is located in France at the Equinix PA5 datacenter in Paris.',
  },
  {
    question: 'How many backups are available?',
    answer: 'Paid plans include two backups, while the free plan does not include automated backups.',
  },
];

export default function EnHome() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Paris — Equinix PA5</span>
          <h1>French hosting for Node.js, Python, Discord and websites.</h1>
          <p className="section-description">
            Consolex1 provides direct access to a French server with simplified deployment and a Pterodactyl control panel.
          </p>
        </div>
      </section>

      <section className="section cards-grid">
        {features.map((feature) => (
          <Section key={feature.title} title={feature.title} description={feature.description} />
        ))}
      </section>

      <section className="section plans-section" id="plans">
        <div className="section-header">
          <h2>Our plans</h2>
          <p>Options for testing, development, and even production workloads.</p>
        </div>
        <div className="plans-grid">
          {plans.map((plan) => (
            <PlanCard key={plan.title} {...plan} />
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-header">
          <h2>FAQ</h2>
          <p>Practical answers to help you get started and understand the service limits.</p>
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

      <section className="cta-banner">
        <div>
          <h2>Get started in minutes.</h2>
          <p>Join our Discord to create and deploy your project quickly.</p>
        </div>
        <a className="button button-primary" href="https://discord.consolex1.com">
          Join Discord
        </a>
      </section>
    </>
  );
}
