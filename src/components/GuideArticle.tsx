import Link from 'next/link';
import type { Guide } from '@/lib/guides';
import { getGuides } from '@/lib/guides';
import type { Locale } from '@/lib/hosting-pages';
import { hostingResources } from '@/lib/hosting-pages';

export default function GuideArticle({
  guide,
  locale,
}: {
  guide: Guide;
  locale: Locale;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    inLanguage: locale,
    author: { '@type': 'Organization', name: 'consolex1', url: 'https://consolex1.com' },
    publisher: { '@type': 'Organization', name: 'consolex1', url: 'https://consolex1.com' },
    mainEntityOfPage: `https://consolex1.com${locale === 'en' ? '/en' : ''}/guides/${guide.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <article>
        <section className="section intro">
          <div className="section-header">
            <span className="badge">{locale === 'en' ? 'Practical guide' : 'Guide pratique'}</span>
            <h1>{guide.title}</h1>
            <p className="section-description">{guide.lead}</p>
          </div>
        </section>
        {guide.sections.map((section) => (
          <section className="section" key={section.heading}>
            <div className="section-header">
              <h2>{section.heading}</h2>
              <p className="section-description">{section.body}</p>
            </div>
          </section>
        ))}
      </article>
      <section className="section faq-section">
        <div className="section-header">
          <h2>{locale === 'en' ? 'Frequently asked questions' : 'Questions fréquentes'}</h2>
        </div>
        <div className="faq-grid">
          {guide.faqs.map((faq) => (
            <article className="faq-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-header">
          <h2>{locale === 'en' ? 'More guides' : 'Autres guides'}</h2>
        </div>
        <div className="cards-grid">
          {getGuides(locale)
            .filter((item) => item.slug !== guide.slug)
            .map((item) => (
              <Link
                className="card"
                href={`${locale === 'en' ? '/en' : ''}/guides/${item.slug}`}
                key={item.slug}
                style={{ textDecoration: 'none' }}
              >
                <h3>{item.title}</h3>
              </Link>
            ))}
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
