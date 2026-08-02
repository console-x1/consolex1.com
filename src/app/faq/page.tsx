export const metadata = {
  title: 'FAQ',
  description: 'Questions fréquentes sur l’hébergement consolex1, le serveur français et les plans disponibles.',
};

const faqs = [
  {
    question: 'Est-ce que l’hébergement est vraiment gratuit ?',
    answer:
      'Oui, le Free Plan est gratuit et sans carte bancaire. Il convient aux tests, petits sites et bots expérimentaux.',
  },
  {
    question: 'Quels services sont pris en charge ?',
    answer:
      'Node.js, Python, Discord bots, sites statiques et applications Python sur Pterodactyl sont tous supportés.',
  },
  {
    question: 'Où est situé le serveur ?',
    answer: 'Le serveur est hébergé en France, dans le datacenter Equinix PA5 à Paris.',
  },
  {
    question: 'Puis-je gérer mon serveur depuis Discord ?',
    answer:
      'Oui, la gestion de votre serveur se fait via le bot Discord pour un déploiement et un redémarrage rapides.',
  },
  {
    question: 'Puis-je utiliser une base de données ?',
    answer:
      'Oui, les plans Basic, Pro et Premium incluent des bases de données selon l’offre choisie.',
  },
];

export default function FAQPage() {
  return (
    <section className="section faq-overview">
      <div className="section-header">
        <h1>FAQ consolex1</h1>
        <p>Les réponses essentielles pour comprendre l’offre, le serveur et les limitations.</p>
      </div>
      <div className="faq-grid">
        {faqs.map((item) => (
          <article key={item.question} className="faq-card">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
