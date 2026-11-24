export const metadata = {
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
};

export default function EnMentionsPage() {
  return (
    <section className="my-[clamp(3.5rem,8vw,5.5rem)]">
      <div className="mb-9 max-w-180 [&_h1]:text-[clamp(2.1rem,4.6vw,3.3rem)] [&_h1]:tracking-[-.035em] [&_h2]:text-[clamp(1.6rem,3vw,2.3rem)] [&_p]:mt-4 [&_p]:mb-0 [&_p]:max-w-184 [&_p]:text-[1.04rem] [&_p]:leading-[1.75] [&_p]:text-soft **:data-btn:mt-2" data-reveal="header">
        <h1>Legal notice</h1>
        <p>Information about the publisher, hosting, and legal framework covering consolex1.</p>
      </div>
      <div className="max-w-190 [&_h2]:mt-[2.4rem] [&_h2]:mb-[.7rem] [&_h2]:text-[1.3rem] [&_p]:mb-[.9rem] [&_p]:leading-[1.8] [&_p]:text-soft [&_li]:leading-[1.8] [&_li]:text-soft [&_a]:text-brand [&_a]:underline-offset-[3px]" data-reveal>
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