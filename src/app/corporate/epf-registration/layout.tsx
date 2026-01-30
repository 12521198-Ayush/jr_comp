import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPF Registration Consultant in India - JR Compliance',
  description: 'Register your company with JR Compliance under the Employee Provident Fund (EPF). We assist employers with regulatory requirements, employee contributions, digital registration, and ongoing following to EPFO standards.',
  keywords: 'EPF registration, PF registration, provident fund, EPFO, employee benefits',
  openGraph: {
    title: 'EPF Registration Consultant in India - JR Compliance',
    description: 'Register your company with JR Compliance under the Employee Provident Fund (EPF).',
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
