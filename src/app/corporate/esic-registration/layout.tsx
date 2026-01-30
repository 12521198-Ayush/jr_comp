import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ESIC Registration Consultant in India - JR Compliance',
  description: 'Get your company\'s ESIC registration completed with JR Compliance. Verify that qualified employees are receiving medical, maternity, disability, and social security benefits in accordance with the ESI Act.',
  keywords: 'ESIC registration, ESI registration, employee insurance, health insurance, ESI compliance',
  openGraph: {
    title: 'ESIC Registration Consultant in India - JR Compliance',
    description: 'Get your company\'s ESIC registration completed with JR Compliance.',
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
