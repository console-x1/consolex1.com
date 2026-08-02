import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'consolex1 — Hébergement Node.js, Python et Discord',
    template: '%s | consolex1',
  },
  description:
    'Consolex1 propose un hébergement gratuit et bon marché en France pour sites web, APIs, Discord bots et applications Python.',
  metadataBase: new URL('https://consolex1.com'),
  alternates: {
    canonical: 'https://consolex1.com',
  },
  openGraph: {
    title: 'consolex1 — Hébergement Node.js, Python et Discord',
    description:
      'Hébergez vos projets en France sur un serveur Equinix PA5 avec un panel Pterodactyl et support Discord.',
    url: 'https://consolex1.com',
    siteName: 'consolex1',
    type: 'website',
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="page-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
