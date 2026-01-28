'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Heart } from 'lucide-react';

export default function NGORegistrationPage() {
  return (
    <ServicePageTemplate
      title="NGO Registration"
      subtitle="Register a Trust, Society, or Non-profit Company"
      description="Want to register a Trust, Society, or Non-profit Company (NGO)? JR Compliance provides expert guidance for NGO registration with complete documentation support and compliance assistance."
      icon={Heart}
      color="purple"
      serviceInfo="At JR Compliance, we provide comprehensive NGO registration services to help you establish charitable, educational, or social organizations with proper legal structure. Our experts guide you in choosing the right entity type - Trust, Society, or Section 8 Company - based on your objectives and operational requirements. We draft Trust Deeds, Society Memorandums, and bylaws tailored to your organization's mission and governance needs. Our team handles the complete registration process with respective state authorities or MCA as applicable. We assist with 12A and 80G registrations for tax exemptions, NITI Aayog Darpan registration, and FCRA registration for foreign funding eligibility. Post-registration, we provide ongoing compliance support including annual return filings, audit coordination, and governance documentation to maintain your NGO's credibility."
      benefits={[
        'Legal recognition for your organization',
        'Eligibility for government grants',
        'Tax exemptions under Section 12A & 80G',
        'Credibility with donors and stakeholders',
        'Access to CSR funding',
        'FCRA registration eligibility',
        'Perpetual succession',
        'Limited liability protection'
      ]}
      process={[
        { step: 'Structure Selection', description: 'Choose between Trust, Society, or Section 8 Company based on your objectives' },
        { step: 'Name Reservation', description: 'Select and reserve a unique name for your NGO' },
        { step: 'Document Drafting', description: 'Prepare MOA, AOA, Trust Deed, or Society bylaws' },
        { step: 'Registration Filing', description: 'Submit application to the respective registering authority' },
        { step: 'Certificate Issuance', description: 'Receive registration certificate upon approval' },
        { step: 'Tax Registrations', description: 'Apply for 12A, 80G, and other tax benefits' }
      ]}
      documents={[
        'Identity Proof of Members',
        'Address Proof of Members',
        'Passport-size Photographs',
        'Registered Office Address Proof',
        'MOA/Trust Deed/Society Bylaws',
        'Declaration by Promoters'
      ]}
      faqs={[
        { question: 'What is the difference between Trust, Society, and Section 8 Company?', answer: 'Trust is best for charitable activities, Society is ideal for cultural/educational purposes, and Section 8 Company offers limited liability with corporate structure. Each has different registration requirements and governance norms.' },
        { question: 'How long does NGO registration take?', answer: 'Trust registration takes 7-15 days, Society registration takes 30-45 days, and Section 8 Company takes 45-60 days approximately.' },
        { question: 'What is 12A and 80G registration?', answer: '12A provides income tax exemption to the NGO, while 80G allows donors to claim tax deduction on their donations. Both are essential for tax benefits.' },
        { question: 'Can an NGO do business activities?', answer: 'NGOs can undertake commercial activities if profits are used for charitable purposes and not distributed among members.' },
        { question: 'What is the minimum number of members required?', answer: 'Trust requires minimum 2 trustees, Society requires minimum 7 members, and Section 8 Company requires minimum 2 directors and 2 shareholders.' }
      ]}
    />
  );
}
