import './globals.css';
import ConsentBanner from '../components/ConsentBanner';
import TrafficTradeBanner from '../components/TrafficTradeBanner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <ConsentBanner />
        <TrafficTradeBanner />
      </body>
    </html>
  );
}
