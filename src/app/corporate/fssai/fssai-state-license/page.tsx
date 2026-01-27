'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function FSSAIStateLicensePage() {
  return (
    <ServicePageTemplate
      title="FSSAI State License"
      subtitle="Medium-Scale Food Businesses"
      description="Obtain FSSAI State License for medium-sized food businesses. State license is required for businesses with annual turnover between Rs 12 lakhs to Rs 20 crores."
      logo="/services_logo/fssai.png"
      color="green"
      benefits={[
        'Legal Compliance - Operate food business legally with state license',
        'Wider Market Access - Sell products across the state',
        'Business Credibility - Enhance trust with FSSAI license',
        'Bank Loans - Easy access to business loans and credit',
        'E-commerce Ready - List products on online marketplaces',
        'Consumer Trust - Display FSSAI logo on products',
        '5-Year Validity - Long-term license for business stability',
        'Multiple Premises - Cover multiple units in same state'
      ]}
      process={[
        { step: 'Document Collection', description: 'Gather all required documents for state license application.' },
        { step: 'Application Preparation', description: 'Prepare Form-B application for state license.' },
        { step: 'Online Submission', description: 'Submit application on FSSAI FoSCoS portal.' },
        { step: 'Fee Payment', description: 'Pay applicable state license fees online.' },
        { step: 'Inspection', description: 'State authority may conduct premises inspection.' },
        { step: 'License Issuance', description: 'Receive 14-digit FSSAI State License number.' }
      ]}
      documents={[
        'Photo ID Proof of Proprietor/Partners/Directors',
        'Business Registration Certificate',
        'Proof of Premises (Rent Agreement/Ownership)',
        'Food Safety Management Plan',
        'List of Food Products',
        'NOC from Municipality/Local Authority',
        'Water Testing Report',
        'Passport Size Photo'
      ]}
      faqs={[
        { question: 'Who needs FSSAI State License?', answer: 'Food businesses with annual turnover between Rs 12 lakhs to Rs 20 crores, or manufacturing capacity above specified limits need state license.' },
        { question: 'What is the validity of state license?', answer: 'FSSAI State License is valid for 1 to 5 years based on your choice. Longer validity means proportionally higher fees.' },
        { question: 'What is the fee for state license?', answer: 'State license fee is Rs 2,000 per year for manufacturers and Rs 5,000 per year for others. Total depends on validity period chosen.' },
        { question: 'How long does it take to get license?', answer: 'State license typically takes 45-60 days from application submission, including inspection if required.' },
        { question: 'Can I upgrade from basic registration?', answer: 'Yes, you can upgrade from basic registration to state license as your business grows beyond Rs 12 lakhs turnover.' },
        { question: 'Is inspection mandatory?', answer: 'Inspection may or may not be conducted based on food category and risk assessment by state authorities.' },
        { question: 'Can I operate in multiple states?', answer: 'State license is valid only within that state. For multi-state operations, you need FSSAI Central License.' },
        { question: 'What is Form-B?', answer: 'Form-B is the application form used for FSSAI State License, containing details about business, products, and premises.' }
      ]}
      stats={[
        { value: '5000+', label: 'Licenses Obtained' },
        { value: '4.9', label: 'Google Rating' },
        { value: '12+', label: 'Years Experience' },
        { value: '45 Days', label: 'Avg Processing' }
      ]}
    />
  );
}
