import Link from 'next/link';
import HostingFaqs from '@/components/HostingFaqs';

export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/hebergement-bot-discord-nodejs',
    languages: {
      fr: 'https://consolex1.com/hebergement-bot-discord-nodejs',
      en: 'https://consolex1.com/en/discord-bot-nodejs-hosting',
    },
  },
  title: 'Hébergement Bot Discord Node.js en France | consolex1',
  description:
    'Découvrez le meilleur hébergement bot Discord Node.js en France avec consolex1, Pterodactyl, stabilité et simplicité.',
  keywords: [
    'hébergement bot discord nodejs',
    'bot discord node.js france',
    'hébergement discord node.js',
    'node.js bot discord',
    'consolex1',
  ],
};

const sections = [
  {
    title: 'Pourquoi Node.js pour un bot Discord ?',
    description:
      'Node.js est particulièrement adapté aux applications réactives, aux websockets et aux services qui doivent réagir en temps réel.',
  },
  {
    title: 'Quelle configuration choisir ?',
    description:
      'Selon le nombre de guildes, de commandes et de tâches lourdes, il faut souvent commencer avec un plan de base puis évoluer.',
  },
  {
    title: 'Ce que consolex1 apporte',
    description:
      'Un hébergement basé en France avec accès au panel Pterodactyl, au SFTP et à la console pour déployer ses bots plus facilement.',
  },
];

export default function HebergementBotDiscordNodejsPage() {
  return (
    <>
      <section className="my-[clamp(3.5rem,8vw,5.5rem)] mt-10! [.hero~main_&]:mt-4! [&_[data-reveal=header]]:animate-rise [.hero~main_&_h1]:text-[clamp(1.4rem,2.6vw,2rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
        <div className="mb-9 max-w-[720px] [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-[46rem] [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft [&_[data-btn]]:mt-2" data-reveal="header">
          <span className="mb-[1.1rem] inline-flex items-center rounded-full border border-white/8 bg-white/[.028] px-3 py-[.28rem] text-[.78rem] font-medium tracking-[.01em] text-soft">Node.js • Discord</span>
          <h1>Hébergement bot Discord Node.js en France</h1>
          <p className="mt-4 mb-0 max-w-[46rem] text-[1.04rem] leading-[1.75] text-soft">
            Si vous voulez déployer un bot Discord en Node.js avec une base fiable et un environnement simple, consolex1 peut être une option intéressante.
          </p>
        </div>
      </section>

      <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {sections.map((item) => (
            <article key={item.title} className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-[400ms] ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-[3px] hover:border-white/16 hover:bg-white/[.055] hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <HostingFaqs locale="fr" subject="un bot Discord écrit en Node.js" />

      <section className="relative isolate overflow-hidden rounded-[20px] border border-white/8  transition-[border-color,background-color,translate,box-shadow] duration-[400ms] ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 mt-[clamp(3.5rem,8vw,5.5rem)] flex flex-wrap items-center justify-between gap-6 border-white/16 p-[clamp(1.75rem,4vw,2.75rem)] bg-[radial-gradient(600px_240px_at_100%_0%,rgba(77,163,255,.16),transparent_70%),radial-gradient(500px_220px_at_0%_100%,rgba(255,154,60,.09),transparent_70%),rgba(255,255,255,.028)] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-[.6rem] [&_p]:mb-0 [&_p]:max-w-[34rem] [&_p]:text-soft" data-reveal data-spot>
        <div>
          <h2>Tester ou lancer un bot Node.js ?</h2>
          <p>Commencez sur un plan adapté, puis adaptez les ressources selon la charge réelle de votre bot.</p>
        </div>
        <Link className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-[var(--bx,0px)] translate-y-[var(--by,0px)] transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-[250ms] ease-soft active:scale-[.97] px-[1.4rem] py-[.8rem] text-[.95rem] bg-[linear-gradient(100deg,#4da3ff,#5eead4)] text-[#04101c] shadow-[0_10px_30px_-10px_rgba(77,163,255,.7)] hover:shadow-[0_16px_44px_-8px_rgba(77,163,255,.85)] after:absolute after:inset-0 after:-translate-x-[120%] after:transition-transform after:duration-700 after:ease-soft after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,.5)_50%,transparent_70%)] hover:after:translate-x-[120%]" data-btn href="/tarif">
          Choisir un plan
        </Link>
      </section>
    </>
  );
}