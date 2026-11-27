import { useEffect, useState } from 'react';
import { STATS_URL } from './stats';

const STATS_DETAIL_URL = `${STATS_URL}/stats`;

export type StatsDetail = {
    serverCount: number | null;
    userCount: number | null;
    eggCount: number | null;
    ramAverage: number | null; // octets utilisés en moyenne par serveur
    diskAverage: number | null; // octets utilisés en moyenne par serveur
};

export type StatsDetailState = { data: StatsDetail | null; ready: boolean };

const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) ? v : null);

// Lit GET /stats une seule fois au chargement de la page
export function useStatsDetail(): StatsDetailState {
    const [state, setState] = useState<StatsDetailState>({ data: null, ready: false });

    useEffect(() => {
        let alive = true;
        const controller = new AbortController();
        const timer = window.setTimeout(() => controller.abort(), 8000);

        (async () => {
            try {
                const res = await fetch(STATS_DETAIL_URL, { signal: controller.signal, headers: { Accept: 'application/json' } });
                if (!res.ok) throw new Error(String(res.status));
                const json = await res.json();
                const data: StatsDetail = {
                    serverCount: num(json?.serverCount),
                    userCount: num(json?.userCount),
                    eggCount: num(json?.eggCount),
                    ramAverage: num(json?.global?.ram?.average),
                    diskAverage: num(json?.global?.disk?.average),
                };
                const hasData = Object.values(data).some((v) => v !== null);
                if (alive) setState({ data: hasData ? data : null, ready: true });
            } catch {
                if (alive) setState({ data: null, ready: true });
            } finally {
                window.clearTimeout(timer);
            }
        })();
        return () => {
            alive = false;
            controller.abort();
            window.clearTimeout(timer);
        };
    }, []);

    return state;
}