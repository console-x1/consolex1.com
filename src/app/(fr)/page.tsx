import Link from 'next/link';
import Section from '@/components/Section';
import PlanCard from '@/components/PlanCard';

export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/',
    languages: {
      fr: 'https://consolex1.com/',
      en: 'https://consolex1.com/en',
    },
  },
  title: 'Hébergement gratuit en France : Node.js, Python et Discord | consolex1',
  description: 'consolex1 est un hébergeur français gratuit pour petits projets Node.js, services Python et bots Discord. Offre à 0 € sans carte bancaire, serveurs à Paris.',
  keywords: [
    'hébergement français',
    'hébergeur français',
    'hébergement bot discord',
    'hébergement discord',
    'hébergement node.js',
    'hébergement python',
    'hébergement site web france',
    'hosting france',
    'bot discord france',
    'discord bot hosting',
    'node js hosting',
    'python hosting',
    'pterodactyl hosting',
    'serveur france',
    'hébergement gratuit',
    'api node.js',
    'consolex1',
  ],
  openGraph: {
    title: 'Hébergement gratuit en France pour apps et bots | consolex1',
    description: 'Un hébergeur français gratuit pour Node.js, Python et bots Discord, avec offre à 0 € et serveurs à Paris.',
    url: 'https://consolex1.com',
    siteName: 'consolex1',
    images: ['/avatar.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hébergement gratuit en France | consolex1',
    description: 'Hébergement gratuit Node.js, Python et Discord en France, sans carte bancaire.',
    images: ['/avatar.png'],
  },
};

const features = [
  {
    title: 'Serveur basé en France',
    description:
      "Hébergé à Paris, en France, dans le datacenter Equinix PA5. Cette localisation peut réduire la distance réseau pour les utilisateurs proches ; la latence réelle dépend du routage.",
  },
  {
    title: 'Panneau Pterodactyl accessible',
    description:
      "Interface claire pour gérer vos services : accès SFTP, console en temps réel et redémarrage en quelques clics.",
  }
];

const plans = [
  {
    title: 'Free',
    price: '0 €/mois',
    description: 'Idéal pour expérimenter : bots de test, mini-sites et prototypes.',
    accent: 'green' as const,
    features: [
      'CPU : 40%',
      'RAM : 256 Mo',
      'Swap : 128 Mo',
      'Stockage : 512 Mo',
      'Bases de données : 0',
      'Poids d’E/S disque : 150',
    ],
  },
  {
    title: 'Basic',
    price: '1,49 €/mois',
    description: "Offre d'entrée pour des projets légers avec base de données et plus de mémoire.",
    accent: 'blue' as const,
    features: [
      'CPU : 60%',
      'RAM : 512 Mo',
      'Swap : 256 Mo',
      'Stockage : 1 Go',
      'Bases de données : 1',
      'Poids d’E/S disque : 250',
    ],
  },
  {
    title: 'Pro',
    price: '2,49 €/mois',
    description: 'Pour bots actifs, petites APIs et sites à trafic régulier.',
    accent: 'yellow' as const,
    features: [
      'CPU : 80%',
      'RAM : 1 Go',
      'Swap : 512 Mo',
      'Stockage : 2 Go',
      'Bases de données : 2',
      'Poids d’E/S disque : 400',
    ],
  },
  {
    title: 'Premium',
    price: '3,49 €/mois',
    description: 'Ressources renforcées pour services en production et trafic élevé.',
    accent: 'orange' as const,
    features: [
      'CPU : 100%',
      'RAM : 1,5 Go',
      'Swap : 512 Mo',
      'Stockage : 3 Go',
      'Bases de données : 3',
      'Poids d’E/S disque : 500',
    ],
  },
];

const faqs = [
  {
    question: 'Le plan Gratuit est-il vraiment sans frais ?',
    answer:
      "Oui — le forfait Gratuit ne demande pas de carte et convient pour des essais et petits projets.",
  },
  {
    question: 'Pourquoi faire un plan gratuit ?',
    answer: 'J’ai créé ce service parce que, quand j’étais plus jeune, j’avais aussi besoin d’un hébergeur gratuit pour apprendre et tester. Aujourd’hui, je veux pouvoir aider les autres de la même manière, tandis que les offres payantes sont prévues pour contribuer au financement de l’infrastructure.'
  },
  {
    question: 'Quelles technologies sont supportées ?',
    answer:
      'Les technologies Node.js, Python, Java, Go, Rust et nginx sont prises en charge.',
  },
  {
    question: 'La gestion via Discord est-elle possible ?',
    answer:
      'Oui, la création et la configuration se font depuis le bot Discord pour plus de rapidité et de simplicité.',
  },
  {
    question: 'Où sont hébergés les serveurs ?',
    answer:
      "Notre infrastructure est située en France (datacenter Equinix PA5), pour réduire la latence pour toute l'Europe.",
  },
  {
    question: 'Combien de sauvegardes sont prévues ?',
    answer: 'Les offres payantes prévoient deux sauvegardes, mais elles ne sont pas encore disponibles à l’achat. Le forfait gratuit ne propose pas de sauvegardes intégrées.',
  },
  {
    question: 'Mon serveur peut-il être suspendu pour inactivité ?',
    answer: 'Seuls les serveurs gratuits nécessitent une modification de fichier tous les 7 jours pour éviter leur suspension.',
  },
  {
    question: 'Mon serveur est suspendu, que faire ?',
    answer: 'Si votre serveur est suspendu, vous pouvez le réactiver avec la commande /unsuspend sur notre bot Discord. Si vous avez besoin d’aide, contactez-nous sur Discord.',
  },
  {
    question: 'Mon serveur sera-t-il supprimé si je ne le réactive pas ?',
    answer: 'Oui, les serveurs suspendus sont automatiquement supprimés après 7 jours de suspension. Assurez-vous de réactiver votre serveur à temps pour éviter toute perte de données.',
  },
  {
    question: 'Pourquoi consolex1 au lieu d\'un VPS ?',
    answer: 'Contrairement à un VPS, vous n\'avez pas besoin de gérer l\'infrastructure. Héberger vos projets devient plus simple et rapide, avec un panneau intuitif et des ressources adaptées à vos besoins.',
  }
];

const relatedPages = [
  {
    title: 'Hébergement gratuit de bot Discord',
    description: 'Hébergez gratuitement un petit bot Discord en France, dans les limites de ressources publiées.',
    href: '/hebergement-bot-discord',
  },
  {
    title: 'Hébergement gratuit Node.js',
    description: 'Idéal pour les APIs, les services web et les projets performants.',
    href: '/hebergement-nodejs',
  },
  {
    title: 'Hébergement gratuit Python',
    description: 'Pour les scripts, bots et applications Python simples à déployer.',
    href: '/hebergement-python',
  },
  {
    title: 'Hébergement Pterodactyl',
    description: 'Découvrez le panel utilisé pour gérer vos services rapidement.',
    href: '/hebergement-pterodactyl',
  },
  {
    title: 'Hébergement en France',
    description: 'Un point d’entrée utile pour les projets européens et francophones.',
    href: '/hebergement-france',
  },
  {
    title: 'Hébergement gratuit en France',
    description: 'Comprendre la localisation à Paris, Equinix PA5 et les limites de l’offre gratuite.',
    href: '/hebergement-gratuit-france',
  },
  {
    title: 'Hébergement sans carte bancaire',
    description: 'Démarrer sur le plan à 0 € sans saisir de coordonnées de carte.',
    href: '/hebergement-gratuit-sans-carte-bancaire',
  },
  {
    title: 'Hébergement gratuit',
    description: 'Consulter les runtimes pris en charge, les ressources et les questions fréquentes.',
    href: '/hebergement-gratuit',
  },
  {
    title: 'Guides de déploiement',
    description: 'Des étapes concrètes pour les bots Discord, les projets Node.js et Python.',
    href: '/guides',
  },
];

export default function Home() {
  return (
    <>
      <section className="my-[clamp(3.5rem,8vw,5.5rem)] mt-10! [.hero~main_&]:mt-4! **:data-[reveal=header]:animate-rise [.hero~main_&_h1]:text-[clamp(1.4rem,2.6vw,2rem)] [.hero~main_&_h1]:max-w-[34ch]" data-intro>
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
          <span className="mb-[1.1rem] inline-flex items-center rounded-full border border-white/8 bg-white/[.028] px-3 py-[.28rem] text-[.78rem] font-medium tracking-[.01em] text-soft">Paris — Equinix PA5</span>
          <h1>Hébergement gratuit en France pour Node.js, Python et bots Discord.</h1>
          <p className="mt-4 mb-0 max-w-184 text-[1.04rem] leading-[1.75] text-soft">
            consolex1 est un hébergeur français gratuit pour Node.js, Python, bots Discord et petites applications web. Son offre à 0 € ne demande pas de carte bancaire et comprend 256 Mo de RAM et 512 Mo de stockage ; les services tournent sur des serveurs à Paris chez Equinix PA5 et se gèrent avec le panel Pterodactyl.
          </p>
        </div>
      </section>

      <section className="my-[clamp(3.5rem,8vw,5.5rem)] grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {features.map((feature) => (
          <Section key={feature.title} title={feature.title} description={feature.description} />
        ))}
      </section>

      <section className="my-[clamp(3.5rem,8vw,5.5rem)]" id="plans">
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
          <h2>Nos offres</h2>
          <p>Découvrez les ressources de l’offre gratuite. Les offres payantes sont affichées en vue de leur disponibilité future. Elles ne sont actuellement pas disponibles à l’achat.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
          {plans.map((plan) => (
            <PlanCard key={plan.title} {...plan} locale="fr" />
          ))}
        </div>
      </section>

      <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
          <h2>FAQ</h2>
          <p>Réponses pratiques pour démarrer et comprendre les limites de l’offre.</p>
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
          <h2>Cas d’usage populaires</h2>
          <p>Des pages dédiées pour mieux répondre aux recherches les plus fréquentes.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          {relatedPages.map((page) => (
            <Link key={page.href} href={page.href} className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot style={{ textDecoration: 'none' }}>
              <h2>{page.title}</h2>
              <p>{page.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
          <h2>À propos de consolex1</h2>
          <p>
            Un projet français d’hébergement indépendant, conçu pour faciliter l’apprentissage, les tests et le lancement de petits projets.
            Découvrez son objectif, son infrastructure, les limites de l’offre gratuite et ses priorités.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
          <Link className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot href="/a-propos" style={{ textDecoration: 'none' }}>
            <h3>Pourquoi consolex1 existe</h3>
            <p>Découvrez le projet, son infrastructure à Paris, sa philosophie et sa communauté.</p>
          </Link>
          <Link className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 block p-6 text-soft no-underline hover:-translate-y-0.75 hover:border-white/16 hover:bg-white/5.5 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,.8)] [&_h2]:mb-[.55rem] [&_h2]:text-[1.05rem] [&_h2]:tracking-[-.015em] [&_h3]:mb-[.55rem] [&_h3]:text-[1.05rem] [&_h3]:tracking-[-.015em] [&_p]:m-0 [&_p]:text-[.94rem] [&_p]:text-mute [a&]:pr-12 [a&]:after:absolute [a&]:after:right-[1.4rem] [a&]:after:top-[1.4rem] [a&]:after:text-soft [a&]:after:opacity-35 [a&]:after:content-['→'] [a&]:after:transition-all [a&]:after:duration-300 [a&]:hover:after:translate-x-1 [a&]:hover:after:opacity-100 [a&]:hover:after:text-brand" data-reveal data-spot href="/guides" style={{ textDecoration: 'none' }}>
            <h3>Guides de déploiement</h3>
            <p>Consultez les guides pratiques pour bots Discord, Node.js et Python.</p>
          </Link>
        </div>
      </section>

      <section className="relative isolate overflow-hidden rounded-[20px] border border-white/8  transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 mt-[clamp(3.5rem,8vw,5.5rem)] flex flex-wrap items-center justify-between gap-6 p-[clamp(1.75rem,4vw,2.75rem)] bg-[radial-gradient(600px_240px_at_100%_0%,rgba(77,163,255,.16),transparent_70%),radial-gradient(500px_220px_at_0%_100%,rgba(255,154,60,.09),transparent_70%),rgba(255,255,255,.028)] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-[.6rem] [&_p]:mb-0 [&_p]:max-w-136 [&_p]:text-soft" data-reveal data-spot>
        <div>
          <h2>Démarrez en quelques minutes.</h2>
          <p>Rejoignez notre Discord pour créer et déployer rapidement votre projet.</p>
        </div>
        <a className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-(--bx,0px) translate-y-(--by,0px) transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-250 ease-soft active:scale-[.97] px-[1.4rem] py-[.8rem] text-[.95rem] bg-[linear-gradient(100deg,#4da3ff,#5eead4)] text-[#04101c] shadow-[0_10px_30px_-10px_rgba(77,163,255,.7)] hover:shadow-[0_16px_44px_-8px_rgba(77,163,255,.85)] after:absolute after:inset-0 after:translate-x-[-120%] after:transition-transform after:duration-700 after:ease-soft after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,.5)_50%,transparent_70%)] hover:after:translate-x-[120%]" data-btn href="https://discord.consolex1.com">
          Rejoindre Discord
        </a>
      </section>
    </>
  );
}