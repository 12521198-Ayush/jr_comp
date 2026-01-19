import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FCRA Registration | Foreign Contribution Regulation Act Compliance',
  description: 'Get FCRA registration for your NGO. JR Compliance provides complete assistance for FCRA registration to receive foreign contributions legally.',
  keywords: 'FCRA registration, foreign contribution, NGO registration, MHA approval, international funding',
  openGraph: {
    title: 'FCRA Registration | Foreign Contribution Regulation Act Compliance',
    description: 'Get FCRA registration for your NGO. Complete assistance for FCRA registration.',
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
