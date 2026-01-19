import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LLP Registration Consultants in India | Online LLP Registration in Delhi',
  description: 'Are you searching for LLP Registration Consultants in India? You have arrived at the right place. click here to learn more about LLP Registration in India. So get your LLP Certificate now.',
  keywords: 'LLP registration, limited liability partnership, LLP consultant, LLP Delhi',
  openGraph: {
    title: 'LLP Registration Consultants in India | Online LLP Registration in Delhi',
    description: 'Are you searching for LLP Registration Consultants in India? You have arrived at the right place. click here to learn more about LLP Registration in India.',
    url: 'https://www.jrcompliance.com/corporate/llp-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function LLPRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
