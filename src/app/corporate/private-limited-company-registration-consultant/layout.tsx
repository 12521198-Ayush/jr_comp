import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Limited Company Registration Consultant in India',
  description: 'Looking for a reliable Private Limited Company Registration Consultant in India? Our expert team includes top Private Limited Company Certification Consultants in India.',
  keywords: 'private limited company registration, pvt ltd company, company registration consultant, private limited certification',
  openGraph: {
    title: 'Private Limited Company Registration Consultant in India',
    description: 'Looking for a reliable Private Limited Company Registration Consultant in India? Our expert team includes top Private Limited Company Certification Consultants in India.',
    url: 'https://www.jrcompliance.com/corporate/private-limited-company-registration-consultant',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PrivateLimitedCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
