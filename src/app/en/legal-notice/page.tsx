import type { Metadata } from 'next';
import { withSocial } from '@/lib/social';
export const metadata: Metadata = withSocial('/en/legal-notice', {
  alternates: {
    canonical: 'https://consolex1.com/en/legal-notice',
    languages: {
      fr: 'https://consolex1.com/mentions',
      en: 'https://consolex1.com/en/legal-notice',
    },
  },
  title: 'Legal notice',
  description: 'Legal information about consolex1, including publisher details and hosting terms.',
  openGraph: {
    title: 'consolex1 legal notice',
    description: 'Legal information about consolex1, including publisher details and hosting terms.',
    url: 'https://consolex1.com/en/legal-notice',
    images: ['/avatar.png'],
  },
} as Metadata);

export default function EnMentionsPage() {
  return (
    <section className="my-[clamp(3rem,7vw,5rem)]">
      <div className="mb-8 max-w-176 sm:mb-10 [&_h1]:text-[clamp(1.9rem,5.2vw,3.1rem)] [&_h1]:leading-[1.08] [&_h1]:tracking-[-.03em] [&_h2]:text-[clamp(1.5rem,3.4vw,2.1rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-160 [&_p]:text-base [&_p]:leading-[1.7] [&_p]:text-soft sm:[&_p]:text-[1.05rem] **:data-cta:mt-2" data-reveal="header">
        <h1>Legal notice</h1>
        <p>Information about the publisher, hosting, and legal framework covering consolex1.</p>
      </div>
      <div className="max-w-184 [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[1.25rem] [&_p]:mb-4 [&_p]:leading-[1.8] [&_p]:text-soft [&_li]:leading-[1.8] [&_li]:text-soft [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-[3px]" data-reveal>
        <h2>Service publisher</h2>
        <p>consolex1 is a project run by an independent team based in France.</p>
        <p>Contact address: France.</p>
        <p>Contact email: contact@consolex1.com</p>

        <h2>Status</h2>
        <p>The project is currently being structured and is not yet formally registered as an association.</p>
        <p>Paid plans are displayed for future availability. They are currently not available for purchase.</p>
        <p>I created consolex1 because, when I was younger, I also needed a free host to test, learn, and develop my projects. Today, with the means and capabilities available, I want to offer the same help to others, allowing everyone to start for free. Paid plans exist only to help finance the infrastructure and support the project in the long term.</p>

        <h2>Hosting</h2>
        <p>The landing site is hosted on GitHub Pages, while the hosting service is provided from a server based in France.</p>
        <p>We choose French infrastructure to offer better compliance and data proximity.</p>

        <h2>Security checks</h2>
        <p>Security reviews are carried out by the service administration and automated scripts.</p>
        <p>These checks only verify legitimate use of the service and the integrity of hosted applications.</p>
        <p>They do not collect passwords, API keys, or private credentials.</p>
        <p>We do not copy or steal application code. Analyses focus on compliance and usage, not data exfiltration.</p>
        <p>Services that violate third-party ToS are prohibited.</p>

        <h2>Contact</h2>
        <p>For legal or compliance questions, prefer Discord or the contact details shown on the site.</p>
      </div>
    </section>
  );
}