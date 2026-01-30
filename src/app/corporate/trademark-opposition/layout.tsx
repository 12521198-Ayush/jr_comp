import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark Opposition',
  description: 'Facing a trademark opposition? JR Compliance offers professional support to help you defend or challenge trademarks during the opposition process.',
  keywords: 'trademark opposition, trademark objection, trademark challenge, trademark defense, IP consultant',
  openGraph: {
    title: 'Trademark Opposition',
    description: 'Facing a trademark opposition? JR Compliance offers professional support to help you defend or challenge trademarks.',
    url: 'https://www.jrcompliance.com/corporate/trademark-opposition',
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

export default function TrademarkOppositionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
