'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function SchemeXPage() {
  return (
    <ServicePageTemplate
      title="Scheme-X"
      subtitle="Product Approval under BIS Scheme-X"
      logo="/services_logo/bis.png"
      color="blue"
      description="Compliance assistance for products requiring approval under BIS Scheme-X regulations."
      serviceInfo="JR Compliance provides specialized support for BIS Scheme-X, a self-declaration conformity assessment scheme that offers a streamlined path to Indian market access. Our experts help you understand the eligibility criteria and determine if your products qualify for this simplified certification route. We guide you through product testing at BIS-recognized laboratories and assist in preparing all self-declaration documents and technical files. Our team ensures accurate identification of applicable Indian Standards and helps you meet all compliance requirements efficiently. We handle the complete registration process on the BIS portal, minimizing delays and ensuring successful approval. Post-registration, we provide ongoing compliance monitoring, annual maintenance support, and assistance with any regulatory updates affecting your Scheme-X certification."
      stats={[
        { value: '1500+', label: 'Scheme-X Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '15+', label: 'Years Experience' },
        { value: '99%', label: 'Success Rate' },
      ]}
      benefits={[
        'Self-declaration based certification process',
        'Faster market access compared to ISI Mark',
        'Reduced compliance burden for manufacturers',
        'Cost-effective certification route',
        'Applicable to various product categories',
        'BIS registration support included',
        'Complete documentation assistance',
        'Annual compliance management',
        'Expert guidance throughout the process',
      ]}
      process={[
        { step: 'Eligibility Check', description: 'We assess your product category and determine Scheme-X applicability.' },
        { step: 'Standard Identification', description: 'Identify applicable Indian Standards for your product.' },
        { step: 'Product Testing', description: 'Get products tested from BIS recognized laboratories.' },
        { step: 'Documentation', description: 'Prepare self-declaration documents and technical files.' },
        { step: 'BIS Registration', description: 'Submit application on BIS portal with all required documents.' },
        { step: 'Registration Grant', description: 'Receive Scheme-X registration for self-declaration conformity.' },
      ]}
      documents={[
        'Business Registration Certificate',
        'Product Test Reports from BIS Labs',
        'Self-Declaration Certificate',
        'Technical Specifications',
        'Manufacturing Process Details',
        'Quality Control Documents',
        'Authorized Signatory Details',
        'Product Photographs & Labels',
      ]}
      faqs={[
        {
          question: 'What is Scheme-X certification?',
          answer: 'Scheme-X is a self-declaration conformity assessment scheme under BIS where manufacturers declare that their products meet the relevant Indian Standards without mandatory third-party inspection.',
        },
        {
          question: 'Which products are covered under Scheme-X?',
          answer: 'Scheme-X covers products that are not under mandatory BIS certification but manufacturers voluntarily want to declare conformity to Indian Standards.',
        },
        {
          question: 'How is Scheme-X different from ISI Mark?',
          answer: 'ISI Mark requires mandatory factory inspection and third-party testing, while Scheme-X is based on self-declaration with manufacturer taking responsibility for conformity.',
        },
        {
          question: 'How long does Scheme-X registration take?',
          answer: 'Scheme-X registration typically takes 2-4 weeks depending on documentation completeness and product testing.',
        },
        {
          question: 'What is the validity of Scheme-X registration?',
          answer: 'Scheme-X registration is valid for 2 years and must be renewed with updated test reports and documentation.',
        },
      ]}
    />
  );
}
