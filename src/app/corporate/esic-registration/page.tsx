'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { HeartPulse } from 'lucide-react';

export default function ESICRegistrationPage() {
  return (
    <ServicePageTemplate
      title="ESIC Registration"
      subtitle="Employee Health Insurance Compliance"
      description="Get ESIC registration for your establishment. JR Compliance provides complete assistance for ESIC registration and compliance for employers and employees."
      icon={HeartPulse}
      color="red"
      serviceInfo="JR Compliance provides comprehensive ESIC registration services for establishments employing 10 or more employees in ESIC-notified areas. Our compliance experts guide you through the ESIC portal registration process, ensuring accurate submission of establishment details and employee information. We prepare all required documentation including employee wage data, address proof, and establishment registration certificates. Our team assists with IP number generation for employees and helps you understand contribution calculations and benefit structures. We set up compliance frameworks for monthly ESIC contributions and proper record-keeping procedures. Post-registration, we provide ongoing support for monthly contribution challan generation, half-yearly return filing, and employee benefit claims coordination to maintain your ESIC compliance."
      benefits={[
        'Employee health coverage',
        'Medical benefits',
        'Sickness benefits',
        'Maternity benefits',
        'Disability coverage',
        'Legal compliance',
        'Employee welfare',
        'Government dispensary access'
      ]}
      process={[
        { step: 'Eligibility Check', description: 'Verify establishment eligibility for ESIC' },
        { step: 'Document Collection', description: 'Collect employer and employee documents' },
        { step: 'Online Registration', description: 'Register on ESIC portal' },
        { step: 'Employee Registration', description: 'Register eligible employees' },
        { step: 'Code Generation', description: 'Receive ESIC employer code' },
        { step: 'Contribution Start', description: 'Begin monthly ESIC contributions' }
      ]}
      documents={[
        'Business Registration Certificate',
        'PAN Card of Business',
        'Address Proof',
        'Bank Account Details',
        'Employee Aadhaar Cards',
        'Employee Bank Details',
        'Salary Details',
        'Passport Photos of Employees'
      ]}
      faqs={[
        { question: 'Who needs ESIC registration?', answer: 'Establishments with 10 or more employees (20 in some states) and employees earning up to Rs. 21,000 per month must register under ESIC.' },
        { question: 'What is the ESIC contribution rate?', answer: 'Employer contributes 3.25% of wages and employee contributes 0.75% of wages towards ESIC.' },
        { question: 'What benefits do employees get?', answer: 'Medical care, sickness benefit, maternity benefit, disablement benefit, dependent benefit, funeral expenses, and rehabilitation allowance.' },
        { question: 'What is the due date for ESIC payment?', answer: 'ESIC contributions must be paid by 15th of the following month for which wages are paid.' },
        { question: 'Is ESIC applicable to all states?', answer: 'ESIC is applicable in areas notified by the government and has been extended to most districts across India.' }
      ]}
    />
  );
}
