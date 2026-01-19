'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileSpreadsheet } from 'lucide-react';

export default function PFESIReturnPage() {
  return (
    <ServicePageTemplate
      title="PF & ESI Return Filing"
      subtitle="Monthly Compliance Services"
      description="Get expert help for PF and ESI return filing. JR Compliance provides complete assistance for monthly PF/ESI compliance and return filing."
      icon={FileSpreadsheet}
      color="violet"
      benefits={[
        'Timely compliance',
        'Avoid penalties',
        'Employee records updated',
        'Expert verification',
        'Error-free filing',
        'Audit support',
        'Multi-location support',
        'Complete peace of mind'
      ]}
      process={[
        { step: 'Data Collection', description: 'Collect monthly salary and attendance data' },
        { step: 'Calculation', description: 'Calculate PF and ESI contributions' },
        { step: 'Challan Preparation', description: 'Prepare contribution challans' },
        { step: 'Payment', description: 'Process PF and ESI payments' },
        { step: 'Return Filing', description: 'File ECR and ESI returns' },
        { step: 'Reconciliation', description: 'Reconcile payments and update records' }
      ]}
      documents={[
        'Employee Attendance Records',
        'Salary Register',
        'New Joiner Details',
        'Exit Employee Details',
        'Previous Month Returns',
        'Bank Payment Proof',
        'Arrear Details (if any)'
      ]}
      faqs={[
        { question: 'What is ECR?', answer: 'ECR (Electronic Challan cum Return) is the combined return and payment file for EPF contributions, filed monthly on EPFO unified portal.' },
        { question: 'What are PF/ESI due dates?', answer: 'Both PF and ESI contributions must be paid by 15th of the following month. Late payment attracts interest and damages.' },
        { question: 'What is the penalty for late filing?', answer: 'Late PF payment attracts 12% interest and damages ranging from 5% to 25%. ESI late payment attracts 12% simple interest.' },
        { question: 'How to handle arrears?', answer: 'Arrears must be paid in the month they fall due. Supplementary ECR can be filed for missed contributions.' },
        { question: 'What returns are required?', answer: 'Monthly ECR for PF and monthly contribution filing for ESI are mandatory. Annual returns like Form 3A, 6A (PF) have been digitized.' }
      ]}
    />
  );
}
