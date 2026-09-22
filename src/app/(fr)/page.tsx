import Link from 'next/link';
import Section from '@/components/Section';
import PlanCard from '@/components/PlanCard';

export const metadata = {
  title: 'consolex1 | Hébergement français pour bots Discord, Node.js et Python',
  description: 'consolex1 propose un hébergement français pour bots Discord, APIs, sites web et applications Node.js/Python, avec infrastructure en France et panel Pterodactyl.',
  keywords: [
    'hébergement français',
    'hébergeur français',
    'hébergement bot discord',
    'hébergement node.js',
    'hébergement python',
    'hébergement discord',
    'pterodactyl',
    'hébergement gratuit',
    'cloud france',
    'serveur france',
    'bot discord france',
    'api node.js'
  ],
  openGraph: {
    title: 'consolex1 — Hébergement français pour bots et applications',
    description: 'consolex1 propose un hébergement français pour bots Discord, sites web et applications Python.',
    url: 'https://consolex1.com',
    siteName: 'consolex1',
    images: ['/avatar.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'consolex1 — Hébergement français',
    description: 'consolex1 propose un hébergement français pour bots Discord, sites web et applications Python.',
    images: ['/avatar.png'],
  },
};

const features = [
  {
    title: 'Serveur basé en France',
    description:
      "Hébergé à Paris pour réduire la latence pour toute l'Europe, avec un datacenter Equinix PA5 et un réseau haut débit.",
  },
  {
    title: 'Panneau Pterodactyl accessible',
    description:
      "Interface claire pour gérer vos services : accès SFTP, console en temps réel et redémarrage en quelques clics.",
  }
];

const plans = [
  {
    title: 'Free Plan',
    price: '0 €/mois',
    description: 'Idéal pour expérimenter : bots de test, mini-sites et prototypes.',
    accent: 'green' as const,
    features: [
      'CPU : 40%',
      'RAM : 256 Mo',
      'Swap : 128 Mo',
      'Stockage : 512 Mo',
      'Bases de données : non incluses',
      'I/O : faible priorité',
    ],
  },
  {
    title: 'Basic Plan',
    price: '1,49 €/mois',
    description: "Offre d'entrée pour des projets légers avec base de données et plus de mémoire.",
    accent: 'blue' as const,
    features: [
      'CPU : 60%',
      'RAM : 512 Mo',
      'Swap : 256 Mo',
      'Stockage : 1 Go',
      'Bases de données : 1',
      'I/O : usage standard',
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
      'I/O : priorité moyenne',
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
      'I/O : priorité élevée',
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
    answer: 'J’ai créé ce service parce que, quand j’étais plus jeune, j’avais aussi besoin d’un free host pour apprendre et tester. Aujourd’hui, je veux pouvoir aider les autres de la même manière, tandis que les plans payants servent uniquement à financer la machine.'
  },
  {
    question: 'Quelles technologies sont supportées ?',
    answer:
      'Les technologies Node.js, Python, Java, Golang, Rust et nginx sont supportés.',
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
    question: 'Combien de backups sont disponibles ?',
    answer: 'Les plans payants incluent deux backups, tandis que le plan gratuit ne propose pas de backups intégrés.',
  },
  {
    question: 'Mon serveur peut-il être suspendu pour inactivité ?',
    answer: 'Seul les serveurs gratuit nessecitent une modification de fichier tout les 7 jours pour éviter la suspension. Les plans payants ne sont pas soumis à cette restriction.',
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
    answer: 'Contrairement à un VPS, vous n\'avez pas besoin de gérer l\'infrastructure. Heberger vos projets devient plus simple et rapide, avec un panneau intuitif et des ressources adaptées à vos besoins.',
  }
];

const relatedPages = [
  {
    title: 'Hébergement bot Discord',
    description: 'Tout ce qu’il faut savoir pour lancer un bot Discord en France.',
    href: '/hebergement-bot-discord',
  },
  {
    title: 'Hébergement Node.js',
    description: 'Idéal pour les APIs, les services web et les projets performants.',
    href: '/hebergement-nodejs',
  },
  {
    title: 'Hébergement Python',
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
];

export default function Home() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Paris — Equinix PA5</span>
          <h2>Hébergement français pour Node.js, Python, Discord et sites web.</h2>
          <p className="section-description">
            consolex1 fournit un accès direct à un serveur français, avec déploiement simplifié et panneau d'administration via Pterodactyl.
          </p>
        </div>
      </section>

      <section className="section cards-grid">
        {features.map((feature) => (
          <Section key={feature.title} title={feature.title} description={feature.description} />
        ))}
      </section>

      <section className="section plans-section" id="plans">
        <div className="section-header">
          <h2>Nos offres</h2>
          <p>Des options adaptées aux tests, au développement et même à la production.</p>
        </div>
        <div className="plans-grid">
          {plans.map((plan) => (
            <PlanCard key={plan.title} {...plan} />
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-header">
          <h2>FAQ</h2>
          <p>Réponses pratiques pour démarrer et comprendre les limites de l’offre.</p>
        </div>
        <div className="faq-grid">
          {faqs.map((item) => (
            <article key={item.question} className="faq-card">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Cas d’usage populaires</h2>
          <p>Des pages dédiées pour mieux répondre aux recherches les plus fréquentes.</p>
        </div>
        <div className="cards-grid">
          {relatedPages.map((page) => (
            <Link key={page.href} href={page.href} className="card" style={{ textDecoration: 'none' }}>
              <h2>{page.title}</h2>
              <p>{page.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <h2>Démarrez en quelques minutes.</h2>
          <p>Rejoignez notre Discord pour créer et déployer rapidement votre projet.</p>
        </div>
        <a className="button button-primary" href="https://discord.consolex1.com">
          Rejoindre Discord
        </a>
      </section>
    </>
  );
}
