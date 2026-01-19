import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CSR Registration | Corporate Social Responsibility Compliance Services',
  description: 'Get CSR registration and compliance assistance. JR Compliance helps companies meet their CSR obligations under Companies Act 2013.',
  keywords: 'CSR registration, corporate social responsibility, CSR compliance, Companies Act, CSR-1',
  openGraph: {
    title: 'CSR Registration | Corporate Social Responsibility Compliance Services',
    description: 'Get CSR registration and compliance assistance. Meet CSR obligations under Companies Act 2013.',
    url: 'https://www.jrcompliance.com/corporate/csr-regisration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CSRRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
