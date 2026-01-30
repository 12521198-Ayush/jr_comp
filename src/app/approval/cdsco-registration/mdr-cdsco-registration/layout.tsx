import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MDR CDSCO Registration | Medical Device Registration - Certificate',
  description: 'We make the MDR license procedure hassle-free to ensure customer satisfaction. Click here to know how to get a CDSCO registration. Get your CDSCO certificate today.',
  keywords: 'MDR CDSCO registration, medical device registration, CDSCO approval, MDR 2017, CDSCO certificate',
  openGraph: {
    title: 'MDR CDSCO Registration | Medical Device Registration - Certificate',
    description: 'We make the MDR license procedure hassle-free. Get your CDSCO certificate today.',
    url: 'https://www.jrcompliance.com/approval/cdsco-registration/mdr-cdsco-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MDRCDSCOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
