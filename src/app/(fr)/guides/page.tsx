import type { Metadata } from 'next';
import GuidesIndex from '@/components/GuidesIndex';

export const metadata: Metadata = {
  title: 'Guides d’hébergement Discord, Node.js et Python',
  description:
    'Guides pratiques pour héberger gratuitement un bot Discord, déployer Node.js, Python, discord.js et discord.py.',
  alternates: {
    canonical: 'https://consolex1.com/guides',
    languages: {
      fr: 'https://consolex1.com/guides',
      en: 'https://consolex1.com/en/guides',
      'x-default': 'https://consolex1.com/en/guides',
    },
  },
  openGraph: {
    title: 'Guides d’hébergement et déploiement | consolex1',
    description: 'Des guides pratiques pour bots Discord, Node.js et Python.',
    url: 'https://consolex1.com/guides',
    siteName: 'consolex1',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/avatar.png', width: 1200, height: 630, alt: 'Guides consolex1' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guides d’hébergement | consolex1',
    images: ['/avatar.png'],
  },
  robots: { index: true, follow: true },
};

export default function FrenchGuidesPage() {
  return <GuidesIndex locale="fr" />;
}
