'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Droplets } from 'lucide-react';

export default function EPRUsedOilWastePage() {
  return (
    <ServicePageTemplate
      title="EPR Used Oil Waste"
      subtitle="Used Oil Extended Producer Responsibility"
      icon={Droplets}
      color="yellow"
      description="EPR Used Oil registration is mandatory for lubricant producers and importers. Comply with Hazardous Waste Management Rules for used oil collection, recycling, and environmentally safe disposal."
      stats={[
        { value: '300+', label: 'Used Oil EPR Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '10+', label: 'Years Experience' },
        { value: '100%', label: 'Success Rate' },
      ]}
      benefits={[
        'CPCB used oil EPR registration',
        'All lubricant categories covered',
        'Authorized re-refiner partnerships',
        'Collection infrastructure support',
        'Complete documentation assistance',
        'Annual compliance management',
        'Hazardous waste compliance included',
        'Collection target achievement',
        'Re-refined oil certification support',
      ]}
      process={[
        { step: 'Product Assessment', description: 'Identify lubricant products under used oil EPR requirements.' },
        { step: 'Data Compilation', description: 'Gather production/import data, sales volumes, and waste estimates.' },
        { step: 'Re-refiner Tie-ups', description: 'Establish partnerships with authorized used oil re-refiners.' },
        { step: 'EPR Application', description: 'Submit registration on CPCB centralized EPR portal.' },
        { step: 'Authorization', description: 'Receive EPR authorization for used oil management.' },
        { step: 'Compliance Monitoring', description: 'Submit returns and maintain collection target compliance.' },
      ]}
      documents={[
        'Company Registration Certificate',
        'GST Registration Certificate',
        'Lubricant Production/Import Data',
        'Product Category Details',
        'Re-refiner Partnership Agreements',
        'Collection Network Details',
        'Hazardous Waste Authorization (if applicable)',
        'Manufacturing/Import License',
      ]}
      faqs={[
        {
          question: 'What is Used Oil EPR?',
          answer: 'Used Oil EPR makes lubricant producers responsible for collection and environmentally safe recycling of used/waste oil to prevent environmental contamination.',
        },
        {
          question: 'Who needs Used Oil EPR registration?',
          answer: 'All producers and importers of lubricating oils including automotive oils, industrial oils, and other lubricants need EPR registration.',
        },
        {
          question: 'How is used oil processed?',
          answer: 'Used oil is collected and sent to authorized re-refiners who process it back into base oil, or it is used as fuel in authorized facilities.',
        },
        {
          question: 'What are the environmental risks of used oil?',
          answer: 'Improper disposal of used oil can contaminate soil and groundwater. One liter of used oil can contaminate one million liters of water.',
        },
        {
          question: 'How long does Used Oil EPR registration take?',
          answer: 'Used Oil EPR registration typically takes 4-6 weeks depending on documentation and CPCB processing.',
        },
      ]}
    />
  );
}
