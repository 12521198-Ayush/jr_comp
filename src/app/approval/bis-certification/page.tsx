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
      description="Get BIS certification services from the best Consultants in India known for trusted guidance, 100% compliance, and the best results for businesses."
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
