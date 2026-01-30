import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scheme-X | BIS Certification Services',
  description: 'Looking for expert assistance in Scheme-X? Click to know all about Scheme-X.',
  keywords: 'Scheme-X, BIS certification, BIS registration, BIS consultants, Bureau of Indian Standards',
  openGraph: {
    title: 'Scheme-X | BIS Certification Services',
    description: 'Looking for expert assistance in Scheme-X? Click to know all about Scheme-X.',
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
