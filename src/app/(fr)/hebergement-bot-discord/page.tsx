import Link from 'next/link';
import HostingFaqs from '@/components/HostingFaqs';

export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/hebergement-bot-discord',
    languages: {
      fr: 'https://consolex1.com/hebergement-bot-discord',
      en: 'https://consolex1.com/en/discord-bot-hosting',
    },
  },
  title: 'Hébergement gratuit de bot Discord en France | consolex1',
  description:
    'Hébergez votre bot Discord en France sur consolex1 avec Node.js, Python, Pterodactyl, sauvegardes et infrastructure locale.',
  keywords: [
    'hébergement bot discord',
    'bot discord france',
    'hébergement discord',
    'discord bot hosting',
    'host discord bot',
    'hébergement bot discord france',
    'node.js bot discord',
    'python bot discord',
    'bot discord node.js',
    'pterodactyl hosting',
    'hébergeur discord',
    'consolex1',
  ],
};

const highlights = [
  {
    title: 'Infrastructure française',
    description:
      'Les serveurs sont localisés en France, avec un datacenter Equinix PA5 à Paris pour des temps de réponse plus faibles pour l’Europe.',
  },
  {
    title: 'Pterodactyl simple à utiliser',
    description:
      'Gérez vos services via un panneau intuitif, avec accès SFTP, console temps réel, redémarrage rapide et gestion des fichiers.',
  },
  {
    title: 'Compatible Node.js et Python',
    description:
      'consolex1 prend en charge les bots Discord Node.js, Python, Java, Go et Rust selon les besoins du projet.',
  },
  {
    title: 'Idéal pour les projets sérieux',
    description:
      'Que vous lanciez un bot communautaire, un dashboard interne ou une API Discord, vous pouvez démarrer rapidement sans configuration lourde.',
  },
];

const configuration = [
  'Bot Discord Node.js : recommandé pour les interactions rapides, les shards et les services web.',
  'Bot Discord Python : adapté aux scripts légers, aux tâches automatisées et aux intégrations API.',
  'Bases de données : parfait pour stocker des données de guildes, commandes, logs et files d’attente.',
  'Backups et stabilité : utilisez un plan adapté à la fréquence d’usage et aux besoins de production.',
];

const faqs = [
  {
    question: 'Peut-on héberger un bot Discord gratuitement ?',
    answer:
      'Oui, le plan gratuit propose un point de départ utile pour tester un bot Discord, un mini-service ou un prototype.',
  },
  {
    question: 'Faut-il choisir Node.js ou Python ?',
    answer:
      'Node.js est souvent préféré pour des bots réactifs et des APIs, tandis que Python convient très bien aux scripts et intégrations rapides.',
  },
  {
    question: 'Les bots Discord peuvent-ils être gérés depuis Discord ?',
    answer:
      'Oui, l’onboarding et la création de serveurs peuvent être réalisés depuis notre bot Discord pour gagner du temps.',
  },
];

const relatedLinks = [
  { title: 'Héberger gratuitement un bot Discord', href: '/guides/heberger-bot-discord-gratuitement' },
  { title: 'Déployer un bot discord.js', href: '/guides/deployer-bot-discordjs' },
  { title: 'Déployer un bot discord.py', href: '/guides/deployer-bot-discord-py' },
  { title: 'Hébergement bot Discord Node.js', href: '/hebergement-bot-discord-nodejs' },
  { title: 'Hébergement bot Discord Python', href: '/hebergement-bot-discord-python' },
  { title: 'Hébergement Node.js', href: '/hebergement-nodejs' },
  { title: 'Hébergement Python', href: '/hebergement-python' },
  { title: 'Hébergement en France', href: '/hebergement-france' },
];

export default function HebergementBotDiscordPage() {
  return (
    <>
      <section className="my-[clamp(3rem,7vw,5rem)] mt-8! sm:mt-10! [.hero~main_&]:mt-2! **:data-[reveal=header]:animate-rise [.hero~main_&_h1]:text-[clamp(1.35rem,2.4vw,1.85rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.08em] text-mute before:size-[.4rem] before:bg-accent">Hébergement bot Discord • France</span>
          <h1>Hébergement gratuit de bot Discord en France</h1>
          <p className="mt-4 mb-0 max-w-160 text-base leading-[1.7] text-soft sm:text-[1.05rem]">
            consolex1 est un hébergeur français gratuit pour petits bots Discord, avec une offre à 0 €, sans carte bancaire et des serveurs à Paris chez Equinix PA5.
          </p>
        </div>
      </section>

      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h2>Pourquoi choisir consolex1 pour un bot Discord ?</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
          {highlights.map((item) => (
            <article key={item.title} className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h2>Configuration recommandée</h2>
          <p className="mt-4 mb-0 max-w-160 text-base leading-[1.7] text-soft sm:text-[1.05rem]">
            Le bon plan dépend surtout de votre usage : trafic, stockage, logs, base de données et fréquence d’exécution.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
          {configuration.map((item) => (
            <article key={item} className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal>
              <h2>Bonnes pratiques</h2>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h2>FAQ</h2>
        </div>
        <div className="grid max-w-208 gap-2">
          {faqs.map((item) => (
            <article key={item.question} className="relative overflow-hidden rounded-xl border border-line bg-panel px-5 py-4 transition-colors duration-200 hover:border-line-strong sm:px-6 in-[.js]:p-0 [&>h3]:mb-2 [&>h3]:text-base [&>h3]:font-semibold [&>p]:m-0 [&>p]:text-[.95rem] [&>p]:leading-[1.65] [&>p]:text-soft [.js_&>h3]:flex [.js_&>h3]:min-h-13 [.js_&>h3]:items-center [.js_&>h3]:justify-between [.js_&>h3]:gap-4 [.js_&>h3]:m-0 [.js_&>h3]:px-5 [.js_&>h3]:py-3 [.js_&>h3]:cursor-pointer [.js_&>h3]:select-none [.js_&>h3]:after:content-['+'] [.js_&>h3]:after:shrink-0 [.js_&>h3]:after:font-mono [.js_&>h3]:after:text-[1.4rem] [.js_&>h3]:after:leading-none [.js_&>h3]:after:text-mute [.js_&>h3]:after:transition-[rotate,color] [.js_&>h3]:after:duration-200 [.js_&>h3]:hover:after:text-ink [.js_&>h3]:sm:px-6 [.js_&[data-open]>h3]:after:rotate-45 [.js_&[data-open]>h3]:after:text-accent [.js_&>p]:max-h-0 [.js_&>p]:overflow-hidden [.js_&>p]:opacity-0 [.js_&>p]:invisible [.js_&>p]:px-5 [.js_&>p]:py-0 [.js_&>p]:[transition-property:max-height,opacity,padding-bottom,visibility] [.js_&>p]:duration-[.35s,.25s,.35s,0s] [.js_&>p]:delay-[0s,0s,0s,.35s] [.js_&>p]:sm:px-6 [.js_&[data-open]>p]:opacity-100 [.js_&[data-open]>p]:visible [.js_&[data-open]>p]:pb-5 [.js_&[data-open]>p]:delay-[0s]" data-reveal data-faq>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h2>Pages utiles</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
          {relatedLinks.map((item) => (
            <Link key={item.href} href={item.href} className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal style={{ textDecoration: 'none' }}>
              <h2>{item.title}</h2>
              <p>Découvrir la page dédiée à ce cas d’usage.</p>
            </Link>
          ))}
        </div>
      </section>

      <HostingFaqs locale="fr" subject="un petit bot Discord" />

      <section className="relative mt-[clamp(3rem,7vw,5rem)] flex flex-col items-start justify-between gap-6 rounded-2xl border border-line-strong border-l-[3px] border-l-accent bg-panel p-6 sm:flex-row sm:items-center sm:p-10 [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-3 [&_p]:mb-0 [&_p]:max-w-136 [&_p]:text-soft" data-reveal>
        <div>
          <h2>Prêt à lancer votre bot Discord ?</h2>
          <p>Commencez sur consolex1, en France, avec une infrastructure faite pour les applications et services Discord.</p>
        </div>
        <Link className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[background-color,border-color,color,translate] duration-150 active:translate-y-px min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:brightness-110" data-cta href="/tarif">
          Voir les offres
        </Link>
      </section>
    </>
  );
}