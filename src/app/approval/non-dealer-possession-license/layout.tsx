import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Non Dealer Possession License (NDPL) | Wireless Products License',
  description: 'The NDPL License, which stands for "Non-Dealer Possession License," is given to businesses that do not sell or own wireless products.',
  keywords: 'non-dealer possession license, NDPL license, wireless products license, NDPL registration',
  openGraph: {
    title: 'Non Dealer Possession License (NDPL) | Wireless Products License',
    description: 'The NDPL License is given to businesses that do not sell or own wireless products.',
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
