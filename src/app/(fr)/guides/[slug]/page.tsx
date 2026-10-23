import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuideArticle from '@/components/GuideArticle';
import { getGuide, getGuides, getGuideTranslation } from '@/lib/guides';

export const dynamicParams = false;

export function generateStaticParams() {
  return getGuides('fr').map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuide('fr', params.slug);
  const translation = getGuideTranslation('fr', params.slug);
  if (!guide || !translation) return {};
  const canonical = `https://consolex1.com/guides/${guide.slug}`;
  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical,
      languages: {
        fr: canonical,
        en: `https://consolex1.com/en/guides/${translation.slug}`,
        'x-default': `https://consolex1.com/en/guides/${translation.slug}`,
      },
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: canonical,
      siteName: 'consolex1',
      type: 'article',
      locale: 'fr_FR',
      images: [{ url: '/avatar.png', width: 1200, height: 630, alt: guide.title }],
    },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.description, images: ['/avatar.png'] },
    robots: { index: true, follow: true },
  };
}

export default function FrenchGuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuide('fr', params.slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} locale="fr" />;
}
