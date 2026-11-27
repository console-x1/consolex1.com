import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { LOGO_DATA_URI } from '@/lib/logo-data';
import { findSitePage } from '@/lib/site-pages';

const readFont = (file: string) => readFile(path.join(process.cwd(), 'node_modules', file));

const clean = (title: string) => title.replace(/\s*[|·]\s*consolex1\s*$/i, '').trim();
const clip = (text: string, max: number) => (text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text);

// Image de partage 1200×630 : générée au build, une par page
export async function renderOg({ title, description, kicker }: { title: string; description: string; kicker: string }) {
    const [display, body] = await Promise.all([
        readFont('@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-700-normal.woff'),
        readFont('@fontsource/instrument-sans/files/instrument-sans-latin-500-normal.woff'),
    ]);
    const heading = clean(title);
    const size = heading.length > 70 ? 54 : heading.length > 46 ? 64 : 76;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: '#0e0f12',
                    color: '#f4f2ed',
                    padding: '64px 72px',
                    borderLeft: '14px solid #ff8f2e',
                    fontFamily: 'Instrument',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={LOGO_DATA_URI} width={56} height={56} alt="" />
                        <div style={{ display: 'flex', marginLeft: 18, fontFamily: 'Bricolage', fontSize: 36, color: '#f4f2ed' }}>consolex1</div>
                    </div>
                    <div style={{ display: 'flex', fontSize: 24, color: '#8d8c87', textTransform: 'uppercase', letterSpacing: 3 }}>{kicker}</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            display: 'flex',
                            fontFamily: 'Bricolage',
                            fontSize: size,
                            lineHeight: 1.05,
                            letterSpacing: -2,
                            color: '#f4f2ed',
                        }}
                    >
                        {heading}
                    </div>
                    <div style={{ display: 'flex', marginTop: 28, fontSize: 31, lineHeight: 1.35, color: '#b9b7b0', maxWidth: 980 }}>
                        {clip(description, 150)}
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', fontSize: 28, color: '#8d8c87' }}>consolex1.com</div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', width: 22, height: 22, background: '#ff8f2e', marginLeft: 12 }} />
                        <div style={{ display: 'flex', width: 22, height: 22, background: '#5aa9ff', marginLeft: 12 }} />
                        <div style={{ display: 'flex', width: 22, height: 22, background: '#46c08a', marginLeft: 12 }} />
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                { name: 'Bricolage', data: display, weight: 700, style: 'normal' },
                { name: 'Instrument', data: body, weight: 500, style: 'normal' },
            ],
        },
    );
}

export function ogImageFor(pagePath: string) {
    const page = findSitePage(pagePath);
    const fr = !pagePath.startsWith('/en');
    return renderOg({
        title: page?.title ?? 'consolex1',
        description:
            page?.description ??
            (fr ? 'Hébergement gratuit en France pour bots Discord, Node.js et Python.' : 'Free hosting in France for Discord bots, Node.js and Python.'),
        kicker: page?.kind === 'guide' ? (fr ? 'Guide' : 'Guide') : fr ? 'Hébergement' : 'Hosting',
    });
}