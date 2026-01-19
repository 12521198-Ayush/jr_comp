import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ayush License | Ayush Manufacturing License - Registration Consultants Online',
  description: 'Searching for quick AYUSH license registration? Click here to know about how to get AYUSH license. A License For Ayurvedic Products, Get your Ayush manufacturing license registration online from best consultants.',
  keywords: 'AYUSH license, Ayurvedic license, manufacturing license, ASU drugs, homeopathy license',
  openGraph: {
    title: 'Ayush License | Ayush Manufacturing License - Registration Consultants Online',
    description: 'Searching for quick AYUSH license registration? Click here to know about how to get AYUSH license.',
    url: 'https://www.jrcompliance.com/corporate/ayush-license',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AyushLicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
