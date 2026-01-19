import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPR E-Waste Compliance | E-Waste Management Registration',
  description: 'Get EPR E-Waste Compliance certificate for electronic waste management. Expert guidance for complete compliance with E-Waste Management Rules.',
  keywords: 'EPR e-waste, e-waste compliance, e-waste management, EPR registration, electronic waste',
  openGraph: {
    title: 'EPR E-Waste Compliance | E-Waste Management Registration',
    description: 'Get EPR E-Waste Compliance certificate for electronic waste management.',
    url: 'https://www.jrcompliance.com/approval/epr-certification/e-waste-compliance',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function EWasteComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
