import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust Registration',
  description: 'Trust Registration - Register your charitable or private trust with expert guidance from JR Compliance.',
  keywords: 'trust registration, charitable trust, trust deed, trust formation',
  openGraph: {
    title: 'Trust Registration',
    description: 'Trust Registration - Register your charitable or private trust with expert guidance from JR Compliance.',
    url: 'https://www.jrcompliance.com/corporate/trust-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function TrustRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
