import './globals.css';
import { display, mono, sans } from './fonts';
import BackToTop from '../components/BackToTop';
import ConsentBanner from '../components/ConsentBanner';
import Interactions from '../components/Interactions';
import JsonLd from '../components/JsonLd';
import Loader from '../components/Loader';
import SixSeven from '../components/SixSeven';
import TrafficTradeBanner from '../components/TrafficTradeBanner';

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f6f4ee' },
    { media: '(prefers-color-scheme: dark)', color: '#0e0f12' },
  ],
};

// Exécuté avant le premier rendu : applique le thème choisi (ou celui du système) sans flash
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');var t;try{t=localStorage.getItem('theme')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}d.dataset.theme=t;try{if(sessionStorage.getItem('loader-seen')||window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.dataset.loader='done'}}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${display.variable} ${sans.variable} ${mono.variable} scroll-smooth scroll-pt-24 selection:bg-accent/30 selection:text-ink min-[1700px]:text-[112.5%] min-[2200px]:text-[125%]`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://status.consolex1.com" />
        <link rel="preconnect" href="https://node-1.consolex1.com:10071" />
        <link rel="dns-prefetch" href="https://traffictrade.fr" />
      </head>
      <body className="min-h-svh overflow-x-hidden bg-page font-sans text-base leading-[1.65] text-soft antialiased [&_*:focus-visible]:rounded-sm [&_*:focus-visible]:outline-2 [&_*:focus-visible]:outline-offset-[3px] [&_*:focus-visible]:outline-brand">
        <JsonLd />
        <Loader />
        <Interactions />
        {children}
        <TrafficTradeBanner />
        <BackToTop />
        <ConsentBanner />
        <SixSeven />
      </body>
    </html>
  );
}