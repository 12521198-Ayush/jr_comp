import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Registration in India | Register Your Business - JR Compliance',
  description: 'Register your company in India with expert guidance. Private Ltd, LLP, OPC, Partnership, Section 8 & more. 5,000+ companies incorporated. Get started today!',
  keywords: 'company registration, business registration India, private limited company, LLP registration, OPC registration, partnership firm, company incorporation, MCA registration',
  openGraph: {
    title: 'Company Registration in India | Register Your Business - JR Compliance',
    description: 'Register your company in India with expert guidance. Private Ltd, LLP, OPC, Partnership, Section 8 & more. 5,000+ companies incorporated.',
    url: 'https://www.jrcompliance.com/corporate/company-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CompanyRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
