import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NGO Registration | NGO Registration in Delhi - Register a Trust, Society, or Non-profit Company',
  description: 'Want to register a Trust, Society, or Non-profit Company (NGO)? Click to learn more about the NGO Registration Process, the documents required, and benefits. Get your NGO Registration in Delhi from the best consultants.',
  keywords: 'NGO registration, trust registration, society registration, non-profit company, section 8 company',
  openGraph: {
    title: 'NGO Registration | NGO Registration in Delhi - Register a Trust, Society, or Non-profit Company',
    description: 'Want to register a Trust, Society, or Non-profit Company (NGO)? Click to learn more about the NGO Registration Process, the documents required, and benefits.',
    url: 'https://www.jrcompliance.com/corporate/ngo-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function NGORegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
