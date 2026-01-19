'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Handshake } from 'lucide-react';

export default function PartnershipFirmPage() {
  return (
    <ServicePageTemplate
      title="Partnership Firm Registration"
      subtitle="Build Your Business Together"
      description="JR Compliance - finest partnership firm registration service provider. Get your partnership firm registration today with expert guidance on benefits, documents, and registration process."
      icon={Handshake}
      color="blue"
      benefits={[
        'Easy to form and manage',
        'Shared decision making',
        'Combined resources and skills',
        'Flexibility in profit sharing',
        'Minimal regulatory compliance',
        'Tax advantages available',
        'Quick dissolution process',
        'Pooled expertise and capital'
      ]}
      process={[
        { step: 'Partnership Deed', description: 'Draft comprehensive partnership deed with all terms' },
        { step: 'PAN Application', description: 'Apply for PAN card in the firm\'s name' },
        { step: 'Registration Application', description: 'File application with Registrar of Firms' },
        { step: 'Document Submission', description: 'Submit deed, partner proofs, and affidavits' },
        { step: 'Verification', description: 'Registrar verifies the documents and deed' },
        { step: 'Certificate Issuance', description: 'Receive Certificate of Registration' }
      ]}
      documents={[
        'Partnership Deed',
        'Partners\' PAN Cards',
        'Partners\' Aadhaar Cards',
        'Passport-size Photographs',
        'Address Proof of Partners',
        'Business Address Proof',
        'Affidavit by Partners'
      ]}
      faqs={[
        { question: 'Is partnership registration mandatory?', answer: 'Partnership registration is not mandatory but highly recommended. Unregistered firms cannot file suits against third parties or partners in court.' },
        { question: 'What is the minimum number of partners?', answer: 'Minimum 2 partners are required. Maximum is 50 partners for any partnership firm.' },
        { question: 'What is a Partnership Deed?', answer: 'Partnership Deed is a legal document that outlines the terms of partnership including profit sharing ratio, capital contribution, duties, and other conditions.' },
        { question: 'What is the liability of partners?', answer: 'Partners have unlimited liability in a partnership firm. Personal assets can be used to settle business debts.' },
        { question: 'Can a partnership firm be converted to a company?', answer: 'Yes, a partnership firm can be converted to an LLP or private limited company following the prescribed legal procedure.' }
      ]}
    />
  );
}
