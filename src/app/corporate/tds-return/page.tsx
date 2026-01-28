'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Calculator } from 'lucide-react';

export default function TDSReturnPage() {
  return (
    <ServicePageTemplate
      title="TDS Return Filing"
      subtitle="Tax Deducted at Source Compliance"
      description="We make TDS return filing procedure hassle-free to ensure customer satisfaction. Register your TDS return online with expert guidance on e-filing features, forms, and process."
      icon={Calculator}
      color="green"
      serviceInfo="JR Compliance provides comprehensive TDS return filing services for deductors across all forms including 24Q (salary), 26Q (non-salary), 27Q (NRI payments), and 27EQ (TCS). Our tax compliance experts collect and verify deduction data, validate PAN details, and prepare accurate quarterly TDS returns. We calculate correct TDS amounts based on applicable sections and rates, ensuring proper deduction and compliance with Income Tax Act provisions. Our team handles the complete e-filing process on TRACES, generates Form 16/16A for deductees, and manages challan-CIN matching for filed returns. We address any mismatches or defaults identified by the department and file correction statements when required. Post-filing, we provide ongoing TDS compliance support, lower deduction certificate assistance, and help with TDS refund claims when excess tax has been deducted."
      benefits={[
        'Avoid interest and penalty',
        'Maintain compliance with IT Act',
        'Accurate TDS calculation',
        'Timely quarterly filing',
        'Expert review of returns',
        'Digital filing convenience',
        'Error-free submissions',
        'Complete documentation'
      ]}
      process={[
        { step: 'Data Collection', description: 'Collect all TDS deduction details and challans' },
        { step: 'Reconciliation', description: 'Match TDS deducted with challans deposited' },
        { step: 'Form Preparation', description: 'Prepare applicable TDS return form (24Q, 26Q, 27Q, 27EQ)' },
        { step: 'Validation', description: 'Validate return using FVU utility' },
        { step: 'Filing', description: 'Upload return on TRACES portal' },
        { step: 'Acknowledgment', description: 'Download provisional receipt and form 16/16A' }
      ]}
      documents={[
        'TAN of Deductor',
        'TDS Challan Details',
        'Deductee PAN Details',
        'Payment Records',
        'Previous Quarter Returns',
        'Lower Deduction Certificates (if any)'
      ]}
      faqs={[
        { question: 'What are the different TDS return forms?', answer: 'Form 24Q is for salary TDS, 26Q for non-salary payments to residents, 27Q for payments to non-residents, and 27EQ for TCS (Tax Collected at Source).' },
        { question: 'What are the TDS return due dates?', answer: 'TDS returns are filed quarterly. Q1 (Apr-Jun) by July 31, Q2 (Jul-Sep) by October 31, Q3 (Oct-Dec) by January 31, Q4 (Jan-Mar) by May 31.' },
        { question: 'What is the penalty for late TDS return?', answer: 'Late filing fee is ₹200 per day until the return is filed, subject to maximum of TDS amount. Additional penalty up to ₹1 lakh may be levied.' },
        { question: 'Who needs to file TDS returns?', answer: 'Any person (individual, company, firm) who has deducted TDS on payments made during the quarter must file TDS returns.' },
        { question: 'What is Form 16 and Form 16A?', answer: 'Form 16 is TDS certificate for salary, issued annually. Form 16A is TDS certificate for non-salary payments, issued quarterly.' }
      ]}
    />
  );
}
