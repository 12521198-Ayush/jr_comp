import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'State Pollution Control Board Registration | SPCB Compliance',
  description: 'Get State Pollution Control Board (SPCB) registration for your business. Complete assistance with NOC, Consent to Establish (CTE), and Consent to Operate (CTO) approvals.',
  keywords: 'SPCB registration, state pollution control board, CTE, CTO, pollution NOC, environmental compliance',
  openGraph: {
    title: 'State Pollution Control Board Registration | SPCB Compliance',
    description: 'Get State Pollution Control Board (SPCB) registration for your business.',
    url: 'https://www.jrcompliance.com/approval/state-pollution-board',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function StatePollutionBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
