import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PF & ESI Return Filing | Monthly Compliance Services',
  description: 'Get expert help for PF and ESI return filing. JR Compliance provides complete assistance for monthly PF/ESI compliance and return filing.',
  keywords: 'PF return, ESI return, EPF filing, ESIC filing, payroll compliance',
  openGraph: {
    title: 'PF & ESI Return Filing | Monthly Compliance Services',
    description: 'Get expert help for PF and ESI return filing. Complete assistance for monthly compliance.',
    url: 'https://www.jrcompliance.com/corporate/pf-esi-return',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PFESIReturnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
