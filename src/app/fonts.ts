import localFont from 'next/font/local';

export const display = localFont({
    src: '../../node_modules/@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2',
    weight: '200 800',
    variable: '--font-bricolage',
    display: 'swap',
});

export const sans = localFont({
    src: '../../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2',
    weight: '400 700',
    variable: '--font-instrument',
    display: 'swap',
});

export const mono = localFont({
    src: '../../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2',
    weight: '100 800',
    variable: '--font-jetbrains',
    display: 'swap',
    preload: false,
});