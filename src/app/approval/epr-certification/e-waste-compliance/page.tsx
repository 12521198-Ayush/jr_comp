'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Monitor } from 'lucide-react';

export default function EWasteCompliancePage() {
  return (
    <ServicePageTemplate
      title="E-Waste Compliance"
      subtitle="E-Waste Management Rules 2022"
      icon={Monitor}
      color="cyan"
      description="Meet E-Waste Management Rules 2022 requirements and avoid heavy penalties. Demonstrate responsible e-waste recycling and circular economy commitment."
      serviceInfo="At JR Compliance, we provide comprehensive E-Waste EPR compliance support for producers, importers, and brand owners of electrical and electronic equipment. Our environmental consultants guide you through E-Waste Management Rules 2022 requirements and help you understand your EPR obligations based on your product categories. We handle EPR registration on the CPCB centralized portal, accurate collection target calculation, and detailed action plan preparation. Our team connects you with authorized e-waste recyclers and dismantlers, establishing efficient collection and channelization mechanisms. We provide ongoing quarterly and annual return filing, target tracking, and audit support to keep your business penalty-free. Post-registration, we offer compliance monitoring, certificate management, and guidance on evolving e-waste regulations."
      stats={[
        { value: '1200+', label: 'E-Waste EPR Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '10+', label: 'Years Experience' },
        { value: '100%', label: 'Success Rate' },
      ]}
      trustedBy={['Samsung', 'LG', 'Dell', 'HP', 'Lenovo']}
      benefits={[
        'E-Waste Management Rules compliance',
        'Environmental stewardship recognition',
        'Market access for electronics',
        'Enhanced brand reputation',
        'CPCB authorization support',
        'Dismantler network access',
        'Collection target management',
        'Annual compliance handling',
        '106 product category coverage',
      ]}
      process={[
        { step: 'Product Assessment', description: 'Identify your e-waste categories and determine EPR requirements.' },
        { step: 'Documentation Preparation', description: 'Compile sales data, recycler agreements, and required documents.' },
        { step: 'CPCB Registration', description: 'Submit EPR application on Central Pollution Control Board portal.' },
        { step: 'Collection Planning', description: 'Develop e-waste collection and channelization strategy.' },
        { step: 'Authorization Grant', description: 'Receive EPR authorization certificate from CPCB.' },
        { step: 'Ongoing Compliance', description: 'File annual returns and meet collection/recycling targets.' },
      ]}
      documents={[
        'Company Registration Certificate',
        'PAN Card & GST Registration',
        'E-Waste Product Sales Data',
        'Authorized Dismantler Agreement',
        'Collection Plan Details',
        'Recycler Partnership Agreement',
        'Product Category Details',
        'Brand Registration Documents',
      ]}
      faqs={[
        {
          question: 'What is E-Waste EPR compliance?',
          answer: 'E-Waste EPR mandates producers, importers, and brand owners to take responsibility for collection, recycling, and disposal of e-waste generated from their products under E-Waste Management Rules, 2022.',
        },
        {
          question: 'Which products come under E-Waste EPR?',
          answer: 'E-waste covers 106 categories including IT equipment, consumer electronics, lighting equipment, toys, medical devices with electronic components, and more.',
        },
        {
          question: 'What are the collection targets?',
          answer: 'Collection targets start at 60% in 2023-24 and increase annually to reach 80% by 2028-29. Recycling targets are also specified for different waste fractions.',
        },
        {
          question: 'What are penalties for non-compliance?',
          answer: 'Non-compliance can result in fines up to ₹1 crore, environmental compensation, and legal action under Environment Protection Act.',
        },
        {
          question: 'How often to file returns?',
          answer: 'Annual returns must be filed on the CPCB portal by June 30 each year with proof of meeting collection and recycling targets.',
        },
      ]}
    />
  );
}
