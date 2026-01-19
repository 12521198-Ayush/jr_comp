import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ISO Certification Registration - ISO Certificate Apply Online',
  description: 'We make ISO certification online hassle-free to ensure customer satisfaction. Click here to know all about ISO certification- Benefits.',
  keywords: 'ISO certification, ISO 9001, quality management, ISO certificate, international standards',
  openGraph: {
    title: 'ISO Certification Registration - ISO Certificate Apply Online',
    description: 'We make ISO certification online hassle-free to ensure customer satisfaction.',
    url: 'https://www.jrcompliance.com/corporate/iso-certification',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ISOCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
