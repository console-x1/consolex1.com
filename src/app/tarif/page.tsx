import PlanCard from '@/components/PlanCard';

const plans = [
  {
    title: 'Free Plan',
    price: '0 €/mois',
    description: 'Hébergement gratuit pour un petit projet, un bot ou un site de test.',
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
    description: 'Un premier plan abordable avec une base de données et plus de mémoire.',
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
    description: 'Pour bots, APIs et sites actifs avec plus de mémoire et de stockage.',
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
  description: 'Découvrez les plans consolex1 : Free, Basic, Pro et Premium pour héberger vos projets.',
};

export default function TarifPage() {
  return (
    <section className="section">
      <div className="section-header">
        <h1>Nos tarifs</h1>
        <p>Quatre offres claires pour lancer un projet, héberger un bot ou déployer une application.</p>
      </div>
      <div className="plans-grid">
        {plans.map((plan) => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  );
}
