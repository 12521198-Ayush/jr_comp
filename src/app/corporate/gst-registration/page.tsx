'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Receipt } from 'lucide-react';

export default function GSTRegistrationPage() {
  return (
    <ServicePageTemplate
      title="GST Registration"
      subtitle="Goods and Services Tax Compliance"
      description="Get hassle-free GST registration with expert guidance. Our GST Registration Consultants in Delhi offer seamless and efficient services, ensuring compliance and accuracy for your business."
      icon={Receipt}
      color="blue"
      benefits={[
        'Legal recognition as supplier',
        'Input tax credit benefits',
        'Interstate business operations',
        'E-commerce platform eligibility',
        'Government tender participation',
        'Business credibility enhancement',
        'Seamless tax compliance',
        'Easy refund process'
      ]}
      process={[
        { step: 'Document Collection', description: 'Gather all required documents including PAN, Aadhaar, and business proofs' },
        { step: 'Application Filing', description: 'Submit GST registration application on the GST portal' },
        { step: 'ARN Generation', description: 'Receive Application Reference Number for tracking' },
        { step: 'Verification', description: 'GST officer verifies the application and documents' },
        { step: 'GSTIN Allotment', description: 'Receive your unique 15-digit GSTIN upon approval' },
        { step: 'Certificate Download', description: 'Download GST registration certificate from portal' }
      ]}
      documents={[
        'PAN Card of Business/Owner',
        'Aadhaar Card of Proprietor/Partners/Directors',
        'Business Registration Proof',
        'Address Proof of Business',
        'Bank Account Statement/Cancelled Cheque',
        'Passport-size Photographs',
        'Digital Signature Certificate (for companies)',
        'Authorization Letter/Board Resolution'
      ]}
      faqs={[
        { question: 'When is GST registration mandatory?', answer: 'GST registration is mandatory if your aggregate turnover exceeds ₹40 lakhs (₹20 lakhs for special category states) for goods, or ₹20 lakhs (₹10 lakhs for special category states) for services.' },
        { question: 'How long does GST registration take?', answer: 'GST registration typically takes 3-7 working days after successful submission of all required documents.' },
        { question: 'Can I register for GST voluntarily?', answer: 'Yes, any business can voluntarily register for GST even if they are below the threshold limit. This helps in claiming input tax credit.' },
        { question: 'What is the penalty for not registering under GST?', answer: 'The penalty for not registering under GST when liable is 10% of the tax due or ₹10,000, whichever is higher. For deliberate evasion, it can be 100% of the tax due.' },
        { question: 'Is GST registration state-specific?', answer: 'Yes, you need separate GST registration for each state where you have a business presence. However, you can have multiple registrations in the same state for different business verticals.' }
      ]}
    />
  );
}
