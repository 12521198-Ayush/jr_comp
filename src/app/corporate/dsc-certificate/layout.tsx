import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply For Digital Signature Certificate Online | DSC Registration | DSC Provider',
  description: 'Looking for an easy way to obtain a DSC certificate? Click here to know about how to apply for Digital Signature Certificate online. Get your Digital Signature Certificate now from best DSC service provider.',
  keywords: 'digital signature certificate, DSC, DSC registration, digital signature, e-signature',
  openGraph: {
    title: 'Apply For Digital Signature Certificate Online | DSC Registration | DSC Provider',
    description: 'Looking for an easy way to obtain a DSC certificate? Click here to know about how to apply for Digital Signature Certificate online.',
    url: 'https://www.jrcompliance.com/corporate/dsc-certificate',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DSCCertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
