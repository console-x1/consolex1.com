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
      'Poids d’E/S disque : 150',
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
      'Poids d’E/S disque : 250',
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
      'Poids d’E/S disque : 400',
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
      'Poids d’E/S disque : 500',
    ],
  },
];

export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/tarif',
    languages: {
      fr: 'https://consolex1.com/tarif',
      en: 'https://consolex1.com/en/pricing',
    },
  },
  title: 'Tarifs',
  description: "Comparez les offres consolex1 et choisissez celle qui convient à votre projet.",
};

export default function TarifPage() {
  return (
    <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
        <h1>Nos tarifs</h1>
        <p>Options simples et transparentes pour tester, développer et mettre en production. Les offres payantes sont affichées en vue de leur disponibilité future et ne sont actuellement pas disponibles à l’achat.</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
        {plans.map((plan) => (
          <PlanCard key={plan.title} {...plan} locale="fr" />
        ))}
      </div>
    </section>
  );
}