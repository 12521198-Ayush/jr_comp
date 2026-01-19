import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BEE Certification | Bureau of Energy Efficiency Registration',
  description: 'Get BEE Certification for energy-efficient products. Complete support for Bureau of Energy Efficiency star labeling and compliance requirements.',
  keywords: 'BEE certification, Bureau of Energy Efficiency, energy star label, energy efficiency certification',
  openGraph: {
    title: 'BEE Certification | Bureau of Energy Efficiency Registration',
    description: 'Get BEE Certification for energy-efficient products.',
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
