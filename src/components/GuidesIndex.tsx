import Link from 'next/link';
import { getGuides } from '@/lib/guides';
import type { Locale } from '@/lib/hosting-pages';
import { hostingResources } from '@/lib/hosting-pages';

export default function GuidesIndex({ locale }: { locale: Locale }) {
  const guides = getGuides(locale);
  const english = locale === 'en';

  return (
    <>
      <section className="section intro">
        <div className="section-header">
          <span className="badge">{english ? 'Technical guides' : 'Guides techniques'}</span>
          <h1>{english ? 'Hosting and deployment guides' : 'Guides d’hébergement et de déploiement'}</h1>
          <p className="section-description">
            {english
              ? 'Practical, step-by-step instructions for hosting Discord bots and deploying Node.js and Python projects.'
              : 'Des étapes concrètes pour héberger des bots Discord et déployer des projets Node.js et Python.'}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="cards-grid">
          {guides.map((guide) => (
            <Link
              className="card"
              href={`${english ? '/en' : ''}/guides/${guide.slug}`}
              key={guide.slug}
              style={{ textDecoration: 'none' }}
            >
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-header">
          <h2>{english ? 'Related hosting pages' : 'Pages d’hébergement associées'}</h2>
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
