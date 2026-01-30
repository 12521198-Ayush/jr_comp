import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PAN Registration (Company)',
  description: 'Need a PAN for your company? JR Compliance offers fast and reliable company PAN registration services to help you get your Permanent Account Number for tax and legal compliance.',
  keywords: 'PAN card company, corporate PAN, business PAN, PAN registration, tax identification',
  openGraph: {
    title: 'PAN Registration (Company)',
    description: 'Need a PAN for your company? JR Compliance offers fast and reliable company PAN registration services.',
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
