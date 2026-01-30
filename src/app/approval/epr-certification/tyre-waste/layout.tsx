import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPR TYRE WASTE | Tyre Waste Management',
  description: 'EPR TYRE WASTE registration for tyre producers and importers. Complete support for compliance with EPR regulations for waste tyres.',
  keywords: 'EPR tyre waste, tyre waste compliance, tyre waste management, EPR registration',
  openGraph: {
    title: 'EPR TYRE WASTE | Tyre Waste Management',
    description: 'EPR TYRE WASTE registration for tyre producers and importers.',
    url: 'https://www.jrcompliance.com/approval/epr-certification/tyre-waste',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TyreWasteComplianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
