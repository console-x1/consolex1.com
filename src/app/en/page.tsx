import Link from 'next/link';
import Section from '@/components/Section';
import PlanCard from '@/components/PlanCard';
import Stats from '@/components/Stats';

export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/en',
    languages: {
      fr: 'https://consolex1.com/',
      en: 'https://consolex1.com/en',
    },
  },
  title: 'Free Hosting in France for Node.js, Python and Discord Bots | consolex1',
  description: 'consolex1 is a French free hosting provider for Node.js, Python, Discord bot and web hosting. The €0 plan requires no credit card and includes 256 MB RAM and 512 MB storage on servers in Paris at Equinix PA5.',
  keywords: [
    'french hosting',
    'hosting in france',
    'discord bot hosting',
    'host discord bot',
    'discord hosting',
    'nodejs hosting',
    'node.js hosting',
    'python hosting',
    'web hosting france',
    'free hosting',
    'pterodactyl hosting',
    'server in france',
    'france cloud server',
    'python server',
    'consolex1',
  ],
  openGraph: {
    title: 'Free hosting in France for apps and bots | consolex1',
    description: 'A French free hosting provider for Node.js, Python and Discord bots, with a €0 plan and servers in Paris.',
    url: 'https://consolex1.com/en',
    siteName: 'consolex1',
    images: ['/avatar.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free hosting in France | consolex1',
    description: 'Free Node.js, Python and Discord bot hosting in France, without a credit card.',
    images: ['/avatar.png'],
  },
};

const features = [
  {
    title: 'France-based server',
    description:
      'Hosted in Paris, France, at the Equinix PA5 datacenter. A Paris location can reduce network distance for nearby users; actual latency depends on the route.',
  },
  {
    title: 'Accessible Pterodactyl panel',
    description:
      'A clear management interface for services: SFTP access, live console, and restart in a few clicks.',
  },
];

const plans = [
  {
    title: 'Free',
    price: '0 €/month',
    description: 'Ideal for testing: bots, mini-sites and prototypes.',
    accent: 'green' as const,
    features: [
      'CPU: 40%',
      'RAM: 256 MB',
      'Swap: 128 MB',
      'Storage: 512 MB',
      'Databases: 0',
      'Block IO Weight: 150',
    ],
  },
  {
    title: 'Basic',
    price: '1.49 €/month',
    description: 'Entry-level offer for light projects with database support.',
    accent: 'blue' as const,
    features: [
      'CPU: 60%',
      'RAM: 512 MB',
      'Swap: 256 MB',
      'Storage: 1 GB',
      'Databases: 1',
      'Block IO Weight: 250',
    ],
  },
  {
    title: 'Pro',
    price: '2.49 €/month',
    description: 'For active bots, small APIs and regular traffic sites.',
    accent: 'yellow' as const,
    features: [
      'CPU: 80%',
      'RAM: 1 GB',
      'Swap: 512 MB',
      'Storage: 2 GB',
      'Databases: 2',
      'Block IO Weight: 400',
    ],
  },
  {
    title: 'Premium',
    price: '3.49 €/month',
    description: 'Stronger resources for production services and heavier traffic.',
    accent: 'orange' as const,
    features: [
      'CPU: 100%',
      'RAM: 1.5 GB',
      'Swap: 512 MB',
      'Storage: 3 GB',
      'Databases: 3',
      'Block IO Weight: 500',
    ],
  },
];

const faqs = [
  {
    question: 'Is the Free Plan really free?',
    answer: 'Yes — the Free plan requires no payment details and is meant for testing and small projects.',
  },
  {
    question: 'Why offer a free plan?',
    answer: 'I created this service because, when I was younger, I also needed free hosting to learn and test. Today, I want to offer the same help to others and let everyone get started for free. Paid plans are displayed for future availability. They are currently not available for purchase.',
  },
  {
    question: 'Which technologies are supported?',
    answer: 'Node.js, Python, Java, Go, Rust, and nginx are supported.',
  },
  {
    question: 'Can I manage my instance via Discord?',
    answer: 'Yes, creation and configuration are currently done through our Discord bot for speed and convenience.',
  },
  {
    question: 'Where are servers hosted?',
    answer: 'The infrastructure is located in France at the Equinix PA5 datacenter in Paris.',
  },
  {
    question: 'How many backups are planned?',
    answer: 'Paid plans are planned to include two backups, but they are currently not available for purchase. The free plan does not include automated backups.',
  },
  {
    question: 'Why consolex1 instead of a VPS?',
    answer: 'Unlike a VPS, you do not need to manage the infrastructure. Hosting your projects becomes simpler and faster, with an intuitive panel and resources tailored to your needs.',
  },
];

const relatedPages = [
  {
    title: 'Free Discord bot hosting',
    description: 'Host a small Discord bot for free in France, subject to the published resource limits.',
    href: '/en/discord-bot-hosting',
  },
  {
    title: 'Free Node.js hosting',
    description: 'A useful page for APIs, services and web apps built on Node.js.',
    href: '/en/nodejs-hosting',
  },
  {
    title: 'Free Python hosting',
    description: 'A practical route for Python scripts, bots and lightweight backends.',
    href: '/en/python-hosting',
  },
  {
    title: 'Pterodactyl hosting',
    description: 'Understand the panel used to manage services quickly and clearly.',
    href: '/en/pterodactyl-hosting',
  },
  {
    title: 'Free hosting in France',
    description: 'Learn about the Paris location, the Equinix PA5 datacenter and free-plan limits.',
    href: '/en/free-hosting-france',
  },
  {
    title: 'Free hosting without a credit card',
    description: 'Start on the €0 plan without entering card details.',
    href: '/en/free-hosting-without-credit-card',
  },
  {
    title: 'Free hosting',
    description: 'Check supported runtimes, free resources and frequently asked questions.',
    href: '/en/free-hosting',
  },
  {
    title: 'Practical deployment guides',
    description: 'Step-by-step instructions for Discord bots, Node.js and Python projects.',
    href: '/en/guides',
  },
];

export default function EnHome() {
  return (
    <>
      <section className="my-[clamp(3rem,7vw,5rem)] mt-8! sm:mt-10! [.hero~main_&]:mt-2! **:data-[reveal=header]:animate-rise [.hero~main_&_h1]:text-[clamp(1.35rem,2.4vw,1.85rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-[.72rem] font-medium uppercase tracking-[.08em] text-mute before:size-[.4rem] before:bg-accent">Paris — Equinix PA5</span>
          <h1>Free hosting in France for Node.js, Python and Discord bots.</h1>
          <p className="mt-4 mb-0 max-w-160 text-base leading-[1.7] text-soft sm:text-[1.05rem]">
            consolex1 is a French free hosting provider for small Node.js and Python apps, Discord bots, and web services. Its €0 plan requires no credit card and includes 256 MB RAM and 512 MB storage; services run on servers in Paris at Equinix PA5 and are managed with the Pterodactyl panel.
          </p>
        </div>
      </section>

      <Stats locale="en" />

      <section className="my-[clamp(3rem,7vw,5rem)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
        {features.map((feature) => (
          <Section key={feature.title} title={feature.title} description={feature.description} />
        ))}
      </section>

      <section className="my-[clamp(3rem,7vw,5rem)]" id="plans">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h2>Our plans</h2>
          <p>Review the free plan’s resources. Paid plans are displayed for future availability. They are currently not available for purchase.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-3 sm:gap-4">
          {plans.map((plan) => (
            <PlanCard key={plan.title} {...plan} locale="en" />
          ))}
        </div>
      </section>

      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h2>FAQ</h2>
          <p>Practical answers to help you get started and understand the service limits.</p>
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
          <h2>Popular use cases</h2>
          <p>Dedicated pages to better match the most common hosting searches.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
          {relatedPages.map((page) => (
            <Link key={page.href} href={page.href} className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal style={{ textDecoration: 'none' }}>
              <h2>{page.title}</h2>
              <p>{page.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h2>About consolex1</h2>
          <p>
            An independent French hosting project built to make it easier to learn, test and launch small projects.
            Read about the project’s purpose, infrastructure, free-tier limits and roadmap.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-3 sm:gap-4">
          <Link className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal href="/en/about" style={{ textDecoration: 'none' }}>
            <h3>Why consolex1 exists</h3>
            <p>Meet the project, its Paris infrastructure, philosophy and community.</p>
          </Link>
          <Link className="relative block rounded-xl border border-line bg-panel p-5 text-soft no-underline transition-[border-color,background-color] duration-200 hover:border-line-strong hover:bg-panel-hover sm:p-6 [&_h2]:mb-2 [&_h2]:text-[1.1rem] [&_h3]:mb-2 [&_h3]:text-[1.1rem] [&_p]:m-0 [&_p]:text-[.95rem] [&_p]:leading-[1.6] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:top-5 [a&]:after:right-5 [a&]:after:text-mute [a&]:after:content-['→'] [a&]:after:transition-[translate,color] [a&]:after:duration-200 [a&]:hover:after:translate-x-1 [a&]:hover:after:text-accent" data-reveal href="/en/guides" style={{ textDecoration: 'none' }}>
            <h3>Deployment guides</h3>
            <p>Follow practical guides for Discord bots, Node.js apps and Python services.</p>
          </Link>
        </div>
      </section>

      <section className="relative mt-[clamp(3rem,7vw,5rem)] flex flex-col items-start justify-between gap-6 rounded-2xl border border-line-strong border-l-[3px] border-l-accent bg-panel p-6 sm:flex-row sm:items-center sm:p-10 [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-3 [&_p]:mb-0 [&_p]:max-w-136 [&_p]:text-soft" data-reveal>
        <div>
          <h2>Get started in minutes.</h2>
          <p>Join our Discord to create and deploy your project quickly.</p>
        </div>
        <a className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_0_var(--c-accent)] after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100" data-cta href="https://discord.consolex1.com">
          Join Discord
        </a>
      </section>
    </>
  );
}