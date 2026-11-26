'use client';

import { useState } from 'react';

export default function ShareButton({ title, locale }: { title: string; locale: 'fr' | 'en' }) {
    const [copied, setCopied] = useState(false);
    const fr = locale === 'fr';

    async function share() {
        const url = window.location.href.split('#')[0];
        try {
            if (navigator.share) {
                await navigator.share({ title, url });
                return;
            }
            await navigator.clipboard.writeText(url);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            /* partage annulé : rien à faire */
        }
    }

    return (
        <button
            type="button"
            onClick={share}
            className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-lg border border-line-strong bg-transparent px-3.5 text-[.88rem] font-medium text-soft transition-colors duration-200 hover:border-ink hover:text-ink"
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {copied ? <path d="M5 12.5l4.5 4.5L19 7.5" /> : <path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7M16 6l-4-4-4 4M12 2v13" />}
            </svg>
            <span aria-live="polite">{copied ? (fr ? 'Lien copié' : 'Link copied') : fr ? 'Partager' : 'Share'}</span>
        </button>
    );
}