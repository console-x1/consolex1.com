import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HostingLanding from '@/components/HostingLanding';
import { getHostingPage, getHostingPages } from '@/lib/hosting-pages';

const baseUrl = 'https://consolex1.com';

export const dynamicParams = false;

export function generateStaticParams() {
  return getHostingPages('en').map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = getHostingPage('en', params.slug);
  if (!page) return {};

  const frenchPage = getHostingPages('fr').find((entry) => {
    const pairs: Record<string, string> = {
      'free-hosting': 'hebergement-gratuit',
      'free-hosting-france': 'hebergement-gratuit-france',
      'free-hosting-without-credit-card': 'hebergement-gratuit-sans-carte-bancaire',
    };
    return entry.slug === pairs[page.slug];
  });
  if (!frenchPage) return {};

  const canonical = `${baseUrl}/en/${page.slug}`;
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
      languages: {
        en: canonical,
        fr: `${baseUrl}/${frenchPage.slug}`,
        'x-default': canonical,
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      siteName: 'consolex1',
      type: 'website',
      locale: 'en_US',
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

export default function EnglishHostingPage({ params }: { params: { slug: string } }) {
  const content = getHostingPage('en', params.slug);
  if (!content) notFound();
  return <HostingLanding content={content} locale="en" />;
}
