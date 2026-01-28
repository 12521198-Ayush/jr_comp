
'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Zap } from 'lucide-react';

export default function AERBRegistrationPage() {
  return (
    <ServicePageTemplate
      title="AERB Registration"
      subtitle="Technical Services"
      icon={Zap}
      color="orange"
      description="Atomic Energy Regulatory Board (AERB) registration is mandatory for radiation-generating equipment in India. We provide comprehensive AERB licensing services for medical, industrial, and research applications including X-ray machines, CT scanners, and other radiation equipment."
      serviceInfo="At JR Compliance, we provide comprehensive AERB registration services for radiation-generating equipment and facilities across medical, industrial, and research sectors. Our radiation safety experts guide you through the complete licensing process on the eLORA portal, from application submission to final approval. We assist with Radiation Safety Officer (RSO) requirements, facility design review, shielding adequacy calculations, and safety procedure documentation. Our team prepares all necessary compliance documents including radiation safety manuals, personnel monitoring arrangements, and emergency procedures as per AERB safety codes. We coordinate facility inspections and help address AERB observations promptly. Post-licensing, we provide ongoing support for license renewals, amendments, compliance audits, and radiation safety training for your personnel."
      benefits={[
        'Expert regulatory guidance',
        'Complete documentation support',
        'Radiation safety consultation',
        'Equipment type approval assistance',
        'Facility license support',
        'Import/export license services',
        'RSO (Radiation Safety Officer) compliance',
        'Annual compliance support',
        'License renewal services',
      ]}
      process={[
        { step: 'Assessment', description: 'Evaluate equipment and facility for AERB requirements.' },
        { step: 'Documentation', description: 'Prepare safety documentation and layout plans.' },
        { step: 'Application', description: 'Submit application with required documents to AERB.' },
        { step: 'Approval', description: 'Receive AERB license after inspection and approval.' },
      ]}
      documents={[
        'Equipment specifications and datasheets',
        'Facility layout plan with shielding details',
        'RSO appointment letter and qualifications',
        'Radiation protection programme',
        'Personnel monitoring arrangements',
        'Emergency response procedures',
        'Previous license (for renewal)',
        'Import permit (for imported equipment)',
      ]}
      faqs={[
        {
          question: 'What equipment requires AERB license?',
          answer: 'Medical X-ray, CT scanners, radiation therapy equipment, industrial radiography, nucleonic gauges, and any radiation-generating or radioactive source equipment requires AERB license.',
        },
        {
          question: 'What is an RSO and is it mandatory?',
          answer: 'Radiation Safety Officer (RSO) is a qualified person responsible for radiation safety. RSO appointment is mandatory for operating radiation equipment.',
        },
        {
          question: 'How long does AERB registration take?',
          answer: 'AERB registration typically takes 2-4 months depending on equipment type, facility inspection requirements, and document completeness.',
        },
        {
          question: 'Is AERB license required for dental X-ray?',
          answer: 'Yes, even dental X-ray machines require AERB registration and must comply with radiation safety requirements.',
        },
      ]}
    />
  );
}
