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
    <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
        <h1>Pricing</h1>
        <p>Simple, transparent options for testing, development, and production. Paid plans are displayed for future availability. They are currently not available for purchase.</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
        {plans.map((plan) => (
          <PlanCard key={plan.title} {...plan} locale="en" />
        ))}
      </div>
    </section>
  );
}