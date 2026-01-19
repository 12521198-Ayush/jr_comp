'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Building } from 'lucide-react';

export default function DPCCPage() {
  return (
    <ServicePageTemplate
      title="DPCC Registration"
      subtitle="Delhi Pollution Control Committee"
      icon={Building}
      color="blue"
      description="Looking for a DPCC license consultant? Get DPCC certificate today online. Click here to know all aspects of DPCC registration - its registration process, functions, objectives, and policies."
      benefits={[
        'Consent to Establish (CTE) for Delhi',
        'Consent to Operate (CTO) assistance',
        'Hazardous waste authorization',
        'Bio-medical waste authorization',
        'E-waste management authorization',
        'Air and water pollution compliance',
        'Annual return filing support',
        'Inspection and audit assistance',
        'License renewal services',
      ]}
      process={[
        { step: 'Industry Assessment', description: 'Assess industry category and pollution potential.' },
        { step: 'CTE Application', description: 'Apply for Consent to Establish on DPCC portal.' },
        { step: 'Site Inspection', description: 'DPCC team inspects the premises.' },
        { step: 'CTO Grant', description: 'Receive Consent to Operate after compliance.' },
        { step: 'Regular Compliance', description: 'File returns and renew consent periodically.' },
      ]}
      documents={[
        'Company registration certificate',
        'Unit address and layout plan',
        'Land documents/lease agreement',
        'Manufacturing process details',
        'Pollution control equipment details',
        'Power and water connection proof',
        'Trade license from MCD',
        'Previous consent (if renewal)',
      ]}
      faqs={[
        {
          question: 'What is DPCC?',
          answer: 'DPCC (Delhi Pollution Control Committee) is the regulatory authority for pollution control and environmental compliance in Delhi.',
        },
        {
          question: 'Who needs DPCC consent?',
          answer: 'All industrial, manufacturing, and commercial units operating in Delhi need DPCC consent.',
        },
        {
          question: 'How to apply for DPCC consent?',
          answer: 'Applications are submitted online through the DPCC portal with required documents and fees.',
        },
        {
          question: 'What is the validity of DPCC consent?',
          answer: 'Consent validity ranges from 1-5 years depending on industry category and compliance.',
        },
        {
          question: 'What are penalties for operating without consent?',
          answer: 'Operating without valid consent can lead to closure notice, heavy fines, and legal prosecution.',
        },
      ]}
    />
  );
}
