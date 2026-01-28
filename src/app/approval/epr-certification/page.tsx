'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Recycle } from 'lucide-react';

export default function EPRCertificationPage() {
  return (
    <ServicePageTemplate
      title="EPR Certification"
      subtitle="Extended Producer Responsibility Compliance in India"
      icon={Recycle}
      color="green"
      description="Supporting producers, importers, and brand owners in fulfilling Extended Producer Responsibility obligations."
      serviceInfo="JR Compliance's EPR consultants help you understand and fulfill your environmental obligations under CPCB guidelines effectively. We assist with EPR registration on the centralized portal, accurate target calculation, and comprehensive action plan development tailored to your business needs. Our team connects you with authorized recyclers and waste processors, ensuring proper channelization of end-of-life products as per regulatory requirements. We provide complete quarterly and annual return filing support, ongoing compliance monitoring, and audit assistance to keep you penalty-free. Our experts guide you through the complexities of E-waste, Plastic waste, Battery waste, and other EPR categories. With our end-to-end support, you can meet your EPR targets effectively while contributing to sustainable waste management practices in India."
      stats={[
        { value: '1500+', label: 'EPR Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '10+', label: 'Years Experience' },
        { value: '100%', label: 'Success Rate' },
      ]}
      trustedBy={['Samsung', 'LG', 'Sony', 'Panasonic', 'Dell']}
      benefits={[
        'Environmental compliance assurance',
        'Enhanced brand reputation for sustainability',
        'Avoid heavy legal penalties',
        'Market access for electronic products',
        'CPCB authorization support',
        'Waste channelization guidance',
        'Annual compliance management',
        'Expert recycler network access',
        'Multiple waste category coverage',
      ]}
      process={[
        { step: 'Initial Assessment', description: 'We evaluate your product categories and determine applicable EPR requirements.' },
        { step: 'Documentation Preparation', description: 'Compile all required documents including product details and waste estimates.' },
        { step: 'CPCB Registration', description: 'Submit EPR application on Central Pollution Control Board portal.' },
        { step: 'Collection Plan', description: 'Develop waste collection and channelization plan with authorized recyclers.' },
        { step: 'Authorization Grant', description: 'Receive EPR authorization certificate from CPCB.' },
        { step: 'Annual Compliance', description: 'Submit annual returns and meet collection targets regularly.' },
      ]}
      documents={[
        'Company Registration Certificate',
        'PAN Card & GST Registration',
        'Product Sales Data',
        'Waste Channelization Agreement',
        'Collection Plan Details',
        'Authorized Dismantler Agreement',
        'Recycler Partnership Documents',
        'Import/Export License (if applicable)',
      ]}
      faqs={[
        {
          question: 'What is EPR certification?',
          answer: 'Extended Producer Responsibility (EPR) is a policy approach where producers are responsible for the treatment or disposal of post-consumer products. EPR certification proves compliance with waste management obligations.',
        },
        {
          question: 'Who needs EPR registration in India?',
          answer: 'All producers, importers, and brand owners dealing with electronic equipment, plastic packaging, and batteries need EPR registration as per CPCB guidelines.',
        },
        {
          question: 'What are the penalties for non-compliance?',
          answer: 'Non-compliance can result in fines up to ₹1 crore, business restrictions, and legal action under Environment Protection Act.',
        },
        {
          question: 'How long does EPR registration take?',
          answer: 'EPR registration typically takes 4-8 weeks depending on documentation completeness and product category.',
        },
        {
          question: 'What are the annual compliance requirements?',
          answer: 'Annual filing of returns, meeting collection targets, and maintaining records of waste channelization are mandatory requirements.',
        },
      ]}
    />
  );
}
