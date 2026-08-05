import './globals.css';
import ConsentBanner from '../components/ConsentBanner';

const gaId = process.env.NEXT_PUBLIC_GA_ID || '';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <ConsentBanner gaId={gaId} />
      </body>
    </html>
  );
}
