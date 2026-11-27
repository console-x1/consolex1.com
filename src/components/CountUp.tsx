'use client';

import { useEffect, useState } from 'react';

export function useCountUp(target: number | null, start: boolean, duration = 1400) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (target === null || !start) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            const id = requestAnimationFrame(() => setValue(target));
            return () => cancelAnimationFrame(id);
        }
        const t0 = performance.now();
        let raf = 0;
        const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / duration);
            setValue(Math.round(target * (1 - Math.pow(2, -10 * p))));
            if (p < 1) raf = requestAnimationFrame(tick);
            else setValue(target);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, start, duration]);

    return value;
}

export default function CountUp({
    target,
    start,
    format,
}: {
    target: number | null;
    start: boolean;
    format: (value: number) => string;
}) {
    const value = useCountUp(target, start);
    return <span className="tabular-nums">{format(value)}</span>;
}