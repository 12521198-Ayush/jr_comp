import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Get AERB License | AERB Certificate Registration Consultants',
  description: 'We make the AERB license registration hassle-free. Get your AERB certificate today from best consultants. Click here to know how to get AERB approvals and know AERB certificate registration process.',
  keywords: 'AERB license, Atomic Energy Regulatory Board, AERB certificate, radiation equipment license, AERB consultants',
  openGraph: {
    title: 'How to Get AERB License | AERB Certificate Registration Consultants',
    description: 'We make the AERB license registration hassle-free. Get your AERB certificate today from best consultants.',
    url: 'https://www.jrcompliance.com/approval/aerb-license',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function AERBLicenseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
