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
    <div className="fixed bottom-4 left-1/2 z-[9999] w-[min(720px,calc(100%-1.5rem))] animate-slide-up rounded-[20px] border border-white/16 bg-[rgba(10,14,22,.92)] px-5 py-[1.1rem] text-ink shadow-[0_24px_70px_rgba(0,0,0,.6)] backdrop-blur-[18px] [transform:translateX(-50%)]" role="dialog" aria-live="polite" aria-label={m.title}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-[240px] flex-1 [&_p]:mt-[.35rem] [&_p]:mb-0 [&_p]:text-[.86rem] [&_p]:leading-[1.55] [&_p]:text-soft [&_strong]:block [&_strong]:text-[.98rem] [&_strong]:text-white">
          <strong>{m.title}</strong>
          <p>{m.desc}</p>
          <label className="mt-[.7rem] flex cursor-pointer items-center gap-2 text-[.85rem] text-soft">
            <input className="accent-brand" type="checkbox" checked={anonymize} onChange={(e) => setAnonymize(e.target.checked)} />
            {m.anonymizeLabel}
          </label>
        </div>
        <div className="flex gap-2">
          <button onClick={decline} className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-[var(--bx,0px)] translate-y-[var(--by,0px)] transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-[250ms] ease-soft active:scale-[.97] px-4 py-2 text-[.85rem] border-white/16 bg-transparent text-soft hover:border-white/30 hover:bg-white/[.028] hover:text-white" data-btn>{m.decline}</button>
          <button onClick={accept} className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-[var(--bx,0px)] translate-y-[var(--by,0px)] transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-[250ms] ease-soft active:scale-[.97] px-4 py-2 text-[.85rem] bg-[linear-gradient(100deg,#4da3ff,#5eead4)] text-[#04101c] shadow-[0_10px_30px_-10px_rgba(77,163,255,.7)] hover:shadow-[0_16px_44px_-8px_rgba(77,163,255,.85)] after:absolute after:inset-0 after:-translate-x-[120%] after:transition-transform after:duration-700 after:ease-soft after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,.5)_50%,transparent_70%)] hover:after:translate-x-[120%]" data-btn>{m.accept}</button>
        </div>
      </div>
    </div>
  );
}