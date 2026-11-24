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
      <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
        <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
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