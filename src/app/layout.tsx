import './globals.css';
import ConsentBanner from '../components/ConsentBanner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
