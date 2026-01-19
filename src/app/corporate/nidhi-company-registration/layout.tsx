import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NIDHI Company Registration - Nidhi Company Registration Online Process',
  description: 'Looking for the finest Nidhi company consultant? Get your Nidhi Company Registration today from best company registration consultants.',
  keywords: 'Nidhi company registration, mutual benefit company, Nidhi Rules, member savings',
  openGraph: {
    title: 'NIDHI Company Registration - Nidhi Company Registration Online Process',
    description: 'Looking for the finest Nidhi company consultant? Get your Nidhi Company Registration today from best company registration consultants.',
    url: 'https://www.jrcompliance.com/corporate/nidhi-company-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function NidhiCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
