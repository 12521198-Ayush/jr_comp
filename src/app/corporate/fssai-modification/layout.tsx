import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FSSAI Modification Consultant in India - JR Compliance',
  description: 'With JR Compliance, get your FSSAI Modification certificate. In order to ensure adherence to Indian food safety standards and laws, we help food firms obtain FSSAI registration or licensing.',
  keywords: 'FSSAI modification, FSSAI license update, food license modification, FSSAI amendment',
  openGraph: {
    title: 'FSSAI Modification Consultant in India - JR Compliance',
    description: 'With JR Compliance, get your FSSAI Modification certificate. In order to ensure adherence to Indian food safety standards and laws, we help food firms obtain FSSAI registration or licensing.',
    url: 'https://www.jrcompliance.com/corporate/fssai-modification',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function FSSAIModificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
