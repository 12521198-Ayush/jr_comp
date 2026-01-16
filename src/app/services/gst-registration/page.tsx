'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Receipt } from 'lucide-react';

export default function GSTRegistrationPage() {
  return (
    <ServicePageTemplate
      title="GST Registration"
      subtitle="Corporate Services"
      icon={Receipt}
      color="indigo"
      description="Get your GST registration done quickly and efficiently. Our experts ensure accurate filing and complete compliance with GST regulations. We handle everything from application to certificate delivery."
      benefits={[
        'Quick GSTIN in 3-5 working days',
        'Complete documentation support',
        'Error-free application filing',
        'ARN tracking and follow-up',
        'GST return filing guidance',
        'Input tax credit optimization advice',
        'Compliance calendar setup',
        'Post-registration support',
        'Amendment services available',
      ]}
      process={[
        { step: 'Document Collection', description: 'Gather all required documents and verify for accuracy.' },
        { step: 'Application Filing', description: 'Submit GST REG-01 application on the GST portal.' },
        { step: 'Verification', description: 'Follow up with authorities for any clarifications.' },
        { step: 'GSTIN Allotment', description: 'Receive your GST registration certificate with GSTIN.' },
      ]}
      documents={[
        'PAN Card of Business/Proprietor/Partners/Directors',
        'Aadhaar Card of Authorized Signatory',
        'Photograph of Authorized Signatory',
        'Business Address Proof (Electricity bill)',
        'Rental Agreement or Property Documents',
        'Bank Account Details (Cancelled cheque/Statement)',
        'Digital Signature (for companies)',
        'Authorization Letter',
      ]}
      faqs={[
        {
          question: 'Who needs to register for GST?',
          answer: 'Businesses with annual turnover exceeding ₹40 lakhs (₹20 lakhs for special category states) or those engaged in inter-state supply must register for GST.',
        },
        {
          question: 'How long does GST registration take?',
          answer: 'GST registration typically takes 3-5 working days after submission of all documents, subject to government processing.',
        },
        {
          question: 'Can I register for GST voluntarily?',
          answer: 'Yes, any business can register for GST voluntarily even if their turnover is below the threshold limit.',
        },
        {
          question: 'What happens after GST registration?',
          answer: 'After registration, you need to file GST returns regularly (monthly/quarterly) and comply with GST regulations.',
        },
      ]}
    />
  );
}
