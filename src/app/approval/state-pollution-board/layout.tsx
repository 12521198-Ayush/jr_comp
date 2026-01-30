import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'State Pollution Control Committee | SPCB Registration',
  description: 'Get State Pollution Control Board Certificate now with India\'s leading compliance service provider. Click here and know easy steps.',
  keywords: 'SPCB registration, state pollution control board, CTE, CTO, pollution NOC, environmental compliance, pollution control committee',
  openGraph: {
    title: 'State Pollution Control Committee | SPCB Registration',
    description: 'Get State Pollution Control Board Certificate now with India\'s leading compliance service provider.',
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
