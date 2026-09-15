import PlanCard from '@/components/PlanCard';

const plans = [
  {
    title: 'Free',
    price: '0 €/mois',
    description: 'Parfait pour tester et expérimenter sans engagement.',
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
    title: 'Basic',
    price: '1,49 €/mois',
    description: "Entrée de gamme stable avec base de données et plus de capacité.",
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
    title: 'Pro',
    price: '2,49 €/mois',
    description: 'Conçu pour les services en ligne et les bots à usage régulier.',
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
    title: 'Premium',
    price: '3,49 €/mois',
    description: 'Ressources intensives pour des applications permanentes ou des services plus lourds.',
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

export const metadata = {
  title: 'Tarifs',
  description: "Comparez les offres consolex1 et choisissez celle qui convient à votre projet.",
};

export default function TarifPage() {
  return (
    <section className="section">
      <div className="section-header">
        <h1>Nos tarifs</h1>
        <p>Options simples et transparents pour tester, développer et mettre en production.</p>
      </div>
      <div className="plans-grid">
        {plans.map((plan) => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  );
}
