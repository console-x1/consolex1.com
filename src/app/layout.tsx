import './globals.css';
import Script from 'next/script';
import ConsentBanner from '../components/ConsentBanner';
import TrafficTradeBanner from '../components/TrafficTradeBanner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Script
          src="https://incidents.betterstack.com/widgets/announcement.js"
          data-id="262405"
          strategy="afterInteractive"
        />
        <ConsentBanner />
        <TrafficTradeBanner />
      </body>
    </html>
  );
}
