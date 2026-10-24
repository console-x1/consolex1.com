import Link from 'next/link';

export const metadata = {
    alternates: {
      canonical: 'https://consolex1.com/en/faq',
      languages: {
        fr: 'https://consolex1.com/faq',
        en: 'https://consolex1.com/en/faq',
      },
    },
  title: 'FAQ',
  description: 'Answers to common questions about consolex1 hosting, server location, and limitations.',
  keywords: ['FAQ', 'consolex1 help', 'hosting questions', 'discord bot', 'pterodactyl', 'French hosting'],
  openGraph: {
    title: 'consolex1 FAQ',
    description: 'Answers to common questions about consolex1 hosting, server location, and limitations.',
    url: 'https://consolex1.com/en/faq',
    images: ['/avatar.png'],
  },
};

const faqs = [
  {
    question: 'Does the Free Plan require payment details?',
    answer: 'No — the Free plan starts without payment and is designed for testing and small experiments.',
  },
  {
    question: 'Which technologies are supported?',
    answer: 'Node.js, Python, nginx, Java, Golang and Rust are supported through Pterodactyl.',
  },
  {
    question: 'Where is the server located?',
    answer: 'The server is hosted in France at the Equinix PA5 datacenter in Paris.',
  },
  {
    question: 'How do I manage my instance from Discord?',
    answer: 'Join the consolex1 Discord and verify your account in the verification channel. Then run /account register followed by /server create in the commands channel. Both commands must be used in that commands channel.',
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
      <div className="section-header" style={{ marginTop: '2rem' }}>
        <Link className="button button-primary" href="/en/guides/create-consolex1-server">
          Read the step-by-step server creation guide
        </Link>
      </div>
    </section>
  );
}
