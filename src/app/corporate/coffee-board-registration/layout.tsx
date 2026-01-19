import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'COFFEE BOARD REGISTRATION',
  description: 'COFFEE BOARD REGISTRATION - Get your Coffee Board Registration for coffee export business with expert guidance from JR Compliance.',
  keywords: 'coffee board registration, coffee export, coffee grower registration, coffee curer',
  openGraph: {
    title: 'COFFEE BOARD REGISTRATION',
    description: 'COFFEE BOARD REGISTRATION - Get your Coffee Board Registration for coffee export business with expert guidance.',
    url: 'https://www.jrcompliance.com/corporate/coffee-board-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CoffeeBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
