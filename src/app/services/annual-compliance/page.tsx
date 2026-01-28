'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileText } from 'lucide-react';

export default function AnnualCompliancePage() {
  return (
    <ServicePageTemplate
      title="Annual Compliance"
      subtitle="Corporate Services"
      icon={FileText}
      color="violet"
      description="Ensure your company stays compliant with all statutory requirements. Our comprehensive annual compliance services cover ROC filings, annual returns, board meetings, and all mandatory compliances required under the Companies Act."
      serviceInfo="At JR Compliance, we provide comprehensive annual compliance services for companies and LLPs to maintain their statutory compliance throughout the year. Our corporate compliance team handles all mandatory ROC filings including AOC-4, MGT-7, and event-based forms for companies, and Form 8 and Form 11 for LLPs. We coordinate board meeting schedules, prepare agendas, minutes, and resolutions for quarterly board meetings and Annual General Meetings. Our experts manage statutory register maintenance, director KYC compliance, and DIN updates for your directors. We track compliance deadlines, send timely reminders, and ensure all filings are completed before due dates to avoid penalties. Post-filing, we provide compliance certificates, maintain proper records, and offer ongoing corporate secretarial support to keep your company in good standing with MCA."
      benefits={[
        'Complete ROC filing services',
        'Annual return preparation and filing',
        'Board meeting compliance',
        'AGM organization support',
        'Director KYC filing',
        'DPT-3 compliance',
        'MSME form filing',
        'Event-based compliances',
        'Penalty avoidance guidance',
      ]}
      process={[
        { step: 'Compliance Audit', description: 'Review your current compliance status and identify gaps.' },
        { step: 'Document Preparation', description: 'Prepare all required documents, minutes, and resolutions.' },
        { step: 'Filing', description: 'File all forms with MCA within due dates.' },
        { step: 'Confirmation', description: 'Receive acknowledgments and maintain compliance records.' },
      ]}
      documents={[
        'Certificate of Incorporation',
        'MoA and AoA',
        'Previous year financial statements',
        'Board resolutions',
        'Minutes of board meetings',
        'Director details and DSCs',
        'Bank statements',
        'Tax returns',
      ]}
      faqs={[
        {
          question: 'What are the mandatory annual filings for a Private Limited Company?',
          answer: 'Private Limited Companies must file AOC-4 (Financial Statements), MGT-7 (Annual Return), and ADT-1 (Auditor Appointment) annually along with conducting board meetings and AGM.',
        },
        {
          question: 'What is the penalty for non-compliance?',
          answer: 'Penalties for non-compliance can range from ₹1 lakh to ₹10 lakhs depending on the default, plus additional fees of ₹100 per day of delay.',
        },
        {
          question: 'How often should board meetings be held?',
          answer: 'A company must hold a minimum of 4 board meetings in a year with not more than 120 days gap between two consecutive meetings.',
        },
        {
          question: 'Is annual compliance mandatory for dormant companies?',
          answer: 'Yes, even dormant companies need to file annual returns and comply with basic statutory requirements.',
        },
      ]}
    />
  );
}
