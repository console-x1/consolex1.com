import type { Metadata } from 'next';
import { withSocial } from '@/lib/social';
import Link from 'next/link';
import HostingFaqs from '@/components/HostingFaqs';

export const metadata: Metadata = withSocial('/hebergement-nodejs', {
  alternates: {
    canonical: 'https://consolex1.com/hebergement-nodejs',
    languages: {
      fr: 'https://consolex1.com/hebergement-nodejs',
      en: 'https://consolex1.com/en/nodejs-hosting',
    },
  },
  title: 'Hébergement gratuit Node.js en France | consolex1',
  description:
    'Hébergez vos applications Node.js en France avec consolex1, Pterodactyl, deployment simple et ressources adaptées aux APIs et services web.',
  keywords: [
    'hébergement nodejs',
    'hébergement node.js',
    'node.js hosting',
    'node js hosting',
    'hosting node.js',
    'node.js france',
    'api node.js',
    'serveur node.js',
    'hébergement api node.js',
    'pterodactyl hosting',
    'consolex1',
  ],
} as Metadata);

const useCases = [
  {
    title: 'APIs et services web',
    description:
      'Hébergez des APIs REST, des webhooks et des services fiables avec des déploiements rapides et un accès administratif simple.',
  },
  {
    title: 'Bots et outils automatiques',
    description:
      'Un bot Discord, un scheduler ou un service d’automatisation fonctionne bien sur une infrastructure stable et localisée en France.',
  },
  {
    title: 'Déploiement rapide',
    description:
      'Pterodactyl permet de garder un workflow simple pour lancer, configurer et redémarrer un projet sans overhead.',
  },
];

const checklist = [
  'Choisissez un plan adapté à la RAM, au stockage et à la fréquence d’usage de votre application.',
  'Utilisez la console et le SFTP pour déployer vos fichiers et configurer votre projet.',
  'Privilégiez des sauvegardes régulières pour sécuriser la base de données et les fichiers critiques.',
  'Testez votre application via le domaine, les ports et les variables d’environnement.',
];

export default function HebergementNodejsPage() {
  return (
    <>
      <section className="my-[clamp(3rem,7vw,5rem)] mt-8! sm:mt-10! [.hero~main_&]:mt-2! **:data-[reveal=header]:animate-rise [.hero~main_&_h1]:text-[clamp(1.35rem,2.4vw,1.85rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.08em] text-mute before:size-[.4rem] before:bg-accent">Node.js • France</span>
          <h1>Hébergement gratuit Node.js en France</h1>
          <p className="mt-4 mb-0 max-w-160 text-base leading-[1.7] text-soft sm:text-[1.05rem]">
            consolex1 est une solution d’hébergement pour les projets Node.js, des APIs aux bots Discord, avec une infrastructure basée en France et un panel Pterodactyl.
          </p>
        </div>
      </section>

      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h2>À quoi sert ce type d’hébergement ?</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
          {useCases.map((item) => (
            <article key={item.title} className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h2>Checklist de mise en production</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
          {checklist.map((item) => (
            <article key={item} className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <HostingFaqs locale="fr" subject="une petite application Node.js" />

      <section className="relative mt-[clamp(3rem,7vw,5rem)] flex flex-col items-start justify-between gap-6 rounded-2xl border border-line-strong border-l-[3px] border-l-accent bg-panel p-6 sm:flex-row sm:items-center sm:p-10 [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-3 [&_p]:mb-0 [&_p]:max-w-136 [&_p]:text-soft" data-reveal>
        <div>
          <h2>Besoin d’un hébergement Node.js fiable ?</h2>
          <p>consolex1 propose une base solide pour démarrer, tester et faire évoluer vos applications web ou Discord.</p>
        </div>
        <Link className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_0_var(--c-accent)] after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100" data-cta href="/tarif">
          Comparer les plans
        </Link>
      </section>
    </>
  );
}