import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Tax Registration | State-wise PT Compliance Services',
  description: 'Get Professional Tax registration for your business. JR Compliance provides complete assistance for PT registration and compliance across all states.',
  keywords: 'professional tax, PT registration, state tax, payroll tax, employee tax',
  openGraph: {
    title: 'Professional Tax Registration | State-wise PT Compliance Services',
    description: 'Get Professional Tax registration for your business. Complete assistance for PT registration.',
    url: 'https://www.jrcompliance.com/corporate/professional-tax-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function ProfessionalTaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
