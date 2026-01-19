import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DPCC Registration | Delhi Pollution Control Committee Approval',
  description: 'Get DPCC registration and approval for businesses operating in Delhi. Complete support for Consent to Establish, Consent to Operate, and environmental compliance.',
  keywords: 'DPCC registration, Delhi Pollution Control Committee, CTE Delhi, CTO Delhi, environmental approval',
  openGraph: {
    title: 'DPCC Registration | Delhi Pollution Control Committee Approval',
    description: 'Get DPCC registration and approval for businesses operating in Delhi.',
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
