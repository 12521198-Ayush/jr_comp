import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademark registration consultants in Delhi | Trademark registration service provider near me',
  description: 'Looking for Trademark Registration consultants in Delhi & trademark registration service provider near me than Jr Compliance Best Trademark Registration service Provider in Delhi NCR',
  keywords: 'trademark registration, trademark consultants delhi, trademark service provider, brand protection',
  openGraph: {
    title: 'Trademark registration consultants in Delhi | Trademark registration service provider near me',
    description: 'Looking for Trademark Registration consultants in Delhi & trademark registration service provider near me than Jr Compliance Best Trademark Registration service Provider in Delhi NCR',
    url: 'https://www.jrcompliance.com/corporate/trademark-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TrademarkRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
