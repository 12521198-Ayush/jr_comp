'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Activity } from 'lucide-react';

export default function MDRCDSCOPage() {
  return (
    <ServicePageTemplate
      title="MDR CDSCO Registration"
      subtitle="Medical Device Registration"
      icon={Activity}
      color="red"
      description="We make the MDR license procedure hassle-free to ensure customer satisfaction. Click here to know how to get a CDSCO registration. Get your CDSCO certificate today."
      benefits={[
        'Mandatory for medical device market access',
        'Class A, B, C, D device registration',
        'Import and manufacturing license',
        'Expert regulatory guidance',
        'Clinical evaluation support',
        'Quality management compliance',
        'Quick processing',
        'Renewal and variation support',
        'Pan-India market access',
      ]}
      process={[
        { step: 'Device Classification', description: 'Classify medical device under MDR 2017 (Class A/B/C/D).' },
        { step: 'Documentation', description: 'Prepare technical file and quality documents.' },
        { step: 'Testing', description: 'Get device tested at approved laboratories.' },
        { step: 'CDSCO Application', description: 'Submit application on CDSCO portal.' },
        { step: 'Registration Grant', description: 'Receive CDSCO registration certificate.' },
      ]}
      documents={[
        'Company registration documents',
        'Manufacturing license',
        'Device master file',
        'Quality management certificate (ISO 13485)',
        'Test reports and clinical data',
        'Labeling and packaging details',
        'Risk analysis documents',
        'Declaration of conformity',
      ]}
      faqs={[
        {
          question: 'What is MDR registration?',
          answer: 'MDR (Medical Device Rules 2017) registration is mandatory CDSCO approval for manufacturing or importing medical devices in India.',
        },
        {
          question: 'What are MDR device classes?',
          answer: 'Medical devices are classified as Class A (low risk), Class B (moderate risk), Class C (high risk), and Class D (highest risk).',
        },
        {
          question: 'How long does MDR registration take?',
          answer: 'Registration takes 3-12 months depending on device class and documentation completeness.',
        },
        {
          question: 'Is ISO 13485 mandatory?',
          answer: 'Yes, ISO 13485 quality management certification is required for Class B, C, and D medical devices.',
        },
        {
          question: 'What is the validity of MDR registration?',
          answer: 'MDR registration is valid for 5 years and can be renewed before expiry.',
        },
      ]}
    />
  );
}
