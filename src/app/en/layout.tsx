import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'consolex1 — French hosting for bots, apps and websites',
    template: '%s | consolex1',
  },
  description:
    'Consolex1 provides affordable French hosting for Discord bots, web apps, APIs, and Python services.',
  metadataBase: new URL('https://consolex1.com'),
  alternates: {
    canonical: 'https://consolex1.com/en',
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
    title: 'consolex1 — French hosting for bots, apps and websites',
    description:
      'Consolex1 provides affordable French hosting for Discord bots, web apps, APIs, and Python services.',
    url: 'https://consolex1.com/en',
    siteName: 'consolex1',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/consolex1-host.png',
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
      'Consolex1 provides affordable French hosting for Discord bots, web apps, APIs, and Python services.',
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

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <Header locale="en" />
      <main>{children}</main>
      <Footer locale="en" />
    </div>
  );
}
