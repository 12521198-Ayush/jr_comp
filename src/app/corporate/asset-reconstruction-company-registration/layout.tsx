import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asset Reconstruction Company Registration | JR Compliance',
  description: 'We make the Asset Reconstruction Company registration hassle-free to ensure customer satisfaction. Click here to know about Asset Reconstruction Company registration with RBI.',
  keywords: 'asset reconstruction company, ARC registration, RBI ARC, NPA resolution',
  openGraph: {
    title: 'Asset Reconstruction Company Registration | JR Compliance',
    description: 'We make the Asset Reconstruction Company registration hassle-free to ensure customer satisfaction.',
    url: 'https://www.jrcompliance.com/corporate/asset-reconstruction-company-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AssetReconstructionCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
