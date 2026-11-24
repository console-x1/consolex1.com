import { useEffect, useState } from 'react';

export type StatusState = 'operational' | 'degraded' | 'downtime' | 'maintenance' | 'unknown';

export type StatusData = {
  state: StatusState;
  announcement: string | null;
  ready: boolean;
  failed: boolean;
};

export const STATUS_PAGE = 'https://status.consolex1.com';
const ENDPOINT = `${STATUS_PAGE}/index.json`;
const TTL = 60_000;

const initial: StatusData = { state: 'unknown', announcement: null, ready: false, failed: false };

let cached: { at: number; promise: Promise<StatusData> } | null = null;

// Better Stack : operational | degraded | downtime | maintenance (+ anciennes valeurs détaillées)
function normalize(raw: unknown): StatusState {
  const value = String(raw ?? '').toLowerCase();
  if (value === 'operational') return 'operational';
  if (value === 'maintenance') return 'maintenance';
  if (value === 'downtime' || value === 'partial_outage' || value === 'major_outage') return 'downtime';
  if (value === 'degraded' || value === 'degraded_performance') return 'degraded';
  return 'unknown';
}

async function request(): Promise<StatusData> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 6000);
  try {
    const res = await fetch(ENDPOINT, { signal: controller.signal, cache: 'no-store' });
    if (!res.ok) throw new Error(String(res.status));
    const json = await res.json();
    const attrs = json?.data?.attributes ?? {};
    const text = typeof attrs.announcement === 'string' ? attrs.announcement.trim() : '';
    return { state: normalize(attrs.aggregate_state), announcement: text || null, ready: true, failed: false };
  } catch {
    return { ...initial, ready: true, failed: true };
  } finally {
    window.clearTimeout(timer);
  }
}

// Une seule requête partagée par tous les composants, rafraîchie au plus toutes les 60 s
function load(): Promise<StatusData> {
  if (!cached || Date.now() - cached.at > TTL) cached = { at: Date.now(), promise: request() };
  return cached.promise;
}

export function useStatus(): StatusData {
  const [data, setData] = useState<StatusData>(initial);

  useEffect(() => {
    let alive = true;
    const run = () => {
      load().then((next) => {
        if (alive) setData(next);
      });
    };
    run();
    const id = window.setInterval(run, 90_000);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, []);

  return data;
}