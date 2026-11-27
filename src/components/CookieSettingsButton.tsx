'use client';

export const OPEN_CONSENT_EVENT = 'consolex1:open-consent';

export default function CookieSettingsButton({ label, className }: { label: string; className?: string }) {
    return (
        <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}>
            {label}
        </button>
    );
}