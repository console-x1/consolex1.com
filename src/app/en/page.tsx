import Link from 'next/link';
import Section from '@/components/Section';
import PlanCard from '@/components/PlanCard';

export const metadata = {
    alternates: {
      canonical: 'https://consolex1.com/en',
      languages: {
        fr: 'https://consolex1.com/',
        en: 'https://consolex1.com/en',
      },
    },
  title: 'Free Hosting in France for Node.js, Python and Discord Bots | consolex1',
  description: 'consolex1 is a French free hosting provider for Node.js, Python, Discord bot and web hosting. The €0 plan requires no credit card and includes 256 MB RAM and 512 MB storage on servers in Paris at Equinix PA5.',
  keywords: [
    'french hosting',
    'hosting in france',
    'discord bot hosting',
    'host discord bot',
    'discord hosting',
    'nodejs hosting',
    'node.js hosting',
    'python hosting',
    'web hosting france',
    'free hosting',
    'pterodactyl hosting',
    'server in france',
    'france cloud server',
    'python server',
    'consolex1',
  ],
  openGraph: {
    title: 'Free hosting in France for apps and bots | consolex1',
    description: 'A French free hosting provider for Node.js, Python and Discord bots, with a €0 plan and servers in Paris.',
    url: 'https://consolex1.com/en',
    siteName: 'consolex1',
    images: ['/avatar.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free hosting in France | consolex1',
    description: 'Free Node.js, Python and Discord bot hosting in France, without a credit card.',
    images: ['/avatar.png'],
  },
};

const features = [
  {
    title: 'France-based server',
    description:
      'Hosted in Paris, France, at the Equinix PA5 datacenter. A Paris location can reduce network distance for nearby users; actual latency depends on the route.',
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
    price: '1.49 €/month',
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
    price: '2.49 €/month',
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
    price: '3.49 €/month',
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
    question: 'Why offer a free plan?',
    answer: 'I created this service because, when I was younger, I also needed a free host to learn and test. Today, with the means and capabilities available, I want to offer the same help to others, allowing everyone to start for free. The paid plans exist only to help finance the infrastructure and support the project in the long term.',
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
  {
    question: 'Why consolex1 instead of a VPS?',
    answer: 'Unlike a VPS, you do not need to manage the infrastructure. Hosting your projects becomes simpler and faster, with an intuitive panel and resources tailored to your needs.',
  },
];

const relatedPages = [
  {
    title: 'Free Discord bot hosting',
    description: 'Host a small Discord bot for free in France, subject to the published resource limits.',
    href: '/en/discord-bot-hosting',
  },
  {
    title: 'Free Node.js hosting',
    description: 'A useful page for APIs, services and web apps built on Node.js.',
    href: '/en/nodejs-hosting',
  },
  {
    title: 'Free Python hosting',
    description: 'A practical route for Python scripts, bots and lightweight backends.',
    href: '/en/python-hosting',
  },
  {
    title: 'Pterodactyl hosting',
    description: 'Understand the panel used to manage services quickly and clearly.',
    href: '/en/pterodactyl-hosting',
  },
  {
    title: 'Free hosting in France',
    description: 'Learn about the Paris location, the Equinix PA5 datacenter and free-plan limits.',
    href: '/en/free-hosting-france',
  },
  {
    title: 'Free hosting without a credit card',
    description: 'Start on the €0 plan without entering card details.',
    href: '/en/free-hosting-without-credit-card',
  },
  {
    title: 'Free hosting',
    description: 'Check supported runtimes, free resources and frequently asked questions.',
    href: '/en/free-hosting',
  },
  {
    title: 'Practical deployment guides',
    description: 'Step-by-step instructions for Discord bots, Node.js and Python projects.',
    href: '/en/guides',
  },
];

export default function EnHome() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Paris — Equinix PA5</span>
          <h1>Free hosting in France for Node.js, Python and Discord bots.</h1>
          <p className="section-description">
            consolex1 is a French free hosting provider for Node.js, Python, Discord bot and small web application hosting. Its €0 plan requires no credit card and includes 256 MB RAM and 512 MB storage; services run on servers in Paris at Equinix PA5 and are managed with the Pterodactyl panel.
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

      <section className="section">
        <div className="section-header">
          <h2>Popular use cases</h2>
          <p>Dedicated pages to better match the most common hosting searches.</p>
        </div>
        <div className="cards-grid">
          {relatedPages.map((page) => (
            <Link key={page.href} href={page.href} className="card" style={{ textDecoration: 'none' }}>
              <h2>{page.title}</h2>
              <p>{page.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>About consolex1</h2>
          <p>
            An independent French hosting project built to make it easier to learn, test and launch small projects.
            Read about the project’s purpose, infrastructure, free-tier limits and roadmap.
          </p>
        </div>
        <div className="cards-grid">
          <Link className="card" href="/en/about" style={{ textDecoration: 'none' }}>
            <h3>Why consolex1 exists</h3>
            <p>Meet the project, its Paris infrastructure, philosophy and community.</p>
          </Link>
          <Link className="card" href="/en/guides" style={{ textDecoration: 'none' }}>
            <h3>Deployment guides</h3>
            <p>Follow practical guides for Discord bots, Node.js apps and Python services.</p>
          </Link>
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
