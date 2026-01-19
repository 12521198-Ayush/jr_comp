import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TDS Return- Filing | Registration Consultants | Online | Services',
  description: 'We make TDS return filing procedure hassle-free to ensure customer satisfaction. Register your TDS return online. Click here to know all about TDS return e-filing- Features, Forms, Process, Services.',
  keywords: 'TDS return filing, TDS e-filing, form 24Q, form 26Q, TDS consultant',
  openGraph: {
    title: 'TDS Return- Filing | Registration Consultants | Online | Services',
    description: 'We make TDS return filing procedure hassle-free to ensure customer satisfaction. Register your TDS return online.',
    url: 'https://www.jrcompliance.com/corporate/tds-return',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TDSReturnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
