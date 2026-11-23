import type { Locale } from '@/lib/hosting-pages';

export default function HostingFaqs({ locale, subject, }: { locale: Locale; subject: string; }) {
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
    <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <div className="mb-9 max-w-[720px] [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-[46rem] [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft [&_[data-btn]]:mt-2" data-reveal="header">
        <h2>{english ? 'Frequently asked questions' : 'Questions fréquentes'}</h2>
      </div>
      <div className="grid max-w-[820px] gap-[.6rem]">
        {faqs.map((faq) => (
          <article className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-[400ms] ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 px-6 py-[1.2rem] [.js_&]:p-0 [&>h3]:mb-2 [&>h3]:text-[1.02rem] [&>h3]:tracking-[-.015em] [&>p]:m-0 [&>p]:text-[.96rem] [&>p]:text-soft [.js_&>h3]:flex [.js_&>h3]:items-center [.js_&>h3]:justify-between [.js_&>h3]:gap-4 [.js_&>h3]:m-0 [.js_&>h3]:px-6 [.js_&>h3]:py-[1.2rem] [.js_&>h3]:cursor-pointer [.js_&>h3]:select-none [.js_&>h3]:after:content-[''] [.js_&>h3]:after:shrink-0 [.js_&>h3]:after:size-[.55rem] [.js_&>h3]:after:border-mute [.js_&>h3]:after:border-r-2 [.js_&>h3]:after:border-b-2 [.js_&>h3]:after:rotate-45 [.js_&>h3]:after:-translate-x-0.5 [.js_&>h3]:after:-translate-y-0.5 [.js_&>h3]:after:transition-[rotate,border-color] [.js_&>h3]:after:duration-[400ms] [.js_&>h3]:after:ease-soft [.js_&>h3]:hover:after:border-white [.js_&[data-open]>h3]:after:rotate-[225deg] [.js_&[data-open]>h3]:after:border-brand [.js_&>p]:max-h-0 [.js_&>p]:overflow-hidden [.js_&>p]:opacity-0 [.js_&>p]:invisible [.js_&>p]:px-6 [.js_&>p]:py-0 [.js_&>p]:[transition-property:max-height,opacity,padding-bottom,visibility] [.js_&>p]:[transition-duration:.45s,.35s,.45s,0s] [.js_&>p]:[transition-delay:0s,0s,0s,.45s] [.js_&[data-open]>p]:opacity-100 [.js_&[data-open]>p]:visible [.js_&[data-open]>p]:pb-[1.3rem] [.js_&[data-open]>p]:[transition-delay:0s]" data-reveal data-spot data-faq key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}