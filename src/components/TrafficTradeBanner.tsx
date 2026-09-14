"use client";

import { useEffect, useRef } from "react";

const TRAFFICTRADE_TOKEN = "HW04Dr84486h3iZWdQVUM3zpdyC1ZIpv";

export default function TrafficTradeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return <div ref={containerRef} />;
}
