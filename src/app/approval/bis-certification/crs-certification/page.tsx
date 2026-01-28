'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function CRSCertificationPage() {
  return (
    <ServicePageTemplate
      title="CRS Certification"
      subtitle="Mandatory Product Registration under CRS Scheme"
      logo="/services_logo/bis.png"
      color="blue"
      description="Helping businesses register mandatory electronic products under the BIS CRS scheme."
      serviceInfo="At JR Compliance, we provide expert guidance for Compulsory Registration Scheme (CRS) certification, ensuring your electronic and IT products meet mandatory Indian safety standards. Our consultants help identify applicable standards for your products and coordinate testing at BIS-recognized laboratories. We prepare all required documentation, submit applications on the BIS portal, and track your certification status throughout the process. Our team stays updated with the latest additions to the CRS product list, helping you maintain compliance as regulations evolve. We handle all communication with BIS authorities and provide timely responses to any queries. Post-registration, we offer annual renewal services, inclusion filing for new models, and ongoing compliance support to keep your products legally available in the Indian market."
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
