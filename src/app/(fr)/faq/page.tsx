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
    <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="mb-9 max-w-[720px] [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-[46rem] [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft [&_[data-btn]]:mt-2" data-reveal="header">
        <h1>Questions fréquentes</h1>
        <p>Réponses claires pour comprendre l’offre, les services disponibles et leurs limites.</p>
      </div>
      <div className="grid max-w-[820px] gap-[.6rem]">
        {faqs.map((item) => (
          <article key={item.question} className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-[400ms] ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 px-6 py-[1.2rem] [.js_&]:p-0 [&>h3]:mb-2 [&>h3]:text-[1.02rem] [&>h3]:tracking-[-.015em] [&>p]:m-0 [&>p]:text-[.96rem] [&>p]:text-soft [.js_&>h3]:flex [.js_&>h3]:items-center [.js_&>h3]:justify-between [.js_&>h3]:gap-4 [.js_&>h3]:m-0 [.js_&>h3]:px-6 [.js_&>h3]:py-[1.2rem] [.js_&>h3]:cursor-pointer [.js_&>h3]:select-none [.js_&>h3]:after:content-[''] [.js_&>h3]:after:shrink-0 [.js_&>h3]:after:size-[.55rem] [.js_&>h3]:after:border-mute [.js_&>h3]:after:border-r-2 [.js_&>h3]:after:border-b-2 [.js_&>h3]:after:rotate-45 [.js_&>h3]:after:-translate-x-0.5 [.js_&>h3]:after:-translate-y-0.5 [.js_&>h3]:after:transition-[rotate,border-color] [.js_&>h3]:after:duration-[400ms] [.js_&>h3]:after:ease-soft [.js_&>h3]:hover:after:border-white [.js_&[data-open]>h3]:after:rotate-[225deg] [.js_&[data-open]>h3]:after:border-brand [.js_&>p]:max-h-0 [.js_&>p]:overflow-hidden [.js_&>p]:opacity-0 [.js_&>p]:invisible [.js_&>p]:px-6 [.js_&>p]:py-0 [.js_&>p]:[transition-property:max-height,opacity,padding-bottom,visibility] [.js_&>p]:[transition-duration:.45s,.35s,.45s,0s] [.js_&>p]:[transition-delay:0s,0s,0s,.45s] [.js_&[data-open]>p]:opacity-100 [.js_&[data-open]>p]:visible [.js_&[data-open]>p]:pb-[1.3rem] [.js_&[data-open]>p]:[transition-delay:0s]" data-reveal data-spot data-faq>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
      <div className="mb-9 max-w-[720px] [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-[46rem] [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft [&_[data-btn]]:mt-2" data-reveal="header" style={{ marginTop: '2rem' }}>
        <Link className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-[var(--bx,0px)] translate-y-[var(--by,0px)] transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-[250ms] ease-soft active:scale-[.97] px-[1.4rem] py-[.8rem] text-[.95rem] bg-[linear-gradient(100deg,#4da3ff,#5eead4)] text-[#04101c] shadow-[0_10px_30px_-10px_rgba(77,163,255,.7)] hover:shadow-[0_16px_44px_-8px_rgba(77,163,255,.85)] after:absolute after:inset-0 after:-translate-x-[120%] after:transition-transform after:duration-700 after:ease-soft after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,.5)_50%,transparent_70%)] hover:after:translate-x-[120%]" data-btn href="/guides/creer-un-serveur-consolex1">
          Lire le guide de création du serveur étape par étape
        </Link>
      </div>
    </section>
  );
}