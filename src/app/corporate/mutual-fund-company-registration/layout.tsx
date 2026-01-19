import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mutual Fund Company Registration | How to Start a Mutual Fund Company?',
  description: 'Searching for the finest consultants who can assist you in how to start a mutual fund company registration? Click here to know about the mutual fund company registration.',
  keywords: 'mutual fund company, AMC registration, SEBI mutual fund, asset management company',
  openGraph: {
    title: 'Mutual Fund Company Registration | How to Start a Mutual Fund Company?',
    description: 'Searching for the finest consultants who can assist you in how to start a mutual fund company registration?',
    url: 'https://www.jrcompliance.com/corporate/mutual-fund-company-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MutualFundCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
