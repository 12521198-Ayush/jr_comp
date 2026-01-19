'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Banknote } from 'lucide-react';

export default function MicrofinanceCompanyPage() {
  return (
    <ServicePageTemplate
      title="Microfinance Company Registration"
      subtitle="Financial Inclusion for All"
      description="Looking for expert assistance in Micro finance Company Registration? Get complete guidance on how to start a microfinance company with regulatory compliance."
      icon={Banknote}
      color="emerald"
      benefits={[
        'Serve underserved communities',
        'RBI regulated operations',
        'Social impact business',
        'Priority sector lending',
        'Government support schemes',
        'Sustainable business model',
        'Financial inclusion mission',
        'Growing market opportunity'
      ]}
      process={[
        { step: 'Company Formation', description: 'Register as NBFC or Section 8 company' },
        { step: 'Capital Arrangement', description: 'Arrange minimum net owned funds as required' },
        { step: 'Business Plan', description: 'Prepare detailed microfinance business plan' },
        { step: 'RBI Application', description: 'Apply for NBFC-MFI registration with RBI' },
        { step: 'Compliance Setup', description: 'Set up Fair Practice Code and grievance mechanism' },
        { step: 'License Grant', description: 'Receive Certificate of Registration' }
      ]}
      documents={[
        'Company Registration Certificate',
        'MOA & AOA',
        'Directors\' Documents',
        'Business Plan',
        'Capital Proof',
        'Audited Financials',
        'Fair Practice Code',
        'Grievance Mechanism Policy'
      ]}
      faqs={[
        { question: 'What is a Microfinance Company?', answer: 'Microfinance companies provide small loans to low-income individuals and groups who lack access to traditional banking services.' },
        { question: 'What are the types of MFIs?', answer: 'MFIs can be registered as NBFC-MFI (RBI regulated), Section 8 Company, Trust, Society, or Cooperative.' },
        { question: 'What is the minimum capital for NBFC-MFI?', answer: 'Minimum net owned funds of ₹5 crore is required for NBFC-MFI registration with RBI.' },
        { question: 'What is the loan limit in microfinance?', answer: 'As per RBI norms, collateral-free loans up to specified limits can be given to borrowers with household income below defined thresholds.' },
        { question: 'Is RBI registration mandatory?', answer: 'RBI registration is mandatory for NBFC-MFIs. Other forms like Section 8 or Society are regulated by respective state laws.' }
      ]}
    />
  );
}
