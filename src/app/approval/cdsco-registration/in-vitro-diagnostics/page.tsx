'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Microscope } from 'lucide-react';

export default function IVDCDSCOPage() {
  return (
    <ServicePageTemplate
      title="In Vitro Diagnostics Registration"
      subtitle="IVD CDSCO Registration"
      icon={Microscope}
      color="cyan"
      description="Looking for expert assistance for In Vitro Diagnostics (IVDs) CDSCO Registration? Click to know all about In Vitro Diagnostics (IVDs) CDSCO Registration process."
      benefits={[
        'Mandatory for IVD market access in India',
        'Class A, B, C, D IVD registration',
        'Import and manufacturing license',
        'Expert regulatory guidance',
        'Clinical performance evaluation',
        'Quality management compliance',
        'Quick processing',
        'Renewal support',
        'Pan-India distribution',
      ]}
      process={[
        { step: 'IVD Classification', description: 'Classify IVD under IVDR 2017 (Class A/B/C/D).' },
        { step: 'Documentation', description: 'Prepare technical file and performance data.' },
        { step: 'Testing', description: 'Get IVD tested at approved laboratories.' },
        { step: 'CDSCO Application', description: 'Submit application on CDSCO portal.' },
        { step: 'Registration Grant', description: 'Receive CDSCO IVD registration certificate.' },
      ]}
      documents={[
        'Company registration documents',
        'Manufacturing license',
        'Device master file',
        'Quality management certificate (ISO 13485)',
        'Performance evaluation data',
        'Analytical and clinical study reports',
        'Labeling and IFU',
        'Declaration of conformity',
      ]}
      faqs={[
        {
          question: 'What is IVD registration?',
          answer: 'IVD registration is CDSCO approval for manufacturing or importing In Vitro Diagnostic medical devices in India.',
        },
        {
          question: 'What are IVD device classes?',
          answer: 'IVDs are classified as Class A (low risk) to Class D (highest risk) based on intended use and risk.',
        },
        {
          question: 'What IVDs need registration?',
          answer: 'Blood glucose monitors, pregnancy tests, HIV test kits, PCR kits, and all diagnostic devices need registration.',
        },
        {
          question: 'How long does IVD registration take?',
          answer: 'Registration takes 3-12 months depending on device class and documentation.',
        },
        {
          question: 'Is clinical study mandatory?',
          answer: 'Clinical performance evaluation is required for Class C and D IVDs in most cases.',
        },
      ]}
    />
  );
}
