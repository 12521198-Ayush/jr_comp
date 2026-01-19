'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Coffee } from 'lucide-react';

export default function CoffeeBoardPage() {
  return (
    <ServicePageTemplate
      title="Coffee Board Registration"
      subtitle="Export Indian Coffee Globally"
      description="Get Coffee Board Registration for coffee export business. JR Compliance provides complete assistance for coffee growers, curers, and exporters."
      icon={Coffee}
      color="amber"
      benefits={[
        'Coffee export authorization',
        'Grower/Curer registration',
        'Export incentives access',
        'Quality certification',
        'Market linkage support',
        'Research & development access',
        'Brand building assistance',
        'International promotion'
      ]}
      process={[
        { step: 'Category Selection', description: 'Identify registration category (Grower/Curer/Exporter)' },
        { step: 'Online Application', description: 'Apply on Coffee Board portal' },
        { step: 'Document Submission', description: 'Submit required documents' },
        { step: 'Verification', description: 'Coffee Board verifies details' },
        { step: 'Inspection', description: 'Physical inspection if required' },
        { step: 'Certificate Issuance', description: 'Receive registration certificate' }
      ]}
      documents={[
        'Land Documents (for growers)',
        'IEC Certificate (for exporters)',
        'Company Registration',
        'PAN Card',
        'Processing Unit Details',
        'GST Registration',
        'Bank Account Details'
      ]}
      faqs={[
        { question: 'What is Coffee Board?', answer: 'Coffee Board of India is a statutory organization under Ministry of Commerce promoting coffee production, marketing, and export from India.' },
        { question: 'Who needs to register?', answer: 'Coffee growers with 2 hectares or more, coffee curers/dealers, and coffee exporters need to register with Coffee Board.' },
        { question: 'Is registration mandatory?', answer: 'Yes, registration is mandatory for coffee growers above threshold area, curers, and exporters to legally operate.' },
        { question: 'What support is provided?', answer: 'Coffee Board provides extension services, quality improvement programs, market information, export promotion, and subsidy schemes.' },
        { question: 'What is the validity?', answer: 'Registration is typically valid for the license period and needs periodic renewal as per Coffee Board norms.' }
      ]}
    />
  );
}
