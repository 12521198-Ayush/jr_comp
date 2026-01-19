import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AERB License | Atomic Energy Regulatory Board Registration',
  description: 'Get AERB License for radiation equipment and radioactive materials. Complete support for AERB approvals, documentation, and compliance requirements.',
  keywords: 'AERB license, Atomic Energy Regulatory Board, radiation equipment license, radioactive materials',
  openGraph: {
    title: 'AERB License | Atomic Energy Regulatory Board Registration',
    description: 'Get AERB License for radiation equipment and radioactive materials.',
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
