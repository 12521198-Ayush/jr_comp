import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FCRA Registration | FCRA Online | How to apply for FCRA certificate',
  description: 'Looking for FCRA registration? Click here to know all about how to apply for an FCRA certificate. Get your FCRA Online now from best FCRA Registration or FCRA Certificate Consultants.',
  keywords: 'FCRA registration, foreign contribution, NGO registration, MHA approval, international funding, FCRA certificate',
  openGraph: {
    title: 'FCRA Registration | FCRA Online | How to apply for FCRA certificate',
    description: 'Looking for FCRA registration? Get your FCRA Online now from best FCRA Registration Consultants.',
    url: 'https://www.jrcompliance.com/corporate/fcra-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function FCRARegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
