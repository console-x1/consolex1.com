export const metadata = {
  title: 'Legal notice',
  description: 'Legal information about consolex1, including publisher details and hosting terms.',
  openGraph: {
    title: 'consolex1 legal notice',
    description: 'Legal information about consolex1, including publisher details and hosting terms.',
    url: 'https://consolex1.com/en/mentions',
    images: ['/avatar.png'],
  },
};

export default function EnMentionsPage() {
  return (
    <section className="section legal-page">
      <div className="section-header">
        <h1>Legal notice</h1>
        <p>Information about the publisher, hosting, and legal framework covering consolex1.</p>
      </div>
      <div className="legal-content">
        <h2>Service publisher</h2>
        <p>consolex1 is a project run by an independent team based in France.</p>
        <p>Contact address: France.</p>
        <p>Contact email: contact@consolex1.com</p>

        <h2>Status</h2>
        <p>The project is currently being structured and is not yet formally registered as an association.</p>
        <p>Until that status is official, no paid services are sold through the platform.</p>
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
