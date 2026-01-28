'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Radio } from 'lucide-react';

export default function MTCTEPage() {
  return (
    <ServicePageTemplate
      title="MTCTE Certification"
      subtitle="Mandatory Testing & Certification of Telecom Equipment"
      icon={Radio}
      color="purple"
      description="MTCTE certification is mandatory for telecom equipment sold in India. Get expert assistance for Mandatory Testing and Certification of Telecom Equipment from TEC-authorized labs."
      serviceInfo="At JR Compliance, we provide expert guidance for Mandatory Testing and Certification of Telecom Equipment under TEC regulations. Our telecom regulatory specialists help you understand MTCTE requirements, identify applicable Essential Requirements (ERs), and prepare your equipment for certification. We coordinate testing at TEC-authorized laboratories, manage test report documentation, and ensure compliance with all technical standards. Our team handles the complete TEC portal submission, application tracking, and communication with TEC authorities throughout the certification process. We assist with both self-declaration and conformity assessment routes based on your product category and testing requirements. Post-certification, we provide certificate renewal support, amendment services for product updates, and ongoing regulatory compliance monitoring."
      stats={[
        { value: '2000+', label: 'MTCTE Certifications' },
        { value: '4.9', label: 'Google Rating' },
        { value: '15+', label: 'Years Experience' },
        { value: '98%', label: 'Success Rate' },
      ]}
      benefits={[
        'Mandatory compliance for telecom equipment',
        'Access to Indian telecom market',
        'TEC authorized lab coordination',
        'Complete documentation support',
        'Security testing assistance',
        'EMI/EMC testing guidance',
        'SAR testing for mobile devices',
        'Quick certification turnaround',
        'Post-certification compliance support',
      ]}
      process={[
        { step: 'Product Assessment', description: 'Evaluate your telecom product and identify applicable MTCTE requirements.' },
        { step: 'Lab Selection', description: 'Coordinate with TEC authorized testing laboratories.' },
        { step: 'Product Testing', description: 'Conduct mandatory testing including security, EMI/EMC, and SAR tests.' },
        { step: 'Documentation', description: 'Prepare complete application with test reports and technical specifications.' },
        { step: 'TEC Submission', description: 'Submit application on TEC portal for certification.' },
        { step: 'Certificate Issuance', description: 'Receive MTCTE certificate upon successful verification.' },
      ]}
      documents={[
        'Company Registration Documents',
        'Product Technical Specifications',
        'Test Reports from TEC Labs',
        'Security Audit Report',
        'EMI/EMC Test Reports',
        'SAR Test Report (for mobile devices)',
        'User Manual & Documentation',
        'Authorization Letter (for foreign manufacturers)',
      ]}
      faqs={[
        {
          question: 'What is MTCTE certification?',
          answer: 'MTCTE (Mandatory Testing and Certification of Telecom Equipment) is a regulatory requirement by DoT for all telecom equipment to be tested and certified before sale in India.',
        },
        {
          question: 'Which products require MTCTE?',
          answer: 'All telecom equipment including routers, switches, modems, mobile phones, tablets, Bluetooth devices, WiFi equipment, and network infrastructure require MTCTE certification.',
        },
        {
          question: 'Is security testing mandatory under MTCTE?',
          answer: 'Yes, security testing is a key component of MTCTE certification to ensure telecom equipment does not pose security risks to Indian networks.',
        },
        {
          question: 'How long does MTCTE certification take?',
          answer: 'MTCTE certification typically takes 6-10 weeks depending on product complexity and testing requirements.',
        },
        {
          question: 'What is the validity of MTCTE certificate?',
          answer: 'MTCTE certificate is valid for 5 years from the date of issue, subject to continued compliance with applicable standards.',
        },
      ]}
    />
  );
}
