import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Report (for FSSAI Compliance)',
  description: 'Ensure your food business meets FSSAI standards with accurate water quality reports. JR Compliance offers certified water testing services essential for FSSAI license and ongoing compliance.',
  keywords: 'water report, FSSAI water testing, water quality, food safety, NABL testing',
  openGraph: {
    title: 'Water Report (for FSSAI Compliance)',
    description: 'Ensure your food business meets FSSAI standards with accurate water quality reports.',
    url: 'https://www.jrcompliance.com/corporate/water-report',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function WaterReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
