'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { CreditCard } from 'lucide-react';

export default function PANCompanyPage() {
  return (
    <ServicePageTemplate
      title="PAN Registration for Company"
      subtitle="Corporate PAN Application"
      description="Get PAN Card for your company or LLP. JR Compliance provides complete assistance for PAN registration and application for business entities."
      icon={CreditCard}
      color="blue"
      benefits={[
        'Tax compliance requirement',
        'Bank account opening',
        'TDS deduction authority',
        'Business transactions',
        'Income tax filing',
        'Government tenders',
        'Loan applications',
        'Business credibility'
      ]}
      process={[
        { step: 'Document Collection', description: 'Collect required company documents' },
        { step: 'Form Preparation', description: 'Prepare Form 49A/49AA' },
        { step: 'Application Submission', description: 'Submit application to NSDL/UTIITSL' },
        { step: 'Fee Payment', description: 'Pay applicable PAN fees' },
        { step: 'Processing', description: 'Application processing by ITD' },
        { step: 'PAN Allotment', description: 'Receive PAN card' }
      ]}
      documents={[
        'Certificate of Incorporation',
        'MOA & AOA/LLP Agreement',
        'Board Resolution',
        'Identity Proof of Directors',
        'Address Proof of Company',
        'Passport Photo of Authorized Signatory'
      ]}
      faqs={[
        { question: 'Is PAN mandatory for companies?', answer: 'Yes, PAN is mandatory for all companies, LLPs, and other business entities for tax purposes, bank accounts, and financial transactions.' },
        { question: 'What is the processing time?', answer: 'PAN is typically issued within 15-20 working days from application submission.' },
        { question: 'What are the PAN fees?', answer: 'PAN application fee is Rs. 93 (including GST) for Indian address and Rs. 864 for foreign address.' },
        { question: 'Can PAN be applied during incorporation?', answer: 'Yes, PAN and TAN can be applied along with SPICe+ form during company incorporation process.' },
        { question: 'What if company address changes?', answer: 'PAN correction application needs to be filed with updated address proof for any changes in company details.' }
      ]}
    />
  );
}
