import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GST registration service provider in Delhi | GST Registration Consultants',
  description: 'Looking for the best GST registration service provider in Delhi? Our expert GST Registration Consultants in Delhi offer seamless and efficient GST registration services, ensuring compliance and accuracy',
  keywords: 'GST registration, GST consultant Delhi, GSTIN, goods and services tax, GST service provider',
  openGraph: {
    title: 'GST registration service provider in Delhi | GST Registration Consultants',
    description: 'Looking for the best GST registration service provider in Delhi? Our expert GST Registration Consultants in Delhi offer seamless and efficient GST registration services, ensuring compliance and accuracy',
    url: 'https://www.jrcompliance.com/corporate/gst-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function GSTRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
