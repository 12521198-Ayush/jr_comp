import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Startup India Registration Services | Certificate - An Initiative By Indian Government',
  description: 'Searching for finest Startup India registration consultants? Get your Startup India Certificate Today. Click here to know about the Startup India registration process.',
  keywords: 'startup india registration, startup certificate, DPIIT recognition, startup india scheme, startup benefits',
  openGraph: {
    title: 'Startup India Registration Services | Certificate - An Initiative By Indian Government',
    description: 'Searching for finest Startup India registration consultants? Get your Startup India Certificate Today. Click here to know about the Startup India registration process.',
    url: 'https://www.jrcompliance.com/corporate/startup-india-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function StartupIndiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
