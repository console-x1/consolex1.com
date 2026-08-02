import Header from '@/components/Header';
import Footer from '@/components/Footer';

type PageShellProps = {
  locale: 'fr' | 'en';
  children: React.ReactNode;
};

export default function PageShell({ locale, children }: PageShellProps) {
  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
