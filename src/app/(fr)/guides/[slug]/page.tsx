import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuideArticle from '@/components/GuideArticle';
import { getGuide, getGuides, getGuideTranslation } from '@/lib/guides';

export const dynamicParams = false;

export function generateStaticParams() {
  return getGuides('fr').map(({ slug }) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const guide = getGuide('fr', slug);
  const translation = getGuideTranslation('fr', slug);
  if (!guide || !translation) return {};

  const canonical = `https://consolex1.com/guides/${guide.slug}`;
  const englishUrl = `https://consolex1.com/en/guides/${translation.slug}`;
  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical,
      languages: {
        fr: canonical,
        en: englishUrl,
        'x-default': englishUrl,
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

export default async function FrenchGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide('fr', slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} locale="fr" />;
}