'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Cpu } from 'lucide-react';

export default function BISRegistrationPage() {
  return (
    <ServicePageTemplate
      title="BIS Registration"
      subtitle="Technical Services"
      icon={Cpu}
      color="cyan"
      description="Bureau of Indian Standards (BIS) certification is mandatory for various products in India. We provide comprehensive BIS registration services including ISI Mark, CRS (Compulsory Registration Scheme), and BIS Certification for electronics, IT products, and other regulated goods."
      serviceInfo="At JR Compliance, we provide complete BIS certification services for manufacturers seeking to enter the Indian market with compliant products. Our BIS experts help identify applicable standards for your products and guide you through the appropriate certification route - ISI Mark, CRS, or FMCS for foreign manufacturers. We coordinate product testing at BIS-recognized laboratories, prepare comprehensive documentation, and manage the complete BIS portal application process. Our team handles factory inspection coordination, addresses BIS officer queries, and ensures timely certification approval. We assist with scheme selection, surveillance audit preparation, and license renewal management. Post-certification, we provide ongoing compliance monitoring, amendment services for product updates, and support for expanding your certified product portfolio."
      benefits={[
        'Expert product evaluation',
        'Complete documentation support',
        'Factory inspection coordination',
        'Sample testing facilitation',
        'Quick processing and follow-up',
        'Surveillance audit support',
        'License renewal services',
        'Multi-product certification',
        'Foreign manufacturer registration',
      ]}
      process={[
        { step: 'Product Analysis', description: 'Analyze product to determine applicable BIS standards.' },
        { step: 'Testing', description: 'Coordinate product testing at BIS-recognized labs.' },
        { step: 'Application', description: 'Prepare and submit application with test reports.' },
        { step: 'Certification', description: 'Receive BIS certificate after approval.' },
      ]}
      documents={[
        'Company incorporation documents',
        'Factory/manufacturing details',
        'Product specifications and technical documents',
        'Quality management system documents',
        'Test equipment calibration certificates',
        'Previous test reports (if any)',
        'Authorization letter for Indian representative',
        'Brand ownership proof',
      ]}
      faqs={[
        {
          question: 'What products require BIS certification?',
          answer: 'Electronics, IT products, steel, cement, batteries, toys, footwear, and many other products require BIS certification. The list is regularly updated by the government.',
        },
        {
          question: 'What is the difference between ISI Mark and CRS?',
          answer: 'ISI Mark is for domestic manufacturers following quality standards. CRS (Compulsory Registration Scheme) is specifically for electronic and IT products.',
        },
        {
          question: 'How long does BIS registration take?',
          answer: 'BIS registration typically takes 3-6 months depending on product category, testing requirements, and factory audit scheduling.',
        },
        {
          question: 'Can foreign manufacturers get BIS certification?',
          answer: 'Yes, foreign manufacturers can obtain BIS certification through an Authorized Indian Representative (AIR).',
        },
      ]}
    />
  );
}
