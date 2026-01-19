'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileSpreadsheet } from 'lucide-react';

export default function GSTReturnPage() {
  return (
    <ServicePageTemplate
      title="GST Return Filing"
      subtitle="Expert GST Compliance Services"
      description="Get expert help for GST return filing. JR Compliance GST return filing consultants ensure timely and accurate GST compliance for your business."
      icon={FileSpreadsheet}
      color="green"
      benefits={[
        'Timely compliance',
        'Avoid penalties',
        'ITC optimization',
        'Expert verification',
        'Error-free filing',
        'Reconciliation support',
        'Audit-ready records',
        'Business continuity'
      ]}
      process={[
        { step: 'Data Collection', description: 'Collect invoices and transaction data' },
        { step: 'Reconciliation', description: 'Reconcile purchases and sales with GSTR-2B' },
        { step: 'ITC Verification', description: 'Verify input tax credit claims' },
        { step: 'Return Preparation', description: 'Prepare GSTR-1, GSTR-3B, and other returns' },
        { step: 'Review & Filing', description: 'Review and file returns on GST portal' },
        { step: 'Payment & Confirmation', description: 'Process tax payment and confirm filing' }
      ]}
      documents={[
        'Sales Invoices',
        'Purchase Invoices',
        'Credit/Debit Notes',
        'Bank Statements',
        'Previous Return Copies',
        'GST Registration Certificate',
        'HSN/SAC Details'
      ]}
      faqs={[
        { question: 'What are the different GST returns?', answer: 'Main returns include GSTR-1 (outward supplies), GSTR-3B (summary return), GSTR-9 (annual return), and GSTR-2B (auto-drafted ITC statement).' },
        { question: 'What are GST return due dates?', answer: 'GSTR-1 is due by 11th/13th of following month, GSTR-3B by 20th/22nd/24th depending on turnover and state.' },
        { question: 'What is the penalty for late filing?', answer: 'Late fee is Rs. 50/day (Rs. 25 CGST + Rs. 25 SGST) for GSTR-1 and GSTR-3B, maximum Rs. 10,000 plus interest at 18% on tax liability.' },
        { question: 'What is GSTR-9?', answer: 'GSTR-9 is annual return consolidating all monthly/quarterly returns, due by 31st December of following financial year.' },
        { question: 'Can GST returns be revised?', answer: 'GST returns cannot be revised after filing, but corrections can be made in subsequent period returns through amendments.' }
      ]}
    />
  );
}
