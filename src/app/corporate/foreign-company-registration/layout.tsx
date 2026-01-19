import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Foreign Company Registration',
  description: 'JR Compliance guarantees to provide you complete support in acquiring the Foreign Company Certificate. Click to know more about Foreign Company Registration.',
  keywords: 'foreign company registration, branch office, liaison office, subsidiary, FDI',
  openGraph: {
    title: 'Foreign Company Registration',
    description: 'JR Compliance guarantees to provide you complete support in acquiring the Foreign Company Certificate.',
    url: 'https://www.jrcompliance.com/corporate/foreign-company-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ForeignCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
