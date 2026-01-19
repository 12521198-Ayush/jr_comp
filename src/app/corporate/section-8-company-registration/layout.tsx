import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Section 8 Company Certification Consultants in Delhi',
  description: 'Professional Section 8 Company Certification Consultants in Delhi and Section 8 Company Registration Consultants offer expert guidance in forming and maintaining compliance for non-profit organizations under the Indian Companies Act, 2013',
  keywords: 'Section 8 company, non-profit company, charitable company, Section 8 registration Delhi',
  openGraph: {
    title: 'Section 8 Company Certification Consultants in Delhi',
    description: 'Professional Section 8 Company Certification Consultants in Delhi offer expert guidance in forming and maintaining compliance for non-profit organizations.',
    url: 'https://www.jrcompliance.com/corporate/section-8-company-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function Section8CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
