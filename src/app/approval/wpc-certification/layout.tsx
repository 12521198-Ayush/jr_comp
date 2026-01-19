import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WPC Certification | WPC Certificate Consultants | WPC ETA Certificate',
  description: 'Looking for a reliable firm that can assist you in obtaining a WPC approval? Click here to know all about a WPC certification, WPC registration, Types, and Schemes. Get WPC ETA License from best consultants.',
  keywords: 'WPC certification, WPC certificate, WPC ETA, wireless planning commission, WPC consultants',
  openGraph: {
    title: 'WPC Certification | WPC Certificate Consultants | WPC ETA Certificate',
    description: 'Looking for a reliable firm that can assist you in obtaining a WPC approval? Get WPC ETA License from best consultants.',
    url: 'https://www.jrcompliance.com/approval/wpc-certification',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function WPCCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
