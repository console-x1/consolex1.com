'use client';

import { useEffect, useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const REVEAL = '[data-reveal]';

// classes Tailwind posées en JS : état masqué, puis animation d'entrée
const HIDDEN = ['opacity-0', '[transform:translateY(12px)]'];
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

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // À chaque page : accessibilité FAQ + révélation au scroll
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

    if (reduce || !('IntersectionObserver' in window)) {
      document.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => el.setAttribute('data-in', ''));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.setAttribute('data-in', '');
          if (el.classList.contains(HIDDEN[0])) {
            el.classList.remove(...HIDDEN);
            el.classList.add(...SHOWN);
          }
          io.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    );

    document.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => {
      // au premier chargement, on laisse visible ce qui est déjà à l'écran (pas de flash) mais on le marque « vu »
      const keepVisible = el.closest('[data-intro]') || (isFirst && el.getBoundingClientRect().top < window.innerHeight);
      if (!keepVisible) {
        const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => c.matches(REVEAL));
        el.style.animationDelay = `${Math.min(Math.max(siblings.indexOf(el), 0), 6) * 60}ms`;
        el.classList.add(...HIDDEN);
      }
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-100 h-0.5 origin-left bg-accent transform-[scaleX(var(--scroll,0))]"
    />
  );
}