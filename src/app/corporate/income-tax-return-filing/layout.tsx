import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Income Tax Return Filing | Expert ITR Filing Services',
  description: 'Get professional help for Income Tax Return filing. JR Compliance provides complete ITR filing services for individuals, businesses, and companies.',
  keywords: 'income tax return, ITR filing, tax filing, income tax consultant, tax compliance',
  openGraph: {
    title: 'Income Tax Return Filing | Expert ITR Filing Services',
    description: 'Get professional help for Income Tax Return filing. Complete ITR filing services.',
    url: 'https://www.jrcompliance.com/corporate/income-tax-return-filing',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function IncomeTaxReturnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
