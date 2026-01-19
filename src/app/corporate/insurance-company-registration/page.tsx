'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Shield } from 'lucide-react';

export default function InsuranceCompanyPage() {
  return (
    <ServicePageTemplate
      title="Insurance Company Registration"
      subtitle="IRDAI Licensed Insurance Business"
      description="We make the Insurance Company registration process easy. Get your Insurance Company Registration today from best company registration consultants."
      icon={Shield}
      color="blue"
      benefits={[
        'Legal insurance business operations',
        'IRDAI regulated credibility',
        'Wide market access',
        'Multiple product offerings',
        'Reinsurance arrangements',
        'Policyholder trust',
        'Long-term business model',
        'Investment opportunities'
      ]}
      process={[
        { step: 'Company Formation', description: 'Register as public limited company with insurance objectives' },
        { step: 'Capital Arrangement', description: 'Arrange minimum capital as per IRDAI requirements' },
        { step: 'Application Preparation', description: 'Prepare detailed business plan and application' },
        { step: 'IRDAI Application', description: 'Submit application to IRDAI for R1 registration' },
        { step: 'Due Diligence', description: 'IRDAI conducts thorough verification and assessment' },
        { step: 'License Grant', description: 'Receive Certificate of Registration from IRDAI' }
      ]}
      documents={[
        'Company Incorporation Certificate',
        'MOA & AOA',
        'Business Plan',
        'Capital Proof',
        'Directors\' Background',
        'IT Infrastructure Details',
        'Actuarial Reports',
        'Reinsurance Arrangements'
      ]}
      faqs={[
        { question: 'What is the minimum capital required?', answer: 'Life insurance requires ₹100 crore, general insurance requires ₹100 crore, health insurance requires ₹100 crore, and reinsurance requires ₹200 crore minimum capital.' },
        { question: 'Who regulates insurance companies in India?', answer: 'Insurance Regulatory and Development Authority of India (IRDAI) regulates and supervises all insurance companies in India.' },
        { question: 'Can foreign companies start insurance business in India?', answer: 'Yes, foreign companies can enter through joint ventures with Indian partners. FDI up to 74% is permitted in insurance sector.' },
        { question: 'What types of insurance licenses are available?', answer: 'Life insurance, general insurance, health insurance, and reinsurance licenses are available from IRDAI.' },
        { question: 'How long does registration take?', answer: 'Insurance company registration is a lengthy process taking 12-24 months depending on documentation and IRDAI review.' }
      ]}
    />
  );
}
