import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Company Registration | Best Consultants in India',
  description: 'We make the Insurance Company registration process easy. Get your Insurance Company Registration today from best company registration consultants.',
  keywords: 'insurance company registration, IRDAI license, insurance license, insurance business',
  openGraph: {
    title: 'Insurance Company Registration | Best Consultants in India',
    description: 'We make the Insurance Company registration process easy. Get your Insurance Company Registration today from best company registration consultants.',
    url: 'https://www.jrcompliance.com/corporate/insurance-company-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function InsuranceCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
