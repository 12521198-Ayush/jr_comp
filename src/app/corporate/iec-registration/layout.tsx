import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IEC Registration | IEC Code - Apply For Import Export Code Online',
  description: 'We make IEC registration hassle-free to ensure customer satisfaction. Click here to know all about how to apply for import export code or IEC Code. Get your import export code ( IEC ) registration online.',
  keywords: 'IEC registration, import export code, DGFT, international trade, IEC code apply',
  openGraph: {
    title: 'IEC Registration | IEC Code - Apply For Import Export Code Online',
    description: 'We make IEC registration hassle-free to ensure customer satisfaction. Click here to know all about how to apply for import export code or IEC Code.',
    url: 'https://www.jrcompliance.com/corporate/iec-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function IECRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
