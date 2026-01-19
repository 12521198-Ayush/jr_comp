import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PAN Registration for Company | Corporate PAN Application Services',
  description: 'Get PAN Card for your company or LLP. JR Compliance provides complete assistance for PAN registration and application for business entities.',
  keywords: 'PAN card company, corporate PAN, business PAN, PAN registration, tax identification',
  openGraph: {
    title: 'PAN Registration for Company | Corporate PAN Application Services',
    description: 'Get PAN Card for your company or LLP. Complete assistance for PAN registration.',
    url: 'https://www.jrcompliance.com/corporate/pan-registration-company',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PANCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
