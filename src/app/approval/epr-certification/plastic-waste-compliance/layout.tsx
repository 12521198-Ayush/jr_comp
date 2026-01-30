import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPR - Plastic Waste Compliance | Plastic Waste Management',
  description: 'EPR - Plastic Waste Compliance registration for producers, importers, and brand owners. Get complete support for Plastic Waste Management Rules compliance.',
  keywords: 'EPR plastic waste, plastic waste compliance, plastic waste management, EPR registration, PWM rules',
  openGraph: {
    title: 'EPR - Plastic Waste Compliance | Plastic Waste Management',
    description: 'EPR - Plastic Waste Compliance registration for producers, importers, and brand owners.',
    url: 'https://www.jrcompliance.com/approval/epr-certification/plastic-waste-compliance',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PlasticWasteComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
