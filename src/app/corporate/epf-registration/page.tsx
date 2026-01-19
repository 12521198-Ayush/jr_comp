'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wallet } from 'lucide-react';

export default function EPFRegistrationPage() {
  return (
    <ServicePageTemplate
      title="EPF Registration"
      subtitle="Employee Provident Fund Compliance"
      description="Get EPF registration for your establishment. JR Compliance provides complete assistance for EPF registration and PF compliance for employers."
      icon={Wallet}
      color="teal"
      benefits={[
        'Employee retirement savings',
        'Legal compliance',
        'Pension benefits',
        'Insurance coverage',
        'Tax benefits',
        'Employee welfare',
        'Loan facility for employees',
        'Employer branding'
      ]}
      process={[
        { step: 'Eligibility Check', description: 'Verify establishment eligibility for EPF' },
        { step: 'Document Collection', description: 'Collect employer and employee documents' },
        { step: 'Online Registration', description: 'Register on EPFO unified portal' },
        { step: 'DSC Registration', description: 'Register Digital Signature Certificate' },
        { step: 'Code Allotment', description: 'Receive PF establishment code' },
        { step: 'Member Registration', description: 'Register employees as PF members' }
      ]}
      documents={[
        'Business Registration Certificate',
        'PAN Card of Establishment',
        'Address Proof',
        'Bank Account Details',
        'Employee Aadhaar Cards',
        'Employee Bank Details',
        'Salary Structure',
        'Digital Signature Certificate'
      ]}
      faqs={[
        { question: 'Who needs EPF registration?', answer: 'Establishments employing 20 or more persons (including contract workers) must register under EPF. Smaller establishments can voluntarily register.' },
        { question: 'What is the PF contribution rate?', answer: 'Both employer and employee contribute 12% of basic wages. Out of employer share, 8.33% goes to pension scheme (max Rs. 1,250) and rest to EPF.' },
        { question: 'What is the EPF wage ceiling?', answer: 'EPF is mandatory for employees earning up to Rs. 15,000 per month. Those earning above can opt out if they are new joiners.' },
        { question: 'What is the due date for PF payment?', answer: 'EPF contributions must be deposited by 15th of the following month. Returns (ECR) must be filed along with payment.' },
        { question: 'What are the schemes under EPF?', answer: 'EPF (Provident Fund), EPS (Pension Scheme), and EDLI (Insurance) are the three schemes administered by EPFO.' }
      ]}
    />
  );
}
