"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const TRAFFICTRADE_TOKEN = "HW04Dr84486h3iZWdQVUM3zpdyC1ZIpv";

// Le bandeau fait 728 px de large : sur téléphone on le réduit proportionnellement au lieu de le tronquer
const AD_WIDTH = 728;
const AD_HEIGHT = 68;

export default function TrafficTradeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en") ?? false;
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.dataset.loaded) return;
    container.dataset.loaded = "true";

    const placeholder = document.createElement("div");
    const script = document.createElement("script");
    script.src = "https://traffictrade.fr/ads.js";
    script.dataset.token = TRAFFICTRADE_TOKEN;

    container.appendChild(placeholder);
    container.appendChild(script);
  }, []);

  useEffect(() => {
    const slot = slotRef.current;
    if (!slot) return;
    const update = () => setScale(Math.min(1, slot.clientWidth / AD_WIDTH));
    update();
    const observer = new ResizeObserver(update);
    observer.observe(slot);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative z-[1] mx-auto mb-8 flex w-full max-w-[100rem] justify-center px-4 sm:px-6 lg:px-10 2xl:px-14">
      <div className="flex w-full max-w-[760px] flex-col items-center gap-2 rounded-xl border border-line bg-panel px-3 py-3 sm:w-fit sm:px-4">
        <span className="font-mono text-[.65rem] tracking-[.14em] text-mute uppercase">{isEnglish ? "Sponsored" : "Sponsorisé"}</span>
        <div ref={slotRef} className="w-full max-w-[728px] overflow-hidden rounded-lg sm:w-[728px]" style={{ height: AD_HEIGHT * scale }}>
          <div
            ref={containerRef}
            className="h-[68px] w-[728px] origin-top-left overflow-hidden [&_iframe]:block [&_iframe]:h-[90px] [&_iframe]:w-full [&_iframe]:border-0"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
        <a
          className="m-0 inline-flex min-h-8 items-center text-[.7rem] text-mute no-underline transition-colors hover:text-brand"
          href={`https://traffictrade.fr/?utm_source=banner&utm_medium=powered_by&utm_campaign=network&utm_content=${TRAFFICTRADE_TOKEN}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isEnglish ? "Powered by TrafficTrade.fr" : "Propulsé par TrafficTrade.fr"}
        </a>
      </div>
    </div>
  );
}