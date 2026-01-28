'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Users } from 'lucide-react';

export default function SocietyRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Society Registration"
      subtitle="Societies Registration Act"
      description="Looking to register a society? JR Compliance offers end-to-end society registration services to help you legally establish your society under the Societies Registration Act with ease and speed."
      icon={Users}
      color="emerald"
      serviceInfo="JR Compliance provides comprehensive society registration services for groups seeking to establish charitable, literary, scientific, or social organizations under the Societies Registration Act. Our registration experts guide you through state-specific requirements and help draft the Memorandum of Association and Rules & Regulations tailored to your society's objectives. We assist with gathering minimum member requirements, preparing required affidavits, and compiling all documentation for registration. Our team handles the complete submission process with the Registrar of Societies, tracks application status, and addresses any queries or objections. We assist with 12A and 80G tax exemption applications, FCRA registration, and NITI Aayog Darpan enrollment for your registered society. Post-registration, we provide ongoing compliance support including annual return filings, governing body changes, and bylaw amendment services."
      benefits={[
        'Legal recognition',
        'Democratic governance',
        'Tax exemption eligibility',
        'Government grant access',
        'Member protection',
        'Collective objectives pursuit',
        'Perpetual succession',
        'Property ownership rights'
      ]}
      process={[
        { step: 'Name Approval', description: 'Select and verify unique name for the society' },
        { step: 'MOA & Bylaws', description: 'Draft Memorandum and bylaws of the society' },
        { step: 'Member Enrollment', description: 'Enroll minimum 7 members for the society' },
        { step: 'Document Submission', description: 'Submit documents to Registrar of Societies' },
        { step: 'Verification', description: 'Registrar verifies documents and objectives' },
        { step: 'Certificate Issuance', description: 'Receive Certificate of Registration' }
      ]}
      documents={[
        'Memorandum of Association',
        'Rules and Regulations',
        'Members\' Identity Proof',
        'Members\' Address Proof',
        'Passport-size Photographs',
        'Registered Office Proof',
        'Affidavit by President/Secretary',
        'List of Governing Body Members'
      ]}
      faqs={[
        { question: 'What is a Society?', answer: 'A society is a group of persons associated together for charitable, literary, scientific, cultural, or similar purposes registered under Societies Registration Act, 1860.' },
        { question: 'How many members are required?', answer: 'Minimum 7 members are required to form a society. All members must be adults and can include individuals from different states.' },
        { question: 'Is society registration state-specific?', answer: 'Yes, society registration is done at state level. Each state has its own Registrar of Societies and may have specific requirements.' },
        { question: 'What are the compliance requirements?', answer: 'Societies must hold annual general meetings, maintain accounts, file annual returns, and get accounts audited as per state rules.' },
        { question: 'Can a society do commercial activities?', answer: 'Societies can undertake commercial activities if profits are used for achieving the objectives and not distributed among members.' }
      ]}
    />
  );
}
