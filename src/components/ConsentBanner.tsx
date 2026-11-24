"use client";

import { useEffect, useState } from "react";

const GA_ID = 'G-EJ2TRQ6G75';

function loadGtag(anonymize: boolean) {
  if (!GA_ID) {
    console.warn('Google Analytics ID is not defined.');
    return;
  }

  const hasScript = document.querySelector(`script[data-gtag="${GA_ID}"]`);
  if (hasScript) {
    console.log('GA already loaded, reconfiguring with anonymize:', anonymize);
    ; (window as any).gtag?.("config", GA_ID, { anonymize_ip: anonymize });
    ; (window as any).gtag?.("event", "page_view", {
      page_path: window.location.pathname,
      page_location: window.location.href,
    });
    return;
  }

  console.log('Loading GA script for', GA_ID, 'anonymize:', anonymize);
  const script = document.createElement("script");
  script.async = false;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.setAttribute("data-gtag", GA_ID);
  document.body.appendChild(script);

  document.body.appendChild(document.createElement("script")).textContent =
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-EJ2TRQ6G75');
    `;

  ; (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    ; (window as any).dataLayer.push(args);
  }
  ; (window as any).gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: anonymize });
  gtag("event", "page_view", {
    page_path: window.location.pathname,
    page_location: window.location.href,
  });
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [anonymize, setAnonymize] = useState(false);
  const [locale, setLocale] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    try {
      const lang = document.documentElement.lang || navigator.language || 'fr';
      const short = lang.split('-')[0];
      setLocale(short === 'en' ? 'en' : 'fr');

      const stored = localStorage.getItem("ga_consent");
      if (!stored) {
        setVisible(true);
        return;
      }
      const data = JSON.parse(stored);
      if (data?.accepted) loadGtag(Boolean(data.anonymize));
    } catch (e) {
      setVisible(true);
    }
  }, []);

  const messages = {
    fr: {
      title: 'Nous utilisons Google Analytics',
      desc: "Ce site utilise Google Analytics uniquement si vous l'acceptez. Vous pouvez choisir d'anonymiser votre adresse IP.",
      anonymizeLabel: "Anonymiser mon adresse IP",
      accept: 'Accepter',
      decline: 'Refuser',
    },
    en: {
      title: 'We use Google Analytics',
      desc: 'This site uses Google Analytics only with your consent. You can choose to anonymize your IP address.',
      anonymizeLabel: 'Anonymize my IP address',
      accept: 'Accept',
      decline: 'Decline',
    },
  } as const;

  function accept() {
    const data = { accepted: true, anonymize };
    localStorage.setItem("ga_consent", JSON.stringify(data));
    loadGtag(anonymize);
    setVisible(false);
  }

  function decline() {
    const data = { accepted: false, anonymize: false };
    localStorage.setItem("ga_consent", JSON.stringify(data));
    setVisible(false);
  }

  if (!visible) return null;

  const m = locale === 'en' ? messages.en : messages.fr;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={m.title}
      className="fixed inset-x-0 bottom-0 z-9999 max-h-[75svh] animate-slide-up overflow-y-auto border-t border-line-strong bg-panel px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-ink shadow-[0_-12px_32px_-12px_rgba(0,0,0,.45)] sm:inset-x-auto sm:bottom-4 sm:left-1/2 sm:w-[min(720px,calc(100%-2rem))] sm:-translate-x-1/2 sm:rounded-xl sm:border sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1 [&_p]:mt-1.5 [&_p]:mb-0 [&_p]:text-[.85rem] [&_p]:leading-[1.55] [&_p]:text-soft [&_strong]:block [&_strong]:text-[.95rem] [&_strong]:text-ink">
          <strong>{m.title}</strong>
          <p>{m.desc}</p>
          <label className="mt-2 flex min-h-9 cursor-pointer items-center gap-2.5 text-[.85rem] text-soft">
            <input className="size-4 accent-brand" type="checkbox" checked={anonymize} onChange={(e) => setAnonymize(e.target.checked)} />
            {m.anonymizeLabel}
          </label>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:flex">
          <button onClick={decline} className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[background-color,border-color,color,translate] duration-150 active:translate-y-px min-h-11 px-4 py-2 text-[.88rem] sm:min-h-10 border-line-strong bg-transparent text-soft hover:bg-panel-hover hover:text-ink w-full sm:w-auto">{m.decline}</button>
          <button onClick={accept} className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[background-color,border-color,color,translate] duration-150 active:translate-y-px min-h-11 px-4 py-2 text-[.88rem] sm:min-h-10 bg-brand text-on-brand hover:brightness-110 w-full sm:w-auto">{m.accept}</button>
        </div>
      </div>
    </div>
  );
}