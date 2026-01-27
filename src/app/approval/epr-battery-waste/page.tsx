'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Battery } from 'lucide-react';

export default function EPRBatteryWastePage() {
  return (
    <ServicePageTemplate
      title="EPR Battery Waste"
      subtitle="Battery Waste Extended Producer Responsibility"
      icon={Battery}
      color="amber"
      description="EPR Battery Waste registration is mandatory for producers and importers of batteries. Comply with Battery Waste Management Rules 2022 and ensure responsible battery disposal and recycling."
      stats={[
        { value: '1500+', label: 'Battery EPR Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '10+', label: 'Years Experience' },
        { value: '100%', label: 'Success Rate' },
      ]}
      benefits={[
        'CPCB battery waste EPR registration',
        'All battery types coverage (Li-ion, Lead-acid, etc.)',
        'Authorized recycler partnerships',
        'Collection infrastructure setup',
        'Complete compliance documentation',
        'Annual return filing support',
        'Collection target achievement',
        'EV battery compliance included',
        'Digital tracking and reporting',
      ]}
      process={[
        { step: 'Battery Classification', description: 'Identify battery types and categories under Battery Waste Management Rules.' },
        { step: 'Documentation', description: 'Compile production/import data, sales records, and waste projections.' },
        { step: 'Recycler Network', description: 'Establish partnerships with CPCB registered battery recyclers.' },
        { step: 'EPR Application', description: 'Submit application on CPCB centralized EPR portal.' },
        { step: 'Authorization Grant', description: 'Receive EPR authorization for battery waste management.' },
        { step: 'Annual Compliance', description: 'Submit returns and maintain collection target compliance.' },
      ]}
      documents={[
        'Company Registration Certificate',
        'GST Registration Certificate',
        'Battery Sales/Import Data',
        'Battery Type Classification Details',
        'Recycler Partnership Agreements',
        'Collection Plan Document',
        'Waste Management Plan',
        'Capacity Details of Manufacturing (if producer)',
      ]}
      faqs={[
        {
          question: 'What is Battery Waste EPR?',
          answer: 'Battery Waste EPR under Battery Waste Management Rules 2022 makes producers responsible for collection, recycling, and environmentally sound management of waste batteries.',
        },
        {
          question: 'Which batteries are covered under EPR?',
          answer: 'All battery types including Lithium-ion, Lead-acid, Nickel-Cadmium, Alkaline, and other portable, automotive, and industrial batteries are covered.',
        },
        {
          question: 'Are EV batteries covered under Battery EPR?',
          answer: 'Yes, Electric Vehicle batteries are covered under Battery Waste Management Rules and require separate EPR registration.',
        },
        {
          question: 'What are the collection targets for batteries?',
          answer: 'Collection targets increase progressively - starting from 70% of waste generation for portable batteries and 100% for automotive and industrial batteries by 2024-25.',
        },
        {
          question: 'How long does Battery EPR registration take?',
          answer: 'Battery EPR registration typically takes 4-6 weeks depending on documentation completeness.',
        },
      ]}
    />
  );
}
