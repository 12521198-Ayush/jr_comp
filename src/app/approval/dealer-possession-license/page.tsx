'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Radio } from 'lucide-react';

export default function DealerPossessionLicensePage() {
  return (
    <ServicePageTemplate
      title="Dealer Possession License"
      subtitle="DPL - WPC License"
      icon={Radio}
      color="purple"
      description="Dealer Possession License (DPL) for trading wireless equipment in India. Get complete support for WPC DPL registration from expert consultants."
      benefits={[
        'Legal authorization to deal in wireless equipment',
        'Trading and selling wireless devices',
        'Import authorization for wireless products',
        'Multi-category equipment coverage',
        'Quick processing and approval',
        'License renewal support',
        'Compliance monitoring',
        'Expert consultation',
        'Pan-India operations',
      ]}
      process={[
        { step: 'Equipment Identification', description: 'Identify wireless equipment categories for DPL.' },
        { step: 'Document Preparation', description: 'Prepare required documents and application.' },
        { step: 'WPC Application', description: 'Submit DPL application to WPC wing.' },
        { step: 'Review Process', description: 'WPC reviews application and documents.' },
        { step: 'License Grant', description: 'Receive Dealer Possession License.' },
      ]}
      documents={[
        'Company registration certificate',
        'GST registration',
        'PAN card',
        'Address proof of premises',
        'Equipment details and categories',
        'Authorization from manufacturer/importer',
        'Security clearance (if required)',
        'Previous license (if renewal)',
      ]}
      faqs={[
        {
          question: 'What is Dealer Possession License?',
          answer: 'DPL (Dealer Possession License) authorizes dealers to possess, sell, and trade wireless equipment in India.',
        },
        {
          question: 'Who needs DPL?',
          answer: 'Dealers, distributors, and traders dealing in wireless communication equipment need DPL from WPC.',
        },
        {
          question: 'What is the difference between DPL and NDPL?',
          answer: 'DPL is for dealers who sell wireless equipment, while NDPL is for entities possessing but not dealing in such equipment.',
        },
        {
          question: 'What is the validity of DPL?',
          answer: 'DPL is typically valid for 1-5 years depending on equipment category and can be renewed.',
        },
        {
          question: 'Can DPL holder import wireless equipment?',
          answer: 'DPL holders can deal in imported equipment but may need additional import licenses.',
        },
      ]}
    />
  );
}
