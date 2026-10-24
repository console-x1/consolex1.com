import Link from 'next/link';
import type { Locale } from '@/lib/hosting-pages';

const content = {
  en: {
    title: 'About consolex1',
    intro:
      'consolex1 is an independent French hosting project for small applications, websites and Discord bots. It is being built by its founder as a practical hosting service and a long-term learning project.',
    sections: [
      {
        heading: 'Why consolex1 exists',
        paragraphs: [
          'The project grew from a simple need: having a place to learn, test ideas and run small projects without paying upfront. Its free tier is intended to make that first step accessible.',
          'The founder’s path into development began with Discord bots and grew through several software and hosting projects. That experience inspired the goal of understanding and building the infrastructure behind a hosting service, not only its user-facing panel. Read more about that personal journey at me.consolex1.com.',
        ],
      },
      {
        heading: 'France, Paris and infrastructure',
        paragraphs: [
          'The hosting infrastructure is located in Paris, France, at the Equinix PA5 datacenter. The public website is hosted separately on GitHub Pages.',
          'Instances are managed through the Pterodactyl panel, with tools such as a live console and SFTP file access. A Paris location can be useful for projects serving users in France and Europe, but actual latency depends on each network route.',
        ],
      },
      {
        heading: 'The free tier and our philosophy',
        paragraphs: [
          'The €0 plan does not require a credit card and includes 256 MB RAM and 512 MB storage. It is best suited to learning, testing and lightweight apps or bots; databases and automated backups are not included.',
          'We value clear limits, learning by doing and being honest about what a small project can provide. Paid plans are displayed for future availability. They are currently not available for purchase.',
        ],
      },
      {
        heading: 'Roadmap',
        paragraphs: [
          'The roadmap is shaped by the project’s capacity and community feedback, so these are priorities rather than dated promises: improve service reliability, make deployment guides clearer, and grow the infrastructure sustainably while keeping the free entry point useful.',
        ],
      },
      {
        heading: 'Contact and community',
        paragraphs: [
          'For questions, help or project feedback, email consolex1@consolex1.com or join the consolex1 Discord community.',
        ],
      },
    ],
    profileLink: 'Read the founder’s personal profile',
    legalLink: 'Read the legal notice',
    guidesLink: 'Explore the hosting guides',
    pricingLink: 'Compare plans',
    communityLink: 'Join Discord',
    emailLink: 'Email consolex1',
    statusLink: 'View live status and uptime',
  },
  fr: {
    title: 'À propos de consolex1',
    intro:
      'consolex1 est un projet indépendant d’hébergement français pour les petites applications, les sites web et les bots Discord. Il est développé par son fondateur comme un service pratique et un projet d’apprentissage à long terme.',
    sections: [
      {
        heading: 'Pourquoi consolex1 existe',
        paragraphs: [
          'Le projet est né d’un besoin simple : disposer d’un endroit pour apprendre, tester des idées et faire tourner de petits projets sans payer dès le départ. Son offre gratuite vise à rendre cette première étape accessible.',
          'Le parcours de son fondateur a commencé par la création de bots Discord, puis s’est poursuivi avec plusieurs projets logiciels et d’hébergement. Cette expérience a nourri l’envie de comprendre et de construire l’infrastructure derrière un hébergeur, au-delà de son panneau visible. Son parcours personnel est raconté sur me.consolex1.com.',
        ],
      },
      {
        heading: 'France, Paris et infrastructure',
        paragraphs: [
          'L’infrastructure d’hébergement est située à Paris, en France, dans le datacenter Equinix PA5. Le site vitrine est hébergé séparément sur GitHub Pages.',
          'Les instances sont gérées depuis le panel Pterodactyl, qui fournit notamment une console en temps réel et un accès aux fichiers par SFTP. Une localisation à Paris peut être utile pour des projets destinés à la France et à l’Europe, mais la latence réelle dépend du routage réseau.',
        ],
      },
      {
        heading: 'Offre gratuite et philosophie',
        paragraphs: [
          'L’offre à 0 € ne demande pas de carte bancaire et comprend 256 Mo de RAM et 512 Mo de stockage. Elle convient surtout à l’apprentissage, aux tests et aux petits projets ; les bases de données et les sauvegardes automatiques ne sont pas incluses.',
          'Nous privilégions des limites claires, l’apprentissage par la pratique et la transparence sur ce qu’un petit projet peut offrir. Les offres payantes sont affichées en vue de leur disponibilité future. Elles ne sont actuellement pas disponibles à l’achat.',
        ],
      },
      {
        heading: 'Feuille de route',
        paragraphs: [
          'La feuille de route dépend des capacités du projet et des retours de la communauté. Ce sont des priorités, et non des engagements datés : améliorer la fiabilité du service, clarifier les guides de déploiement et développer l’infrastructure de façon durable tout en gardant une entrée gratuite utile.',
        ],
      },
      {
        heading: 'Contact et communauté',
        paragraphs: [
          'Pour poser une question, demander de l’aide ou partager un retour, écrivez à consolex1@consolex1.com ou rejoignez la communauté Discord de consolex1.',
        ],
      },
    ],
    profileLink: 'Lire le profil personnel du fondateur',
    legalLink: 'Lire les mentions légales',
    guidesLink: 'Consulter les guides d’hébergement',
    pricingLink: 'Comparer les offres',
    communityLink: 'Rejoindre Discord',
    emailLink: 'Écrire à consolex1',
    statusLink: 'Consulter le statut et la disponibilité en direct',
  },
} satisfies Record<Locale, {
  title: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  profileLink: string;
  legalLink: string;
  guidesLink: string;
  pricingLink: string;
  communityLink: string;
  emailLink: string;
  statusLink: string;
}>;

export default function AboutPage({ locale }: { locale: Locale }) {
  const text = content[locale];
  const isEnglish = locale === 'en';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: text.title,
            description: text.intro,
            url: `https://consolex1.com${isEnglish ? '/en/about' : '/a-propos'}`,
            about: {
              '@type': 'Service',
              name: 'consolex1',
              serviceType: isEnglish ? 'Web application hosting' : 'Hébergement d’applications web',
              areaServed: { '@type': 'Country', name: 'France' },
              url: 'https://consolex1.com',
            },
          }).replace(/</g, '\\u003c'),
        }}
      />
      <article>
        <section className="section intro">
          <div className="section-header">
            <span className="badge">{isEnglish ? 'Independent project • France' : 'Projet indépendant • France'}</span>
            <h1>{text.title}</h1>
            <p className="section-description">{text.intro}</p>
          </div>
        </section>
        {text.sections.map((section) => (
          <section className="section" key={section.heading}>
            <div className="section-header">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p className="section-description" key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
        <section className="section">
          <div className="section-header">
            <h2>{isEnglish ? 'Custom Pterodactyl eggs' : 'Eggs Pterodactyl personnalisés'}</h2>
            <p className="section-description">
              {isEnglish
                ? 'The Node.js Universal and Python Universal eggs are developed by the consolex1 hosting provider. Their source code is publicly available on GitHub.'
                : 'Les eggs Node.js Universal et Python Universal sont développés par l’hébergeur consolex1. Leur code source est disponible publiquement sur GitHub.'}
            </p>
          </div>
          <div className="cards-grid">
            <a className="card" href="https://github.com/console-x1/pterodactyl-node" target="_blank" rel="noopener noreferrer">
              {isEnglish ? 'consolex1 Node.js egg — GitHub' : 'Egg Node.js consolex1 — GitHub'}
            </a>
            <a className="card" href="https://github.com/console-x1/pterodactyl-python" target="_blank" rel="noopener noreferrer">
              {isEnglish ? 'consolex1 Python egg — GitHub' : 'Egg Python consolex1 — GitHub'}
            </a>
          </div>
        </section>
        <section className="section">
          <div className="cards-grid">
            <a className="card" href="https://me.consolex1.com">{text.profileLink}</a>
            <Link className="card" href={isEnglish ? '/en/legal-notice' : '/mentions'}>{text.legalLink}</Link>
            <Link className="card" href={isEnglish ? '/en/guides' : '/guides'}>{text.guidesLink}</Link>
            <Link className="card" href={isEnglish ? '/en/pricing' : '/tarif'}>{text.pricingLink}</Link>
            <a className="card" href="https://status.consolex1.com/" target="_blank" rel="noopener noreferrer">
              {text.statusLink}
            </a>
          </div>
        </section>
        <section className="cta-banner">
          <div>
            <h2>{isEnglish ? 'Questions or feedback?' : 'Une question ou un retour ?'}</h2>
            <p>{text.sections[text.sections.length - 1].paragraphs[0]}</p>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="https://discord.consolex1.com">{text.communityLink}</a>
            <a className="button button-secondary" href="mailto:contact@consolex1.com">{text.emailLink}</a>
          </div>
        </section>
      </article>
    </>
  );
}
