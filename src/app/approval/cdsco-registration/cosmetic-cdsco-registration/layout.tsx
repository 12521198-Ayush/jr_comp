import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cosmetic CDSCO Registration | Cosmetic Product Registration India',
  description: 'Get Cosmetic CDSCO Registration for cosmetic products in India. Complete support for import license and compliance with Drugs and Cosmetics Act.',
  keywords: 'cosmetic CDSCO registration, cosmetic product registration, cosmetic import license, CDSCO cosmetics',
  openGraph: {
    title: 'Cosmetic CDSCO Registration | Cosmetic Product Registration India',
    description: 'Get Cosmetic CDSCO Registration for cosmetic products in India.',
    url: 'https://www.jrcompliance.com/approval/cdsco-registration/cosmetic-cdsco-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CosmeticCDSCOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
