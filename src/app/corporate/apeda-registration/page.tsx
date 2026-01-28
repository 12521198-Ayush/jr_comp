'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function APEDARegistrationPage() {
  return (
    <ServicePageTemplate
      title="APEDA Registration"
      subtitle="Agricultural Products Export"
      description="Looking for expert assistance in APEDA Registration? APEDA Registration process is simple and hassle-free with JR Compliance guidance."
      serviceInfo="At JR Compliance, we provide complete APEDA registration support for businesses looking to export agricultural and processed food products from India. Our export consultants assess your product categories and guide you through the Registration Cum Membership Certificate (RCMC) application process. We prepare comprehensive documentation including IEC details, product specifications, and export capabilities for APEDA portal submission. Our team handles the complete registration process, coordinates with APEDA authorities, and ensures timely approval of your membership. We assist with understanding export incentives, market access support, and trade fair participation benefits available through APEDA. Post-registration, we provide RCMC renewal support, compliance monitoring, and guidance on accessing APEDA schemes for agricultural export promotion."
      logo="/services_logo/apeda.png"
      color="green"
      benefits={[
        'Export authorization',
        'Access to export incentives',
        'Government scheme benefits',
        'RCMC certificate',
        'Market access support',
        'Quality certification support',
        'Trade fair participation',
        'Export promotion assistance'
      ]}
      process={[
        { step: 'IEC Obtainment', description: 'Ensure valid Import Export Code is available' },
        { step: 'Online Registration', description: 'Register on APEDA portal' },
        { step: 'Application Filing', description: 'Fill application form with business details' },
        { step: 'Document Upload', description: 'Upload required documents on portal' },
        { step: 'Fee Payment', description: 'Pay registration and processing fees' },
        { step: 'RCMC Issuance', description: 'Receive Registration Cum Membership Certificate' }
      ]}
      documents={[
        'Import Export Code (IEC)',
        'Company Registration Certificate',
        'PAN Card',
        'Bank Account Details',
        'GST Registration',
        'Processing Unit Details (if applicable)',
        'Product Details'
      ]}
      faqs={[
        { question: 'What is APEDA?', answer: 'APEDA (Agricultural and Processed Food Products Export Development Authority) is a government body promoting export of agricultural and processed food products from India.' },
        { question: 'What products come under APEDA?', answer: 'Fruits, vegetables, meat products, dairy products, honey, floriculture, processed foods, cereals, and other scheduled agricultural products.' },
        { question: 'Is APEDA registration mandatory?', answer: 'Yes, APEDA registration (RCMC) is mandatory for exporting scheduled products. It is also required to avail export incentives.' },
        { question: 'What is RCMC?', answer: 'Registration Cum Membership Certificate (RCMC) is the certificate issued by APEDA authorizing export of agricultural products.' },
        { question: 'What is the validity of APEDA registration?', answer: 'APEDA RCMC is valid for 5 years from the date of issue and can be renewed before expiry.' }
      ]}
    />
  );
}
