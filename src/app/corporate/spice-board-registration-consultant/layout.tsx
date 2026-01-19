import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spice Board Registration in India | Get Experts Help for Spice Board Registration',
  description: 'Spice Board Registration in India | Get Experts Help for Spice Board Registration.',
  keywords: 'spice board registration, spice export, RCMC spices, spice board India',
  openGraph: {
    title: 'Spice Board Registration in India | Get Experts Help for Spice Board Registration',
    description: 'Spice Board Registration in India | Get Experts Help for Spice Board Registration.',
    url: 'https://www.jrcompliance.com/corporate/spice-board-registration-consultant',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SpiceBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
