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
    <section className="my-[clamp(3rem,7vw,5rem)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
        <h2>{english ? 'Frequently asked questions' : 'Questions fréquentes'}</h2>
      </div>
      <div className="grid max-w-208 gap-2">
        {faqs.map((faq) => (
          <article className="relative overflow-hidden rounded-xl border border-line bg-panel px-5 py-4 transition-colors duration-200 hover:border-line-strong sm:px-6 in-[.js]:p-0 [&>h3]:mb-2 [&>h3]:text-base [&>h3]:font-semibold [&>p]:m-0 [&>p]:text-[.95rem] [&>p]:leading-[1.65] [&>p]:text-soft [.js_&>h3]:flex [.js_&>h3]:min-h-13 [.js_&>h3]:items-center [.js_&>h3]:justify-between [.js_&>h3]:gap-4 [.js_&>h3]:m-0 [.js_&>h3]:px-5 [.js_&>h3]:py-3 [.js_&>h3]:cursor-pointer [.js_&>h3]:select-none [.js_&>h3]:after:content-['+'] [.js_&>h3]:after:shrink-0 [.js_&>h3]:after:font-mono [.js_&>h3]:after:text-[1.4rem] [.js_&>h3]:after:leading-none [.js_&>h3]:after:text-mute [.js_&>h3]:after:transition-[rotate,color] [.js_&>h3]:after:duration-200 [.js_&>h3]:hover:after:text-ink [.js_&>h3]:sm:px-6 [.js_&[data-open]>h3]:after:rotate-45 [.js_&[data-open]>h3]:after:text-accent [.js_&>p]:max-h-0 [.js_&>p]:overflow-hidden [.js_&>p]:opacity-0 [.js_&>p]:invisible [.js_&>p]:px-5 [.js_&>p]:py-0 [.js_&>p]:[transition-property:max-height,opacity,padding-bottom,visibility] [.js_&>p]:duration-[.35s,.25s,.35s,0s] [.js_&>p]:delay-[0s,0s,0s,.35s] [.js_&>p]:sm:px-6 [.js_&[data-open]>p]:opacity-100 [.js_&[data-open]>p]:visible [.js_&[data-open]>p]:pb-5 [.js_&[data-open]>p]:delay-[0s]" data-reveal data-faq key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}