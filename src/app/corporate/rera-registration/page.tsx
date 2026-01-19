'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Building2 } from 'lucide-react';

export default function RERARegistrationPage() {
  return (
    <ServicePageTemplate
      title="RERA Registration"
      subtitle="Real Estate Regulatory Authority"
      description="We make RERA registration hassle-free. Get your RERA Registration now from the best consultants for real estate agents, brokers, and developers."
      icon={Building2}
      color="blue"
      benefits={[
        'Legal authorization to operate',
        'Consumer confidence',
        'Project registration access',
        'Dispute resolution mechanism',
        'Market credibility',
        'Transparency assurance',
        'Professional recognition',
        'Compliance certification'
      ]}
      process={[
        { step: 'Document Preparation', description: 'Gather all required identity and business documents' },
        { step: 'State RERA Portal', description: 'Register on respective State RERA portal' },
        { step: 'Application Filing', description: 'Fill application form with details' },
        { step: 'Document Upload', description: 'Upload all required documents' },
        { step: 'Fee Payment', description: 'Pay registration fees online' },
        { step: 'Registration Issuance', description: 'Receive RERA registration certificate' }
      ]}
      documents={[
        'PAN Card',
        'Aadhaar Card',
        'Address Proof',
        'Passport-size Photographs',
        'Business Registration (if applicable)',
        'Office Address Proof',
        'Experience Details',
        'Educational Qualifications'
      ]}
      faqs={[
        { question: 'What is RERA?', answer: 'RERA (Real Estate Regulatory Authority) is a statutory body established under RERA Act, 2016 to regulate and promote the real estate sector and protect home buyers.' },
        { question: 'Who needs RERA registration?', answer: 'Real estate agents, brokers, and developers selling properties need RERA registration. Projects above specified size also need project registration.' },
        { question: 'Is RERA registration state-specific?', answer: 'Yes, each state has its own RERA authority and registration is valid only in that state.' },
        { question: 'What is the penalty for operating without RERA?', answer: 'Operating without RERA registration can attract penalty up to 10% of project cost for developers and up to ₹10,000 per day for agents.' },
        { question: 'What is the validity of agent registration?', answer: 'RERA agent registration is typically valid for 5 years and renewable before expiry.' }
      ]}
    />
  );
}
