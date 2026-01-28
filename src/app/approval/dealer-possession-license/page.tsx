'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Radio } from 'lucide-react';

export default function DealerPossessionLicensePage() {
  return (
    <ServicePageTemplate
      title="Dealer Possession License (DPL)"
      subtitle="Authorization to Deal in Wireless Equipment"
      icon={Radio}
      color="purple"
      description="Authorization support for businesses dealing in wireless and RF communication equipment."
      serviceInfo="JR Compliance provides expert support for obtaining Dealer Possession License from the WPC Wing of Department of Telecommunications. Our regulatory consultants guide dealers, distributors, and traders through the complete DPL application process for wireless communication equipment. We help identify the appropriate equipment categories for your business operations and prepare comprehensive documentation for license application. Our team handles Saral Sanchar portal submissions, tracks application status, and coordinates with WPC officials to ensure timely approvals. We assist with security clearance requirements where applicable and manage all communication with regulatory authorities. Post-licensing, we provide renewal support, amendment assistance for adding new equipment categories, and ongoing compliance monitoring for your wireless equipment dealing operations."
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
