import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark Search',
  description: 'Trademark Search - Conduct comprehensive trademark search before registration to protect your brand.',
  keywords: 'trademark search, trademark availability, brand search, trademark database',
  openGraph: {
    title: 'Trademark Search',
    description: 'Trademark Search - Conduct comprehensive trademark search before registration to protect your brand.',
    url: 'https://www.jrcompliance.com/corporate/trademark-registration/trademark-search',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TrademarkSearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
