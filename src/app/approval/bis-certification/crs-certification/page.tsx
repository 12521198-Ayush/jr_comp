'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function CRSCertificationPage() {
  return (
    <ServicePageTemplate
      title="CRS Certification"
      subtitle="Compulsory Registration Scheme"
      logo="/services_logo/bis.png"
      color="blue"
      description="CRS certification assures customers of product safety and quality, improving brand reputation and consumer trust. Mandatory for electronic and IT products in India."
      stats={[
        { value: '3000+', label: 'CRS Certifications' },
        { value: '4.9', label: 'Google Rating' },
        { value: '15+', label: 'Years Experience' },
        { value: '99%', label: 'Success Rate' },
      ]}
      trustedBy={['Samsung', 'Xiaomi', 'Philips', 'Havells', 'Syska']}
      benefits={[
        'Enhanced product credibility',
        'Access to Indian electronics market',
        'Legal compliance assurance',
        'Business growth enablement',
        'Consumer trust building',
        'BIS registration support',
        'Quick turnaround time',
        'Expert testing coordination',
        'Multiple product category coverage',
      ]}
      process={[
        { step: 'Documentation Preparation', description: 'Collection and preparation of necessary documents, including product details and testing reports.' },
        { step: 'Category & Standard Mapping', description: 'We help in mapping your product to the correct category under CRS and identify relevant Indian standards.' },
        { step: 'Product Testing', description: 'Products undergo testing in BIS-approved labs to verify compliance with safety and quality standards.' },
        { step: 'Application Submission', description: 'The application, along with required documents and testing results, is submitted to BIS for review.' },
        { step: 'BIS Inspection & Review', description: 'The BIS team conducts inspections to validate documents and product conformity.' },
        { step: 'Certification Issuance', description: 'Upon successful verification, BIS issues the CRS certificate for marketing products in India.' },
      ]}
      documents={[
        'Business Registration Documents',
        'Product Test Reports from BIS Labs',
        'Authorized Signatory KYC',
        'Factory Inspection Reports',
        'Labeling & Packaging Details',
        'Technical Specifications',
        'Brand Authorization Letter',
        'Import Export Code (if applicable)',
      ]}
      faqs={[
        {
          question: 'What is CRS certification?',
          answer: 'Compulsory Registration Scheme (CRS) is a BIS certification scheme for electronic and IT products. It ensures products meet Indian safety and quality standards before sale.',
        },
        {
          question: 'Which products need CRS certification?',
          answer: 'Products like adapters, power banks, LED lights, laptops, tablets, printers, microwave ovens, and other electronic/IT products require CRS certification.',
        },
        {
          question: 'How long does CRS certification take?',
          answer: 'CRS certification typically takes 4-8 weeks depending on product testing and documentation completeness.',
        },
        {
          question: 'Is factory inspection required for CRS?',
          answer: 'Yes, BIS may conduct factory inspections for verification of manufacturing processes and quality control systems.',
        },
        {
          question: 'What is the validity of CRS registration?',
          answer: 'CRS registration is valid for 2 years and must be renewed before expiry to continue selling in India.',
        },
      ]}
    />
  );
}
