import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MSME Registration | Udyam Registration Services for Small Business',
  description: 'Get MSME/Udyam registration for your business. JR Compliance provides complete assistance for MSME registration to avail government benefits and schemes.',
  keywords: 'MSME registration, Udyam registration, small business, micro enterprise, government schemes',
  openGraph: {
    title: 'MSME Registration | Udyam Registration Services for Small Business',
    description: 'Get MSME/Udyam registration for your business. Complete assistance for MSME registration.',
    url: 'https://www.jrcompliance.com/corporate/msme-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MSMERegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
