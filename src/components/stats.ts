import { useEffect, useState } from 'react';

// API publique du bot : { serverCount, userCount, eggCount, cached }
export const STATS_URL = 'http://node-1.consolex1.com:10071';
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
    run();
    const id = window.setInterval(run, 120_000);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, []);

  return data;
}