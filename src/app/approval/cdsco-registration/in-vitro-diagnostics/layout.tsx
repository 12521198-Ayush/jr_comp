import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In Vitro Diagnostics Registration | IVD CDSCO Approval India',
  description: 'Get In Vitro Diagnostics (IVD) registration with CDSCO. Complete support for IVD product approval, testing, and regulatory compliance in India.',
  keywords: 'IVD registration, in vitro diagnostics, CDSCO IVD approval, diagnostic device registration',
  openGraph: {
    title: 'In Vitro Diagnostics Registration | IVD CDSCO Approval India',
    description: 'Get In Vitro Diagnostics (IVD) registration with CDSCO.',
    url: 'https://www.jrcompliance.com/approval/cdsco-registration/in-vitro-diagnostics',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function InVitroDiagnosticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
