import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'One Person Company ( OPC ) Registration | Online Process OPC Incorporation',
  description: 'What is a One Person Company registration? Click here to know all about an OPC registration, its benefits, documents required, and the process.',
  keywords: 'OPC registration, one person company, OPC incorporation, single owner company',
  openGraph: {
    title: 'One Person Company ( OPC ) Registration | Online Process OPC Incorporation',
    description: 'What is a One Person Company registration? Click here to know all about an OPC registration, its benefits, documents required, and the process.',
    url: 'https://www.jrcompliance.com/corporate/opc-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function OPCRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
