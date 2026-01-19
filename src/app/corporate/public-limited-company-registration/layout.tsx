import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Public Limited Company Registration Consultant | Apply for Public Limited Company Registration',
  description: 'Need a Public Limited Company Registration Consultant? Apply for Public Limited Company Registration with our expert consultants for seamless and professional assistance.',
  keywords: 'public limited company, public company registration, listed company, stock exchange',
  openGraph: {
    title: 'Public Limited Company Registration Consultant | Apply for Public Limited Company Registration',
    description: 'Need a Public Limited Company Registration Consultant? Apply for Public Limited Company Registration with our expert consultants.',
    url: 'https://www.jrcompliance.com/corporate/public-limited-company-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PublicLimitedCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
