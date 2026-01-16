'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Recycle } from 'lucide-react';

export default function EPRServicesPage() {
  return (
    <ServicePageTemplate
      title="EPR Services"
      subtitle="Technical Services"
      icon={Recycle}
      color="green"
      description="Extended Producer Responsibility (EPR) makes producers responsible for environmentally-sound management of their products at end-of-life. We provide comprehensive EPR compliance services for e-waste, plastic waste, battery waste, and tyre waste."
      benefits={[
        'Complete EPR registration support',
        'Annual EPR target assessment',
        'EPR action plan preparation',
        'Recycler tie-up facilitation',
        'EPR certificate procurement',
        'Annual return filing',
        'Compliance monitoring',
        'Multi-product EPR management',
        'Audit support and documentation',
      ]}
      process={[
        { step: 'Assessment', description: 'Analyze products to determine EPR applicability and targets.' },
        { step: 'Registration', description: 'Register as Producer/Importer/Brand Owner on CPCB portal.' },
        { step: 'Action Plan', description: 'Develop EPR action plan and tie-up with recyclers.' },
        { step: 'Compliance', description: 'Meet EPR targets and file annual returns.' },
      ]}
      documents={[
        'Company registration documents',
        'Product details and categories',
        'Previous year sales/import data',
        'Brand authorization (for brand owners)',
        'Manufacturing/import licenses',
        'GST registration certificate',
        'Pollution control consent',
        'Previous EPR certificates (if any)',
      ]}
      faqs={[
        {
          question: 'What is EPR and who needs it?',
          answer: 'EPR (Extended Producer Responsibility) is a policy requiring producers to manage the environmental impact of their products. Producers, importers, and brand owners of e-waste, plastic, batteries, and tyres need EPR registration.',
        },
        {
          question: 'How are EPR targets calculated?',
          answer: 'EPR targets are calculated based on quantity of products sold/manufactured. The percentage of waste to be collected/recycled increases year-on-year as per CPCB guidelines.',
        },
        {
          question: 'What happens if EPR targets are not met?',
          answer: 'Non-compliance with EPR targets can result in penalties, import restrictions, and legal action by CPCB/SPCB.',
        },
        {
          question: 'Can EPR certificates be traded?',
          answer: 'Yes, EPR certificates can be traded on authorized platforms. Producers with excess certificates can sell to those who have shortfall.',
        },
      ]}
    />
  );
}
