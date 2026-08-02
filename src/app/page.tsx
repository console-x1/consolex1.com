import Section from '@/components/Section';
import PlanCard from '@/components/PlanCard';

const features = [
  {
    title: 'Hébergement local en France',
    description:
      'Un serveur unique hébergé à Paris sur Equinix PA5, conçu pour de faibles latences et une expérience locale.',
  },
  {
    title: 'Panneau Pterodactyl accessible',
    description:
      'Administration simple via Pterodactyl : SFTP, console en direct, gestion des fichiers et redémarrage en un clic.',
  },
  {
    title: 'HTTPS automatique',
    description: 'Un sous-domaine sécurisé est configuré automatiquement pour chaque application.',
  },
];

const plans = [
  {
    title: 'Free Plan',
    price: '0 €/mois',
    description: 'Hébergement sans frais pour les projets de démarrage, petits sites et bots de test.',
    accent: 'green' as const,
    features: [
      'CPU : 40%',
      'RAM : 256 Mo',
      'Swap : 128 Mo',
      'Stockage : 512 Mo',
      'Bases de données : 0',
      'Block IO Weight : 150',
    ],
  },
  {
    title: 'Basic Plan',
    price: '1,39 €/mois',
    description: 'Une première offre stable avec base de données et plus de mémoire.',
    accent: 'blue' as const,
    features: [
      'CPU : 60%',
      'RAM : 512 Mo',
      'Swap : 256 Mo',
      'Stockage : 1 Go',
      'Bases de données : 1',
      'Block IO Weight : 250',
    ],
  },
  {
    title: 'Pro Plan',
    price: '2,99 €/mois',
    description: 'Pour les services actifs, bots Discord et petites APIs à forte utilisation.',
    accent: 'yellow' as const,
    features: [
      'CPU : 80%',
      'RAM : 1 Go',
      'Swap : 512 Mo',
      'Stockage : 2 Go',
      'Bases de données : 2',
      'Block IO Weight : 400',
    ],
  },
  {
    title: 'Premium Plan',
    price: '4,49 €/mois',
    description: 'Ressources maximales pour des projets intensifs et un trafic plus élevé.',
    accent: 'orange' as const,
    features: [
      'CPU : 100%',
      'RAM : 1,5 Go',
      'Swap : 512 Mo',
      'Stockage : 3 Go',
      'Bases de données : 3',
      'Block IO Weight : 500',
    ],
  },
];

const faqs = [
  {
    question: 'Est-ce que l’hébergement est vraiment gratuit ?',
    answer:
      'Oui. Le Free Plan est gratuit et sans carte bancaire, idéal pour tester un bot, une API ou un petit site.',
  },
  {
    question: 'Quels services puis-je déployer ?',
    answer:
      'Vous pouvez déployer Node.js, Python, Discord bots, sites web statiques et applications compatibles Pterodactyl.',
  },
  {
    question: 'Puis-je gérer mon serveur via Discord ?',
    answer:
      'Oui, la configuration et la gestion se font depuis le bot Discord pour plus de rapidité et de simplicité.',
  },
  {
    question: 'Où est situé le serveur ?',
    answer:
      'Le service repose sur un serveur unique hébergé en France, dans le datacenter Equinix PA5 à Paris.',
  },
];

export default function Home() {
  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">Equinix PA5, Paris</span>
          <h1>Hébergement français pour Node.js, Python, Discord et sites web.</h1>
          <p className="section-description">
            Consolex1 propose un hébergement accessible sur un serveur en France, avec HTTPS automatique et administration Pterodactyl.
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
          <p>Quatre plans clairs pour tester, lancer et faire évoluer votre application.</p>
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
          <p>Informations essentielles pour choisir le bon plan et démarrer rapidement.</p>
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
          <h2>Lancez votre projet en quelques minutes.</h2>
          <p>Rejoignez Discord et hébergez votre application sur consolex1 avec un serveur français.</p>
        </div>
        <a className="button button-primary" href="https://discord.consolex1.com">
          Ouvrir Discord
        </a>
      </section>
    </>
  );
}
