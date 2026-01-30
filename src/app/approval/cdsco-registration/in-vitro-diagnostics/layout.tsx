import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In Vitro Diagnostics (IVDs) CDSCO Registration',
  description: 'Looking for expert assistance for In Vitro Diagnostics (IVDs) CDSCO Registration? Click to know all about In Vitro Diagnostics (IVDs) CDSCO Registration.',
  keywords: 'IVD registration, in vitro diagnostics, CDSCO IVD approval, diagnostic device registration, IVDs CDSCO',
  openGraph: {
    title: 'In Vitro Diagnostics (IVDs) CDSCO Registration',
    description: 'Looking for expert assistance for In Vitro Diagnostics (IVDs) CDSCO Registration?',
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
