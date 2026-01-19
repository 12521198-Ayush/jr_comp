'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Battery } from 'lucide-react';

export default function BatteryWasteCompliancePage() {
  return (
    <ServicePageTemplate
      title="Battery Waste Compliance"
      subtitle="Battery Waste Management Rules 2022"
      icon={Battery}
      color="amber"
      description="Meet Battery Waste Management Rules 2022 requirements and avoid penalties. Demonstrate commitment to sustainable battery disposal and recycling."
      stats={[
        { value: '800+', label: 'Battery EPR Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '8+', label: 'Years Experience' },
        { value: '100%', label: 'Success Rate' },
      ]}
      trustedBy={['Exide', 'Amara Raja', 'Luminous', 'Okaya', 'Livguard']}
      benefits={[
        'Battery Waste Rules 2022 compliance',
        'Environmental responsibility recognition',
        'Market access for battery products',
        'Enhanced brand value',
        'CPCB authorization support',
        'Recycler network access',
        'Collection target management',
        'EV battery compliance',
        'All battery types covered',
      ]}
      process={[
        { step: 'Initial Assessment', description: 'Evaluate your battery types and determine applicable EPR requirements.' },
        { step: 'Documentation Preparation', description: 'Compile all required documents including sales data and recycler agreements.' },
        { step: 'CPCB Portal Registration', description: 'Submit EPR application on Central Pollution Control Board portal.' },
        { step: 'Collection Plan Development', description: 'Create comprehensive battery collection and channelization plan.' },
        { step: 'Authorization Grant', description: 'Receive EPR authorization certificate from CPCB.' },
        { step: 'Ongoing Compliance', description: 'Submit quarterly/annual returns and meet collection targets.' },
      ]}
      documents={[
        'Company Registration Certificate',
        'PAN Card & GST Registration',
        'Battery Sales Data',
        'Recycler Agreement',
        'Collection Plan Details',
        'Import/Export License (if applicable)',
        'Battery Type Specifications',
        'Manufacturing License',
      ]}
      faqs={[
        {
          question: 'What are Battery Waste Management Rules 2022?',
          answer: 'The Battery Waste Management Rules, 2022 mandate EPR for all types of batteries including portable, automotive, industrial, and EV batteries with specific collection targets.',
        },
        {
          question: 'Who needs Battery EPR registration?',
          answer: 'All producers, importers, and brand owners dealing with batteries including lead-acid, lithium-ion, nickel-cadmium, and other battery types need EPR registration.',
        },
        {
          question: 'What are the collection targets?',
          answer: 'Collection targets start from 70% in 2024-25 and increase gradually to 90% by 2030-31. Recycling obligations are also specified for different battery chemistries.',
        },
        {
          question: 'What are penalties for non-compliance?',
          answer: 'Non-compliance can result in fines up to ₹1 crore, business restrictions, and legal action under Environment Protection Act.',
        },
        {
          question: 'How often to file returns?',
          answer: 'Returns must be filed annually on the CPCB portal along with proof of meeting collection and recycling targets.',
        },
      ]}
    />
  );
}
