import type { Metadata } from 'next';
import AboutPage from '@/components/AboutPage';

export const metadata: Metadata = {
  title: 'About consolex1 | Why we built free hosting in France',
  description:
    'Learn why consolex1 exists, how its independent project is built, and about its free hosting infrastructure in Paris at Equinix PA5.',
  alternates: {
    canonical: 'https://consolex1.com/en/about',
    languages: {
      en: 'https://consolex1.com/en/about',
      fr: 'https://consolex1.com/a-propos',
      'x-default': 'https://consolex1.com/en/about',
    },
  },
  openGraph: {
    title: 'About consolex1',
    description:
      'The story, philosophy and Paris infrastructure behind consolex1, an independent French hosting project.',
    url: 'https://consolex1.com/en/about',
    siteName: 'consolex1',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export default function EnglishAboutPage() {
  return <AboutPage locale="en" />;
}
