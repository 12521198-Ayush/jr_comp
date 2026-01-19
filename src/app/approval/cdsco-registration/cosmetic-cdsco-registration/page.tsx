'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Sparkles } from 'lucide-react';

export default function CosmeticCDSCOPage() {
  return (
    <ServicePageTemplate
      title="Cosmetic CDSCO Registration"
      subtitle="Cosmetic Product Registration"
      icon={Sparkles}
      color="pink"
      description="Looking for expert assistance in Cosmetic CDSCO Registration? Click to know all about Cosmetic CDSCO Registration process and requirements."
      benefits={[
        'Mandatory for cosmetic imports',
        'Market access for cosmetic products',
        'Expert regulatory guidance',
        'Safety and efficacy compliance',
        'Quick processing',
        'Import license support',
        'Label compliance assistance',
        'Renewal support',
        'Pan-India distribution',
      ]}
      process={[
        { step: 'Product Classification', description: 'Classify cosmetic product under Drugs & Cosmetics Rules.' },
        { step: 'Documentation', description: 'Prepare product dossier and safety data.' },
        { step: 'Testing', description: 'Get product tested for safety parameters.' },
        { step: 'CDSCO Application', description: 'Submit registration application on SUGAM portal.' },
        { step: 'Registration Grant', description: 'Receive CDSCO cosmetic registration.' },
      ]}
      documents={[
        'Company registration documents',
        'Manufacturing license/authorization',
        'Product formulation and composition',
        'Safety assessment data',
        'Stability study reports',
        'Certificate of analysis',
        'Label and artwork',
        'Free sale certificate (for imports)',
      ]}
      faqs={[
        {
          question: 'What is Cosmetic CDSCO registration?',
          answer: 'CDSCO registration is required for importing and selling cosmetic products in India under Drugs & Cosmetics Act.',
        },
        {
          question: 'Which cosmetics need registration?',
          answer: 'All imported cosmetics and certain categories of domestic cosmetics need CDSCO registration.',
        },
        {
          question: 'How long does registration take?',
          answer: 'Cosmetic registration typically takes 2-4 months depending on product type and documentation.',
        },
        {
          question: 'What testing is required?',
          answer: 'Safety testing, stability testing, and microbiological testing may be required.',
        },
        {
          question: 'What is the validity of registration?',
          answer: 'Cosmetic registration is typically valid for 3 years and can be renewed.',
        },
      ]}
    />
  );
}
