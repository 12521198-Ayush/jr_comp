import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPR BATTERY WASTE COMPLIANCE | Battery Waste Management',
  description: 'Get EPR Battery Waste Compliance certificate for battery waste management. Expert guidance for complete compliance with Battery Waste Management Rules.',
  keywords: 'EPR battery waste, battery waste compliance, battery waste management, EPR registration',
  openGraph: {
    title: 'EPR BATTERY WASTE COMPLIANCE | Battery Waste Management',
    description: 'Get EPR Battery Waste Compliance certificate for battery waste management.',
    url: 'https://www.jrcompliance.com/approval/epr-certification/battery-waste-compliance',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function BatteryWasteComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
