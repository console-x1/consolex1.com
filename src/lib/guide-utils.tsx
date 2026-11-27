import type { ReactNode } from 'react';
import CopyToken from '@/components/CopyToken';

export const slugify = (text: string) =>
    text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 48);

// « 3. Lancer le bot » → { step: '3', title: 'Lancer le bot' }
export function parseHeading(heading: string) {
    const m = heading.match(/^(\d{1,2})[.)]\s+(.*)$/);
    return m ? { step: m[1], title: m[2] } : { step: null, title: heading };
}

// Coupe les longs paragraphes en blocs de deux phrases pour aérer la lecture
export function splitParagraphs(text: string): string[] {
    if (text.length < 280) return [text];
    const sentences = text.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g) ?? [text];
    const out: string[] = [];
    let current = '';
    for (const sentence of sentences) {
        if (current && (current + sentence).length > 260) {
            out.push(current.trim());
            current = '';
        }
        current += sentence;
    }
    if (current.trim()) out.push(current.trim());
    return out;
}

export function readingMinutes(texts: string[]) {
    const words = texts.join(' ').split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
}

// Commandes, fichiers et variables d'environnement deviennent des pastilles à copier
const TOKEN =
    /(\/(?:account register|server create|server|account)\b|\b(?:npm|pnpm|yarn) (?:install|start|run [\w:-]+|ci)\b|\b(?:node|python3?) [\w./-]+\.(?:js|mjs|ts|py)\b|\bpip3? install [\w.-]+|process\.env\.\w+|\b[a-z][\w-]*(?:\.[\w-]+)*\.(?:json|mjs|ts|py|txt|env|toml|ya?ml)\b)/g;

export function renderInline(text: string): ReactNode[] {
    return text.split(TOKEN).map((part, i) => (i % 2 === 1 ? <CopyToken key={i} value={part} /> : part));
}