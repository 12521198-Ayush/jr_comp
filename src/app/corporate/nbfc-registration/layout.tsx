import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NBFC Registration | NBFC License Registration - All You Need to Know',
  description: 'Looking for a consultant for the registration of NBFC? Click here to know all about NBFC registration. NBFC is known as Non Banking Financial Corporations.',
  keywords: 'NBFC registration, non-banking financial company, NBFC license, RBI registration, financial services',
  openGraph: {
    title: 'NBFC Registration | NBFC License Registration - All You Need to Know',
    description: 'Looking for a consultant for the registration of NBFC? Click here to know all about NBFC registration.',
    url: 'https://www.jrcompliance.com/corporate/nbfc-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function NBFCRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
