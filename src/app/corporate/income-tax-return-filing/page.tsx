'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Calculator } from 'lucide-react';

export default function IncomeTaxReturnPage() {
  return (
    <ServicePageTemplate
      title="Income Tax Return Filing"
      subtitle="Expert ITR Filing Services"
      description="Get professional help for Income Tax Return filing. JR Compliance provides complete ITR filing services for individuals, businesses, and companies."
      icon={Calculator}
      color="emerald"
      benefits={[
        'Legal compliance',
        'Refund processing',
        'Tax optimization',
        'Expert verification',
        'Audit support',
        'Carry forward losses',
        'Loan application support',
        'Visa application support'
      ]}
      process={[
        { step: 'Document Collection', description: 'Collect income documents and proofs' },
        { step: 'Income Computation', description: 'Compute income from all sources' },
        { step: 'Deduction Analysis', description: 'Identify applicable deductions' },
        { step: 'Tax Calculation', description: 'Calculate tax liability or refund' },
        { step: 'ITR Preparation', description: 'Prepare appropriate ITR form' },
        { step: 'Filing & Verification', description: 'File ITR and complete e-verification' }
      ]}
      documents={[
        'Form 16/16A',
        'Bank Statements',
        'Investment Proofs (80C, 80D, etc.)',
        'Capital Gains Statements',
        'Property Documents',
        'Business P&L (if applicable)',
        'PAN Card',
        'Aadhaar Card'
      ]}
      faqs={[
        { question: 'What are the different ITR forms?', answer: 'ITR-1 for salaried individuals, ITR-2 for capital gains, ITR-3 for business income, ITR-4 for presumptive taxation, ITR-5 for firms, ITR-6 for companies, ITR-7 for trusts.' },
        { question: 'What is the ITR filing due date?', answer: 'For individuals and non-audit cases, July 31st. For audit cases, October 31st. For transfer pricing, November 30th.' },
        { question: 'What is the penalty for late filing?', answer: 'Late fee up to Rs. 5,000 under Section 234F, plus interest on outstanding tax under Sections 234A, 234B, and 234C.' },
        { question: 'What is e-verification?', answer: 'E-verification is electronic verification of ITR using Aadhaar OTP, net banking, bank account, demat account, or physical ITR-V submission.' },
        { question: 'Can I revise my ITR?', answer: 'Yes, revised return can be filed before the end of relevant assessment year or completion of assessment, whichever is earlier.' }
      ]}
    />
  );
}
