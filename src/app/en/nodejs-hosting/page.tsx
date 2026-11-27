import type { Metadata } from 'next';
import { withSocial } from '@/lib/social';
import Link from 'next/link';
import HostingFaqs from '@/components/HostingFaqs';

export const metadata: Metadata = withSocial('/en/nodejs-hosting', {
  alternates: {
    canonical: 'https://consolex1.com/en/nodejs-hosting',
    languages: {
      fr: 'https://consolex1.com/hebergement-nodejs',
      en: 'https://consolex1.com/en/nodejs-hosting',
    },
  },
  title: 'Free Node.js Hosting in France | consolex1',
  description:
    'Host your Node.js applications in France with consolex1, including Pterodactyl, simple deployment and resources for APIs and web services.',
  keywords: [
    'node.js hosting',
    'nodejs hosting',
    'hosting node.js',
    'node.js france',
    'host node.js app',
    'api node.js',
    'server node.js',
    'web hosting france',
    'pterodactyl hosting',
    'consolex1',
  ],
} as Metadata);

const useCases = [
  {
    title: 'APIs and web services',
    description:
      'Host REST APIs, webhooks and reliable services using a fast setup and a simple administrative interface.',
  },
  {
    title: 'Bots and automation tools',
    description:
      'A Discord bot, scheduler or automation service works well on a stable infrastructure located in France.',
  },
  {
    title: 'Fast deployment',
    description:
      'Pterodactyl helps you launch, configure and restart projects without unnecessary overhead.',
  },
];

const checklist = [
  'Choose a plan that fits your app RAM, storage and expected daily usage.',
  'Use the console and SFTP to deploy files and configure your project.',
  'Prefer regular backups to protect databases and critical files.',
  'Test your application through the domain, ports and environment variables.',
];

export default function EnHebergementNodejsPage() {
  return (
    <>
      <section className="my-[clamp(3rem,7vw,5rem)] mt-8! sm:mt-10! [.hero~main_&]:mt-2! **:data-[reveal=header]:animate-rise [.hero~main_&_h1]:text-[clamp(1.35rem,2.4vw,1.85rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.08em] text-mute before:size-[.4rem] before:bg-accent">Node.js • France</span>
          <h1>Free Node.js hosting in France</h1>
          <p className="mt-4 mb-0 max-w-160 text-base leading-[1.7] text-soft sm:text-[1.05rem]">
            consolex1 is a French free hosting provider for small Node.js apps, APIs and Discord bots, with infrastructure in Paris and a Pterodactyl panel.
          </p>
        </div>
      </section>

      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h2>What is this hosting for?</h2>
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
          <h2>Production checklist</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
          {checklist.map((item) => (
            <article key={item} className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <HostingFaqs locale="en" subject="a small Node.js application" />

      <section className="relative mt-[clamp(3rem,7vw,5rem)] flex flex-col items-start justify-between gap-6 rounded-2xl border border-line-strong border-l-[3px] border-l-accent bg-panel p-6 sm:flex-row sm:items-center sm:p-10 [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-3 [&_p]:mb-0 [&_p]:max-w-136 [&_p]:text-soft" data-reveal>
        <div>
          <h2>Need reliable Node.js hosting?</h2>
          <p>consolex1 provides a solid base to start, test and scale your web apps or Discord services.</p>
        </div>
        <Link className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_0_var(--c-accent)] after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100" data-cta href="/en/pricing">
          Compare plans
        </Link>
      </section>
    </>
  );
}