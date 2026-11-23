'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const REVEAL = '[data-reveal]';
const SURFACE = '[data-spot]';

const HIDDEN = ['opacity-0', '[transform:translateY(22px)]'];
const SHOWN = ['animate-rise'];

function toggleFaq(card: HTMLElement) {
    const q = card.querySelector('h3');
    const a = card.querySelector('p');
    const open = !card.hasAttribute('data-open');
    card.toggleAttribute('data-open', open);
    q?.setAttribute('aria-expanded', String(open));
    if (a) a.style.maxHeight = open ? `${a.scrollHeight + 32}px` : '';
}

export default function Interactions() {
    const pathname = usePathname();
    const first = useRef(true);

    // Écouteurs globaux (une seule fois)
    useEffect(() => {
        const root = document.documentElement;
        const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const max = root.scrollHeight - window.innerHeight;
                root.style.setProperty('--scroll', max > 0 ? String(Math.min(1, window.scrollY / max)) : '0');
                if (window.scrollY > 8) root.setAttribute('data-scrolled', '');
                else root.removeAttribute('data-scrolled');
                ticking = false;
            });
        };

        // halo lissé qui suit la souris
        let tx = window.innerWidth / 2;
        let ty = window.innerHeight / 3;
        let cx = tx;
        let cy = ty;
        let raf = 0;
        const loop = () => {
            cx += (tx - cx) * 0.08;
            cy += (ty - cy) * 0.08;
            root.style.setProperty('--gx', `${cx}px`);
            root.style.setProperty('--gy', `${cy}px`);
            raf = Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5 ? requestAnimationFrame(loop) : 0;
        };

        let activeBtn: HTMLElement | null = null;
        let tilted: HTMLElement | null = null;
        const resetBtn = () => {
            activeBtn?.style.removeProperty('--bx');
            activeBtn?.style.removeProperty('--by');
            activeBtn = null;
        };
        const resetTilt = () => {
            tilted?.style.removeProperty('--rx');
            tilted?.style.removeProperty('--ry');
            tilted = null;
        };

        const onMove = (e: PointerEvent) => {
            if (e.pointerType !== 'mouse') return;
            const target = e.target as Element | null;

            if (!reduce) {
                tx = e.clientX;
                ty = e.clientY;
                if (!raf) raf = requestAnimationFrame(loop);
            }

            const surface = target?.closest?.(SURFACE) as HTMLElement | null;
            if (surface) {
                const r = surface.getBoundingClientRect();
                surface.style.setProperty('--mx', `${e.clientX - r.left}px`);
                surface.style.setProperty('--my', `${e.clientY - r.top}px`);
            }

            if (reduce) return;

            const btn = target?.closest?.('[data-btn]') as HTMLElement | null;
            if (btn !== activeBtn) resetBtn();
            if (btn) {
                activeBtn = btn;
                const r = btn.getBoundingClientRect();
                btn.style.setProperty('--bx', `${((e.clientX - r.left) / r.width - 0.5) * 8}px`);
                btn.style.setProperty('--by', `${((e.clientY - r.top) / r.height - 0.5) * 6}px`);
            }

            const hero = target?.closest?.('[data-hero]') as HTMLElement | null;
            const term = hero?.querySelector<HTMLElement>('[data-tilt]') ?? null;
            if (hero && term) {
                const r = hero.getBoundingClientRect();
                term.style.setProperty('--ry', `${((e.clientX - r.left) / r.width - 0.5) * 8}deg`);
                term.style.setProperty('--rx', `${-((e.clientY - r.top) / r.height - 0.5) * 6}deg`);
                tilted = term;
            } else if (tilted) {
                resetTilt();
            }
        };

        const onOut = (e: MouseEvent) => {
            if (!e.relatedTarget) {
                resetBtn();
                resetTilt();
            }
        };

        const onClick = (e: MouseEvent) => {
            const h = (e.target as Element | null)?.closest?.('[data-faq] > h3');
            if (h?.parentElement) toggleFaq(h.parentElement);
        };

        const onKey = (e: KeyboardEvent) => {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            const h = (e.target as Element | null)?.closest?.('[data-faq] > h3');
            if (!h?.parentElement) return;
            e.preventDefault();
            toggleFaq(h.parentElement);
        };

        const onResize = () => {
            document.querySelectorAll<HTMLElement>('[data-faq][data-open] > p').forEach((p) => {
                p.style.maxHeight = `${p.scrollHeight + 32}px`;
            });
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);
        document.addEventListener('click', onClick);
        document.addEventListener('keydown', onKey);
        if (fine) {
            document.addEventListener('pointermove', onMove, { passive: true });
            document.addEventListener('mouseout', onOut);
        }

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
            document.removeEventListener('click', onClick);
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('pointermove', onMove);
            document.removeEventListener('mouseout', onOut);
            cancelAnimationFrame(raf);
        };
    }, []);

    useIsoLayoutEffect(() => {
        const isFirst = first.current;
        first.current = false;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        document.querySelectorAll<HTMLElement>('[data-faq]').forEach((card) => {
            const q = card.querySelector('h3');
            if (!q || !card.querySelector('p')) return;
            q.setAttribute('role', 'button');
            q.setAttribute('tabindex', '0');
            q.setAttribute('aria-expanded', String(card.hasAttribute('data-open')));
        });

        if (reduce || !('IntersectionObserver' in window)) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target as HTMLElement;
                    el.classList.remove(...HIDDEN);
                    el.classList.add(...SHOWN);
                    io.unobserve(entry.target);
                });
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
        );

        document.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => {
            if (el.closest('[data-intro]')) return;
            // au premier chargement, on laisse visible ce qui est déjà à l'écran (pas de flash)
            if (isFirst && el.getBoundingClientRect().top < window.innerHeight) return;
            const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => c.matches(REVEAL));
            el.style.animationDelay = `${Math.min(Math.max(siblings.indexOf(el), 0), 8) * 70}ms`;
            el.classList.add(...HIDDEN);
            io.observe(el);
        });

        return () => io.disconnect();
    }, [pathname]);

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 origin-left bg-[linear-gradient(100deg,#4da3ff,#5eead4)] [transform:scaleX(var(--scroll,0))]"
        />
    );
}