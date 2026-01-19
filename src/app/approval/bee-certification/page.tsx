'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Zap } from 'lucide-react';

export default function BEECertificationPage() {
  return (
    <ServicePageTemplate
      title="BEE Certification"
      subtitle="Bureau of Energy Efficiency"
      icon={Zap}
      color="amber"
      description="Looking to get BEE Certification? Get your BEE Certificate Registration from best consultants with hassle free process."
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
