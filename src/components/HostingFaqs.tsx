import type { Locale } from '@/lib/hosting-pages';

export default function HostingFaqs({
  locale,
  subject,
}: {
  locale: Locale;
  subject: string;
}) {
  const english = locale === 'en';
  const faqs = english
    ? [
        {
          question: `Can I host ${subject} for free?`,
          answer:
            'Yes, small projects can start on the €0 plan without a credit card if they fit the available resources.',
        },
        {
          question: 'What does the free plan include?',
          answer:
            'The published allocation is 256 MB RAM and 512 MB storage. It does not include a database or automated backups.',
        },
        {
          question: 'Where is consolex1 hosted?',
          answer: 'The infrastructure is in Paris, France, at the Equinix PA5 datacenter.',
        },
        {
          question: 'How do I manage my instance?',
          answer:
            'Instance setup is handled through the consolex1 Discord onboarding flow. Use the Pterodactyl panel for files, SFTP and the live console.',
        },
      ]
    : [
        {
          question: `Puis-je héberger ${subject} gratuitement ?`,
          answer:
            'Oui, un petit projet peut démarrer sur l’offre à 0 €, sans carte bancaire, s’il respecte les ressources disponibles.',
        },
        {
          question: 'Que comprend le plan gratuit ?',
          answer:
            'L’allocation publiée est de 256 Mo de RAM et 512 Mo de stockage. Elle n’inclut ni base de données ni sauvegardes automatiques.',
        },
        {
          question: 'Où se trouve l’infrastructure consolex1 ?',
          answer: 'L’infrastructure se trouve à Paris, en France, dans le datacenter Equinix PA5.',
        },
        {
          question: 'Comment gérer mon instance ?',
          answer:
            'La création passe par le parcours Discord de consolex1. Utilisez le panel Pterodactyl pour les fichiers, SFTP et la console en direct.',
        },
      ];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <section className="section faq-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <div className="section-header">
        <h2>{english ? 'Frequently asked questions' : 'Questions fréquentes'}</h2>
      </div>
      <div className="faq-grid">
        {faqs.map((faq) => (
          <article className="faq-card" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
