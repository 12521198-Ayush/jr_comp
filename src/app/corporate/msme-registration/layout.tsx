import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MSME Registration Online | MSME Certification Consultant Near me',
  description: 'We make MSME registration unchallenging without compromising our client\'s time constraints and do MSME registration online. Get MSME Certificate Online. Contact us to know the benefits and process of MSME registration.',
  keywords: 'MSME registration, Udyam registration, small business, micro enterprise, government schemes, MSME certificate',
  openGraph: {
    title: 'MSME Registration Online | MSME Certification Consultant Near me',
    description: 'We make MSME registration unchallenging. Get MSME Certificate Online.',
    url: 'https://www.jrcompliance.com/corporate/msme-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MSMERegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
