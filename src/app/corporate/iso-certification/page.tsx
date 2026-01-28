'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function ISOCertificationPage() {
  return (
    <ServicePageTemplate
      title="ISO Certification"
      subtitle="International Quality Standards"
      description="We make ISO certification online hassle-free to ensure customer satisfaction. Get your ISO Certification with expert guidance on various ISO standards and benefits."
      serviceInfo="JR Compliance provides comprehensive ISO certification support for businesses seeking international quality recognition across various standards including ISO 9001, ISO 14001, ISO 27001, ISO 22000, and more. Our quality management experts assess your business processes, identify applicable ISO standards, and guide you through implementation requirements. We help develop quality management systems, document procedures, and prepare your organization for certification audits. Our team coordinates with accredited certification bodies, schedules audits, and assists with addressing any non-conformities identified during the certification process. We provide training support for your team to understand and maintain ISO compliance. Post-certification, we offer surveillance audit preparation, recertification support, and ongoing quality management system improvement guidance."
      logo="/services_logo/iso.png"
      color="blue"
      benefits={[
        'International recognition',
        'Quality assurance',
        'Customer confidence',
        'Process improvement',
        'Competitive advantage',
        'Tender eligibility',
        'Operational efficiency',
        'Risk management'
      ]}
      process={[
        { step: 'Gap Analysis', description: 'Assess current processes against ISO requirements' },
        { step: 'Documentation', description: 'Develop quality manual, procedures, and policies' },
        { step: 'Implementation', description: 'Implement processes and train employees' },
        { step: 'Internal Audit', description: 'Conduct internal audit to check compliance' },
        { step: 'Certification Audit', description: 'External auditor conducts certification audit' },
        { step: 'Certificate Issuance', description: 'Receive ISO certification upon approval' }
      ]}
      documents={[
        'Company Registration',
        'Existing Quality Documents',
        'Organization Chart',
        'Process Flow Charts',
        'Employee Training Records',
        'Previous Audit Reports (if any)',
        'Product/Service Details'
      ]}
      faqs={[
        { question: 'What is ISO Certification?', answer: 'ISO Certification confirms that your organization meets international standards for quality management, environmental management, or other specific areas.' },
        { question: 'What are common ISO standards?', answer: 'ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health & Safety), ISO 27001 (Information Security) are common standards.' },
        { question: 'Is ISO certification mandatory?', answer: 'ISO certification is voluntary but often required for government tenders, exports, and certain industries.' },
        { question: 'What is the validity?', answer: 'ISO certification is valid for 3 years with annual surveillance audits to maintain compliance.' },
        { question: 'How long does certification take?', answer: 'Depending on organization size and preparedness, ISO certification typically takes 2-6 months.' }
      ]}
    />
  );
}
