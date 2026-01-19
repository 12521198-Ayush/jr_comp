import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnership Firm Registration- All You Need to Know | Partnership Firm',
  description: 'JR Compliance- finest partnership firm registration service provider. Get your partnership firm registration today from best firm registration consultants. Click to know benefits, documents required, and registration process.',
  keywords: 'partnership firm registration, partnership deed, firm registration, business partnership',
  openGraph: {
    title: 'Partnership Firm Registration- All You Need to Know | Partnership Firm',
    description: 'JR Compliance- finest partnership firm registration service provider. Get your partnership firm registration today from best firm registration consultants.',
    url: 'https://www.jrcompliance.com/corporate/partnership-firm-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PartnershipFirmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
