import Link from 'next/link';
import HostingFaqs from '@/components/HostingFaqs';

export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/en/discord-bot-hosting',
    languages: {
      fr: 'https://consolex1.com/hebergement-bot-discord',
      en: 'https://consolex1.com/en/discord-bot-hosting',
    },
  },
  title: 'Free Discord Bot Hosting in France | consolex1',
  description: 'Host your Discord bot in France with consolex1, using Node.js, Python, Pterodactyl, backups and a local infrastructure.',
  keywords: [
    'discord bot hosting',
    'hosting discord bot',
    'host discord bot',
    'discord bot europe',
    'bot discord host',
    'node.js bot discord',
    'python bot discord',
    'pterodactyl hosting',
    'hosting in france',
    'free discord bot hosting',
    'consolex1',
  ],
};

const highlights = [
  {
    title: 'France-based infrastructure',
    description: 'Servers are located in France, with the Equinix PA5 datacenter in Paris for lower latency across Europe.',
  },
  {
    title: 'Simple Pterodactyl management',
    description: 'Manage your services through an intuitive panel with SFTP access, live console, and quick restarts.',
  },
  {
    title: 'Compatible with Node.js and Python',
    description: 'consolex1 supports Discord bots in Node.js, Python, Java, Go, Rust and nginx depending on project needs.',
  },
  {
    title: 'Great for serious projects',
    description: 'Whether you are launching a community bot, a dashboard service or a Discord API, you can get started quickly.',
  },
];

const configuration = [
  'Discord bot in Node.js: recommended for fast interactions, shards and web services.',
  'Discord bot in Python: well suited for lightweight scripts, automation and API integrations.',
  'Databases: useful for storing guild data, commands, logs and queues.',
  'Backups and stability: choose a plan that matches your usage frequency and production requirements.',
];

const faqs = [
  {
    question: 'Can I host a Discord bot for free?',
    answer: 'Yes, the free plan is a good starting point for testing a bot, a mini-service or a prototype.',
  },
  {
    question: 'Should I choose Node.js or Python?',
    answer: 'Node.js is often preferred for reactive bots and APIs, while Python works very well for scripts and quick integrations.',
  },
  {
    question: 'Can Discord bots be managed from Discord?',
    answer: 'Yes, onboarding and instance setup can be handled through our Discord bot to save time.',
  },
];

const relatedLinks = [
  { title: 'How to host a Discord bot for free', href: '/en/guides/host-discord-bot-for-free' },
  { title: 'How to deploy a discord.js bot', href: '/en/guides/deploy-discordjs-bot' },
  { title: 'How to deploy a discord.py bot', href: '/en/guides/deploy-discord-py-bot' },
  { title: 'Discord bot Node.js hosting', href: '/en/discord-bot-nodejs-hosting' },
  { title: 'Discord bot Python hosting', href: '/en/discord-bot-python-hosting' },
  { title: 'Node.js hosting', href: '/en/nodejs-hosting' },
  { title: 'Python hosting', href: '/en/python-hosting' },
  { title: 'Hosting in France', href: '/en/france-hosting' },
];

export default function EnHebergementBotDiscordPage() {
  return (
    <>
      <section className="my-[clamp(3.5rem,8vw,5.5rem)] mt-10! [.hero~main_&]:mt-4! **:data-[reveal=header]:animate-rise [.hero~main_&_h1]:text-[clamp(1.4rem,2.6vw,2rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
          <span className="mb-[1.1rem] inline-flex items-center rounded-full border border-white/8 bg-white/[.028] px-3 py-[.28rem] text-[.78rem] font-medium tracking-[.01em] text-soft">Discord bot hosting • France</span>
          <h1>Free Discord bot hosting in France</h1>
          <p className="mt-4 mb-0 max-w-184 text-[1.04rem] leading-[1.75] text-soft">
            consolex1 is a French free hosting provider for small Discord bots, with a €0 plan, no credit card requirement and servers in Paris at Equinix PA5.
          </p>
        </div>
      </section>

      <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
          <h2>Why choose consolex1 for a Discord bot?</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {highlights.map((item) => (
            <article key={item.title} className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
          <h2>Recommended setup</h2>
          <p className="mt-4 mb-0 max-w-184 text-[1.04rem] leading-[1.75] text-soft">
            The right plan depends mainly on usage: traffic, storage, logs, databases and execution frequency.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {configuration.map((item) => (
            <article key={item} className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot>
              <h2>Best practice</h2>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
          <h2>FAQ</h2>
        </div>
        <div className="grid max-w-205 gap-[.6rem]">
          {faqs.map((item) => (
            <article key={item.question} className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 px-6 py-[1.2rem] in-[.js]:p-0 [&>h3]:mb-2 [&>h3]:text-[1.02rem] [&>h3]:tracking-[-.015em] [&>p]:m-0 [&>p]:text-[.96rem] [&>p]:text-soft [.js_&>h3]:flex [.js_&>h3]:items-center [.js_&>h3]:justify-between [.js_&>h3]:gap-4 [.js_&>h3]:m-0 [.js_&>h3]:px-6 [.js_&>h3]:py-[1.2rem] [.js_&>h3]:cursor-pointer [.js_&>h3]:select-none [.js_&>h3]:after:content-[''] [.js_&>h3]:after:shrink-0 [.js_&>h3]:after:size-[.55rem] [.js_&>h3]:after:border-mute [.js_&>h3]:after:border-r-2 [.js_&>h3]:after:border-b-2 [.js_&>h3]:after:rotate-45 [.js_&>h3]:after:-translate-x-0.5 [.js_&>h3]:after:-translate-y-0.5 [.js_&>h3]:after:transition-[rotate,border-color] [.js_&>h3]:after:duration-400 [.js_&>h3]:after:ease-soft [.js_&>h3]:hover:after:border-white [.js_&[data-open]>h3]:after:rotate-225 [.js_&[data-open]>h3]:after:border-brand [.js_&>p]:max-h-0 [.js_&>p]:overflow-hidden [.js_&>p]:opacity-0 [.js_&>p]:invisible [.js_&>p]:px-6 [.js_&>p]:py-0 [.js_&>p]:[transition-property:max-height,opacity,padding-bottom,visibility] [.js_&>p]:duration-[.45s,.35s,.45s,0s] [.js_&>p]:delay-[0s,0s,0s,.45s] [.js_&[data-open]>p]:opacity-100 [.js_&[data-open]>p]:visible [.js_&[data-open]>p]:pb-[1.3rem] [.js_&[data-open]>p]:delay-[0s]" data-reveal data-spot data-faq>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
          <h2>Useful pages</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {relatedLinks.map((item) => (
            <Link key={item.href} href={item.href} className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot style={{ textDecoration: 'none' }}>
              <h2>{item.title}</h2>
              <p>Explore the dedicated page for this use case.</p>
            </Link>
          ))}
        </div>
      </section>

      <HostingFaqs locale="en" subject="a small Discord bot" />

      <section className="relative isolate overflow-hidden rounded-[20px] border border-white/8  transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 mt-[clamp(3.5rem,8vw,5.5rem)] flex flex-wrap items-center justify-between gap-6 p-[clamp(1.75rem,4vw,2.75rem)] bg-[radial-gradient(600px_240px_at_100%_0%,rgba(77,163,255,.16),transparent_70%),radial-gradient(500px_220px_at_0%_100%,rgba(255,154,60,.09),transparent_70%),rgba(255,255,255,.028)] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-[.6rem] [&_p]:mb-0 [&_p]:max-w-136 [&_p]:text-soft" data-reveal data-spot>
        <div>
          <h2>Ready to launch your Discord bot?</h2>
          <p>Start with consolex1 in France, using infrastructure made for Discord apps and services.</p>
        </div>
        <Link className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-(--bx,0px) translate-y-(--by,0px) transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-250 ease-soft active:scale-[.97] px-[1.4rem] py-[.8rem] text-[.95rem] bg-[linear-gradient(100deg,#4da3ff,#5eead4)] text-[#04101c] shadow-[0_10px_30px_-10px_rgba(77,163,255,.7)] hover:shadow-[0_16px_44px_-8px_rgba(77,163,255,.85)] after:absolute after:inset-0 after:translate-x-[-120%] after:transition-transform after:duration-700 after:ease-soft after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,.5)_50%,transparent_70%)] hover:after:translate-x-[120%]" data-btn href="/en/pricing">
          View plans
        </Link>
      </section>
    </>
  );
}