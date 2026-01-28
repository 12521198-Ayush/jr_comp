'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function FMCSBISCertificationPage() {
  return (
    <ServicePageTemplate
      title="FMCS (Foreign Manufacturers)"
      subtitle="BIS Certification for Foreign Manufacturers"
      logo="/services_logo/fmcs.png"
      color="purple"
      description="Assisting overseas manufacturers with BIS certification and representation in India."
      serviceInfo="JR Compliance specializes in helping foreign manufacturers navigate the BIS certification process for entering the Indian market. As your Authorized Indian Representative (AIR), we handle all regulatory requirements on your behalf, from initial application to final certification. Our team manages factory inspection coordination, ensuring your overseas manufacturing facilities meet BIS standards and requirements. We prepare comprehensive documentation, coordinate product testing at recognized laboratories, and maintain ongoing communication with BIS officials. Our consultants understand the unique challenges faced by foreign manufacturers and provide tailored solutions to expedite your certification. Post-certification, we offer complete AIR services including compliance monitoring, annual renewal management, and representation during any regulatory proceedings."
      stats={[
        { value: '2500+', label: 'FMCS Certifications' },
        { value: '4.9', label: 'Google Rating' },
        { value: '15+', label: 'Years Experience' },
        { value: '98%', label: 'Success Rate' },
      ]}
      trustedBy={['Philips', 'Samsung', 'Bosch', 'Siemens', 'Haier']}
      benefits={[
        'Access to Indian market for foreign manufacturers',
        'ISI Mark credibility with consumers',
        'Legal compliance for imports',
        'Competitive edge in Indian market',
        'AIR services included',
        'Factory audit preparation support',
        'Documentation assistance',
        'Quick certification process',
        'Ongoing compliance management',
      ]}
      process={[
        { step: 'Eligibility Assessment', description: 'We evaluate your products and determine applicable BIS standards.' },
        { step: 'AIR Appointment', description: 'Appoint our team as your Authorized Indian Representative.' },
        { step: 'Documentation', description: 'Prepare technical files, test reports, and application documents.' },
        { step: 'Application Submission', description: 'Submit complete application to BIS through official portal.' },
        { step: 'Factory Audit', description: 'BIS officials conduct factory inspection at your overseas facility.' },
        { step: 'License Grant', description: 'Receive FMCS license to use ISI Mark in India.' },
      ]}
      documents={[
        'Application Form with AIR Details',
        'Factory Layout & Infrastructure',
        'Production Process Documents',
        'Test Equipment Calibration Reports',
        'Quality Control Manual',
        'Product Test Reports from BIS Labs',
        'AIR Authorization Letter',
        'Company Registration Documents',
      ]}
      faqs={[
        {
          question: 'What is FMCS certification?',
          answer: 'Foreign Manufacturers Certification Scheme (FMCS) is a BIS scheme that allows foreign manufacturers to obtain ISI Mark certification for products manufactured outside India.',
        },
        {
          question: 'Is AIR mandatory for FMCS?',
          answer: 'Yes, every foreign manufacturer must appoint an Authorized Indian Representative (AIR) who acts as the legal representative in India for all certification matters.',
        },
        {
          question: 'How long does FMCS take?',
          answer: 'FMCS certification typically takes 4-6 months depending on documentation readiness and BIS factory audit scheduling.',
        },
        {
          question: 'What is the validity of FMCS license?',
          answer: 'FMCS license is valid for 2 years initially and can be renewed through surveillance audits and annual testing.',
        },
        {
          question: 'Can I sell without FMCS in India?',
          answer: 'No, products under mandatory BIS certification cannot be sold, imported, or distributed in India without valid BIS/FMCS license.',
        },
      ]}
    />
  );
}
