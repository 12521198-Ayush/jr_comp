import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop and Establishment Act Registration | State Labor Law Compliance',
  description: 'Get Shop and Establishment Act registration for your business. JR Compliance provides complete assistance for shop license registration across all states.',
  keywords: 'shop registration, establishment registration, labor law, shop license, business compliance',
  openGraph: {
    title: 'Shop and Establishment Act Registration | State Labor Law Compliance',
    description: 'Get Shop and Establishment Act registration for your business. Complete assistance for shop license registration.',
    url: 'https://www.jrcompliance.com/corporate/shop-and-establishment-act-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ShopEstablishmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
