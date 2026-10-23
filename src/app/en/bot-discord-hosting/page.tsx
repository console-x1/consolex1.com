import type { Metadata } from 'next';

const destination = 'https://consolex1.com/en/discord-bot-hosting';

export const metadata: Metadata = {
  title: 'Redirecting to Discord bot hosting | consolex1',
  alternates: { canonical: destination },
  robots: { index: false, follow: true },
};

export default function LegacyDiscordBotHostingPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${destination}`} />
      <section className="section">
        <div className="section-header">
          <h1>Page moved</h1>
          <p>
            Discord bot hosting is now at{' '}
            <a href="/en/discord-bot-hosting">consolex1.com/en/discord-bot-hosting</a>.
          </p>
        </div>
      </section>
    </>
  );
}
