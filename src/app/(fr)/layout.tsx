import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'consolex1 — Hébergement français pour bots, sites et applications',
    template: '%s | consolex1',
  },
  description:
    'Consolex1 propose un hébergement gratuit et bon marché en France pour sites web, APIs, Discord bots et applications Python.',
  metadataBase: new URL('https://consolex1.com'),
  alternates: {
    canonical: 'https://consolex1.com',
    languages: {
      fr: '/',
      en: '/en',
    },
  },
  icons: {
    icon: '/avatar.png',
    shortcut: '/avatar.png',
    apple: '/avatar.png',
  },
  openGraph: {
    title: 'consolex1 — Hébergement Node.js, Python et Discord',
    description:
      'Hébergez vos projets en France sur un serveur Equinix PA5 avec un panel Pterodactyl et support Discord.',
    url: 'https://consolex1.com',
    siteName: 'consolex1',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/consolex1-host.png',
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
      'Consolex1 propose un hébergement français accessible pour bots Discord, sites web, APIs et applications Python.',
    images: ['/consolex1-host.png'],
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
      <main>{children}</main>
      <Footer locale="fr" />
    </div>
  );
}
