'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Leaf } from 'lucide-react';

export default function SpiceBoardPage() {
  return (
    <ServicePageTemplate
      title="Spice Board Registration"
      subtitle="Export Your Spices Globally"
      description="Spice Board Registration in India - Get Experts Help for Spice Board Registration. JR Compliance provides complete assistance for spice exporters."
      icon={Leaf}
      color="orange"
      benefits={[
        'Spice export authorization',
        'Quality certification support',
        'Export incentives access',
        'International market access',
        'RCMC for spices',
        'Trade fair participation',
        'Brand promotion support',
        'Technical assistance'
      ]}
      process={[
        { step: 'IEC Verification', description: 'Ensure valid Import Export Code' },
        { step: 'Online Application', description: 'Apply on Spice Board portal' },
        { step: 'Document Submission', description: 'Submit required documents online' },
        { step: 'Processing', description: 'Spice Board processes the application' },
        { step: 'Verification', description: 'Documents and facilities verified' },
        { step: 'RCMC Issuance', description: 'Receive Registration Certificate' }
      ]}
      documents={[
        'IEC Certificate',
        'Company Registration',
        'PAN Card',
        'GST Registration',
        'Bank Details',
        'Processing Unit License (if applicable)',
        'FSSAI License'
      ]}
      faqs={[
        { question: 'What is Spice Board?', answer: 'Spice Board India is a commodity board under Ministry of Commerce promoting export of spices from India. It provides registration, quality certification, and export assistance.' },
        { question: 'Which products are covered?', answer: 'All spices including pepper, cardamom, chilli, ginger, turmeric, coriander, cumin, and other spice products are covered under Spice Board.' },
        { question: 'Is registration mandatory for spice export?', answer: 'Yes, Spice Board RCMC is mandatory for availing export incentives and participating in government export promotion schemes.' },
        { question: 'What is the validity?', answer: 'Spice Board RCMC is valid for 5 years and renewable before expiry.' },
        { question: 'What support does Spice Board provide?', answer: 'Spice Board provides quality certification, trade fair participation, buyer-seller meets, market development, and research & development support.' }
      ]}
    />
  );
}
