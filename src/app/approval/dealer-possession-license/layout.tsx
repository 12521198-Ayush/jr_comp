import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DEALER POSSESSION LICENSE (DPL) | Arms and Ammunition License',
  description: 'Get Dealer Possession License (DPL) for arms and ammunition dealers. Complete support for license application, documentation, and compliance requirements.',
  keywords: 'dealer possession license, DPL license, arms dealer license, ammunition license',
  openGraph: {
    title: 'DEALER POSSESSION LICENSE (DPL) | Arms and Ammunition License',
    description: 'Get Dealer Possession License (DPL) for arms and ammunition dealers.',
    url: 'https://www.jrcompliance.com/approval/dealer-possession-license',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DealerPossessionLicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
