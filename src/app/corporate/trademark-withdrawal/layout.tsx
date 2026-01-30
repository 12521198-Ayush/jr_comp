import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark Withdrawal',
  description: 'Need to withdraw a trademark application? JR Compliance provides professional assistance for trademark withdrawal process to help you manage your intellectual property portfolio.',
  keywords: 'trademark withdrawal, trademark removal, trademark cancellation, trademark application, IP consultant',
  openGraph: {
    title: 'Trademark Withdrawal',
    description: 'Need to withdraw a trademark application? JR Compliance provides professional assistance.',
    url: 'https://www.jrcompliance.com/corporate/trademark-withdrawal',
    siteName: 'JR Compliance',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function TrademarkWithdrawalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
