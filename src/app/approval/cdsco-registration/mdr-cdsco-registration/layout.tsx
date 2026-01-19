import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MDR CDSCO Registration | Medical Device Registration India',
  description: 'Get MDR CDSCO Registration for medical devices in India. Complete support for Medical Device Rules 2017 compliance and CDSCO approval process.',
  keywords: 'MDR CDSCO registration, medical device registration, CDSCO approval, MDR 2017',
  openGraph: {
    title: 'MDR CDSCO Registration | Medical Device Registration India',
    description: 'Get MDR CDSCO Registration for medical devices in India.',
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
