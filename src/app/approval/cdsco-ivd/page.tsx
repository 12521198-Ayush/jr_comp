'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function IVDCDSCOPage() {
  return (
    <ServicePageTemplate
      title="IVD CDSCO Registration"
      subtitle="Approval Process for In-Vitro Diagnostic Devices"
      logo="/services_logo/cdsco.png"
      color="blue"
      description="End-to-end support for approval of in-vitro diagnostic devices in India."
      serviceInfo="JR Compliance provides comprehensive regulatory support for In-Vitro Diagnostic (IVD) medical device registration under CDSCO guidelines and MDR 2017. Our experts assist with accurate device classification under Class A, B, C, or D categories based on risk assessment criteria. We help compile complete technical documentation including device master files, analytical performance data, and clinical evidence required for IVD approval. Our team manages the entire SUGAM portal submission process and handles all communication with CDSCO authorities throughout the review. We coordinate with notified bodies for conformity assessments and ensure your IVD devices meet all safety and performance requirements. Post-registration, we provide vigilance reporting support, license renewals, and ongoing regulatory compliance management for your IVD portfolio."
      stats={[
        { value: '800+', label: 'IVD Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '12+', label: 'Years Experience' },
        { value: '97%', label: 'Success Rate' },
      ]}
      benefits={[
        'Legal market access for IVD devices in India',
        'Compliance with IVDR and MDR 2017',
        'Import license for foreign IVD manufacturers',
        'Manufacturing license for domestic producers',
        'Expert regulatory pathway guidance',
        'Clinical performance data compilation',
        'Quick processing and approval',
        'Post-market surveillance support',
        'Complete documentation assistance'
      ]}
      process={[
        { step: 'Device Classification', description: 'Classify IVD device under Class A, B, C, or D based on risk.' },
        { step: 'Technical Documentation', description: 'Prepare device master file, clinical evidence, and quality documents.' },
        { step: 'Testing & Validation', description: 'Conduct analytical and clinical performance evaluation.' },
        { step: 'Application Submission', description: 'Submit application on CDSCO SUGAM portal.' },
        { step: 'CDSCO Review', description: 'Review by CDSCO with possible queries and clarifications.' },
        { step: 'Registration Grant', description: 'Receive IVD registration certificate upon approval.' }
      ]}
      documents={[
        'Application Form',
        'Device Master File',
        'ISO 13485 Certificate',
        'Analytical Performance Data',
        'Clinical Performance Evidence',
        'Declaration of Conformity',
        'Free Sale Certificate',
        'Quality Management System Documents',
        'Device Labeling and IFU'
      ]}
      faqs={[
        { question: 'What are IVD medical devices?', answer: 'IVD devices are used for in-vitro examination of specimens from the human body for diagnosis, monitoring, or compatibility purposes.' },
        { question: 'How are IVD devices classified?', answer: 'IVD devices are classified into Class A (low risk), Class B, Class C, and Class D (high risk) based on intended use and risk level.' },
        { question: 'Is clinical data required for IVD registration?', answer: 'Yes, clinical performance data is required, with extent depending on device classification and risk level.' },
        { question: 'How long does IVD registration take?', answer: 'Registration typically takes 3-6 months for Class A/B and 6-12 months for Class C/D devices.' },
        { question: 'What is the validity of IVD registration?', answer: 'IVD registration is valid for 5 years and needs to be renewed before expiry.' },
        { question: 'Can foreign IVD be registered without Indian partner?', answer: 'No, foreign manufacturers need an authorized Indian agent for CDSCO registration.' }
      ]}
    />
  );
}
