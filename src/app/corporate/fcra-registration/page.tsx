'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Globe } from 'lucide-react';

export default function FCRARegistrationPage() {
  return (
    <ServicePageTemplate
      title="FCRA Registration"
      subtitle="Foreign Contribution Regulation Act"
      description="Get FCRA registration for your NGO. JR Compliance provides complete assistance for FCRA registration to receive foreign contributions legally."
      icon={Globe}
      color="indigo"
      benefits={[
        'Foreign contribution receipt',
        'International donor access',
        'Legal compliance',
        'Enhanced credibility',
        'Global partnerships',
        'Increased funding',
        'Transparent operations',
        'International recognition'
      ]}
      process={[
        { step: 'Eligibility Check', description: 'Verify NGO eligibility for FCRA' },
        { step: 'Document Preparation', description: 'Prepare required documents and reports' },
        { step: 'FCRA Bank Account', description: 'Open designated FCRA bank account' },
        { step: 'Online Application', description: 'File application on FCRA portal' },
        { step: 'MHA Review', description: 'Review by Ministry of Home Affairs' },
        { step: 'Registration', description: 'Receive FCRA registration certificate' }
      ]}
      documents={[
        'Registration Certificate',
        'MOA/Trust Deed',
        'Activity Reports (3 years)',
        'Audited Financial Statements',
        'IT Returns (3 years)',
        'Details of Governing Body',
        'FCRA Bank Account Details',
        'Project Reports'
      ]}
      faqs={[
        { question: 'Who can apply for FCRA?', answer: 'NGOs (societies, trusts, Section 8 companies) that have been in existence for 3+ years and have spent Rs. 10 lakh on charitable activities can apply.' },
        { question: 'What is FCRA prior permission?', answer: 'New NGOs can apply for prior permission for specific projects, valid for receipt of specific foreign contribution for that project.' },
        { question: 'What is FCRA registration validity?', answer: 'FCRA registration is valid for 5 years and must be renewed within 6 months before expiry.' },
        { question: 'What is designated FCRA account?', answer: 'All foreign contributions must be received in designated FCRA account in SBI Main Branch, New Delhi. Secondary utilization accounts can be opened elsewhere.' },
        { question: 'What are annual compliance requirements?', answer: 'File annual return in Form FC-4 by December 31st, maintain separate accounts, get audit by CA, and update any changes on FCRA portal.' }
      ]}
    />
  );
}
