import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to File MSME Return Form 1? | MSME Compliance Services',
  description: 'Learn how to file MSME Return Form 1. JR Compliance provides complete assistance for MSME return filing and compliance requirements.',
  keywords: 'MSME return, Form 1, Udyam registration, MSME compliance, small business',
  openGraph: {
    title: 'How to File MSME Return Form 1? | MSME Compliance Services',
    description: 'Learn how to file MSME Return Form 1. Complete assistance for MSME return filing.',
    url: 'https://www.jrcompliance.com/corporate/msme-return',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function MSMEReturnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
