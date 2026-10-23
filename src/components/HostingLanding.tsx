import Link from 'next/link';
import type { HostingPageContent, Locale } from '@/lib/hosting-pages';
import { hostingResources } from '@/lib/hosting-pages';

type HostingLandingProps = {
  content: HostingPageContent;
  locale: Locale;
};

export default function HostingLanding({ content, locale }: HostingLandingProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c') }}
      />
      <section className="section intro">
        <div className="section-header">
          <span className="badge">{content.badge}</span>
          <h1>{content.heading}</h1>
          <p className="section-description">{content.shortAnswer}</p>
        </div>
      </section>

      {content.sections.map((section) => (
        <section className="section" key={section.heading}>
          <div className="section-header">
            <h2>{section.heading}</h2>
            <p className="section-description">{section.body}</p>
          </div>
        </section>
      ))}

      <section className="section faq-section">
        <div className="section-header">
          <h2>{locale === 'en' ? 'Frequently asked questions' : 'Questions fréquentes'}</h2>
        </div>
        <div className="faq-grid">
          {content.faqs.map((faq) => (
            <article className="faq-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>{locale === 'en' ? 'Hosting pages and practical guides' : 'Hébergement et guides pratiques'}</h2>
        </div>
        <div className="cards-grid">
          {hostingResources[locale].map((resource) => (
            <Link className="card" href={resource.href} key={resource.href} style={{ textDecoration: 'none' }}>
              <h3>{resource.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
