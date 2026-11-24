import './globals.css';
import Script from 'next/script';
import ConsentBanner from '../components/ConsentBanner';
import TrafficTradeBanner from '../components/TrafficTradeBanner';
import Interactions from '../components/Interactions';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className="scroll-smooth scroll-pt-24 selection:bg-brand/35 selection:text-white [scrollbar-color:#2a3242_transparent]"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-full overflow-x-hidden bg-night font-sans leading-[1.65] text-soft antialiased [&_*:focus-visible]:rounded-md [&_*:focus-visible]:outline-2 [&_*:focus-visible]:outline-offset-[3px] [&_*:focus-visible]:outline-brand">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(640px_circle_at_var(--gx,50vw)_var(--gy,30vh),rgba(77,163,255,.09),transparent_62%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,.07)_1px,transparent_1px)] bg-size-[30px_30px] mask-[radial-gradient(ellipse_80%_55%_at_50%_0%,#000_10%,transparent_70%)]"
        />
        <Interactions />
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