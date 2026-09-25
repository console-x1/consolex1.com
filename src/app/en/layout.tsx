import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'consolex1 | French hosting for Discord bots, Node.js, Python and web apps',
    template: '%s | consolex1',
  },
  keywords: [
    'french hosting',
    'discord bot hosting',
    'host discord bot',
    'nodejs hosting',
    'python hosting',
    'web hosting france',
    'hosting in france',
    'free hosting',
    'pterodactyl hosting',
    'server in france',
    'France web hosting',
    'discord hosting',
    'consolex1',
  ],
  description:
    'consolex1 provides French hosting for Discord bots, APIs, websites, Node.js apps and Python services, with a France-based infrastructure and Pterodactyl panel.',
  metadataBase: new URL('https://consolex1.com'),
  alternates: {
    canonical: 'https://consolex1.com/en',
    languages: {
      fr: 'https://consolex1.com/',
    },
  },
  icons: {
    icon: '/avatar.png',
    shortcut: '/avatar.png',
    apple: '/avatar.png',
  },
  openGraph: {
    title: 'consolex1 | French hosting for Discord bots, Node.js, Python and web apps',
    description:
      'Host your Discord bots, APIs, websites and Python apps in France with consolex1 and a simple Pterodactyl control panel.',
    url: 'https://consolex1.com/en',
    siteName: 'consolex1',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/avatar.png',
        width: 1200,
        height: 630,
        alt: 'consolex1 French hosting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'consolex1 — French hosting',
    description:
      'consolex1 provides affordable French hosting for Discord bots, web apps, APIs, and Python services.',
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

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <Header locale="en" />
      <main lang="en">{children}</main>
      <Footer locale="en" />
    </div>
  );
}
