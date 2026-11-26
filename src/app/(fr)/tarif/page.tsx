import type { Metadata } from 'next';
import { withSocial } from '@/lib/social';
import PlanAdvisor from '@/components/PlanAdvisor';
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

export const metadata: Metadata = withSocial('/tarif', {
  alternates: {
    canonical: 'https://consolex1.com/tarif',
    languages: {
      fr: 'https://consolex1.com/tarif',
      en: 'https://consolex1.com/en/pricing',
    },
  },
  title: 'Tarifs',
  description: "Comparez les offres consolex1 et choisissez celle qui convient à votre projet.",
} as Metadata);

export default function TarifPage() {
  return (
    <>
      <section id="plans" className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
          <h1>Nos tarifs</h1>
          <p>Options simples et transparentes pour tester, développer et mettre en production. Les offres payantes sont affichées en vue de leur disponibilité future et ne sont actuellement pas disponibles à l’achat.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-3 sm:gap-4">
          {plans.map((plan) => (
            <PlanCard key={plan.title} {...plan} locale="fr" />
          ))}
        </div>
      </section>

      <PlanAdvisor locale="fr" />
    </>
  );
}