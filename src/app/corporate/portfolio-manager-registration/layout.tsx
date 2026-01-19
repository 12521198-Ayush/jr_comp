import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio Manager Registration - SEBI Registered Portfolio Management Services',
  description: 'Register as a Portfolio Manager with SEBI. JR Compliance provides complete assistance for Portfolio Manager registration and compliance requirements.',
  keywords: 'portfolio manager registration, SEBI registration, PMS registration, investment advisor',
  openGraph: {
    title: 'Portfolio Manager Registration - SEBI Registered Portfolio Management Services',
    description: 'Register as a Portfolio Manager with SEBI. Complete assistance for Portfolio Manager registration.',
    url: 'https://www.jrcompliance.com/corporate/portfolio-manager-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PortfolioManagerRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
