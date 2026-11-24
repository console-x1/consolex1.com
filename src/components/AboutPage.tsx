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
        <section className="my-[clamp(3.5rem,8vw,5.5rem)] mt-10! [.hero~main_&]:mt-4! **:data-[reveal=header]:animate-rise [.hero~main_&_h1]:text-[clamp(1.4rem,2.6vw,2rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
          <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
            <span className="mb-[1.1rem] inline-flex items-center rounded-full border border-white/8 bg-white/[.028] px-3 py-[.28rem] text-[.78rem] font-medium tracking-[.01em] text-soft">{isEnglish ? 'Independent project • France' : 'Projet indépendant • France'}</span>
            <h1>{text.title}</h1>
            <p className="mt-4 mb-0 max-w-184 text-[1.04rem] leading-[1.75] text-soft">{text.intro}</p>
          </div>
        </section>
        {text.sections.map((section) => (
          <section className="my-[clamp(3.5rem,8vw,5.5rem)]" key={section.heading}>
            <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p className="mt-4 mb-0 max-w-184 text-[1.04rem] leading-[1.75] text-soft" key={paragraph}>{paragraph}</p>)}
            </div>
          </section>
        ))}
        <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
          <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
            <h2>{isEnglish ? 'Custom Pterodactyl eggs' : 'Eggs Pterodactyl personnalisés'}</h2>
            <p className="mt-4 mb-0 max-w-184 text-[1.04rem] leading-[1.75] text-soft">
              {isEnglish
                ? 'The Node.js Universal and Python Universal eggs are developed by the consolex1 hosting provider. Their source code is publicly available on GitHub.'
                : 'Les eggs Node.js Universal et Python Universal sont développés par l’hébergeur consolex1. Leur code source est disponible publiquement sur GitHub.'}
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            <a className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot href="https://github.com/console-x1/pterodactyl-node" target="_blank" rel="noopener noreferrer">
              {isEnglish ? 'consolex1 Node.js egg — GitHub' : 'Egg Node.js consolex1 — GitHub'}
            </a>
            <a className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot href="https://github.com/console-x1/pterodactyl-python" target="_blank" rel="noopener noreferrer">
              {isEnglish ? 'consolex1 Python egg — GitHub' : 'Egg Python consolex1 — GitHub'}
            </a>
          </div>
        </section>
        <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            <a className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot href="https://me.consolex1.com">{text.profileLink}</a>
            <Link className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot href={isEnglish ? '/en/legal-notice' : '/mentions'}>{text.legalLink}</Link>
            <Link className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot href={isEnglish ? '/en/guides' : '/guides'}>{text.guidesLink}</Link>
            <Link className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot href={isEnglish ? '/en/pricing' : '/tarif'}>{text.pricingLink}</Link>
            <a className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot href="https://status.consolex1.com/" target="_blank" rel="noopener noreferrer">
              {text.statusLink}
            </a>
          </div>
        </section>
        <section className="relative isolate overflow-hidden rounded-[20px] border border-white/8  transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 mt-[clamp(3.5rem,8vw,5.5rem)] flex flex-wrap items-center justify-between gap-6 p-[clamp(1.75rem,4vw,2.75rem)] bg-[radial-gradient(600px_240px_at_100%_0%,rgba(77,163,255,.16),transparent_70%),radial-gradient(500px_220px_at_0%_100%,rgba(255,154,60,.09),transparent_70%),rgba(255,255,255,.028)] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-[.6rem] [&_p]:mb-0 [&_p]:max-w-136 [&_p]:text-soft" data-reveal data-spot>
          <div>
            <h2>{isEnglish ? 'Questions or feedback?' : 'Une question ou un retour ?'}</h2>
            <p>{text.sections[text.sections.length - 1].paragraphs[0]}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-(--bx,0px) translate-y-(--by,0px) transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-250 ease-soft active:scale-[.97] px-[1.4rem] py-[.8rem] text-[.95rem] bg-[linear-gradient(100deg,#4da3ff,#5eead4)] text-[#04101c] shadow-[0_10px_30px_-10px_rgba(77,163,255,.7)] hover:shadow-[0_16px_44px_-8px_rgba(77,163,255,.85)] after:absolute after:inset-0 after:translate-x-[-120%] after:transition-transform after:duration-700 after:ease-soft after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,.5)_50%,transparent_70%)] hover:after:translate-x-[120%]" data-btn href="https://discord.consolex1.com">{text.communityLink}</a>
            <a className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border font-semibold no-underline cursor-pointer translate-x-(--bx,0px) translate-y-(--by,0px) transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-250 ease-soft active:scale-[.97] px-[1.4rem] py-[.8rem] text-[.95rem] border-white/8 bg-white/5.5 text-ink hover:border-white/16 hover:bg-white/9" data-btn href="mailto:contact@consolex1.com">{text.emailLink}</a>
          </div>
        </section>
      </article>
    </>
  );
}