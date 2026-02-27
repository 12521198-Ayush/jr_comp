'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileCheck } from 'lucide-react';

export default function AnnualCompliancePage() {
  return (
    <ServicePageTemplate
      title="Annual Compliance"
      subtitle="Stay Compliant, Stay Protected"
      description="Annual compliance is no longer an obligation, but the right way smart businesses remain protected, prepared, and trusted. We will help you get through it stress-free."
      icon={FileCheck}
      color="indigo"
      stats={[
        { value: '200+', label: 'Companies Trust Us' },
        { value: '350+', label: 'Annual Statutory Filings' },
        { value: '99%', label: 'Client Retention' },
        { value: '10+', label: 'Years Experience' },
      ]}
      serviceInfo="Staying compliant every year does not sound exceptional, but rather keeps the business away from legal inconvenience, maintains clear finances, and lets partners verify the credibility of the business practices. At JR Compliance, we handle documentation, filing, and submission with complete accuracy. We track every deadline to ensure zero delays in compliance tasks, offer legal guidance for complex filings and regulatory obligations efficiently, and deliver personalized support for startups, SMEs, and large-scale enterprises alike. All registered businesses, like Private Ltd, LLPs, OPCs, partnerships, and NGOs, must complete annual compliance to avoid penalties. Any entity registered under the MCA or IT laws is required to follow annual compliance obligations post-incorporation."
      benefits={[
        'Avoid Penalties: Heavy fines or compliance notices from regulatory authorities can result from late or missed filings',
        'Business Credibility: Annual filings are necessary for partners, clients, and financial institutions to regard the business as trustworthy',
        'Operational Clarity: Updated compliance streamlines the audit process, funding, and strategic decision-making for growth',
        'ROC Compliance: Covers filings like MGT-7, AOC-4, auditor appointments, director disclosures, AGMs, and share certificates under Companies Act',
        'Statutory Compliance: Preparing financial reports, audit documents, and legal filings to ensure full adherence to statutory company law requirements',
        'Financial & Accounting Compliance: Validating books of accounts, finalizing financial statements, audit assistance, and preparing reports',
        'Tax Compliance: Mandatory GST filings, TDS returns, income tax submissions, and proper tax structuring as per Indian tax laws',
        'Compliance Monitoring: Year-round tracking of your compliance calendar to avoid last-minute surprises or fines',
      ]}
      process={[
        { step: 'Document Collection', description: 'Gather financial statements, board meeting details, audit reports, KYC documents, and tax filing proof' },
        { step: 'Compliance Assessment', description: 'Evaluate applicable ROC, statutory, financial, and tax compliance requirements for your business type' },
        { step: 'Filing Preparation', description: 'Prepare all mandatory forms including MGT-7, AOC-4, GST returns, TDS returns, and income tax submissions' },
        { step: 'Review & Approval', description: 'Expert review of all documents and filings for accuracy before director approval and digital signing' },
        { step: 'Filing & Submission', description: 'Submit all forms on MCA portal and relevant regulatory platforms before deadlines' },
        { step: 'Post-Compliance Support', description: 'Compliance monitoring, document archiving, renewal reminders, and advisory support throughout the year' },
      ]}
      documents={[
        'Audited Balance Sheet',
        'Director KYC Form',
        'Income Tax Return Copy',
        'Board Meeting Resolutions',
        'Financial Statements',
        'Audit Reports',
        'KYC Documents',
        'Tax Filing Proof',
      ]}
      faqs={[
        {
          question: 'What is annual compliance for a private limited company?',
          answer: 'The filing of obligatory forms like MGT-7 and AOC-4, the filing of income tax returns, and holding periodic board meetings under MCA regulations are all included in this process.',
        },
        {
          question: 'What happens if I miss annual compliance?',
          answer: 'Penalties, legal notices, or even the disqualification of directors are consequences of missing mandatory deadlines.',
        },
        {
          question: 'Is annual compliance mandatory for dormant companies?',
          answer: 'Yes, compliance with minimum standards at least is required unless your company has been formally struck off.',
        },
        {
          question: 'Can I do annual compliance myself?',
          answer: 'You might, but something could fall through the cracks. A professional keeps you away from costly mistakes and penalties.',
        },
        {
          question: 'How do I know which compliance applies to my business?',
          answer: 'The type of filing required for a business is dependent upon your type of business, by way of turnover and registration. Consult professionals for clarity.',
        },
        {
          question: 'What are the challenges of annual compliance?',
          answer: 'Tight deadlines, changing laws, lack of expertise with legal jargon, and document management are common challenges. Missing the filing window can result in heavy penalties.',
        },
        {
          question: 'Who needs annual compliance?',
          answer: 'All registered businesses, like Private Ltd, LLPs, OPCs, partnerships, and NGOs, must complete annual compliance to avoid penalties and ensure legal business standing.',
        },
        {
          question: 'What post-compliance services does JR Compliance offer?',
          answer: 'We offer compliance monitoring, document archiving, penalty management, advisory support, renewal reminders, and custom reporting to keep your business compliant year-round.',
        },
      ]}
    />
  );
}
