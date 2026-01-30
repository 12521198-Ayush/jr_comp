import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GST Return Filing Consultants Near Me | GST Return Filing Online',
  description: 'If are you looking for GST Return Filing Online, GST Return Filing Consultants Near Me, and GST Return Filing Service Provider then Jr Compliance Best Choice for you.',
  keywords: 'GST return filing, GSTR-1, GSTR-3B, GST compliance, tax filing, GST consultants',
  openGraph: {
    title: 'GST Return Filing Consultants Near Me | GST Return Filing Online',
    description: 'Looking for GST Return Filing Online? Jr Compliance Best Choice for you.',
    url: 'https://www.jrcompliance.com/corporate/gst-return',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function GSTReturnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
