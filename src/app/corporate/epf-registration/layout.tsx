import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPF Registration | Employee Provident Fund Registration Services',
  description: 'Get EPF registration for your establishment. JR Compliance provides complete assistance for EPF registration and PF compliance for employers.',
  keywords: 'EPF registration, PF registration, provident fund, EPFO, employee benefits',
  openGraph: {
    title: 'EPF Registration | Employee Provident Fund Registration Services',
    description: 'Get EPF registration for your establishment. Complete assistance for EPF registration.',
    url: 'https://www.jrcompliance.com/corporate/epf-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function EPFRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
