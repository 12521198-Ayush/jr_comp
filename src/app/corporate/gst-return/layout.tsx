import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GST Return Filing Consultants | Expert GST Compliance Services',
  description: 'Get expert help for GST return filing. JR Compliance GST return filing consultants ensure timely and accurate GST compliance for your business.',
  keywords: 'GST return filing, GSTR-1, GSTR-3B, GST compliance, tax filing',
  openGraph: {
    title: 'GST Return Filing Consultants | Expert GST Compliance Services',
    description: 'Get expert help for GST return filing. JR Compliance ensures timely and accurate GST compliance.',
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
