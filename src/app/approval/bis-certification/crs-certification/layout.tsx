import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CRS Certification Service | CRS Scheme - Registration | CRS certification consultant',
  description: 'JR Compliance guarantees to provide you complete support in acquiring the CRS certification-a certificate for safety. Click to know more about CRS certification - its process and BIS CRS list (product). CRS certification consultant',
  keywords: 'CRS certification, CRS scheme, CRS registration, BIS CRS, compulsory registration scheme',
  openGraph: {
    title: 'CRS Certification Service | CRS Scheme - Registration',
    description: 'JR Compliance guarantees to provide you complete support in acquiring the CRS certification-a certificate for safety.',
    url: 'https://www.jrcompliance.com/approval/bis-certification/crs-certification',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CRSCertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
