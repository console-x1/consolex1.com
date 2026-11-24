import Link from 'next/link';
import HostingFaqs from '@/components/HostingFaqs';

export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/en/discord-bot-python-hosting',
    languages: {
      fr: 'https://consolex1.com/hebergement-bot-discord-python',
      en: 'https://consolex1.com/en/discord-bot-python-hosting',
    },
  },
  title: 'Discord Bot Python Hosting in France | consolex1',
  description:
    'Host your Discord bot in Python in France with consolex1, using a local infrastructure and simplified management tools.',
  keywords: [
    'discord bot python hosting',
    'python bot discord france',
    'host python discord bot',
    'consolex1',
    'bot python',
  ],
};

const sections = [
  {
    title: 'Why Python for a Discord bot?',
    description:
      'Python is useful for lightweight bots, automated tasks and quick API integrations without adding unnecessary complexity.',
  },
  {
    title: 'How to pick the right plan?',
    description:
      'For a Python bot, RAM, stability and log handling are often more important than raw CPU power alone.',
  },
  {
    title: 'What consolex1 provides',
    description:
      'A developer-focused hosting solution with a Pterodactyl interface and a France-based server for European projects.',
  },
];

export default function EnHebergementBotDiscordPythonPage() {
  return (
    <>
      <section className="my-[clamp(3rem,7vw,5rem)] mt-8! sm:mt-10! [.hero~main_&]:mt-2! **:data-[reveal=header]:animate-rise [.hero~main_&_h1]:text-[clamp(1.35rem,2.4vw,1.85rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.08em] text-mute before:size-[.4rem] before:bg-accent">Python • Discord</span>
          <h1>Discord bot Python hosting in France</h1>
          <p className="mt-4 mb-0 max-w-160 text-base leading-[1.7] text-soft sm:text-[1.05rem]">
            consolex1 offers a simple foundation for hosting a Discord bot in Python in France, with a stable environment and accessible management tools.
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

      <HostingFaqs locale="en" subject="a Discord bot built with Python" />

      <section className="relative mt-[clamp(3rem,7vw,5rem)] flex flex-col items-start justify-between gap-6 rounded-2xl border border-line-strong border-l-[3px] border-l-accent bg-panel p-6 sm:flex-row sm:items-center sm:p-10 [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-3 [&_p]:mb-0 [&_p]:max-w-136 [&_p]:text-soft" data-reveal>
        <div>
          <h2>Launching a Python Discord bot?</h2>
          <p>Start with a suitable plan and scale resources based on traffic, uptime and storage requirements.</p>
        </div>
        <Link className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[background-color,border-color,color,translate] duration-150 active:translate-y-px min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:brightness-110" data-cta href="/en/pricing">
          Discover plans
        </Link>
      </section>
    </>
  );
}