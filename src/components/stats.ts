import { useEffect, useState } from 'react';

// API publique : GET / → { serverCount, userCount, eggCount, cached } et GET /stats → détail complet.
// Elle doit autoriser le CORS pour https://consolex1.com (et http://localhost:3000 en développement).
export const STATS_URL = 'https://consolex1-web-api.consolex1.com';
const TTL = 60_000;

export type Stats = { serverCount: number; userCount: number; eggCount: number };
export type StatsData = { stats: Stats | null; ready: boolean; failed: boolean };

const initial: StatsData = { stats: null, ready: false, failed: false };

let cached: { at: number; promise: Promise<StatsData> } | null = null;

const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) ? v : null);

async function request(): Promise<StatsData> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(STATS_URL, { signal: controller.signal, headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(String(res.status));
    const json = await res.json();
    const serverCount = num(json?.serverCount);
    const userCount = num(json?.userCount);
    const eggCount = num(json?.eggCount);
    if (serverCount === null || userCount === null || eggCount === null) throw new Error('payload');
    return { stats: { serverCount, userCount, eggCount }, ready: true, failed: false };
  } catch {
    return { stats: null, ready: true, failed: true };
  } finally {
    window.clearTimeout(timer);
  }
}

function load(): Promise<StatsData> {
  if (!cached || Date.now() - cached.at > TTL) cached = { at: Date.now(), promise: request() };
  return cached.promise;
}

export function useStats(): StatsData {
  const [data, setData] = useState<StatsData>(initial);

  useEffect(() => {
    let alive = true;
    const run = () => {
      load().then((next) => {
        if (alive) setData(next);
      });
    };
    const first = window.setTimeout(run, 700); // après le premier affichage
    const id = window.setInterval(run, 120_000);
    return () => {
      alive = false;
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);

  return data;
}