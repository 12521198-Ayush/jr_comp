import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foreign Manufacturer Certification Scheme | FMCS Consultants | FMCS License',
  description: 'JR Compliance guarantees to provide you complete support in acquiring the FMCS BIS certificate. Click to know more about Foreign Manufacturer Certification Scheme. Choose best FMCS consultants',
  keywords: 'FMCS certification, foreign manufacturer certification, FMCS license, BIS FMCS, FMCS consultants',
  openGraph: {
    title: 'Foreign Manufacturer Certification Scheme | FMCS Consultants | FMCS License',
    description: 'JR Compliance guarantees to provide you complete support in acquiring the FMCS BIS certificate.',
    url: 'https://www.jrcompliance.com/approval/bis-certification/fmcs-bis-certification',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function FMCSCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
