import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scheme-X | BIS Certification Services',
  description: 'Looking for expert assistance in Scheme-X ? Click to know all about Scheme-X.',
  keywords: 'BIS certification, BIS registration, BIS consultants, ISI mark, CRS certification, Bureau of Indian Standards',
  openGraph: {
    title: 'BIS Certification | BIS Certification Process | BIS Certification Services',
    description: 'Get BIS certification services from the best Consultants in India known for trusted guidance, 100% compliance, and the best results for businesses.',
    url: 'https://www.jrcompliance.com/approval/bis-certification/scheme-x',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function BISCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
