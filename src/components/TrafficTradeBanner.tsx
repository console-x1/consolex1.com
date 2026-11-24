"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const TRAFFICTRADE_TOKEN = "HW04Dr84486h3iZWdQVUM3zpdyC1ZIpv";

export default function TrafficTradeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    setIsEnglish(pathname?.startsWith('/en') ?? false);
  }, [pathname]);

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

  return (
    <div className="relative z-1 mx-auto mb-10 flex w-[min(1080px,100%)] justify-center px-6">
      <div className="flex w-fit max-w-full flex-col items-center gap-2 rounded-[14px] border border-white/8 bg-white/[.028] px-4 py-[.85rem]">
        <span className="text-[.65rem] tracking-[.2em] text-mute uppercase">{isEnglish ? "Sponsored" : "Sponsorisé"}</span>
        <div ref={containerRef} className="block h-17 w-182 max-w-full overflow-hidden rounded-[10px] [&_iframe]:block [&_iframe]:h-22.5 [&_iframe]:w-full [&_iframe]:border-0" />
        <a
          className="m-0 text-[.68rem] text-mute no-underline transition-colors hover:text-brand"
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