import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tobacco Board Registration Consultant online in India',
  description: 'Tobacco Board Registration Consultant online in India',
  keywords: 'tobacco board registration, tobacco export, Virginia tobacco, tobacco trading',
  openGraph: {
    title: 'Tobacco Board Registration Consultant online in India',
    description: 'Tobacco Board Registration Consultant online in India',
    url: 'https://www.jrcompliance.com/corporate/tobacco-board-registration-consultant',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TobaccoBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
