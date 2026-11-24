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
      <section className="my-[clamp(3rem,7vw,5rem)]">
        <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
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