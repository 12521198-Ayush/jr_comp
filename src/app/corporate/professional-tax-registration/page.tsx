'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Receipt } from 'lucide-react';

export default function ProfessionalTaxPage() {
  return (
    <ServicePageTemplate
      title="Professional Tax Registration"
      subtitle="State-wise PT Compliance"
      description="Get Professional Tax registration for your business. JR Compliance provides complete assistance for PT registration and compliance across all states."
      icon={Receipt}
      color="orange"
      benefits={[
        'Legal compliance',
        'Avoid penalties',
        'Employee deduction authority',
        'State tax compliance',
        'Business credibility',
        'Multi-state support',
        'Payroll integration',
        'Government tender eligibility'
      ]}
      process={[
        { step: 'State Identification', description: 'Identify applicable state for PT registration' },
        { step: 'Document Collection', description: 'Collect required documents' },
        { step: 'Application Preparation', description: 'Prepare PT registration application' },
        { step: 'Online Filing', description: 'File application on state portal' },
        { step: 'Verification', description: 'Verification by PT authorities' },
        { step: 'Registration', description: 'Receive PT registration certificate' }
      ]}
      documents={[
        'Business Registration Certificate',
        'PAN Card',
        'Address Proof',
        'Identity Proof of Directors/Partners',
        'Employee Details',
        'Salary Structure',
        'Bank Account Details'
      ]}
      faqs={[
        { question: 'What is Professional Tax?', answer: 'Professional Tax is a state-level tax levied on professions, trades, callings, and employments. It is deducted from employee salaries by employers.' },
        { question: 'Who needs to register?', answer: 'Every employer with employees in states where PT is applicable needs to register. Self-employed professionals also need to register if their income exceeds threshold.' },
        { question: 'What is the maximum PT amount?', answer: 'Maximum Professional Tax is capped at Rs. 2,500 per year as per constitutional provisions, though actual rates vary by state and income slab.' },
        { question: 'Which states levy Professional Tax?', answer: 'States like Maharashtra, Karnataka, West Bengal, Gujarat, Andhra Pradesh, Telangana, Tamil Nadu, and others levy Professional Tax.' },
        { question: 'What are the due dates?', answer: 'PT payment and return due dates vary by state. Generally, returns are filed monthly or quarterly depending on liability amount.' }
      ]}
    />
  );
}
