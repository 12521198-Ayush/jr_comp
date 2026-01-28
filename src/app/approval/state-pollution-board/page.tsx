'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Factory } from 'lucide-react';

export default function StatePollutionBoardPage() {
  return (
    <ServicePageTemplate
      title="State Pollution Control Board"
      subtitle="Environmental Permissions from State Authorities"
      icon={Factory}
      color="emerald"
      description="Obtaining state-level environmental consents and operational permissions for businesses."
      serviceInfo="At JR Compliance, we provide end-to-end support for obtaining State Pollution Control Board consents and environmental permissions across all Indian states. Our environmental experts assess your industry category (Red, Orange, Green, or White) and determine the applicable consent requirements for your operations. We prepare comprehensive documentation including pollution control equipment details, emission data, and environmental management plans for CTE and CTO applications. Our team handles the complete application process on respective state portals and coordinates site inspections with SPCB officials. We assist with hazardous waste authorization, air and water pollution compliance, and factory license coordination as per state-specific requirements. Post-consent, we provide annual return filing support, consent renewals, and ongoing environmental compliance management for your facilities."
      benefits={[
        'Consent to Establish (CTE) support',
        'Consent to Operate (CTO) assistance',
        'Hazardous waste authorization',
        'Air and water pollution compliance',
        'Environmental clearance support',
        'Factory license coordination',
        'Annual return filing',
        'Inspection and audit support',
        'Multi-state compliance management',
      ]}
      process={[
        { step: 'Industry Assessment', description: 'Assess industry category (Red/Orange/Green/White).' },
        { step: 'CTE Application', description: 'Apply for Consent to Establish before setting up.' },
        { step: 'Compliance Setup', description: 'Install required pollution control equipment.' },
        { step: 'CTO Application', description: 'Apply for Consent to Operate after setup.' },
        { step: 'Regular Renewal', description: 'Renew consents and file annual returns.' },
      ]}
      documents={[
        'Company registration documents',
        'Factory/unit address proof',
        'Land ownership/lease documents',
        'Building plan approval',
        'Manufacturing process details',
        'Pollution control equipment details',
        'Water and power connection proof',
        'Environmental impact assessment (if applicable)',
      ]}
      faqs={[
        {
          question: 'What is SPCB registration?',
          answer: 'SPCB (State Pollution Control Board) registration is mandatory consent for industries to establish and operate while meeting pollution control norms.',
        },
        {
          question: 'What is CTE and CTO?',
          answer: 'CTE (Consent to Establish) is required before setting up a unit. CTO (Consent to Operate) is required before starting operations.',
        },
        {
          question: 'Which industries need SPCB consent?',
          answer: 'All manufacturing, processing, and industrial units need SPCB consent based on their pollution potential category.',
        },
        {
          question: 'What are the industry categories?',
          answer: 'Industries are classified as Red (highly polluting), Orange (moderately polluting), Green (less polluting), and White (non-polluting).',
        },
        {
          question: 'What is the validity of consent?',
          answer: 'CTO validity ranges from 1-15 years depending on industry category and compliance history.',
        },
      ]}
    />
  );
}
