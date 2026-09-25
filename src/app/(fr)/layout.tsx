import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'consolex1 | Hébergement français pour bots Discord, Node.js, Python et services web',
    template: '%s | consolex1',
  },
  keywords: [
    'hébergement français',
    'hébergement bot discord',
    'hébergement discord',
    'hébergement node.js',
    'hébergement python',
    'hébergement site web france',
    'hébergeur français',
    'hosting france',
    'discord bot hosting',
    'node js hosting',
    'python hosting',
    'pterodactyl hosting',
    'serveur france',
    'consolex1',
  ],
  description:
    'consolex1 propose un hébergement français pour bots Discord, APIs, sites web, applications Node.js et Python, avec infrastructure locale en France et panneau Pterodactyl.',
  metadataBase: new URL('https://consolex1.com'),
  alternates: {
    canonical: 'https://consolex1.com',
    languages: {
      en: 'https://consolex1.com/en',
    },
  },
  icons: {
    icon: '/avatar.png',
    shortcut: '/avatar.png',
    apple: '/avatar.png',
  },
  openGraph: {
    title: 'consolex1 | Hébergement français pour bots Discord, Node.js et Python',
    description:
      'Hébergez vos bots Discord, APIs, sites web et applications Python en France avec consolex1 et un panel Pterodactyl.',
    url: 'https://consolex1.com',
    siteName: 'consolex1',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/avatar.png',
        width: 1200,
        height: 630,
        alt: 'consolex1 hébergement français',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'consolex1 — Hébergement français',
    description:
      'consolex1 propose un hébergement français accessible pour bots Discord, sites web, APIs et applications Python.',
    images: ['/avatar.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '08prDTjOnPv4gj_vo9ZDxHiQK85IzV99y_0F0FKYyLg',
    yandex: '0b146709cdde7ff3',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

const supportedLocales = ['fr', 'en'] as const;

type Locale = (typeof supportedLocales)[number];

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <Header locale="fr" />
      <main lang="fr">{children}</main>
      <Footer locale="fr" />
    </div>
  );
}
