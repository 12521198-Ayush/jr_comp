import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Drug CDSCO Registration | Pharmaceutical Drug Approval India',
  description: 'Get Drug CDSCO Registration for pharmaceutical products in India. Complete support for drug manufacturing license, import license, and regulatory compliance.',
  keywords: 'drug CDSCO registration, pharmaceutical registration, drug import license, drug manufacturing license',
  openGraph: {
    title: 'Drug CDSCO Registration | Pharmaceutical Drug Approval India',
    description: 'Get Drug CDSCO Registration for pharmaceutical products in India.',
    url: 'https://www.jrcompliance.com/approval/cdsco-registration/drug-cdsco-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function DrugCDSCOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
