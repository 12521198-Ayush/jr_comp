import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark Hearing',
  description: 'Facing a trademark hearing? JR Compliance offers professional guidance to help you navigate the trademark hearing process smoothly.',
  keywords: 'trademark hearing, trademark examination, trademark objection hearing, IP hearing, trademark consultant',
  openGraph: {
    title: 'Trademark Hearing',
    description: 'Facing a trademark hearing? JR Compliance offers professional guidance to help you navigate the trademark hearing process smoothly.',
    url: 'https://www.jrcompliance.com/corporate/trademark-hearing',
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

export default function TrademarkHearingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
