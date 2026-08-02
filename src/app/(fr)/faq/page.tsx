export const metadata = {
  title: 'FAQ',
  description: "Réponses aux questions courantes sur l'offre, la localisation des serveurs et les limitations.",
  keywords: ['FAQ', 'consolex1 comment', 'consolex1 suspend', 'hébergement français', 'discord bot', 'pterodactyl', 'questions'],
  openGraph: {
    title: 'FAQ consolex1',
    description: "Réponses aux questions courantes sur l'offre, la localisation des serveurs et les limitations.",
    url: 'https://consolex1.com/faq',
    images: ['/consolex1-host.png'],
  },
};

const faqs = [
  {
    question: 'Le service Gratuit demande-t-il une carte bancaire ?',
    answer: 'Non — le forfait Gratuit ne requiert aucune information de paiement pour démarrer.',
  },
  {
    question: 'Quelles technologies sont prises en charge ?',
    answer: 'Les environnements Node.js et Python, nginx, Java, Golang, C# et Rust sont pris en charge via Pterodactyl.',
  },
  {
    question: 'Où est situé le serveur ?',
    answer: 'Le serveur est hébergé en France, dans le datacenter Equinix PA5 à Paris.',
  },
  {
    question: 'Comment gérer mon instance depuis Discord ?',
    answer: "Actuellement, toutes les actions (création de compte et création de serveur) doivent être déclenchées via notre bot Discord.",
  },
  {
    question: 'Puis-je obtenir une base de données ?',
    answer: 'Oui, ou presque. Seuls les offres payantes incluent une ou plusieurs bases de données.',
  },
];

export default function FAQPage() {
  return (
    <section className="section faq-overview">
      <div className="section-header">
        <h1>FAQ</h1>
        <p>Réponses claires pour comprendre l’offre, les services disponibles et leurs limites.</p>
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
