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
      description="Regulatory support for Delhi-based entities requiring pollution control approvals and authorizations."
      serviceInfo="JR Compliance provides specialized support for Delhi Pollution Control Committee registrations and environmental consents for businesses operating in Delhi NCR. Our environmental consultants guide you through Delhi-specific pollution control requirements, including Consent to Establish, Consent to Operate, and various waste management authorizations. We prepare complete documentation packages including pollution control equipment specifications, emission monitoring data, and environmental compliance plans. Our team handles all DPCC portal submissions, tracks application status, and coordinates site inspections with DPCC officials on your behalf. We assist with hazardous waste, bio-medical waste, and e-waste management authorizations as per Delhi regulations. Post-consent, we provide annual return filing, consent renewals, and ongoing compliance monitoring to ensure your Delhi operations remain environmentally compliant."
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
