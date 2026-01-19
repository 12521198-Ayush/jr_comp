import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Non-Dealer Possession License | NDPL for Personal Arms',
  description: 'Get Non-Dealer Possession License (NDPL) for personal arms and ammunition. Complete support for individual license application and compliance.',
  keywords: 'non-dealer possession license, NDPL license, personal arms license, individual ammunition license',
  openGraph: {
    title: 'Non-Dealer Possession License | NDPL for Personal Arms',
    description: 'Get Non-Dealer Possession License (NDPL) for personal arms and ammunition.',
    url: 'https://www.jrcompliance.com/approval/non-dealer-possession-license',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function NonDealerPossessionLicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
