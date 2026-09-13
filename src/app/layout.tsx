import './globals.css';
import ConsentBanner from '../components/ConsentBanner';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <ConsentBanner />
        <div></div>
        <script src="https://traffictrade.fr/ads.js" data-token="HW04Dr84486h3iZWdQVUM3zpdyC1ZIpv" ></script>
      </body>
    </html>
  );
}
