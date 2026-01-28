'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function CDSCORegistrationPage() {
  return (
    <ServicePageTemplate
      title="CDSCO Medical Devices"
      subtitle="Medical Device Registration as per CDSCO Regulations"
      logo="/services_logo/cdsco.png"
      color="orange"
      description="End-to-end assistance for registering medical devices in compliance with India's medical device regulations."
      serviceInfo="JR Compliance's regulatory experts specialize in navigating the complex Medical Device Rules 2017 and Drug & Cosmetics Act requirements for your medical devices. We provide complete support from device classification and risk assessment to clinical evidence compilation and SUGAM portal submissions. Our team coordinates with notified bodies, manages comprehensive technical documentation, and handles all communication with CDSCO authorities on your behalf. We ensure your products meet stringent safety and performance standards while accelerating your time-to-market. Our consultants guide you through every stage of the approval process, addressing queries promptly and maintaining compliance. Post-registration, we offer vigilance reporting support, license renewal services, and ongoing compliance management."
      stats={[
        { value: '1800+', label: 'CDSCO Registrations' },
        { value: '4.9', label: 'Google Rating' },
        { value: '12+', label: 'Years Experience' },
        { value: '97%', label: 'Success Rate' },
      ]}
      trustedBy={['Abbott', 'Medtronic', 'J&J', 'Philips', 'Siemens']}
      benefits={[
        'Legal market access for medical devices',
        'Patient safety compliance',
        'Market credibility with healthcare providers',
        'Competitive advantage in medical sector',
        'Access to hospital & clinic networks',
        'Government tender eligibility',
        'MDR 2017 compliance',
        'Expert regulatory guidance',
        'Streamlined approval process',
      ]}
      process={[
        { step: 'Product Classification', description: 'Determine device classification (A, B, C, D) under MDR 2017.' },
        { step: 'Document Preparation', description: 'Compile technical file, clinical data, and regulatory documents.' },
        { step: 'SUGAM Portal Registration', description: 'Create account and submit application on CDSCO portal.' },
        { step: 'Application Review', description: 'CDSCO reviews application and may request additional information.' },
        { step: 'Plant Inspection', description: 'Facility inspection for Class C and D devices (if applicable).' },
        { step: 'Registration Grant', description: 'Receive CDSCO registration certificate for your device.' },
      ]}
      documents={[
        'Application Form',
        'Device Master File',
        'ISO 13485 Certificate',
        'Free Sale Certificate',
        'Declaration of Conformity',
        'Clinical Evidence/Data',
        'Device Labeling & IFU',
        'Authorized Agent Agreement',
      ]}
      faqs={[
        {
          question: 'What is CDSCO registration?',
          answer: 'CDSCO (Central Drugs Standard Control Organization) registration is mandatory approval for manufacturing, importing, or selling medical devices in India under Medical Devices Rules, 2017.',
        },
        {
          question: 'What are device classification classes?',
          answer: 'MDR 2017 classifies devices into Class A (low risk), Class B (moderate risk), Class C (high risk), and Class D (very high risk) based on intended use and risk level.',
        },
        {
          question: 'How long does CDSCO registration take?',
          answer: 'Timeline varies by class: Class A takes 2-3 months, Class B takes 3-4 months, Class C/D may take 6-12 months including inspections.',
        },
        {
          question: 'Is ISO 13485 mandatory?',
          answer: 'ISO 13485 certification is mandatory for Class B, C, and D medical devices. Class A devices are exempt from this requirement.',
        },
        {
          question: 'What is the validity of CDSCO registration?',
          answer: 'CDSCO registration is valid for 5 years and must be renewed before expiry to continue selling in India.',
        },
      ]}
    />
  );
}
