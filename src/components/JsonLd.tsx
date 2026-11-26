const graph = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': 'https://consolex1.com/#organization',
            name: 'consolex1',
            url: 'https://consolex1.com',
            logo: 'https://consolex1.com/avatar.png',
            description: 'Hébergeur français gratuit pour bots Discord, Node.js et Python, basé à Paris.',
            areaServed: 'FR',
            sameAs: ['https://fr.trustpilot.com/review/consolex1.com', 'https://github.com/console-x1'],
        },
        {
            '@type': 'WebSite',
            '@id': 'https://consolex1.com/#website',
            url: 'https://consolex1.com',
            name: 'consolex1',
            inLanguage: ['fr', 'en'],
            publisher: { '@id': 'https://consolex1.com/#organization' },
        },
    ],
};

export default function JsonLd() {
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />;
}