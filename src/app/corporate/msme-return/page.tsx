'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileText } from 'lucide-react';

export default function MSMEReturnPage() {
  return (
    <ServicePageTemplate
      title="MSME Return Filing"
      subtitle="Form 1 Compliance for MSMEs"
      description="Learn how to file MSME Return Form 1. JR Compliance provides complete assistance for MSME return filing and compliance requirements."
      icon={FileText}
      color="blue"
      benefits={[
        'Legal compliance',
        'MSME benefits access',
        'Government scheme eligibility',
        'Business credibility',
        'Loan application support',
        'Tender participation',
        'Subsidy eligibility',
        'Easy documentation'
      ]}
      process={[
        { step: 'Data Collection', description: 'Collect financial and operational data' },
        { step: 'Form Preparation', description: 'Prepare MSME Return Form 1' },
        { step: 'Information Verification', description: 'Verify all details and figures' },
        { step: 'Online Filing', description: 'File return on MSME portal' },
        { step: 'Acknowledgment', description: 'Receive filing acknowledgment' },
        { step: 'Record Keeping', description: 'Maintain records for compliance' }
      ]}
      documents={[
        'Udyam Registration Certificate',
        'Financial Statements',
        'Investment Details',
        'Turnover Information',
        'Employee Details',
        'Business Activity Details',
        'Previous Return Copy (if any)'
      ]}
      faqs={[
        { question: 'What is MSME Return Form 1?', answer: 'MSME Return Form 1 is a half-yearly return that registered MSMEs may need to file with information about their business operations, investments, and turnover.' },
        { question: 'Who needs to file MSME Return?', answer: 'All enterprises registered under Udyam Registration may need to update their information periodically to maintain accurate records.' },
        { question: 'What are the due dates?', answer: 'Udyam registration information should be updated periodically, especially when there are changes in investment or turnover.' },
        { question: 'Is there any penalty for non-filing?', answer: 'While specific penalties may vary, keeping Udyam registration updated is important for continued access to MSME benefits.' },
        { question: 'What information is required?', answer: 'Investment in plant and machinery, annual turnover, number of employees, NIC codes, and business activity details are typically required.' }
      ]}
    />
  );
}
