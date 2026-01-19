import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Copyright Registration | Online Process and Services - A Right To Protect Original Work',
  description: 'We make the Copyright registration process hassle-free. Click here to know about documents required for copyright registration in India and its process.',
  keywords: 'copyright registration, copyright protection, intellectual property, copyright India',
  openGraph: {
    title: 'Copyright Registration | Online Process and Services - A Right To Protect Original Work',
    description: 'We make the Copyright registration process hassle-free. Click here to know about documents required for copyright registration in India.',
    url: 'https://www.jrcompliance.com/corporate/copyright-registration',
    siteName: 'JR Compliance',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function CopyrightRegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
