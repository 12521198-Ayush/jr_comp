'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Droplet } from 'lucide-react';

export default function UsedOilCompliancePage() {
  return (
    <ServicePageTemplate
      title="EPR Used Oil Compliance"
      subtitle="Used Oil Management"
      icon={Droplet}
      color="orange"
      description="EPR Used Oil Compliance registration for lubricant producers and importers. Complete support for Hazardous Waste Management Rules compliance."
      serviceInfo="JR Compliance provides expert guidance for used oil compliance under Hazardous Waste Management Rules for lubricant producers and importers. Our environmental consultants help you understand your used oil management obligations and develop effective collection and recycling strategies. We assist with EPR authorization applications, collection target determination, and action plan preparation for CPCB submissions. Our team connects you with authorized used oil re-refiners and recyclers, ensuring proper channelization of waste lubricants. We handle quarterly and annual return filing, maintain compliance documentation, and prepare you for regulatory audits. Post-registration, we provide ongoing compliance monitoring, authorization renewals, and guidance on regulatory updates affecting used oil management."
      benefits={[
        'Mandatory for lubricant manufacturers and importers',
        'Complete used oil management compliance',
        'CPCB authorization support',
        'Collection target fulfillment',
        'Re-refiner partnership facilitation',
        'Annual return filing assistance',
        'Hazardous waste compliance',
        'Multi-brand registration',
        'Environment compliance assurance',
      ]}
      process={[
        { step: 'Product Identification', description: 'Identify lubricant products under Used Oil EPR.' },
        { step: 'Document Preparation', description: 'Prepare compliance plan and required documents.' },
        { step: 'CPCB Registration', description: 'Submit EPR application on CPCB portal.' },
        { step: 'Authorization Grant', description: 'Receive EPR authorization for used oil.' },
        { step: 'Target Compliance', description: 'Meet collection and re-refining targets annually.' },
      ]}
      documents={[
        'Company registration certificate',
        'GST registration',
        'Lubricant product details',
        'Annual production/import data',
        'Used oil management plan',
        'Re-refiner agreements',
        'Collection center details',
        'Previous authorization (if renewal)',
      ]}
      faqs={[
        {
          question: 'What is Used Oil EPR?',
          answer: 'Used Oil EPR mandates lubricant producers and importers to collect and ensure proper re-refining of used lubricating oil.',
        },
        {
          question: 'Who needs Used Oil EPR?',
          answer: 'Lubricant manufacturers, importers, and brand owners need EPR registration for used oil management.',
        },
        {
          question: 'What are the collection targets?',
          answer: 'Collection targets are set as percentage of lubricants sold and increase progressively each year.',
        },
        {
          question: 'Why is used oil hazardous?',
          answer: 'Used oil contains contaminants and heavy metals that can pollute soil and water if not disposed properly.',
        },
        {
          question: 'What is re-refining?',
          answer: 'Re-refining is the process of treating used oil to remove contaminants and restore it to usable lubricant.',
        },
      ]}
    />
  );
}
