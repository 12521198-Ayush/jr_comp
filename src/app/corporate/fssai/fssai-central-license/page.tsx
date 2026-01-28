'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function FSSAICentralLicensePage() {
  return (
    <ServicePageTemplate
      title="FSSAI Central License"
      subtitle="Large-Scale Food Businesses"
      description="Obtain FSSAI Central License for large food businesses. Central license is mandatory for businesses with annual turnover above Rs 20 crores or operating in multiple states."
      serviceInfo="JR Compliance provides expert assistance for obtaining FSSAI Central License for large-scale food businesses, importers, and multi-state operators. Our food safety consultants assess your business operations, manufacturing capacity, and geographic spread to ensure Central License eligibility and compliance. We prepare comprehensive documentation including manufacturing process details, HACCP plans, quality control procedures, and product specifications required for central licensing. Our team handles the complete FoSCoS portal submission, coordinates with central FSSAI authorities, and manages facility inspections. We ensure your operations meet the stringent requirements for pan-India food business operations and import/export activities. Post-licensing, we provide annual compliance support, renewal management, and assistance with license modifications as your business expands."
      logo="/services_logo/fssai.png"
      color="blue"
      benefits={[
        'Pan-India Operations - Operate food business across all states',
        'Import/Export Eligibility - Engage in international food trade',
        'Large-Scale Manufacturing - Operate high-capacity facilities',
        'Government Tenders - Eligible for government food supply contracts',
        'Maximum Credibility - Highest level of FSSAI compliance',
        'Centralized Compliance - Single license for multi-state operations',
        '5-Year Validity - Long-term license for business planning',
        'Premium Brand Value - Enhanced market positioning'
      ]}
      process={[
        { step: 'Eligibility Check', description: 'Verify turnover and operations qualify for central license.' },
        { step: 'Document Preparation', description: 'Prepare comprehensive documentation package.' },
        { step: 'Online Application', description: 'Submit Form-B application on FoSCoS portal.' },
        { step: 'Fee Payment', description: 'Pay central license fees as applicable.' },
        { step: 'Inspection', description: 'FSSAI may conduct premises inspection.' },
        { step: 'License Grant', description: 'Receive FSSAI Central License certificate.' }
      ]}
      documents={[
        'Photo ID of Proprietor/Directors',
        'Company Registration Certificate',
        'MOA & AOA (for companies)',
        'Proof of Premises',
        'Manufacturing Unit Layout',
        'Food Safety Management System',
        'List of Equipment',
        'Water Test Report',
        'Product List with Categories',
        'NOC from Pollution Board'
      ]}
      faqs={[
        { question: 'Who needs FSSAI Central License?', answer: 'Businesses with turnover above Rs 20 crores, operating in multiple states, importers, exporters, and large manufacturers need central license.' },
        { question: 'What is the fee for central license?', answer: 'Central license fee is Rs 7,500 per year. For 5 years, total fee is Rs 37,500 plus applicable service charges.' },
        { question: 'How long does central license take?', answer: 'Central license processing typically takes 60-90 days from application submission.' },
        { question: 'Is central license required for export?', answer: 'Yes, FSSAI Central License is mandatory for exporting food products from India.' },
        { question: 'Can I have both state and central license?', answer: 'No, you need only one type based on your operations. Central license covers all states.' },
        { question: 'What is FSMS requirement?', answer: 'Food Safety Management System (FSMS) documentation is mandatory for central license, detailing food safety practices.' },
        { question: 'Is factory inspection mandatory?', answer: 'For most central license applications, especially manufacturing, FSSAI inspection is conducted.' },
        { question: 'What if I have multiple manufacturing units?', answer: 'Each manufacturing unit requires separate license, but can apply under same business entity.' }
      ]}
      stats={[
        { value: '3000+', label: 'Licenses Obtained' },
        { value: '4.9', label: 'Google Rating' },
        { value: '12+', label: 'Years Experience' },
        { value: '60 Days', label: 'Avg Processing' }
      ]}
    />
  );
}
