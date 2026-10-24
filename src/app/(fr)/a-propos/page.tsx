import type { Metadata } from 'next';
import AboutPage from '@/components/AboutPage';

export const metadata: Metadata = {
  title: 'À propos de consolex1 | Pourquoi cet hébergement gratuit existe',
  description:
    'Découvrez l’histoire et la philosophie de consolex1, un projet indépendant d’hébergement français avec une infrastructure à Paris chez Equinix PA5.',
  alternates: {
    canonical: 'https://consolex1.com/a-propos',
    languages: {
      fr: 'https://consolex1.com/a-propos',
      en: 'https://consolex1.com/en/about',
      'x-default': 'https://consolex1.com/en/about',
    },
  },
  openGraph: {
    title: 'À propos de consolex1',
    description:
      'L’histoire, la philosophie et l’infrastructure parisienne du projet indépendant consolex1.',
    url: 'https://consolex1.com/a-propos',
    siteName: 'consolex1',
    type: 'website',
    locale: 'fr_FR',
    images: ['/avatar.png'],
  },
  robots: { index: true, follow: true },
};

export default function AboutPageFr() {
  return <AboutPage locale="fr" />;
}
