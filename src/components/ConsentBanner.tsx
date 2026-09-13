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
      if (data?.accepted) {
        loadGtag(Boolean(data.anonymize));
      }
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
      style={{
        position: 'fixed',
        left: 12,
        right: 12,
        bottom: 12,
        zIndex: 9999,
        background: 'rgba(17, 24, 39, 0.95)',
        color: '#f9fafb',
        border: '1px solid rgba(148, 163, 184, 0.5)',
        padding: 16,
        borderRadius: 12,
        boxShadow: '0 12px 28px rgba(15, 23, 42, 0.28)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <strong style={{ display: 'block', fontSize: 16 }}>{m.title}</strong>
          <div style={{ marginTop: 6, lineHeight: 1.5, fontSize: 14 }}>
            {m.desc}
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10, fontSize: 14, cursor: 'pointer' }}>
            <input type="checkbox" checked={anonymize} onChange={(e) => setAnonymize(e.target.checked)} />
            {m.anonymizeLabel}
          </label>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button onClick={decline} style={{ padding: '10px 14px', background: '#f3f4f6', color: '#111827', border: '1px solid #d1d5db', borderRadius: 8, cursor: 'pointer' }}>{m.decline}</button>
          <button onClick={accept} style={{ padding: '10px 14px', background: '#8b5cf6', color: '#ffffff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>{m.accept}</button>
        </div>
      </div>
    </div>
  );
}
