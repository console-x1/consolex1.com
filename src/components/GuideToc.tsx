'use client';

import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string };

// Sommaire avec mise en évidence de la section lue
export default function GuideToc({ items }: { items: TocItem[] }) {
    const [active, setActive] = useState(items[0]?.id ?? '');

    useEffect(() => {
        const targets = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => el !== null);
        if (targets.length === 0) return;
        const io = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: '-15% 0px -70% 0px' },
        );
        targets.forEach((t) => io.observe(t));
        return () => io.disconnect();
    }, [items]);

    return (
        <ol className="m-0 grid list-none gap-0.5 p-0">
            {items.map((item) => (
                <li key={item.id}>
                    <a
                        href={`#${item.id}`}
                        aria-current={active === item.id ? 'location' : undefined}
                        className={`flex min-h-9 items-center border-l-2 py-1 pr-2 pl-3 text-[.9rem] leading-[1.35] no-underline transition-colors duration-200 ${active === item.id ? 'border-accent text-ink' : 'border-line text-mute hover:border-line-strong hover:text-ink'
                            }`}
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ol>
    );
}