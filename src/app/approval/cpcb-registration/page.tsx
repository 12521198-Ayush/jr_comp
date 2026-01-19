'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Building2 } from 'lucide-react';

export default function CPCBPage() {
  return (
    <ServicePageTemplate
      title="CPCB Registration"
      subtitle="Central Pollution Control Board"
      icon={Building2}
      color="green"
      description="CPCB Registration services for waste management, EPR authorization, and environmental compliance. Get complete support from expert consultants."
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
