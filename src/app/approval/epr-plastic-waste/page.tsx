'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Package } from 'lucide-react';

export default function EPRPlasticWastePage() {
  return (
    <ServicePageTemplate
      title="EPR – Plastic Waste"
      subtitle="Plastic Waste Compliance under EPR Framework"
      icon={Package}
      color="cyan"
      description="Helping organizations meet plastic waste management rules through structured EPR compliance."
      serviceInfo="At JR Compliance, we provide complete EPR Plastic Waste compliance support for producers, importers, and brand owners using plastic packaging materials. Our environmental experts guide you through Plastic Waste Management Rules requirements, helping you understand obligations based on your plastic packaging categories. We assist with EPR registration on the CPCB centralized portal, EPR target calculation, and comprehensive action plan development. Our team helps you connect with authorized plastic waste processors and recyclers, establishing efficient collection and recycling mechanisms. We handle all documentation requirements, quarterly and annual return filing, and EPR certificate procurement from registered recyclers. Post-registration, we provide ongoing compliance monitoring, target achievement tracking, and assistance with evolving plastic waste regulations."
      stats={[
        { value: '3000+', label: 'Plastic EPR Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '10+', label: 'Years Experience' },
        { value: '100%', label: 'Success Rate' },
      ]}
      benefits={[
        'CPCB plastic waste EPR registration',
        'All plastic packaging categories covered',
        'PWP (Plastic Waste Processor) tie-ups',
        'Credit purchase and trading support',
        'Complete documentation assistance',
        'Annual compliance management',
        'Collection target achievement',
        'Multi-layered plastic compliance',
        'EPR credit tracking and reporting',
      ]}
      process={[
        { step: 'Plastic Category Assessment', description: 'Identify plastic packaging categories (Category I, II, III, IV) used in products.' },
        { step: 'Data Compilation', description: 'Gather plastic usage data, packaging specifications, and sales volumes.' },
        { step: 'PWP Partnerships', description: 'Establish tie-ups with registered Plastic Waste Processors.' },
        { step: 'EPR Application', description: 'Submit registration application on CPCB centralized portal.' },
        { step: 'Authorization', description: 'Receive EPR authorization certificate for plastic waste.' },
        { step: 'Credit Management', description: 'Purchase EPR credits and file annual compliance returns.' },
      ]}
      documents={[
        'Company Registration Certificate',
        'GST Registration Certificate',
        'Plastic Packaging Usage Data',
        'Category-wise Plastic Details',
        'PWP Partnership Agreements',
        'Brand/Product List with Packaging',
        'Import/Export Documentation',
        'Manufacturing Unit Details',
      ]}
      faqs={[
        {
          question: 'What is Plastic Waste EPR?',
          answer: 'Plastic Waste EPR under Plastic Waste Management Rules makes producers responsible for collection and recycling of plastic packaging waste they introduce into the market.',
        },
        {
          question: 'What are plastic packaging categories?',
          answer: 'Category I: Rigid plastic, Category II: Flexible plastic (single/multi-layer), Category III: Multi-layered plastic, Category IV: Plastic sheet/covers used for packaging.',
        },
        {
          question: 'How do EPR credits work?',
          answer: 'EPR credits are generated when plastic waste is collected and processed. Producers buy credits from PWPs to meet their collection obligations.',
        },
        {
          question: 'What are penalties for plastic EPR non-compliance?',
          answer: 'Non-compliance attracts environmental compensation as per CPCB guidelines, which can be substantial based on shortfall quantity.',
        },
        {
          question: 'How long does Plastic EPR registration take?',
          answer: 'Plastic EPR registration typically takes 3-6 weeks depending on data availability and CPCB processing.',
        },
      ]}
    />
  );
}
