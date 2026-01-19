import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patent Registration in India | Get Experts Help for Patent Registration',
  description: 'Patent Registration in India | Get Experts Help for Patent Registration',
  keywords: 'patent registration, patent filing, invention protection, IPO India, patent consultant',
  openGraph: {
    title: 'Patent Registration in India | Get Experts Help for Patent Registration',
    description: 'Patent Registration in India | Get Experts Help for Patent Registration',
    url: 'https://www.jrcompliance.com/corporate/patent-registration-consultant',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PatentRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
