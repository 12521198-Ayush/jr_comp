import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to File Income Tax Return? | ITR Filing | Income Tax Return status Due Dates',
  description: 'We make the ITR filing hassle-free to ensure customer satisfaction. Get your ITR filing form online. Click here to know How to file income tax return. Check your Income Tax Return status and Income Tax Due Dates.',
  keywords: 'income tax return, ITR filing, tax filing, income tax consultant, tax compliance, ITR status',
  openGraph: {
    title: 'How to File Income Tax Return? | ITR Filing | Income Tax Return status Due Dates',
    description: 'We make the ITR filing hassle-free to ensure customer satisfaction. Get your ITR filing form online.',
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
