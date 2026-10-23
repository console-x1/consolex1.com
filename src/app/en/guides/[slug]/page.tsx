import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuideArticle from '@/components/GuideArticle';
import { getGuide, getGuides, getGuideTranslation } from '@/lib/guides';

export const dynamicParams = false;

export function generateStaticParams() {
  return getGuides('en').map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuide('en', params.slug);
  const translation = getGuideTranslation('en', params.slug);
  if (!guide || !translation) return {};
  const canonical = `https://consolex1.com/en/guides/${guide.slug}`;
  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical,
      languages: {
        en: canonical,
        fr: `https://consolex1.com/guides/${translation.slug}`,
        'x-default': canonical,
      },
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: canonical,
      siteName: 'consolex1',
      type: 'article',
      locale: 'en_US',
      images: [{ url: '/avatar.png', width: 1200, height: 630, alt: guide.title }],
    },
    twitter: { card: 'summary_large_image', title: guide.title, description: guide.description, images: ['/avatar.png'] },
    robots: { index: true, follow: true },
  };
}

export default function EnglishGuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuide('en', params.slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} locale="en" />;
}
