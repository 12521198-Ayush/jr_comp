'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Package } from 'lucide-react';

export default function PlasticWasteCompliancePage() {
  return (
    <ServicePageTemplate
      title="EPR Plastic Waste Compliance"
      subtitle="Plastic Waste Management"
      icon={Package}
      color="blue"
      description="EPR Plastic Waste Compliance registration for producers, importers, and brand owners. Get complete support for Plastic Waste Management Rules compliance."
      serviceInfo="At JR Compliance, we provide comprehensive EPR Plastic Waste compliance support for producers, importers, and brand owners using plastic packaging materials. Our environmental experts guide you through Plastic Waste Management Rules requirements and help you understand EPR obligations based on your plastic packaging categories. We handle EPR registration on the CPCB centralized portal, calculate accurate collection targets, and prepare detailed action plans for plastic waste management. Our team connects you with authorized plastic recyclers and waste processors, establishing proper collection and channelization mechanisms. We provide ongoing quarterly and annual return filing, target tracking, and audit support to maintain compliance. Post-registration, we offer compliance monitoring, certificate management, and guidance on evolving plastic waste regulations and Extended Producer Responsibility norms."
      benefits={[
        'Mandatory for plastic packaging producers',
        'Complete plastic waste management compliance',
        'CPCB authorization support',
        'Collection and recycling target fulfillment',
        'PWP registration assistance',
        'Annual return filing support',
        'Recycler and waste processor coordination',
        'Multi-location compliance',
        'Environment compliance assurance',
      ]}
      process={[
        { step: 'Category Identification', description: 'Identify plastic categories under PWM Rules 2022.' },
        { step: 'Document Preparation', description: 'Prepare compliance plan and required documents.' },
        { step: 'CPCB Registration', description: 'Submit EPR application on CPCB portal.' },
        { step: 'Authorization Grant', description: 'Receive EPR authorization for plastic waste.' },
        { step: 'Target Compliance', description: 'Meet collection, recycling, and reuse targets.' },
      ]}
      documents={[
        'Company registration certificate',
        'GST registration',
        'Plastic packaging details (categories)',
        'Annual production/import data',
        'Waste management action plan',
        'PWP/recycler agreements',
        'Brand ownership proof',
        'Previous authorization (if renewal)',
      ]}
      faqs={[
        {
          question: 'What is Plastic Waste EPR?',
          answer: 'Plastic Waste EPR mandates producers, importers, and brand owners to take responsibility for collection and recycling of plastic packaging waste.',
        },
        {
          question: 'Who needs Plastic Waste EPR?',
          answer: 'Producers, importers, and brand owners using plastic packaging for their products need EPR registration.',
        },
        {
          question: 'What are the plastic categories?',
          answer: 'Categories include rigid plastic, flexible plastic (single/multi-layer), and multi-layered plastic packaging.',
        },
        {
          question: 'What are the EPR targets?',
          answer: 'Targets include collection, recycling, and end-of-life disposal percentages that increase annually.',
        },
        {
          question: 'What is the validity of EPR authorization?',
          answer: 'EPR authorization is typically valid for 5 years with annual compliance reporting.',
        },
      ]}
    />
  );
}
