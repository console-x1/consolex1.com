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
    <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
        <h1>Frequently asked questions</h1>
        <p>Clear answers to help you understand the offering, available services, and limits.</p>
      </div>
      <div className="grid max-w-205 gap-[.6rem]">
        {faqs.map((item) => (
          <article key={item.question} className="relative isolate overflow-hidden rounded-[20px] border border-white/8 bg-white/[.028] transition-[border-color,background-color,translate,box-shadow] duration-400 ease-soft before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_srgb,var(--accent,#4da3ff)_16%,transparent),transparent_65%)] hover:before:opacity-100 px-6 py-[1.2rem] in-[.js]:p-0 [&>h3]:mb-2 [&>h3]:text-[1.02rem] [&>h3]:tracking-[-.015em] [&>p]:m-0 [&>p]:text-[.96rem] [&>p]:text-soft [.js_&>h3]:flex [.js_&>h3]:items-center [.js_&>h3]:justify-between [.js_&>h3]:gap-4 [.js_&>h3]:m-0 [.js_&>h3]:px-6 [.js_&>h3]:py-[1.2rem] [.js_&>h3]:cursor-pointer [.js_&>h3]:select-none [.js_&>h3]:after:content-[''] [.js_&>h3]:after:shrink-0 [.js_&>h3]:after:size-[.55rem] [.js_&>h3]:after:border-mute [.js_&>h3]:after:border-r-2 [.js_&>h3]:after:border-b-2 [.js_&>h3]:after:rotate-45 [.js_&>h3]:after:-translate-x-0.5 [.js_&>h3]:after:-translate-y-0.5 [.js_&>h3]:after:transition-[rotate,border-color] [.js_&>h3]:after:duration-400 [.js_&>h3]:after:ease-soft [.js_&>h3]:hover:after:border-white [.js_&[data-open]>h3]:after:rotate-225 [.js_&[data-open]>h3]:after:border-brand [.js_&>p]:max-h-0 [.js_&>p]:overflow-hidden [.js_&>p]:opacity-0 [.js_&>p]:invisible [.js_&>p]:px-6 [.js_&>p]:py-0 [.js_&>p]:[transition-property:max-height,opacity,padding-bottom,visibility] [.js_&>p]:duration-[.45s,.35s,.45s,0s] [.js_&>p]:delay-[0s,0s,0s,.45s] [.js_&[data-open]>p]:opacity-100 [.js_&[data-open]>p]:visible [.js_&[data-open]>p]:pb-[1.3rem] [.js_&[data-open]>p]:delay-[0s]" data-reveal data-spot data-faq>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
      <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header" style={{ marginTop: '2rem' }}>
        <Link className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent font-semibold no-underline cursor-pointer translate-x-(--bx,0px) translate-y-(--by,0px) transition-[translate,scale,background-color,border-color,box-shadow,color,filter] duration-250 ease-soft active:scale-[.97] px-[1.4rem] py-[.8rem] text-[.95rem] bg-[linear-gradient(100deg,#4da3ff,#5eead4)] text-[#04101c] shadow-[0_10px_30px_-10px_rgba(77,163,255,.7)] hover:shadow-[0_16px_44px_-8px_rgba(77,163,255,.85)] after:absolute after:inset-0 after:translate-x-[-120%] after:transition-transform after:duration-700 after:ease-soft after:bg-[linear-gradient(105deg,transparent_30%,rgba(255,255,255,.5)_50%,transparent_70%)] hover:after:translate-x-[120%]" data-btn href="/en/guides/create-consolex1-server">
          Read the step-by-step server creation guide
        </Link>
      </div>
    </section>
  );
}