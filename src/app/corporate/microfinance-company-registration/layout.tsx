import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Microfinance Company Registration',
  description: 'Looking for expert assistance in Micro finance Company Registration? Click to know all about how to start a microfinance company.',
  keywords: 'microfinance company registration, NBFC-MFI, microfinance license, MFI registration',
  openGraph: {
    title: 'Microfinance Company Registration',
    description: 'Looking for expert assistance in Micro finance Company Registration? Click to know all about how to start a microfinance company.',
    url: 'https://www.jrcompliance.com/corporate/microfinance-company-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MicrofinanceCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
