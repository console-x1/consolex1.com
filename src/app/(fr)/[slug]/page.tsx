import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HostingLanding from '@/components/HostingLanding';
import { getHostingPage, getHostingPages } from '@/lib/hosting-pages';

const baseUrl = 'https://consolex1.com';

export const dynamicParams = false;

export function generateStaticParams() {
  return getHostingPages('fr').map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = getHostingPage('fr', params.slug);
  if (!page) return {};

  const englishSlugs: Record<string, string> = {
    'hebergement-gratuit': 'free-hosting',
    'hebergement-gratuit-france': 'free-hosting-france',
    'hebergement-gratuit-sans-carte-bancaire': 'free-hosting-without-credit-card',
  };
  const englishPage = getHostingPage('en', englishSlugs[page.slug]);
  if (!englishPage) return {};

  const canonical = `${baseUrl}/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
      languages: {
        fr: canonical,
        en: `${baseUrl}/en/${englishPage.slug}`,
        'x-default': `${baseUrl}/en/${englishPage.slug}`,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      siteName: 'consolex1',
      type: 'website',
      locale: 'fr_FR',
      images: [{ url: '/avatar.png', width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: ['/avatar.png'],
    },
    robots: { index: true, follow: true },
  };
}

export default function FrenchHostingPage({ params }: { params: { slug: string } }) {
  const content = getHostingPage('fr', params.slug);
  if (!content) notFound();
  return <HostingLanding content={content} locale="fr" />;
}
