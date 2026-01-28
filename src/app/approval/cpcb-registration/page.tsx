'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Building2 } from 'lucide-react';

export default function CPCBPage() {
  return (
    <ServicePageTemplate
      title="CPCB Registration"
      subtitle="Central Pollution Control Board Compliance Services"
      icon={Building2}
      color="green"
      description="Assistance with central environmental registrations and nationwide compliance requirements."
      serviceInfo="JR Compliance provides comprehensive support for Central Pollution Control Board registrations and environmental compliance requirements across India. Our environmental consultants help identify all applicable CPCB registrations for your business, including EPR authorization, hazardous waste management, and various waste category registrations. We prepare detailed compliance plans, waste management documentation, and submit applications on the CPCB centralized portal on your behalf. Our team coordinates with authorized recyclers and waste processors, ensuring your business meets all environmental obligations efficiently. We handle quarterly and annual return filing, compliance monitoring, and audit preparation to keep you penalty-free. Post-registration, we provide ongoing environmental compliance management, authorization renewals, and assistance with any regulatory changes affecting your operations."
      benefits={[
        'EPR authorization support',
        'Hazardous waste authorization',
        'E-waste management registration',
        'Plastic waste registration',
        'Battery waste authorization',
        'Used oil management registration',
        'Annual return filing support',
        'Compliance monitoring',
        'Pan-India operations support',
      ]}
      process={[
        { step: 'Requirement Analysis', description: 'Identify applicable CPCB registrations for your business.' },
        { step: 'Document Preparation', description: 'Prepare compliance plan and required documents.' },
        { step: 'Portal Registration', description: 'Submit application on CPCB online portal.' },
        { step: 'Review Process', description: 'CPCB reviews application and documents.' },
        { step: 'Authorization Grant', description: 'Receive CPCB authorization/registration.' },
      ]}
      documents={[
        'Company registration certificate',
        'GST registration',
        'PAN card',
        'Business activity details',
        'Waste management plan',
        'SPCB consent (if applicable)',
        'Recycler/processor agreements',
        'Previous authorization (if renewal)',
      ]}
      faqs={[
        {
          question: 'What is CPCB?',
          answer: 'CPCB (Central Pollution Control Board) is the apex body for environmental protection and pollution control in India.',
        },
        {
          question: 'What registrations does CPCB provide?',
          answer: 'CPCB provides EPR authorization, hazardous waste authorization, and various waste management registrations.',
        },
        {
          question: 'Who needs CPCB registration?',
          answer: 'Producers, importers, recyclers, and waste processors dealing with e-waste, plastic, batteries, etc. need CPCB registration.',
        },
        {
          question: 'How to apply for CPCB registration?',
          answer: 'Applications are submitted online through the CPCB EPR portal with required documents.',
        },
        {
          question: 'What is the difference between CPCB and SPCB?',
          answer: 'CPCB is the central body setting policies, while SPCB (State Boards) implement regulations at state level.',
        },
      ]}
    />
  );
}
