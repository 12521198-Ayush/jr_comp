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
      serviceInfo="JR Compliance provides comprehensive Coffee Board registration services for growers, curers, dealers, and exporters of Indian coffee. Our export consultants guide you through the registration categories including estate registration, curing works license, and exporter authorization as per Coffee Board requirements. We prepare complete documentation including plantation details, processing facility credentials, and export capabilities for the registration application. Our team handles the complete Coffee Board submission process on their portal, tracks application status, and coordinates with Board officials. We assist with understanding coffee quality certification, auction participation, and export documentation requirements. Post-registration, we provide ongoing support for registration renewals, compliance with Coffee Board rules, and assistance with accessing export promotion schemes and quality improvement programs."
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
