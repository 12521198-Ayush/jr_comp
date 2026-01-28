'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function TeaBoardPage() {
  return (
    <ServicePageTemplate
      title="Tea Board Registration"
      subtitle="Export Indian Tea Globally"
      description="Get Tea Board Registration for tea export business. JR Compliance provides complete assistance for tea growers, manufacturers, and exporters."
      serviceInfo="JR Compliance provides complete Tea Board registration support for tea growers, manufacturers, blenders, brokers, and exporters across India. Our experts guide you through the appropriate registration category and help prepare comprehensive documentation for your application. We handle manufacturer license applications, warehouse registrations, and exporter registrations as per Tea Board requirements. Our team coordinates with Tea Board authorities, manages application submissions, and ensures timely approval of your registration. We assist with understanding quality standards, auction participation requirements, and export documentation for international tea trade. Post-registration, we provide license renewal support, compliance monitoring, and guidance on accessing Tea Board schemes and incentives for your tea business."
      logo="/services_logo/tea board.png"
      color="green"
      benefits={[
        'Tea export authorization',
        'Manufacturer registration',
        'Export incentives access',
        'Quality certification',
        'Market development support',
        'Research & development access',
        'Brand promotion assistance',
        'International exhibitions'
      ]}
      process={[
        { step: 'Category Identification', description: 'Identify registration category (Grower/Manufacturer/Exporter)' },
        { step: 'Online Application', description: 'Apply on Tea Board portal' },
        { step: 'Document Submission', description: 'Submit required documents' },
        { step: 'Fee Payment', description: 'Pay registration fees' },
        { step: 'Verification', description: 'Tea Board verifies details' },
        { step: 'License Issuance', description: 'Receive registration certificate' }
      ]}
      documents={[
        'Tea Estate Documents (for growers)',
        'Factory License (for manufacturers)',
        'IEC Certificate (for exporters)',
        'Company Registration',
        'PAN Card',
        'GST Registration',
        'Bank Account Details'
      ]}
      faqs={[
        { question: 'What is Tea Board?', answer: 'Tea Board of India is a statutory body under Ministry of Commerce promoting tea production, export, and development of the Indian tea industry.' },
        { question: 'Who needs to register?', answer: 'Tea growers, tea manufacturers, tea auctioneers, tea brokers, tea warehouses, and tea exporters need to register with Tea Board.' },
        { question: 'Is registration mandatory?', answer: 'Yes, registration is mandatory for operating in the tea sector. Different categories have different registration requirements.' },
        { question: 'What support is provided?', answer: 'Tea Board provides quality improvement programs, market development, research support, export promotion, and subsidy schemes.' },
        { question: 'What is the validity?', answer: 'Registration is typically valid for the license period and needs renewal as per Tea Board regulations.' }
      ]}
    />
  );
}
