'use client';

import { useState } from 'react';

// Commande ou nom de fichier cliquable : un clic copie la valeur
export default function CopyToken({ value }: { value: string }) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      window.setTimeout(() => setDone(false), 1500);
    } catch {
      /* presse-papiers indisponible */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title="Copier"
      aria-label={`Copier ${value}`}
      className={`mx-0.5 inline cursor-copy rounded-md border px-1.5 py-0.5 align-baseline font-mono text-[.86em] transition-colors duration-200 ${done ? 'border-ok bg-ok/10 text-ok' : 'border-line-strong bg-panel-hover text-ink hover:border-accent'
        }`}
    >
      {value}
      {done && <span aria-hidden="true"> ✓</span>}
    </button>
  );
}