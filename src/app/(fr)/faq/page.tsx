import Link from 'next/link';

export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/faq',
    languages: {
      fr: 'https://consolex1.com/faq',
      en: 'https://consolex1.com/en/faq',
    },
  },
  title: 'FAQ sur l’hébergement consolex1 | consolex1',
  description: "Réponses aux questions courantes sur l'offre, la localisation des serveurs et les limitations.",
  keywords: ['FAQ', 'consolex1 comment', 'consolex1 suspend', 'hébergement français', 'discord bot', 'pterodactyl', 'questions'],
  openGraph: {
    title: 'FAQ consolex1',
    description: "Réponses aux questions courantes sur l'offre, la localisation des serveurs et les limitations.",
    url: 'https://consolex1.com/faq',
    images: ['/avatar.png'],
  },
};

const faqs = [
  {
    question: 'Le service Gratuit demande-t-il une carte bancaire ?',
    answer: 'Non — le forfait Gratuit ne requiert aucune information de paiement pour démarrer.',
  },
  {
    question: 'Quelles technologies sont prises en charge ?',
    answer: 'Les environnements Node.js et Python, nginx, Java, Go et Rust sont pris en charge via Pterodactyl.',
  },
  {
    question: 'Où est situé le serveur ?',
    answer: 'Le serveur est hébergé en France, dans le datacenter Equinix PA5 à Paris.',
  },
  {
    question: 'Comment gérer mon instance depuis Discord ?',
    answer: 'Rejoignez le Discord consolex1, vérifiez votre compte dans le salon de vérification, puis lancez /account register et /server create dans le salon commandes. Les deux commandes doivent être utilisées dans ce salon commandes.',
  },
  {
    question: 'Puis-je obtenir une base de données ?',
    answer: 'Les offres payantes sont prévues pour inclure une ou plusieurs bases de données, mais elles ne sont pas encore disponibles à l’achat.',
  },
];

export default function FAQPage() {
  return (
    <section className="my-[clamp(3rem,7vw,5rem)]">
      <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
        <h1>Questions fréquentes</h1>
        <p>Réponses claires pour comprendre l’offre, les services disponibles et leurs limites.</p>
      </div>
      <div className="grid max-w-208 gap-2">
        {faqs.map((item) => (
          <article key={item.question} className="relative overflow-hidden rounded-xl border border-line bg-panel px-5 py-4 transition-colors duration-200 hover:border-line-strong sm:px-6 in-[.js]:p-0 [&>h3]:mb-2 [&>h3]:text-base [&>h3]:font-semibold [&>p]:m-0 [&>p]:text-[.95rem] [&>p]:leading-[1.65] [&>p]:text-soft [.js_&>h3]:flex [.js_&>h3]:min-h-13 [.js_&>h3]:items-center [.js_&>h3]:justify-between [.js_&>h3]:gap-4 [.js_&>h3]:m-0 [.js_&>h3]:px-5 [.js_&>h3]:py-3 [.js_&>h3]:cursor-pointer [.js_&>h3]:select-none [.js_&>h3]:after:content-['+'] [.js_&>h3]:after:shrink-0 [.js_&>h3]:after:font-mono [.js_&>h3]:after:text-[1.4rem] [.js_&>h3]:after:leading-none [.js_&>h3]:after:text-mute [.js_&>h3]:after:transition-[rotate,color] [.js_&>h3]:after:duration-200 [.js_&>h3]:hover:after:text-ink [.js_&>h3]:sm:px-6 [.js_&[data-open]>h3]:after:rotate-45 [.js_&[data-open]>h3]:after:text-accent [.js_&>p]:max-h-0 [.js_&>p]:overflow-hidden [.js_&>p]:opacity-0 [.js_&>p]:invisible [.js_&>p]:px-5 [.js_&>p]:py-0 [.js_&>p]:[transition-property:max-height,opacity,padding-bottom,visibility] [.js_&>p]:duration-[.35s,.25s,.35s,0s] [.js_&>p]:delay-[0s,0s,0s,.35s] [.js_&>p]:sm:px-6 [.js_&[data-open]>p]:opacity-100 [.js_&[data-open]>p]:visible [.js_&[data-open]>p]:pb-5 [.js_&[data-open]>p]:delay-[0s]" data-reveal data-faq>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
      <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header" style={{ marginTop: '2rem' }}>
        <Link className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[background-color,border-color,color,translate] duration-150 active:translate-y-px min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:brightness-110" data-cta href="/guides/creer-un-serveur-consolex1">
          Lire le guide de création du serveur étape par étape
        </Link>
      </div>
    </section>
  );
}