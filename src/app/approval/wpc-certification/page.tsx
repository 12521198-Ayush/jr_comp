'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';

export default function WPCCertificationPage() {
  return (
    <ServicePageTemplate
      title="WPC Certification"
      subtitle="Wireless Product Approval under WPC Guidelines"
      logo="/services_logo/wpc.png"
      color="indigo"
      description="Regulatory assistance for wireless and RF-enabled products under WPC and ETA approval norms."
      serviceInfo="Our specialists at JR Compliance guide you through the Wireless Planning & Coordination Wing approval process for all radio frequency devices entering the Indian market. We handle Equipment Type Approval (ETA) applications, coordinate testing at authorized laboratories, and ensure complete compliance with Indian spectrum regulations. Our team manages the entire documentation process including technical specifications, frequency details, and import permits required for your wireless products. We stay current with WPC policy changes and help you navigate both dealer and non-dealer possession license requirements efficiently. Our consultants provide end-to-end support from initial assessment to final approval, ensuring a smooth certification journey. Post-certification, we offer ongoing support to ensure your wireless products remain compliant throughout their lifecycle."
      stats={[
        { value: '2500+', label: 'WPC Certifications' },
        { value: '4.9', label: 'Google Rating' },
        { value: '15+', label: 'Years Experience' },
        { value: '98%', label: 'Success Rate' },
      ]}
      trustedBy={['Cisco', 'TP-Link', 'D-Link', 'Netgear', 'Xiaomi']}
      benefits={[
        'Access to Indian wireless market',
        'Consumer confidence with WPC approval',
        'Avoid legal penalties and complications',
        'Streamlined product launch process',
        'RF spectrum compliance assurance',
        'DoT registration support',
        'Expert guidance throughout process',
        'Quick turnaround time',
        'Pan-India regulatory compliance',
      ]}
      process={[
        { step: 'Application Submission', description: 'Submit your completed application via Saral Sanchar Portal with all necessary documents.' },
        { step: 'Product Evaluation', description: 'Product undergoes performance tests to verify compliance with WPC guidelines and standards.' },
        { step: 'RF Testing', description: 'Mandatory RF testing at certified labs to ensure frequency compliance.' },
        { step: 'Certification Approval', description: 'Upon successful testing, receive WPC certification for lawful use in India.' },
        { step: 'DoT Registration', description: 'Register the certified product with Department of Telecommunications.' },
        { step: 'Market Launch', description: 'Your product is now ready for the Indian wireless market.' },
      ]}
      documents={[
        'Application Form via Saral Sanchar',
        'Product Technical Specifications',
        'RF Test Reports',
        'Manufacturer Authorization Letter',
        'Company Registration Documents',
        'Product Photographs & Labels',
        'Import Export Code (if applicable)',
        'BIS Registration (if applicable)',
      ]}
      faqs={[
        {
          question: 'What is WPC certification?',
          answer: 'WPC certification ensures your wireless and telecom devices meet the required Indian regulatory standards for legal operation. It is mandatory for all wireless devices operating in India.',
        },
        {
          question: 'Who needs WPC certification?',
          answer: 'It is obligatory for manufacturers of wireless and telecom products including WiFi devices, Bluetooth products, RF equipment, and IoT devices to get WPC certification for marketing in India.',
        },
        {
          question: 'How long does WPC certification take?',
          answer: 'The certification process usually takes 4-8 weeks depending on RF testing, documentation completeness, and regulatory processing times.',
        },
        {
          question: 'What is the difference between WPC and TEC?',
          answer: 'WPC deals with wireless spectrum and RF equipment approvals, while TEC handles telecom equipment approvals. Some products may require both certifications.',
        },
        {
          question: 'Is WPC certification mandatory for all wireless devices?',
          answer: 'Yes, WPC certification is required for all wireless devices operating in India, including WiFi routers, Bluetooth devices, and RF equipment.',
        },
      ]}
    />
  );
}
