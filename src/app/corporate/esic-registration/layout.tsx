import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESIC Registration | Employee State Insurance Registration Services',
  description: 'Get ESIC registration for your establishment. JR Compliance provides complete assistance for ESIC registration and compliance for employers and employees.',
  keywords: 'ESIC registration, ESI registration, employee insurance, health insurance, ESI compliance',
  openGraph: {
    title: 'ESIC Registration | Employee State Insurance Registration Services',
    description: 'Get ESIC registration for your establishment. Complete assistance for ESIC registration.',
    url: 'https://www.jrcompliance.com/corporate/esic-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ESICRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
