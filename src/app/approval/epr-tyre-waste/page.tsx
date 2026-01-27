'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { CircleDot } from 'lucide-react';

export default function EPRTyreWastePage() {
  return (
    <ServicePageTemplate
      title="EPR Tyre Waste"
      subtitle="Tyre Waste Extended Producer Responsibility"
      icon={CircleDot}
      color="slate"
      description="EPR Tyre Waste registration is mandatory for tyre producers and importers. Comply with EPR guidelines for End-of-Life Tyres and ensure responsible tyre recycling and disposal."
      stats={[
        { value: '500+', label: 'Tyre EPR Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '10+', label: 'Years Experience' },
        { value: '100%', label: 'Success Rate' },
      ]}
      benefits={[
        'CPCB tyre waste EPR registration',
        'All tyre categories covered',
        'Authorized retreader/recycler partnerships',
        'End-of-life tyre management',
        'Complete documentation support',
        'Annual compliance filing',
        'Collection target management',
        'Pyrolysis plant tie-ups',
        'Circular economy compliance',
      ]}
      process={[
        { step: 'Tyre Category Assessment', description: 'Identify tyre types and categories manufactured or imported.' },
        { step: 'Data Compilation', description: 'Gather production/import data, sales records, and waste projections.' },
        { step: 'Recycler Partnerships', description: 'Establish tie-ups with CPCB authorized tyre recyclers and retreaders.' },
        { step: 'EPR Application', description: 'Submit registration on CPCB centralized EPR portal.' },
        { step: 'Authorization', description: 'Receive EPR authorization for tyre waste management.' },
        { step: 'Compliance Monitoring', description: 'Submit annual returns and maintain collection targets.' },
      ]}
      documents={[
        'Company Registration Certificate',
        'GST Registration Certificate',
        'Tyre Production/Import Data',
        'Category-wise Tyre Details',
        'Recycler/Retreader Agreements',
        'Collection Plan Document',
        'Waste Management Plan',
        'Manufacturing/Import License',
      ]}
      faqs={[
        {
          question: 'What is Tyre Waste EPR?',
          answer: 'Tyre Waste EPR makes tyre producers responsible for collection and environmentally sound processing of end-of-life tyres (ELT) to promote circular economy.',
        },
        {
          question: 'Who needs Tyre EPR registration?',
          answer: 'All tyre manufacturers and importers selling tyres in India need EPR registration for waste tyre management.',
        },
        {
          question: 'What happens to waste tyres?',
          answer: 'Waste tyres are processed through retreading, recycling into rubber products, pyrolysis for fuel oil, or use as fuel in cement kilns.',
        },
        {
          question: 'What are collection targets for tyre EPR?',
          answer: 'Collection targets are progressively increasing, requiring producers to collect and recycle a percentage of their sales volume.',
        },
        {
          question: 'How long does Tyre EPR registration take?',
          answer: 'Tyre EPR registration typically takes 4-6 weeks depending on documentation and CPCB processing.',
        },
      ]}
    />
  );
}
