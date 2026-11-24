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
        <section className="my-[clamp(3rem,7vw,5rem)] mt-8! sm:mt-10! [.hero~main_&]:mt-2! **:data-[reveal=header]:animate-rise [.hero~main_&_h1]:text-[clamp(1.35rem,2.4vw,1.85rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
          <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
            <span className="mb-4 inline-flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.08em] text-mute before:size-[.4rem] before:bg-accent">{isEnglish ? 'Independent project • France' : 'Projet indépendant • France'}</span>
            <h1>{text.title}</h1>
            <p className="mt-4 mb-0 max-w-160 text-base leading-[1.7] text-soft sm:text-[1.05rem]">{text.intro}</p>
          </div>
        </section>
        {text.sections.map((section) => (
          <section className="my-[clamp(3rem,7vw,5rem)]" key={section.heading}>
            <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p className="mt-4 mb-0 max-w-160 text-base leading-[1.7] text-soft sm:text-[1.05rem]" key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
        <section className="my-[clamp(3rem,7vw,5rem)]">
          <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
            <h2>{isEnglish ? 'Custom Pterodactyl eggs' : 'Eggs Pterodactyl personnalisés'}</h2>
            <p className="mt-4 mb-0 max-w-160 text-base leading-[1.7] text-soft sm:text-[1.05rem]">
              {isEnglish
                ? 'The Node.js Universal and Python Universal eggs are developed by the consolex1 hosting provider. Their source code is publicly available on GitHub.'
                : 'Les eggs Node.js Universal et Python Universal sont développés par l’hébergeur consolex1. Leur code source est disponible publiquement sur GitHub.'}
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
            <a className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal href="https://github.com/console-x1/pterodactyl-node" target="_blank" rel="noopener noreferrer">
              {isEnglish ? 'consolex1 Node.js egg — GitHub' : 'Egg Node.js consolex1 — GitHub'}
            </a>
            <a className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal href="https://github.com/console-x1/pterodactyl-python" target="_blank" rel="noopener noreferrer">
              {isEnglish ? 'consolex1 Python egg — GitHub' : 'Egg Python consolex1 — GitHub'}
            </a>
          </div>
        </section>
        <section className="my-[clamp(3rem,7vw,5rem)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
            <a className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal href="https://me.consolex1.com">{text.profileLink}</a>
            <Link className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal href={isEnglish ? '/en/legal-notice' : '/mentions'}>{text.legalLink}</Link>
            <Link className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal href={isEnglish ? '/en/guides' : '/guides'}>{text.guidesLink}</Link>
            <Link className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal href={isEnglish ? '/en/pricing' : '/tarif'}>{text.pricingLink}</Link>
            <a className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal href="https://status.consolex1.com/" target="_blank" rel="noopener noreferrer">
              {text.statusLink}
            </a>
          </div>
        </section>
        <section className="relative mt-[clamp(3rem,7vw,5rem)] flex flex-col items-start justify-between gap-6 rounded-2xl border border-line-strong border-l-[3px] border-l-accent bg-panel p-6 sm:flex-row sm:items-center sm:p-10 [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-3 [&_p]:mb-0 [&_p]:max-w-136 [&_p]:text-soft" data-reveal>
          <div>
            <h2>{isEnglish ? 'Questions or feedback?' : 'Une question ou un retour ?'}</h2>
            <p>{text.sections[text.sections.length - 1].paragraphs[0]}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[background-color,border-color,color,translate] duration-150 active:translate-y-px min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:brightness-110" data-cta href="https://discord.consolex1.com">{text.communityLink}</a>
            <a className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[background-color,border-color,color,translate] duration-150 active:translate-y-px min-h-11 px-5 py-2.5 text-[.95rem] border-line-strong bg-panel text-ink hover:bg-panel-hover" data-cta href="mailto:contact@consolex1.com">{text.emailLink}</a>
          </div>
        </section>
      </article>
    </>
  );
}