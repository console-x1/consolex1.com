import type { Metadata } from 'next';
import GuidesIndex from '@/components/GuidesIndex';

export const metadata: Metadata = {
  title: 'Free Hosting Guides for Discord, Node.js and Python',
  description:
    'Practical guides to free Discord bot hosting, Node.js deployment, Python bots, discord.js and discord.py.',
  alternates: {
    canonical: 'https://consolex1.com/en/guides',
    languages: {
      en: 'https://consolex1.com/en/guides',
      fr: 'https://consolex1.com/guides',
      'x-default': 'https://consolex1.com/en/guides',
    },
  },
  openGraph: {
    title: 'Hosting and deployment guides | consolex1',
    description: 'Practical guides for Discord bots, Node.js and Python hosting.',
    url: 'https://consolex1.com/en/guides',
    siteName: 'consolex1',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/avatar.png', width: 1200, height: 630, alt: 'consolex1 hosting guides' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hosting guides | consolex1',
    images: ['/avatar.png'],
  },
  robots: { index: true, follow: true },
};

export default function EnglishGuidesPage() {
  return <GuidesIndex locale="en" />;
}
