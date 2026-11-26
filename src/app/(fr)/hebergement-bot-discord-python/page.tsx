import type { Metadata } from 'next';
import { withSocial } from '@/lib/social';
import Link from 'next/link';
import HostingFaqs from '@/components/HostingFaqs';

export const metadata: Metadata = withSocial('/hebergement-bot-discord-python', {
  alternates: {
    canonical: 'https://consolex1.com/hebergement-bot-discord-python',
    languages: {
      fr: 'https://consolex1.com/hebergement-bot-discord-python',
      en: 'https://consolex1.com/en/discord-bot-python-hosting',
    },
  },
  title: 'Hébergement Bot Discord Python en France | consolex1',
  description:
    'Hébergez votre bot Discord Python en France avec consolex1, une infrastructure locale et des outils de gestion simplifiés.',
  keywords: [
    'hébergement bot discord python',
    'bot discord python france',
    'hébergement python discord',
    'consolex1',
    'bot python',
  ],
} as Metadata);

const sections = [
  {
    title: 'Pourquoi Python pour un bot Discord ?',
    description:
      'Python est très pratique pour des bots légers, des tâches programmatique et des intégrations APIs sans surcharger l’architecture.',
  },
  {
    title: 'Comment choisir le bon plan ?',
    description:
      'Pour un bot Python, la RAM, la stabilité et les logs sont souvent plus importantes que le CPU purement nominal.',
  },
  {
    title: 'Ce que consolex1 apporte',
    description:
      'Une solution hébergement orientée développement, avec interface Pterodactyl et serveur localisé en France pour les projets européens.',
  },
];

export default function HebergementBotDiscordPythonPage() {
  return (
    <>
      <section className="my-[clamp(3rem,7vw,5rem)] mt-8! sm:mt-10! [.hero~main_&]:mt-2! **:data-[reveal=header]:animate-rise [.hero~main_&_h1]:text-[clamp(1.35rem,2.4vw,1.85rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.08em] text-mute before:size-[.4rem] before:bg-accent">Python • Discord</span>
          <h1>Hébergement bot Discord Python en France</h1>
          <p className="mt-4 mb-0 max-w-160 text-base leading-[1.7] text-soft sm:text-[1.05rem]">
            consolex1 propose une base simple pour héberger un bot Discord Python en France, avec un environnement stable et des outils de gestion accessibles.
          </p>
        </div>
      </section>

      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
          {sections.map((item) => (
            <article key={item.title} className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <HostingFaqs locale="fr" subject="un bot Discord écrit en Python" />

      <section className="relative mt-[clamp(3rem,7vw,5rem)] flex flex-col items-start justify-between gap-6 rounded-2xl border border-line-strong border-l-[3px] border-l-accent bg-panel p-6 sm:flex-row sm:items-center sm:p-10 [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-3 [&_p]:mb-0 [&_p]:max-w-136 [&_p]:text-soft" data-reveal>
        <div>
          <h2>Un bot Discord Python à lancer ?</h2>
          <p>Commencez avec un plan adapté, puis augmentez la capacité selon votre trafic et vos besoins de stockage.</p>
        </div>
        <Link className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_0_var(--c-accent)] after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100" data-cta href="/tarif">
          Découvrir les offres
        </Link>
      </section>
    </>
  );
}