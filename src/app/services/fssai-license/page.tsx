'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function FSSAILicensePage() {
  return (
    <ServicePageTemplate
      title="FSSAI License"
      subtitle="Corporate Services"
      logo="/services_logo/fssai.png"
      color="emerald"
      description="Obtain FSSAI license for your food business with complete guidance on documentation and compliance. We help you get the right type of license - Basic, State, or Central - based on your business size and requirements."
      serviceInfo="JR Compliance provides comprehensive FSSAI license services for food businesses of all sizes across India. Our food safety experts assess your business type, turnover, and operations to recommend the appropriate license category - Basic Registration, State License, or Central License. We prepare complete documentation including business registration, address proof, food safety management plans, and product lists for FoSCoS portal submission. Our team handles the entire application process, coordinates facility inspections if required, and addresses queries from food safety authorities. We ensure your food business meets all hygiene and safety standards mandated by FSSAI. Post-licensing, we provide annual return filing, license modification, renewal services, and ongoing food safety compliance support."
      benefits={[
        'Expert guidance on license type selection',
        'Complete documentation support',
        'Quick processing and follow-up',
        'License renewal services',
        'Modification and amendment support',
        'Food safety compliance training',
        'Label compliance guidance',
        'Annual return filing assistance',
        'Multi-location license support',
      ]}
      process={[
        { step: 'Assessment', description: 'Evaluate your business to determine the right license type.' },
        { step: 'Documentation', description: 'Prepare and verify all required documents.' },
        { step: 'Application', description: 'File application on FSSAI portal with correct details.' },
        { step: 'License Issuance', description: 'Receive your FSSAI license certificate.' },
      ]}
      documents={[
        'Identity proof of FBO (Food Business Operator)',
        'Address proof of business premises',
        'Food safety management plan',
        'List of food products',
        'Layout plan of the premises',
        'Water test report',
        'Equipment list',
        'NOC from municipality (if applicable)',
      ]}
      faqs={[
        {
          question: 'What types of FSSAI licenses are available?',
          answer: 'There are three types: Basic Registration (turnover up to ₹12 lakhs), State License (₹12 lakhs to ₹20 crores), and Central License (above ₹20 crores or for importers/exporters).',
        },
        {
          question: 'How long does it take to get FSSAI license?',
          answer: 'Basic registration takes 7-10 days, State license takes 30-45 days, and Central license takes 45-60 days approximately.',
        },
        {
          question: 'Is FSSAI license mandatory?',
          answer: 'Yes, every food business operator in India must obtain FSSAI license or registration before starting food-related business.',
        },
        {
          question: 'What is the validity of FSSAI license?',
          answer: 'FSSAI license is valid for 1-5 years as chosen during application. Renewal must be done 30 days before expiry.',
        },
      ]}
    />
  );
}
