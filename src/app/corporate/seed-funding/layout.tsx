import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seed Funding Assistance | Startup India Seed Fund Scheme Support',
  description: 'Get assistance for seed funding for your startup. JR Compliance helps startups access seed funding through government schemes and investor networks.',
  keywords: 'seed funding, startup funding, SISFS, Startup India, early stage funding',
  openGraph: {
    title: 'Seed Funding Assistance | Startup India Seed Fund Scheme Support',
    description: 'Get assistance for seed funding for your startup. Access government schemes and investor networks.',
    url: 'https://www.jrcompliance.com/corporate/seed-funding',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SeedFundingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
