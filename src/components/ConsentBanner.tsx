"use client";

import { useEffect, useState } from "react";

interface ConsentBannerProps {
  gaId: string;
}

function loadGtag(gaId: string, anonymize: boolean) {
  if (!gaId) {
    console.warn('Google Analytics ID is not defined.');
    return;
  }

  const hasScript = document.querySelector(`script[data-gtag="${gaId}"]`);
  if (hasScript) {
    console.log('GA already loaded, reconfiguring with anonymize:', anonymize);
    ;(window as any).gtag?.("config", gaId, { anonymize_ip: anonymize });
    ;(window as any).gtag?.("event", "page_view", {
      page_path: window.location.pathname,
      page_location: window.location.href,
    });
    return;
  }

  console.log('Loading GA script for', gaId, 'anonymize:', anonymize);
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  script.setAttribute("data-gtag", gaId);
  document.head.appendChild(script);

  ;(window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    ;(window as any).dataLayer.push(args);
  }
  ;(window as any).gtag = gtag;
  gtag("js", new Date());
  gtag("config", gaId, { anonymize_ip: anonymize });
  gtag("event", "page_view", {
    page_path: window.location.pathname,
    page_location: window.location.href,
  });
}

export default function ConsentBanner({ gaId }: ConsentBannerProps) {
  const [visible, setVisible] = useState(false);
  const [anonymize, setAnonymize] = useState(true);
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
        loadGtag(gaId, Boolean(data.anonymize));
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
    loadGtag(gaId, anonymize);
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
    <div style={{position: 'fixed', left: 12, right: 12, bottom: 12, zIndex: 9999, background: 'rgba(255, 0, 0, 0.5)', border: '1px solid #ddd', padding: 16, borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.08)'}}>
      <div style={{display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'space-between'}}>
        <div style={{flex: 1}}>
          <strong>{m.title}</strong>
          <div style={{marginTop: 6}}>
            {m.desc}
          </div>
          <label style={{display: 'block', marginTop: 8}}>
            <input type="checkbox" checked={anonymize} onChange={(e) => setAnonymize(e.target.checked)} />{' '}
            {m.anonymizeLabel}
          </label>
        </div>
        <div style={{display: 'flex', gap: 8}}>
          <button onClick={decline} style={{padding: '8px 12px', background: '#ffaa00', border: '1px solid #ccc', borderRadius: 6}}>{m.decline}</button>
          <button onClick={accept} style={{padding: '8px 12px', background: '#440bff', color: 'white', border: 'none', borderRadius: 6}}>{m.accept}</button>
        </div>
      </div>
    </div>
  );
}
