'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Heart } from 'lucide-react';

export default function TrustRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Trust Registration"
      subtitle="Charitable Trust Formation"
      description="Register your Trust with JR Compliance. Get expert guidance on trust registration process, documentation, and compliance requirements."
      icon={Heart}
      color="purple"
      serviceInfo="At JR Compliance, we provide comprehensive charitable trust registration services for individuals and groups seeking to establish trusts for religious, educational, or charitable purposes. Our trust formation experts guide you through the Trust Deed drafting process, ensuring proper articulation of objectives, trustee powers, and operational framework. We advise on optimal trust structure based on your charitable goals and operational requirements. Our team handles the complete registration process with the Charity Commissioner or Sub-Registrar as applicable in your state. We assist with 12A registration for income tax exemption and 80G registration for donor tax benefits. Post-registration, we provide ongoing compliance support including annual filings, trustee changes, deed amendments, and guidance on maintaining proper books and records as required for charitable trusts."
      benefits={[
        'Charitable activities authorization',
        'Tax exemptions under 12A & 80G',
        'Perpetual succession',
        'Asset protection',
        'Donor confidence',
        'Flexible structure',
        'Community impact',
        'Legacy creation'
      ]}
      process={[
        { step: 'Trust Deed Drafting', description: 'Prepare comprehensive trust deed with objectives' },
        { step: 'Stamp Duty Payment', description: 'Pay applicable stamp duty on trust deed' },
        { step: 'Trustee Appointment', description: 'Appoint trustees and define their roles' },
        { step: 'Registration', description: 'Register trust with Sub-Registrar office' },
        { step: 'PAN Application', description: 'Apply for PAN card for the trust' },
        { step: 'Tax Registrations', description: 'Apply for 12A and 80G registrations' }
      ]}
      documents={[
        'Trust Deed (drafted)',
        'Trustees\' Identity Proof',
        'Trustees\' Address Proof',
        'Passport-size Photographs',
        'Registered Office Proof',
        'Declaration by Settlor',
        'Stamp Duty Payment Proof'
      ]}
      faqs={[
        { question: 'What is a Trust?', answer: 'A trust is a legal arrangement where property is held by trustees for the benefit of beneficiaries. It can be created for charitable, religious, or private purposes.' },
        { question: 'How many trustees are required?', answer: 'Minimum 2 trustees are required. There is no maximum limit, but typically 3-7 trustees are recommended for effective management.' },
        { question: 'What is a Trust Deed?', answer: 'Trust Deed is the founding document that establishes the trust, defines its objectives, trustees, beneficiaries, and rules for administration.' },
        { question: 'Is trust registration mandatory?', answer: 'Registration is not mandatory but highly recommended for legal recognition, opening bank account, and availing tax benefits.' },
        { question: 'What are the tax benefits?', answer: 'Registered trusts can apply for 12A (income tax exemption) and 80G (donor tax benefit) registrations with Income Tax Department.' }
      ]}
    />
  );
}
