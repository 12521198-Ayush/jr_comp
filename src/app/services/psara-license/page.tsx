'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Shield } from 'lucide-react';

export default function PSARALicensePage() {
  return (
    <ServicePageTemplate
      title="PSARA License"
      subtitle="Corporate Services"
      icon={Shield}
      color="amber"
      description="Obtain PSARA (Private Security Agencies Regulation Act) license for your private security business. We handle the complete application process including documentation, police verification, and follow-up with authorities."
      serviceInfo="JR Compliance provides comprehensive PSARA license services for private security agencies across all states in India. Our regulatory experts guide you through state-specific PSARA requirements and help prepare complete documentation for license application. We assist with company registration verification, police verification coordination, and security guard training documentation. Our team handles the complete application submission, tracks progress with controlling authorities, and addresses any queries or clarifications required. We ensure compliance with all PSARA Act provisions including principal employer obligations and security personnel verification. Post-licensing, we provide renewal support, amendment services for expanding operations, and ongoing regulatory compliance guidance for your security business."
      benefits={[
        'End-to-end application assistance',
        'State-wise license expertise',
        'Police verification coordination',
        'Document preparation and verification',
        'License renewal services',
        'Amendment and modification support',
        'Multi-state license assistance',
        'Compliance training guidance',
        'Quick turnaround time',
      ]}
      process={[
        { step: 'Eligibility Check', description: 'Verify your eligibility and business requirements.' },
        { step: 'Documentation', description: 'Prepare all required documents including police verification.' },
        { step: 'Application Filing', description: 'Submit application with concerned authority.' },
        { step: 'License Issuance', description: 'Receive PSARA license after inspection and approval.' },
      ]}
      documents={[
        'Company/Firm registration documents',
        'PAN Card of entity and directors',
        'Aadhaar Card of all directors/partners',
        'Police verification certificate',
        'Character certificate of directors',
        'Passport size photographs',
        'Address proof of office premises',
        'Employee training certificates',
        'Insurance policy details',
        'Bank account statements',
      ]}
      faqs={[
        {
          question: 'Who needs a PSARA license?',
          answer: 'Any person or entity providing private security services such as security guards, bouncers, or surveillance services needs a PSARA license.',
        },
        {
          question: 'What is the validity of PSARA license?',
          answer: 'PSARA license is valid for 5 years from the date of issue. Renewal application must be filed before expiry.',
        },
        {
          question: 'Can I operate in multiple states with one license?',
          answer: 'No, PSARA license is state-specific. You need separate licenses for each state where you want to operate.',
        },
        {
          question: 'What are the penalties for operating without PSARA license?',
          answer: 'Operating without valid PSARA license can result in imprisonment up to 1 year and/or fine up to ₹25,000.',
        },
      ]}
    />
  );
}
