"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const TRAFFICTRADE_TOKEN = "HW04Dr84486h3iZWdQVUM3zpdyC1ZIpv";

export default function TrafficTradeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isEnglish, setIsEnglish] = useState(false);

  useEffect(() => {
    setIsEnglish(pathname?.startsWith("/en") ?? false);
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
    <div className="ad-slot">
      <div className="ad-slot-inner">
        <span className="ad-slot-label">{isEnglish ? "Sponsored" : "Sponsorisé"}</span>
        <div ref={containerRef} className="ad-slot-frame" />
      </div>
    </div>
  );
}
