'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function BEECertificationPage() {
  return (
    <ServicePageTemplate
      title="BEE Certification"
      subtitle="Energy Efficiency Compliance for Regulated Products"
      logo="/services_logo/Bee.png"
      color="amber"
      description="Helping manufacturers comply with energy efficiency standards and labeling requirements."
      serviceInfo="At JR Compliance, we guide manufacturers through the Bureau of Energy Efficiency certification process, ensuring your appliances meet mandatory star rating requirements. Our consultants help identify if your products fall under mandatory or voluntary labeling categories and determine the applicable energy efficiency standards. We coordinate comprehensive product testing at NABL-accredited laboratories and prepare all documentation required for BEE registration. Our team manages the complete application process on the BEE portal, handling technical queries and ensuring timely approvals. We assist with star label design and compliance verification, ensuring your products display accurate energy efficiency information. Post-certification, we provide renewal support, help with label updates when standards change, and ensure ongoing compliance with BEE regulations."
      benefits={[
        'Energy efficiency star rating',
        'Mandatory for specified appliances',
        'Market access for energy products',
        'Consumer trust and credibility',
        'Expert testing coordination',
        'Quick registration process',
        'Label design and compliance',
        'Renewal support',
        'Pan-India recognition',
      ]}
      process={[
        { step: 'Product Identification', description: 'Identify if product falls under BEE star labeling.' },
        { step: 'Testing', description: 'Get product tested at NABL accredited lab.' },
        { step: 'Registration', description: 'Submit application on BEE portal with test reports.' },
        { step: 'Review', description: 'BEE reviews application and test results.' },
        { step: 'Label Grant', description: 'Receive BEE star label authorization.' },
      ]}
      documents={[
        'Company registration certificate',
        'GST registration',
        'Product specifications',
        'Test reports from accredited lab',
        'Manufacturing process details',
        'Quality control documents',
        'Brand authorization (if applicable)',
        'Previous registration (if renewal)',
      ]}
      faqs={[
        {
          question: 'What is BEE certification?',
          answer: 'BEE certification provides star rating labels indicating energy efficiency of appliances, helping consumers make informed choices.',
        },
        {
          question: 'Which products need BEE label?',
          answer: 'ACs, refrigerators, fans, LED lamps, washing machines, TVs, and other electrical appliances need BEE star labels.',
        },
        {
          question: 'Is BEE labeling mandatory?',
          answer: 'BEE labeling is mandatory for some products (like ACs, refrigerators) and voluntary for others.',
        },
        {
          question: 'How are star ratings determined?',
          answer: 'Star ratings (1-5 stars) are based on energy consumption tested at accredited laboratories.',
        },
        {
          question: 'What is the validity of BEE registration?',
          answer: 'BEE registration is typically valid for 2 years and needs renewal with updated testing.',
        },
      ]}
    />
  );
}
