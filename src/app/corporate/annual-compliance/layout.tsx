import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Annual Compliance Services for Companies | JR Compliance',
  description: 'Annual compliance services for Private Ltd, LLPs, OPCs, partnerships & NGOs. ROC filings, statutory compliance, tax returns & more. Avoid penalties with expert guidance.',
  keywords: 'annual compliance, ROC compliance, statutory compliance, MGT-7, AOC-4, annual filing, company compliance, tax compliance, GST filing, TDS return, annual return filing',
  openGraph: {
    title: 'Annual Compliance Services for Companies | JR Compliance',
    description: 'Annual compliance services for Private Ltd, LLPs, OPCs, partnerships & NGOs. ROC filings, statutory compliance, tax returns & more. Avoid penalties with expert guidance.',
    url: 'https://www.jrcompliance.com/corporate/annual-compliance',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AnnualComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
