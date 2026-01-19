import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Society Registration',
  description: 'Looking to register a society? JR Compliance offers end-to-end society registration services to help you legally establish your society under the Societies Registration Act with ease and speed.',
  keywords: 'society registration, societies registration act, cultural society, charitable society',
  openGraph: {
    title: 'Society Registration',
    description: 'Looking to register a society? JR Compliance offers end-to-end society registration services to help you legally establish your society.',
    url: 'https://www.jrcompliance.com/corporate/society-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function SocietyRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
