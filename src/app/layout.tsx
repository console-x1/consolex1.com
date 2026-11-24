import './globals.css';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/instrument-sans';
import '@fontsource-variable/jetbrains-mono';
import ConsentBanner from '../components/ConsentBanner';
import Interactions from '../components/Interactions';
import SixSeven from '../components/SixSeven';
import TrafficTradeBanner from '../components/TrafficTradeBanner';

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f4ee' },
    { media: '(prefers-color-scheme: dark)', color: '#0e0f12' },
  ],
};

// Exécuté avant le premier rendu : applique le thème choisi (ou celui du système) sans flash
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');var t;try{t=localStorage.getItem('theme')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}d.dataset.theme=t})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className="scroll-smooth scroll-pt-24 selection:bg-accent/30 selection:text-ink">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-svh overflow-x-hidden bg-page font-sans text-base leading-[1.65] text-soft antialiased [&_*:focus-visible]:rounded-sm [&_*:focus-visible]:outline-2 [&_*:focus-visible]:outline-offset-[3px] [&_*:focus-visible]:outline-brand">
        <Interactions />
        {children}
        <TrafficTradeBanner />
        <ConsentBanner />
        <SixSeven />
      </body>
    </html>
  );
}