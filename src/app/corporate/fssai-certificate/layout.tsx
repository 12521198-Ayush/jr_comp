import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FSSAI License Consultant Near Me | Food License Online Process',
  description: 'Looking to get an FSSAI Registration for your food products? Click here to learn about how to get FSSAI license. So get your FSSAI Certification from the best consultants.',
  keywords: 'FSSAI license, FSSAI registration, food license, FSSAI consultant, food safety certification',
  openGraph: {
    title: 'FSSAI License Consultant Near Me | Food License Online Process',
    description: 'Looking to get an FSSAI Registration for your food products? Click here to learn about how to get FSSAI license. So get your FSSAI Certification from the best consultants.',
    url: 'https://www.jrcompliance.com/corporate/fssai-certificate',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function FSSAICertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
