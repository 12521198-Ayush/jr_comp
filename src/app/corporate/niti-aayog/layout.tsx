import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NITI AAYOG Registration | NGO Darpan Portal',
  description: 'Register your NGO with NITI Aayog through the NGO Darpan portal. JR Compliance offers expert support for NITI Aayog registration to help you access government grants and build trust.',
  keywords: 'NITI Aayog registration, NGO Darpan, NGO registration, government grants, CSR funding',
  openGraph: {
    title: 'NITI AAYOG Registration | NGO Darpan Portal',
    description: 'Register your NGO with NITI Aayog through the NGO Darpan portal. JR Compliance offers expert support for NITI Aayog registration to help you access government grants and build trust.',
    url: 'https://www.jrcompliance.com/corporate/niti-aayog',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function NITIAayogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
