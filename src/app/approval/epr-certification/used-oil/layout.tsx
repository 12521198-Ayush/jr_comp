import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPR Used Oil Compliance | Used Oil Management',
  description: 'EPR Used Oil Compliance registration for lubricant producers and importers. Complete support for Hazardous Waste Management Rules compliance.',
  keywords: 'EPR used oil, used oil compliance, used oil management, EPR registration, lubricant waste',
  openGraph: {
    title: 'EPR Used Oil Compliance | Used Oil Management',
    description: 'EPR Used Oil Compliance registration for lubricant producers and importers.',
    url: 'https://www.jrcompliance.com/approval/epr-certification/used-oil',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function UsedOilComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
