'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { AlertCircle } from 'lucide-react';

export default function TrademarkFormalityCheckFailPage() {
  return (
    <ServicePageTemplate
      title="Trademark Formality Check Fail"
      subtitle="Resolve Application Deficiencies"
      description="Expert assistance to resolve trademark formality check failures. We help you address deficiencies, submit required documents, and ensure your application proceeds smoothly."
      icon={AlertCircle}
      color="orange"
      serviceInfo="At JR Compliance, we specialize in resolving trademark formality check failures that can delay or derail your registration. Our IP experts analyze the deficiency notice to identify exact requirements - whether document corrections, specification amendments, or missing information. We prepare corrected applications addressing each deficiency point with supporting documentation. Our team handles fee discrepancy resolutions, classification corrections, and representation specification amendments. We ensure proper formatting of logos, affidavits, and priority documents as per Registry standards. Our quick turnaround approach meets Registry deadlines, preventing application abandonment. We also review the corrected submission thoroughly before filing to avoid repeat formality failures and expedite your trademark's journey to registration."
      benefits={[
        'Quick Resolution - Fast turnaround to address formality deficiencies',
        'Expert Analysis - Identify exact reasons for formality failure',
        'Document Correction - Prepare and submit corrected documents',
        'Deadline Management - Ensure timely response to avoid abandonment',
        'Complete Compliance - Address all formality requirements properly',
        'Application Revival - Help revive applications marked as abandoned',
        'Fee Rectification - Resolve fee-related deficiencies',
        'Format Corrections - Fix logo format, size, and quality issues'
      ]}
      process={[
        { step: 'Failure Analysis', description: 'Review the formality check report to identify specific deficiencies.' },
        { step: 'Document Review', description: 'Examine original documents to identify what needs correction.' },
        { step: 'Correction Preparation', description: 'Prepare corrected documents addressing all identified issues.' },
        { step: 'Response Filing', description: 'File response with corrected documents before deadline.' },
        { step: 'Fee Payment', description: 'Pay any additional fees if required for rectification.' },
        { step: 'Status Monitoring', description: 'Track application until formality check is cleared.' }
      ]}
      documents={[
        'Original Application Copy',
        'Formality Check Failure Report',
        'Corrected Logo (if format issue)',
        'Updated Identity Proof',
        'Corrected Business Registration',
        'Fresh Power of Attorney',
        'Fee Payment Receipt',
        'Address Proof (if address issue)'
      ]}
      faqs={[
        { question: 'What causes formality check failure?', answer: 'Common reasons include incorrect logo format/size, incomplete documents, fee shortfall, missing POA, or incorrect applicant details.' },
        { question: 'What is the deadline to respond?', answer: 'You typically get 30 days from the date of formality failure notice to submit corrections. Extensions may be available.' },
        { question: 'Will my application be abandoned?', answer: 'If you don\'t respond within the deadline, your application may be abandoned. However, revival is possible in some cases with additional fees.' },
        { question: 'Can I check formality status online?', answer: 'Yes, you can check your application status on the IP India website using your application number.' },
        { question: 'What if logo format is wrong?', answer: 'You need to submit logo in correct format - JPG with 300 DPI resolution, maximum 8cm x 8cm size, on white background.' },
        { question: 'Is there additional fee for correction?', answer: 'Correction filing itself has nominal fees. If original fee was short, you need to pay the difference.' },
        { question: 'How long to clear formality check?', answer: 'After submitting corrections, it typically takes 15-30 days for the registry to process and clear formality check.' },
        { question: 'Can I change trademark after formality fail?', answer: 'Minor corrections are allowed, but substantial changes to the trademark itself may require fresh filing.' }
      ]}
      stats={[
        { value: '1000+', label: 'Issues Resolved' },
        { value: '98%', label: 'Success Rate' },
        { value: '48hrs', label: 'Response Time' },
        { value: '12+', label: 'Years Experience' }
      ]}
    />
  );
}
