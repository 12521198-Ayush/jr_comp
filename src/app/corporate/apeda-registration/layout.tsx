import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'APEDA Registration Online | APEDA Certificate',
  description: 'Looking for expert assistance in APEDA Registration? APEDA Registration process is simple and hassle-free.',
  keywords: 'APEDA registration, RCMC, agricultural export, food export, APEDA certificate',
  openGraph: {
    title: 'APEDA Registration Online | APEDA Certificate',
    description: 'Looking for expert assistance in APEDA Registration? APEDA Registration process is simple and hassle-free.',
    url: 'https://www.jrcompliance.com/corporate/apeda-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function APEDARegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
