import Link from 'next/link';

export const metadata = {
  alternates: {
    canonical: 'https://consolex1.com/en/faq',
    languages: {
      fr: 'https://consolex1.com/faq',
      en: 'https://consolex1.com/en/faq',
    },
  },
  title: 'Hosting FAQ | consolex1',
  description: 'Answers to common questions about consolex1 hosting, server location, and limitations.',
  keywords: ['FAQ', 'consolex1 help', 'hosting questions', 'discord bot', 'pterodactyl', 'French hosting'],
  openGraph: {
    title: 'consolex1 FAQ',
    description: 'Answers to common questions about consolex1 hosting, server location, and limitations.',
    url: 'https://consolex1.com/en/faq',
    images: ['/avatar.png'],
  },
};

const faqs = [
  {
    question: 'Does the Free Plan require payment details?',
    answer: 'No — the Free plan starts without payment and is designed for testing and small experiments.',
  },
  {
    question: 'Which technologies are supported?',
    answer: 'Node.js, Python, nginx, Java, Go and Rust are supported through Pterodactyl.',
  },
  {
    question: 'Where is the server located?',
    answer: 'The server is hosted in France at the Equinix PA5 datacenter in Paris.',
  },
  {
    question: 'How do I manage my instance from Discord?',
    answer: 'Join the consolex1 Discord and verify your account in the verification channel. Then run /account register followed by /server create in the commands channel. Both commands must be used in that commands channel.',
  },
  {
    question: 'Can I get a database?',
    answer: 'Paid plans are planned to include one or more databases, but they are not currently available for purchase.',
  },
];

export default function EnFAQPage() {
  return (
    <section className="my-[clamp(3rem,7vw,5rem)]">
      <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
        <h1>Frequently asked questions</h1>
        <p>Clear answers to help you understand the offering, available services, and limits.</p>
      </div>
      <div className="grid max-w-208 gap-2">
        {faqs.map((item) => (
          <article key={item.question} className="relative overflow-hidden rounded-xl border border-line bg-panel px-5 py-4 transition-colors duration-200 hover:border-line-strong sm:px-6 in-[.js]:p-0 [&>h3]:mb-2 [&>h3]:text-base [&>h3]:font-semibold [&>p]:m-0 [&>p]:text-[.95rem] [&>p]:leading-[1.65] [&>p]:text-soft [.js_&>h3]:flex [.js_&>h3]:min-h-13 [.js_&>h3]:items-center [.js_&>h3]:justify-between [.js_&>h3]:gap-4 [.js_&>h3]:m-0 [.js_&>h3]:px-5 [.js_&>h3]:py-3 [.js_&>h3]:cursor-pointer [.js_&>h3]:select-none [.js_&>h3]:after:content-['+'] [.js_&>h3]:after:shrink-0 [.js_&>h3]:after:font-mono [.js_&>h3]:after:text-[1.4rem] [.js_&>h3]:after:leading-none [.js_&>h3]:after:text-mute [.js_&>h3]:after:transition-[rotate,color] [.js_&>h3]:after:duration-200 [.js_&>h3]:hover:after:text-ink [.js_&>h3]:sm:px-6 [.js_&[data-open]>h3]:after:rotate-45 [.js_&[data-open]>h3]:after:text-accent [.js_&>p]:max-h-0 [.js_&>p]:overflow-hidden [.js_&>p]:opacity-0 [.js_&>p]:invisible [.js_&>p]:px-5 [.js_&>p]:py-0 [.js_&>p]:[transition-property:max-height,opacity,padding-bottom,visibility] [.js_&>p]:duration-[.35s,.25s,.35s,0s] [.js_&>p]:delay-[0s,0s,0s,.35s] [.js_&>p]:sm:px-6 [.js_&[data-open]>p]:opacity-100 [.js_&[data-open]>p]:visible [.js_&[data-open]>p]:pb-5 [.js_&[data-open]>p]:delay-[0s]" data-reveal data-faq>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
      <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header" style={{ marginTop: '2rem' }}>
        <Link className="group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border border-transparent font-semibold no-underline cursor-pointer transition-[translate,box-shadow,background-color,background-size,border-color,color] duration-200 ease-soft active:translate-x-0 active:translate-y-0 active:shadow-none min-h-11 px-5 py-2.5 text-[.95rem] bg-brand text-on-brand hover:-translate-x-px hover:-translate-y-px hover:shadow-[3px_3px_0_0_var(--c-accent)] after:content-['→'] after:-ml-2 after:w-0 after:overflow-hidden after:opacity-0 after:transition-[width,margin,opacity] after:duration-200 hover:after:ml-0 hover:after:w-4 hover:after:opacity-100" data-cta href="/en/guides/create-consolex1-server">
          Read the step-by-step server creation guide
        </Link>
      </div>
    </section>
  );
}