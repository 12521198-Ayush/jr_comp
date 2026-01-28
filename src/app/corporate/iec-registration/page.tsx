'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function IECRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Import Export Code (IEC)"
      subtitle="Your Gateway to International Trade"
      description="We make IEC registration hassle-free to ensure customer satisfaction. Get your Import Export Code online with expert guidance for seamless international trade operations."
      serviceInfo="JR Compliance provides quick and hassle-free Import Export Code registration for businesses looking to engage in international trade. Our trade experts guide you through the DGFT online portal registration process, ensuring accurate submission of all required details. We prepare and verify all documentation including PAN, Aadhaar, bank account details, and business registration certificates before submission. Our team handles the complete IEC application process, tracks status, and ensures timely issuance of your IEC certificate. We assist with any queries from DGFT authorities and help resolve issues that may arise during processing. Post-registration, we provide support for IEC modification, RCMC registration, and guidance on export incentive schemes available for your business sector."
      logo="/services_logo/indian import export code.png"
      color="blue"
      benefits={[
        'Legal authorization for import/export',
        'Lifetime validity',
        'Access to global markets',
        'No renewal required',
        'GST and customs clearance',
        'Bank transactions for trade',
        'Government incentive eligibility',
        'Business expansion opportunities'
      ]}
      process={[
        { step: 'Document Preparation', description: 'Gather all required identity, address, and business proofs' },
        { step: 'DGFT Registration', description: 'Create account on DGFT portal' },
        { step: 'Application Filing', description: 'Fill and submit IEC application form ANF-2A' },
        { step: 'Fee Payment', description: 'Pay the application processing fee online' },
        { step: 'Verification', description: 'DGFT verifies the application and documents' },
        { step: 'IEC Issuance', description: 'Receive 10-digit IEC number upon approval' }
      ]}
      documents={[
        'PAN Card of Entity',
        'Aadhaar of Proprietor/Partners/Directors',
        'Business Registration Certificate',
        'Address Proof of Business',
        'Cancelled Cheque/Bank Certificate',
        'Passport-size Photograph',
        'Digital Signature Certificate'
      ]}
      faqs={[
        { question: 'What is Import Export Code (IEC)?', answer: 'IEC is a 10-digit unique code issued by DGFT (Directorate General of Foreign Trade) that is mandatory for importing or exporting goods and services from India.' },
        { question: 'Is IEC mandatory for all exports?', answer: 'IEC is mandatory for most exports, except for personal goods not for commercial purposes and specific exemptions like UN organizations, diplomatic missions, etc.' },
        { question: 'What is the validity of IEC?', answer: 'IEC has lifetime validity and does not require renewal. However, it must be updated if there are changes in business details.' },
        { question: 'How long does IEC registration take?', answer: 'IEC registration is typically completed within 1-3 working days after submission of all required documents.' },
        { question: 'Can individuals apply for IEC?', answer: 'Yes, individuals including proprietors, partnerships, companies, LLPs, trusts, and HUFs can apply for IEC.' }
      ]}
    />
  );
}
