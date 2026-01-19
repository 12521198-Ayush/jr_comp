import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPCB Registration | Central Pollution Control Board Compliance',
  description: 'Get CPCB registration for hazardous waste management, e-waste recycling, and other environmental compliance requirements. Expert guidance for CPCB approvals.',
  keywords: 'CPCB registration, Central Pollution Control Board, hazardous waste, environmental compliance',
  openGraph: {
    title: 'CPCB Registration | Central Pollution Control Board Compliance',
    description: 'Get CPCB registration for hazardous waste management and environmental compliance.',
    url: 'https://www.jrcompliance.com/approval/cpcb-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CPCBRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
