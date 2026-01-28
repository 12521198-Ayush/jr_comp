'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Shield } from 'lucide-react';

export default function PSARALicensePage() {
  return (
    <ServicePageTemplate
      title="PSARA License"
      subtitle="Private Security Agency Registration"
      description="JR Compliance can help you obtain your Private Security Agency License (PSARA). Our experts help you secure PSARA licenses throughout India, ensuring compliance with the Private Security Agencies Regulation Act of 2005."
      icon={Shield}
      color="amber"
      serviceInfo="JR Compliance provides comprehensive PSARA license services for private security agencies across all states in India. Our regulatory experts guide you through state-specific PSARA requirements under the Private Security Agencies Regulation Act 2005. We assist with company registration verification, prepare documentation including character certificates, and coordinate police verification for principals and directors. Our team handles security guard training documentation, prepares detailed applications with organizational structure and operational plans. We manage the complete submission process with controlling authorities, track application status, and address any queries or objections. Post-licensing, we provide renewal support, license amendments for adding locations or categories, and ongoing compliance monitoring to keep your security agency operations fully authorized."
      benefits={[
        'Legal authorization to operate',
        'Pan-India security services',
        'Business credibility',
        'Government contract eligibility',
        'Employee protection coverage',
        'Professional recognition',
        'Client trust and confidence',
        'Compliance with PSARA Act'
      ]}
      process={[
        { step: 'Eligibility Check', description: 'Verify eligibility criteria for PSARA license' },
        { step: 'Document Preparation', description: 'Prepare all required documents and proofs' },
        { step: 'Application Filing', description: 'Submit application to Controlling Authority' },
        { step: 'Police Verification', description: 'Background verification of applicant and premises' },
        { step: 'Inspection', description: 'Physical inspection of office and training facilities' },
        { step: 'License Issuance', description: 'Receive PSARA license upon approval' }
      ]}
      documents={[
        'Company Registration Certificate',
        'MOA & AOA',
        'Directors\' ID & Address Proof',
        'Office Address Proof',
        'Police Verification Report',
        'Training Infrastructure Details',
        'Employee List with Photos',
        'Bank Account Details'
      ]}
      faqs={[
        { question: 'What is PSARA License?', answer: 'PSARA License is mandatory authorization required to operate a private security agency in India under the Private Security Agencies (Regulation) Act, 2005.' },
        { question: 'Who needs PSARA License?', answer: 'Any individual or company providing private security guard services, security consultancy, or training services needs PSARA License.' },
        { question: 'What is the validity of PSARA License?', answer: 'PSARA License is valid for 5 years from the date of issuance and must be renewed before expiry.' },
        { question: 'Can PSARA License be used across states?', answer: 'No, PSARA License is state-specific. You need separate licenses for operating in different states.' },
        { question: 'What are the eligibility criteria?', answer: 'The applicant must be an Indian citizen, at least 18 years old, with clean criminal record, and have adequate training facilities for security personnel.' }
      ]}
    />
  );
}
