import Section from '@/components/Section';
import PlanCard from '@/components/PlanCard';

export const metadata = {
  title: 'Accueil',
  description: 'Consolex1 propose un hébergement français pour bots Discord, sites web et applications Python.',
  keywords: [
    'hébergement français',
    'discord bot',
    'node.js',
    'python',
    'pterodactyl',
    'hébergement gratuit',
    'hebergement',
    'heberg',
    'cloud',
    'serveur',
    'nodejs',
    'node',
    'py',
    'js'
  ],
  openGraph: {
    title: 'consolex1 — Hébergement français pour bots et applications',
    description: 'Consolex1 propose un hébergement français pour bots Discord, sites web et applications Python.',
    url: 'https://consolex1.com',
    siteName: 'consolex1',
    images: ['/consolex1-host.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'consolex1 — Hébergement français',
    description: 'Consolex1 propose un hébergement français pour bots Discord, sites web et applications Python.',
    images: ['/consolex1-host.png'],
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
    price: '1,39 €/mois',
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
    price: '2,99 €/mois',
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
    price: '4,49 €/mois',
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
    question: 'Quelles technologies sont supportées ?',
    answer:
      'Node.js, Python, Java, Golang, Rust et nginx sont supportés.',
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
  }
];

export default function Home() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Paris — Equinix PA5</span>
          <h1>Hébergement français pour Node.js, Python, Discord et sites web.</h1>
          <p className="section-description">
            Consolex1 fournit un accès direct à un serveur français, avec déploiement simplifié et panneau d'administration via Pterodactyl.
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
