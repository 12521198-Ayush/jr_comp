import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RERA Registration - To Regulate and Promote Real Estate Sector | RERA Registration Online',
  description: 'We make RERA registration hassle-free. Click here to know about RERA registration for agents or brokers (official RERA website). Get your RERA Registration now from the best consultants.',
  keywords: 'RERA registration, real estate agent, RERA license, property broker, real estate regulatory',
  openGraph: {
    title: 'RERA Registration - To Regulate and Promote Real Estate Sector | RERA Registration Online',
    description: 'We make RERA registration hassle-free. Click here to know about RERA registration for agents or brokers.',
    url: 'https://www.jrcompliance.com/corporate/rera-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RERARegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
