export const metadata = {
  title: 'FAQ',
  description: 'Answers to common questions about Consolex1 hosting, server location, and limitations.',
  keywords: ['FAQ', 'consolex1 help', 'hosting questions', 'discord bot', 'pterodactyl', 'French hosting'],
  openGraph: {
    title: 'Consolex1 FAQ',
    description: 'Answers to common questions about Consolex1 hosting, server location, and limitations.',
    url: 'https://consolex1.com/en/faq',
    images: ['/consolex1-host.png'],
  },
};

const faqs = [
  {
    question: 'Does the Free Plan require payment details?',
    answer: 'No — the Free plan starts without payment and is designed for testing and small experiments.',
  },
  {
    question: 'Which technologies are supported?',
    answer: 'Node.js, Python, nginx, Java, Golang, C# and Rust are supported through Pterodactyl.',
  },
  {
    question: 'Where is the server located?',
    answer: 'The server is hosted in France at the Equinix PA5 datacenter in Paris.',
  },
  {
    question: 'How do I manage my instance from Discord?',
    answer: 'Currently, all account creation and server setup is triggered through our Discord bot.',
  },
  {
    question: 'Can I get a database?',
    answer: 'Yes, paid plans include one or more databases.',
  },
];

export default function EnFAQPage() {
  return (
    <section className="section faq-overview">
      <div className="section-header">
        <h1>FAQ</h1>
        <p>Clear answers to help you understand the offering, available services, and limits.</p>
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
