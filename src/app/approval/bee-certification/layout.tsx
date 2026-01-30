import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BEE Certification Consultants | BEE Registration in India',
  description: 'Looking to get BEE Certification? Get your BEE Certificate Registration from best consultants with hassle free process.',
  keywords: 'BEE certification, Bureau of Energy Efficiency, energy star label, energy efficiency certification, BEE consultants',
  openGraph: {
    title: 'BEE Certification Consultants | BEE Registration in India',
    description: 'Looking to get BEE Certification? Get your BEE Certificate Registration from best consultants.',
    url: 'https://www.jrcompliance.com/approval/bee-certification',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function BEECertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
