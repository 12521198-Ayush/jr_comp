import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sole Proprietorship Registration | Sole Proprietorship Company/Firm registration',
  description: 'Want to register your sole proprietorship firm? Get your sole proprietorship company registration today from best company registration consultants.',
  keywords: 'sole proprietorship registration, sole proprietorship firm, proprietorship company, business registration',
  openGraph: {
    title: 'Sole Proprietorship Registration | Sole Proprietorship Company/Firm registration',
    description: 'Want to register your sole proprietorship firm? Get your sole proprietorship company registration today from best company registration consultants.',
    url: 'https://www.jrcompliance.com/corporate/sole-proprietorship-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SoleProprietorshipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
