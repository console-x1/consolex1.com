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
    price: '1.39 €/month',
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
    price: '2.99 €/month',
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
    price: '4.49 €/month',
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
  title: 'Pricing',
  description: 'Compare Consolex1 plans and choose the package for your project.',
  openGraph: {
    title: 'Consolex1 pricing',
    description: 'Compare Consolex1 plans and choose the package for your project.',
    url: 'https://consolex1.com/en/pricing',
    images: ['/consolex1-host.png'],
  },
};

export default function EnTarifPage() {
  return (
    <section className="section">
      <div className="section-header">
        <h1>Pricing</h1>
        <p>Simple, transparent options for testing, development, and production.</p>
      </div>
      <div className="plans-grid">
        {plans.map((plan) => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </div>
    </section>
  );
}
