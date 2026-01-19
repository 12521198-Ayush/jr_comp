import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Producer Company Registration | Online Registration Process | Producer company Documents',
  description: 'Time to complete Producer Company Registration easily. Get your Producer Company Registration from best company registration consultants. Click here to know all about the producer company incorporation procedure.',
  keywords: 'producer company registration, farmer company, agricultural company, producer organization',
  openGraph: {
    title: 'Producer Company Registration | Online Registration Process | Producer company Documents',
    description: 'Time to complete Producer Company Registration easily. Get your Producer Company Registration from best company registration consultants.',
    url: 'https://www.jrcompliance.com/corporate/producer-company-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ProducerCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
