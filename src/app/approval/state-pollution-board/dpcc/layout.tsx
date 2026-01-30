import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to get registration in DPCC | DPCC Certificate | Delhi Pollution Control Committee & Waste Management Authorization',
  description: 'Looking for a DPCC license consultant? Get DPCC certificate today online. Click here to know all aspects of DPCC registration - its registration process, functions, objectives, and policies.',
  keywords: 'DPCC registration, Delhi Pollution Control Committee, DPCC certificate, DPCC license, waste management authorization',
  openGraph: {
    title: 'DPCC Certificate | Delhi Pollution Control Committee Registration',
    description: 'Looking for a DPCC license consultant? Get DPCC certificate today online.',
    url: 'https://www.jrcompliance.com/approval/state-pollution-board/dpcc',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DPCCRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
