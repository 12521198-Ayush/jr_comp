'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wheat } from 'lucide-react';

export default function ProducerCompanyPage() {
  return (
    <ServicePageTemplate
      title="Producer Company Registration"
      subtitle="Empower Agricultural Producers"
      description="Complete Producer Company Registration easily. Get your Producer Company Registration from best company registration consultants with expert guidance on incorporation procedure."
      icon={Wheat}
      color="green"
      serviceInfo="At JR Compliance, we provide comprehensive Producer Company registration services for farmers, artisans, and primary producers seeking collective business organization. Our corporate experts guide you through the unique requirements of Producer Companies under Part IXA of Companies Act including member eligibility and objects. We assist with gathering minimum producer members, drafting customized MOA and AOA for your produce categories, and preparing incorporation documents. Our team handles the complete MCA filing, coordinates with ROC authorities, and ensures timely certificate of incorporation. We help establish governance structures, member enrollment procedures, and voting rights frameworks suitable for producer cooperatives. Post-registration, we provide ongoing compliance support, board meeting coordination, and annual filing services to keep your Producer Company in good standing."
      benefits={[
        'Limited liability for members',
        'Democratic management',
        'Better market access',
        'Government scheme benefits',
        'Collective bargaining power',
        'Professional management',
        'Tax benefits available',
        'Access to credit facilities'
      ]}
      process={[
        { step: 'Name Reservation', description: 'Reserve company name with MCA' },
        { step: 'Member Enrollment', description: 'Enroll minimum 10 producer members or 2 institutions' },
        { step: 'DSC & DIN', description: 'Obtain Digital Signature and Director ID for directors' },
        { step: 'Document Drafting', description: 'Prepare MOA, AOA with producer company objects' },
        { step: 'SPICe+ Filing', description: 'File incorporation application with MCA' },
        { step: 'Incorporation', description: 'Receive Certificate of Incorporation' }
      ]}
      documents={[
        'Members\' Identity Proof',
        'Members\' Address Proof',
        'Photographs of Directors',
        'Registered Office Proof',
        'NOC from Landlord',
        'DSC of Directors',
        'List of Primary Producers'
      ]}
      faqs={[
        { question: 'What is a Producer Company?', answer: 'Producer Company is a hybrid between cooperative and private company, specifically for primary producers like farmers, artisans, and craftsmen to collectively process, market, and sell their produce.' },
        { question: 'Who can be a member?', answer: 'Any primary producer, producer institution, or any person engaged in activities connected with primary produce can become a member.' },
        { question: 'What is the minimum membership?', answer: 'Minimum 10 individual producers or 2 producer institutions are required to form a Producer Company.' },
        { question: 'Can Producer Company distribute profits?', answer: 'Yes, profits can be distributed among members in proportion to their patronage (business done with the company), not share capital.' },
        { question: 'What activities can Producer Company undertake?', answer: 'Production, harvesting, procurement, grading, pooling, handling, marketing, selling, export of primary produce, and providing services to members.' }
      ]}
    />
  );
}
