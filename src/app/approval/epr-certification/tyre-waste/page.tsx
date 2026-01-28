'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Circle } from 'lucide-react';

export default function TyreWasteCompliancePage() {
  return (
    <ServicePageTemplate
      title="EPR Tyre Waste Compliance"
      subtitle="Tyre Waste Management"
      icon={Circle}
      color="gray"
      description="EPR Tyre Waste Compliance registration for tyre producers and importers. Complete support for compliance with EPR regulations for waste tyres."
      serviceInfo="At JR Compliance, we provide specialized support for EPR Tyre Waste compliance for tyre manufacturers and importers under Indian environmental regulations. Our environmental consultants guide you through EPR registration, collection target calculation, and action plan development for end-of-life tyres. We assist with CPCB portal submissions, prepare comprehensive compliance documentation, and help establish partnerships with authorized tyre recyclers and pyrolysis plants. Our team ensures proper waste tyre channelization through approved recycling routes and maintains compliance records for regulatory audits. We handle quarterly and annual return filing, track your collection targets, and provide timely alerts for compliance deadlines. Post-registration, we offer ongoing monitoring, authorization renewals, and guidance on evolving waste tyre regulations."
      benefits={[
        'Mandatory for tyre manufacturers and importers',
        'Complete tyre waste management compliance',
        'CPCB authorization support',
        'Collection and recycling target fulfillment',
        'Recycler partnership facilitation',
        'Annual return filing assistance',
        'Audit and inspection support',
        'Multi-brand compliance',
        'Environment compliance assurance',
      ]}
      process={[
        { step: 'Tyre Category Check', description: 'Identify tyre types covered under EPR regulations.' },
        { step: 'Document Preparation', description: 'Prepare compliance plan and required documents.' },
        { step: 'CPCB Registration', description: 'Submit EPR application on CPCB portal.' },
        { step: 'Authorization Grant', description: 'Receive EPR authorization for tyre waste.' },
        { step: 'Target Compliance', description: 'Meet collection and recycling targets annually.' },
      ]}
      documents={[
        'Company registration certificate',
        'GST registration',
        'Tyre type and category details',
        'Annual production/import data',
        'Waste management plan',
        'Recycler agreements',
        'Brand registration proof',
        'Previous authorization (if renewal)',
      ]}
      faqs={[
        {
          question: 'What is Tyre Waste EPR?',
          answer: 'Tyre Waste EPR mandates tyre producers and importers to ensure proper collection and recycling of end-of-life tyres.',
        },
        {
          question: 'Who needs Tyre Waste EPR?',
          answer: 'Tyre manufacturers, importers, and retreaders need EPR registration for tyre waste management.',
        },
        {
          question: 'What are the collection targets?',
          answer: 'Collection targets start from 35% and increase progressively to 80% over the years.',
        },
        {
          question: 'How are waste tyres recycled?',
          answer: 'Waste tyres are processed into crumb rubber, fuel, or used in cement kilns and road construction.',
        },
        {
          question: 'What are penalties for non-compliance?',
          answer: 'Non-compliance can result in environmental compensation, import restrictions, and legal action.',
        },
      ]}
    />
  );
}
