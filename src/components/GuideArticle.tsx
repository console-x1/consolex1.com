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
  const isServerCreationGuide =
    guide.slug === 'create-consolex1-server' || guide.slug === 'creer-un-serveur-consolex1';
  const eggRepository =
    guide.slug.includes('nodejs') || guide.slug.includes('discordjs')
      ? {
          name: 'Node.js Universal',
          url: 'https://github.com/console-x1/pterodactyl-node',
        }
      : guide.slug.includes('python') || guide.slug.includes('discord-py')
        ? {
            name: 'Python Universal',
            url: 'https://github.com/console-x1/pterodactyl-python',
          }
        : undefined;

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
        {isServerCreationGuide && (
          <section className="section">
            <div className="section-header">
              <h2>{locale === 'en' ? 'Open the right Discord channel' : 'Accéder au bon salon Discord'}</h2>
            </div>
            <div className="cards-grid">
              <a
                className="card"
                href="https://discord.com/channels/1533218460975370332/1533401219043692737"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'en' ? 'Open the verification channel' : 'Ouvrir le salon de vérification'}
              </a>
              <a
                className="card"
                href="https://discord.com/channels/1533218460975370332/1540032329559310446"
                target="_blank"
                rel="noopener noreferrer"
              >
                {locale === 'en' ? 'Open the commands channel' : 'Ouvrir le salon commandes'}
              </a>
            </div>
          </section>
        )}
        {eggRepository && (
          <section className="section">
            <div className="section-header">
              <h2>{locale === 'en' ? 'The consolex1 custom egg' : 'L’egg personnalisé consolex1'}</h2>
              <p className="section-description">
                {locale === 'en'
                  ? `The ${eggRepository.name} egg is developed by the consolex1 hosting provider. Its source code is public on GitHub.`
                  : `L’egg ${eggRepository.name} est développé par l’hébergeur consolex1. Son code source est public sur GitHub.`}
              </p>
            </div>
            <div className="cards-grid">
              <a className="card" href={eggRepository.url} target="_blank" rel="noopener noreferrer">
                {locale === 'en' ? `View ${eggRepository.name} on GitHub` : `Voir ${eggRepository.name} sur GitHub`}
              </a>
            </div>
          </section>
        )}
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
