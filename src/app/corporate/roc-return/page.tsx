'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileCheck } from 'lucide-react';

export default function ROCReturnPage() {
  return (
    <ServicePageTemplate
      title="ROC Return Filing"
      subtitle="Registrar of Companies Compliance"
      description="We make ROC return registration or filing hassle-free to ensure customer satisfaction. Get your ROC return filing form online with expert guidance on annual filing requirements."
      icon={FileCheck}
      color="blue"
      benefits={[
        'Avoid penalties for late filing',
        'Maintain company active status',
        'Legal compliance assurance',
        'Expert preparation of forms',
        'Timely filing reminders',
        'Complete documentation support',
        'Digital filing convenience',
        'Professional review of returns'
      ]}
      process={[
        { step: 'Document Collection', description: 'Gather financial statements, board resolutions, and other documents' },
        { step: 'Form Preparation', description: 'Prepare AOC-4, MGT-7, and other required forms' },
        { step: 'Director Approval', description: 'Get forms approved and digitally signed by directors' },
        { step: 'Filing on MCA Portal', description: 'Submit forms on Ministry of Corporate Affairs portal' },
        { step: 'Fee Payment', description: 'Pay applicable filing fees online' },
        { step: 'Acknowledgment', description: 'Receive filing acknowledgment and SRN' }
      ]}
      documents={[
        'Audited Financial Statements',
        'Directors Report',
        'Board Meeting Minutes',
        'AGM Minutes',
        'Directors\' DSC',
        'Previous Year Returns',
        'Statutory Registers',
        'Share Transfer Details'
      ]}
      faqs={[
        { question: 'What is ROC Annual Return?', answer: 'ROC Annual Return includes filing of Form AOC-4 (Financial Statements) and Form MGT-7 (Annual Return) with the Registrar of Companies every year.' },
        { question: 'What is the due date for ROC filing?', answer: 'Form AOC-4 is due within 30 days of AGM, and Form MGT-7 is due within 60 days of AGM. The AGM must be held within 6 months from the financial year end.' },
        { question: 'What is the penalty for late ROC filing?', answer: 'Late filing attracts additional fees of ₹100 per day of delay. Continued non-compliance can lead to company being marked as dormant or struck off.' },
        { question: 'Is ROC filing mandatory for all companies?', answer: 'Yes, all companies registered under the Companies Act, including private limited, public limited, OPC, and Section 8 companies must file annual returns.' },
        { question: 'Can dormant companies skip ROC filing?', answer: 'No, even dormant companies must file annual returns. However, they may have simplified filing requirements.' }
      ]}
    />
  );
}
