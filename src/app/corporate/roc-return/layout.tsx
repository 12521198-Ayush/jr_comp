import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ROC return filing online | ROC return form - ROC registration status',
  description: 'We make the ROC return registration or filing hassle-free to ensure customer satisfaction. Get your ROC return filing form online. Click here to know about Annual Filing with ROC.',
  keywords: 'ROC return filing, annual return, MCA filing, AOC-4, MGT-7, company compliance',
  openGraph: {
    title: 'ROC return filing online | ROC return form - ROC registration status',
    description: 'We make the ROC return registration or filing hassle-free to ensure customer satisfaction. Get your ROC return filing form online.',
    url: 'https://www.jrcompliance.com/corporate/roc-return',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ROCReturnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
