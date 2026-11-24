import Link from 'next/link';
import HostingFaqs from '@/components/HostingFaqs';

export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/en/nodejs-hosting',
    languages: {
      fr: 'https://consolex1.com/hebergement-nodejs',
      en: 'https://consolex1.com/en/nodejs-hosting',
    },
  },
  title: 'Free Node.js Hosting in France | consolex1',
  description: 'Host your Node.js applications in France with consolex1, including Pterodactyl, simple deployment and resources for APIs and web services.',
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
};

const useCases = [
  {
    title: 'APIs and web services',
    description: 'Host REST APIs, webhooks and reliable services using a fast setup and a simple administrative interface.',
  },
  {
    title: 'Bots and automation tools',
    description: 'A Discord bot, scheduler or automation service works well on a stable infrastructure located in France.',
  },
  {
    title: 'Fast deployment',
    description: 'Pterodactyl helps you launch, configure and restart projects without unnecessary overhead.',
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
      <section className="my-[clamp(3.5rem,8vw,5.5rem)] mt-10! [.hero~main_&]:mt-4! **:data-[reveal=header]:animate-rise [.hero~main_&_h1]:text-[clamp(1.4rem,2.6vw,2rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
          <span className="mb-[1.1rem] inline-flex items-center rounded-full border border-white/8 bg-white/[.028] px-3 py-[.28rem] text-[.78rem] font-medium tracking-[.01em] text-soft">Node.js • France</span>
          <h1>Free Node.js hosting in France</h1>
          <p className="mt-4 mb-0 max-w-184 text-[1.04rem] leading-[1.75] text-soft">
            consolex1 is a French free hosting provider for small Node.js apps, APIs and Discord bots, with infrastructure in Paris and a Pterodactyl panel.
          </p>
        </div>
      </section>

      <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
          <h2>What is this hosting for?</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {useCases.map((item) => (
            <article key={item.title} className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
          <h2>Production checklist</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {checklist.map((item) => (
            <article key={item} className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <HostingFaqs locale="en" subject="a small Node.js application" />

      <section className="relative isolate overflow-hidden rounded-[20px] border border-white/8  transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 mt-[clamp(3.5rem,8vw,5.5rem)] flex flex-wrap items-center justify-between gap-6 p-[clamp(1.75rem,4vw,2.75rem)] bg-[radial-gradient(600px_240px_at_100%_0%,rgba(77,163,255,.16),transparent_70%),radial-gradient(500px_220px_at_0%_100%,rgba(255,154,60,.09),transparent_70%),rgba(255,255,255,.028)] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-[.6rem] [&_p]:mb-0 [&_p]:max-w-136 [&_p]:text-soft" data-reveal data-spot>
        <div>
          <h2>Need reliable Node.js hosting?</h2>
          <p>consolex1 provides a solid base to start, test and scale your web apps or Discord services.</p>
        </div>
        <Link className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-(--bx,0px) translate-y-(--by,0px) transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-250 ease-soft active:scale-[.97] px-[1.4rem] py-[.8rem] text-[.95rem] bg-[linear-gradient(100deg,#4da3ff,#5eead4)] text-[#04101c] shadow-[0_10px_30px_-10px_rgba(77,163,255,.7)] hover:shadow-[0_16px_44px_-8px_rgba(77,163,255,.85)] after:absolute after:inset-0 after:translate-x-[-120%] after:transition-transform after:duration-700 after:ease-soft after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,.5)_50%,transparent_70%)] hover:after:translate-x-[120%]" data-btn href="/en/pricing">
          Compare plans
        </Link>
      </section>
    </>
  );
}