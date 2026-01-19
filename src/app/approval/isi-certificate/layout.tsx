import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ISI Certification Online | ISI Certification Consultant in India',
  description: 'JR Compliance guarantees to provide you with complete support in acquiring the ISI mark-a mark for safety. Click to learn more about ISI Certification Online, ISI Certification Consultant in India.',
  keywords: 'ISI certification, ISI mark, ISI consultants, BIS ISI, ISI registration',
  openGraph: {
    title: 'ISI Certification Online | ISI Certification Consultant in India',
    description: 'JR Compliance guarantees to provide you with complete support in acquiring the ISI mark-a mark for safety.',
    url: 'https://www.jrcompliance.com/approval/isi-certificate',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ISICertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
