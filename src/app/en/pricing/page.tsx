import PlanCard from '@/components/PlanCard';

const plans = [
  {
    title: 'Free',
    price: '0 €/month',
    description: 'Perfect for testing and experimenting without commitment.',
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
    description: 'Entry-level stable hosting with database support.',
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
    description: 'Built for online services and regular-usage bots.',
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
    description: 'Resources for production use and higher traffic.',
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

export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/en/pricing',
    languages: {
      fr: 'https://consolex1.com/tarif',
      en: 'https://consolex1.com/en/pricing',
    },
  },
  title: 'Pricing',
  description: 'Compare consolex1 plans and choose the package for your project.',
  openGraph: {
    title: 'consolex1 pricing',
    description: 'Compare consolex1 plans and choose the package for your project.',
    url: 'https://consolex1.com/en/pricing',
    images: ['/avatar.png'],
  },
};

export default function EnTarifPage() {
  return (
    <section className="my-[clamp(3rem,7vw,5rem)]">
      <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
        <h1>Pricing</h1>
        <p>Simple, transparent options for testing, development, and production. Paid plans are displayed for future availability. They are currently not available for purchase.</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,15rem),1fr))] gap-3 sm:gap-4">
        {plans.map((plan) => (
          <PlanCard key={plan.title} {...plan} locale="en" />
        ))}
      </div>
    </section>
  );
}