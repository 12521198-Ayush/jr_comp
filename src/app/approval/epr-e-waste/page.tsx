'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Monitor } from 'lucide-react';

export default function EPREWastePage() {
  return (
    <ServicePageTemplate
      title="EPR E-Waste"
      subtitle="E-Waste Extended Producer Responsibility"
      icon={Monitor}
      color="green"
      description="EPR E-Waste registration is mandatory for producers, importers, and brand owners of electrical and electronic equipment. Ensure compliance with E-Waste Management Rules and CPCB guidelines."
      stats={[
        { value: '2500+', label: 'E-Waste EPR Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '10+', label: 'Years Experience' },
        { value: '100%', label: 'Success Rate' },
      ]}
      benefits={[
        'CPCB authorized EPR registration',
        'E-waste collection plan development',
        'Authorized recycler network access',
        'Complete documentation support',
        'Annual compliance management',
        'Avoid heavy penalties for non-compliance',
        'Collection target achievement support',
        'Pan-India recycler partnerships',
        'Digital compliance tracking',
      ]}
      process={[
        { step: 'Category Assessment', description: 'Identify your EEE product categories under E-Waste Management Rules.' },
        { step: 'Documentation', description: 'Prepare sales data, product details, and waste estimates.' },
        { step: 'Recycler Tie-ups', description: 'Establish partnerships with CPCB authorized e-waste recyclers.' },
        { step: 'EPR Application', description: 'Submit EPR application on CPCB centralized portal.' },
        { step: 'Authorization', description: 'Receive EPR authorization certificate from CPCB.' },
        { step: 'Compliance Monitoring', description: 'Submit annual returns and meet collection targets.' },
      ]}
      documents={[
        'Company Registration Certificate',
        'GST Registration Certificate',
        'Product Sales Data (3 years)',
        'E-Waste Collection Plan',
        'Authorized Recycler Agreement',
        'Producer Responsibility Organization tie-up (optional)',
        'Dismantler Agreement',
        'Import/Export License (if applicable)',
      ]}
      faqs={[
        {
          question: 'What is E-Waste EPR?',
          answer: 'E-Waste EPR (Extended Producer Responsibility) makes producers responsible for collection and recycling of end-of-life electrical and electronic equipment they manufacture or import.',
        },
        {
          question: 'Who needs E-Waste EPR registration?',
          answer: 'All producers, importers, and brand owners of electrical and electronic equipment (EEE) listed under Schedule I of E-Waste Management Rules need EPR registration.',
        },
        {
          question: 'What are the collection targets?',
          answer: 'Collection targets are specified by CPCB and increase yearly. Currently, producers need to collect a percentage of their average sales volume as e-waste.',
        },
        {
          question: 'What are penalties for E-Waste EPR non-compliance?',
          answer: 'Non-compliance can result in fines up to ₹1 crore, import restrictions, and legal action under Environment Protection Act.',
        },
        {
          question: 'How long does E-Waste EPR registration take?',
          answer: 'E-Waste EPR registration typically takes 4-8 weeks depending on documentation and CPCB processing.',
        },
      ]}
    />
  );
}
