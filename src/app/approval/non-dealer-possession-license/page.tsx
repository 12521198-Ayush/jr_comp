'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wifi } from 'lucide-react';

export default function NonDealerPossessionLicensePage() {
  return (
    <ServicePageTemplate
      title="Non-Dealer Possession License (NDPL)"
      subtitle="Permission to Possess Wireless Equipment"
      icon={Wifi}
      color="violet"
      description="Licensing assistance for entities possessing wireless equipment without trading or selling."
      serviceInfo="At JR Compliance, we provide specialized support for obtaining Non-Dealer Possession License from WPC for organizations that use wireless equipment for internal purposes. Our regulatory consultants guide corporates, institutions, and research facilities through the NDPL application process for legitimate possession of radio frequency devices. We help prepare the required documentation including equipment details, justification for possession, and organizational credentials. Our team handles complete Saral Sanchar portal submissions, application tracking, and coordination with WPC officials throughout the approval process. We assist with security clearance requirements and manage all regulatory communications on your behalf. Post-licensing, we provide renewal support, amendment services for additional equipment, and ongoing compliance monitoring for your wireless equipment possession."
      benefits={[
        'Legal possession of wireless equipment',
        'For entities not dealing in wireless products',
        'Corporate and enterprise use',
        'Research and development purposes',
        'Multi-location coverage',
        'Quick processing and approval',
        'License renewal support',
        'Compliance monitoring',
        'Expert consultation',
      ]}
      process={[
        { step: 'Equipment Identification', description: 'Identify wireless equipment requiring NDPL.' },
        { step: 'Document Preparation', description: 'Prepare required documents and justification.' },
        { step: 'WPC Application', description: 'Submit NDPL application to WPC wing.' },
        { step: 'Review Process', description: 'WPC reviews application and documents.' },
        { step: 'License Grant', description: 'Receive Non-Dealer Possession License.' },
      ]}
      documents={[
        'Company registration certificate',
        'GST registration',
        'PAN card',
        'Address proof of premises',
        'Equipment details and purpose',
        'Justification for possession',
        'Security clearance (if required)',
        'Previous license (if renewal)',
      ]}
      faqs={[
        {
          question: 'What is Non-Dealer Possession License?',
          answer: 'NDPL authorizes entities to possess wireless equipment for their own use without dealing or trading in such equipment.',
        },
        {
          question: 'Who needs NDPL?',
          answer: 'Corporates, institutions, and organizations using wireless equipment for internal purposes need NDPL.',
        },
        {
          question: 'What is the difference between DPL and NDPL?',
          answer: 'DPL is for dealers selling wireless equipment, while NDPL is for non-dealers possessing equipment for own use.',
        },
        {
          question: 'What equipment needs NDPL?',
          answer: 'Walkie-talkies, wireless cameras, radio equipment, and other wireless devices may require NDPL.',
        },
        {
          question: 'What is the validity of NDPL?',
          answer: 'NDPL is typically valid for 1-5 years and can be renewed before expiry.',
        },
      ]}
    />
  );
}
