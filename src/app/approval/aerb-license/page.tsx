'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Radiation } from 'lucide-react';

export default function AERBLicensePage() {
  return (
    <ServicePageTemplate
      title="AERB License"
      subtitle="Atomic Energy Regulatory Board"
      icon={Radiation}
      color="orange"
      description="We make the AERB license registration hassle-free. Get your AERB certificate today from best consultants. Click here to know how to get AERB approvals and know AERB certificate registration process."
      benefits={[
        'Mandatory for radiation equipment',
        'X-ray machine registration',
        'Industrial radiography license',
        'Medical radiation equipment',
        'Expert regulatory guidance',
        'Radiation safety compliance',
        'Quick processing',
        'Renewal support',
        'Pan-India operations',
      ]}
      process={[
        { step: 'Equipment Identification', description: 'Identify radiation equipment requiring AERB license.' },
        { step: 'RSO Appointment', description: 'Appoint qualified Radiation Safety Officer.' },
        { step: 'Documentation', description: 'Prepare safety documents and layout plans.' },
        { step: 'AERB Application', description: 'Submit application on eLORA portal.' },
        { step: 'License Grant', description: 'Receive AERB license after inspection.' },
      ]}
      documents={[
        'Company registration documents',
        'Equipment specifications',
        'Layout plan with shielding details',
        'RSO qualification documents',
        'Radiation safety procedures',
        'Personnel monitoring arrangements',
        'Waste disposal plan',
        'Previous license (if renewal)',
      ]}
      faqs={[
        {
          question: 'What is AERB license?',
          answer: 'AERB license is mandatory authorization for possessing and using radiation generating equipment and radioactive sources.',
        },
        {
          question: 'Who needs AERB license?',
          answer: 'Hospitals, diagnostic centers, industries using X-ray/gamma ray equipment, and research facilities need AERB license.',
        },
        {
          question: 'What is RSO?',
          answer: 'RSO (Radiation Safety Officer) is a qualified person responsible for radiation safety at the facility.',
        },
        {
          question: 'How long does AERB license take?',
          answer: 'AERB license typically takes 2-4 months depending on equipment type and documentation.',
        },
        {
          question: 'What is the validity of AERB license?',
          answer: 'AERB license validity varies from 1-5 years depending on equipment category.',
        },
      ]}
    />
  );
}
