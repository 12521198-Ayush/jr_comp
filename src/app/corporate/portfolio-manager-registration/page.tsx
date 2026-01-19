'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Briefcase } from 'lucide-react';

export default function PortfolioManagerRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Portfolio Manager Registration"
      subtitle="SEBI Registered Portfolio Management"
      description="Register as a Portfolio Manager with SEBI. JR Compliance provides complete assistance for Portfolio Manager registration and compliance requirements."
      icon={Briefcase}
      color="indigo"
      benefits={[
        'SEBI authorized operations',
        'Client fund management',
        'Investment advisory services',
        'Professional credibility',
        'Regulatory compliance',
        'Institutional client access',
        'Revenue generation',
        'Business expansion'
      ]}
      process={[
        { step: 'Eligibility Check', description: 'Verify net worth and experience requirements' },
        { step: 'Document Preparation', description: 'Prepare required documents and business plan' },
        { step: 'Application Filing', description: 'Submit application to SEBI' },
        { step: 'SEBI Review', description: 'Application review and clarifications' },
        { step: 'Inspection', description: 'SEBI inspection if required' },
        { step: 'Registration', description: 'Receive SEBI registration certificate' }
      ]}
      documents={[
        'Incorporation Certificate',
        'MOA & AOA',
        'Net Worth Certificate',
        'Audited Financial Statements',
        'Details of Principal Officer',
        'Infrastructure Details',
        'Business Plan',
        'Compliance Manual'
      ]}
      faqs={[
        { question: 'What is the minimum net worth requirement?', answer: 'Portfolio Managers must have a minimum net worth of Rs. 5 crore for SEBI registration.' },
        { question: 'What are the experience requirements?', answer: 'Principal Officer must have minimum 5 years experience in securities markets and professional qualification.' },
        { question: 'What is the minimum investment amount?', answer: 'Minimum investment amount for portfolio management services is Rs. 50 lakhs per client.' },
        { question: 'What are the registration fees?', answer: 'SEBI registration fee for Portfolio Manager is Rs. 1 lakh, plus applicable taxes.' },
        { question: 'What are ongoing compliance requirements?', answer: 'Regular reporting to SEBI, maintenance of records, net worth compliance, and adherence to investment guidelines.' }
      ]}
    />
  );
}
