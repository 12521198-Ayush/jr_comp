import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark Evidence Filing',
  description: 'Submit your trademark evidence accurately and on time with JR Compliance. We help you prepare and file the required documents to support your trademark registration.',
  keywords: 'trademark evidence, trademark filing, trademark documentation, trademark registration, IP consultant',
  openGraph: {
    title: 'Trademark Evidence Filing',
    description: 'Submit your trademark evidence accurately and on time with JR Compliance.',
    url: 'https://www.jrcompliance.com/corporate/trademark-evidence-filing',
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

export default function TrademarkEvidenceFilingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
