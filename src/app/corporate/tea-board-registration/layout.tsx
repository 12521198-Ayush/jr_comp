import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TEA BOARD REGISTRATION',
  description: 'TEA BOARD REGISTRATION - Get your Tea Board Registration for tea export business with expert guidance from JR Compliance.',
  keywords: 'tea board registration, tea export, tea manufacturer registration, tea grower',
  openGraph: {
    title: 'TEA BOARD REGISTRATION',
    description: 'TEA BOARD REGISTRATION - Get your Tea Board Registration for tea export business with expert guidance.',
    url: 'https://www.jrcompliance.com/corporate/tea-board-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TeaBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
