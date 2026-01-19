import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PAN Registration for Individual | Personal PAN Application Services',
  description: 'Get PAN Card for individuals. JR Compliance provides complete assistance for PAN registration and application for individuals, NRIs, and foreign nationals.',
  keywords: 'PAN card individual, personal PAN, PAN registration, tax identity, PAN application',
  openGraph: {
    title: 'PAN Registration for Individual | Personal PAN Application Services',
    description: 'Get PAN Card for individuals. Complete assistance for PAN registration.',
    url: 'https://www.jrcompliance.com/corporate/pan-registration-individual',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PANIndividualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
