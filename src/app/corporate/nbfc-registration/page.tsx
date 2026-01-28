'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Landmark } from 'lucide-react';

export default function NBFCRegistrationPage() {
  return (
    <ServicePageTemplate
      title="NBFC Registration"
      subtitle="Non-Banking Financial Company License"
      description="Looking for a consultant for NBFC registration? Get complete guidance on NBFC license registration with RBI compliance and regulatory requirements."
      icon={Landmark}
      color="purple"
      serviceInfo="At JR Compliance, we provide end-to-end NBFC registration services for companies seeking to enter the non-banking financial services sector. Our regulatory experts guide you through RBI's eligibility criteria including minimum Net Owned Funds, director qualifications, and business plan requirements. We assist with company incorporation as a public limited company with appropriate objects clause for NBFC activities. Our team prepares comprehensive RBI license applications including business projections, capital adequacy calculations, and fair practice codes. We handle the complete RBI submission process, respond to regulatory queries, and coordinate inspections if required. Post-registration, we provide ongoing compliance support including statutory returns, prudential norms monitoring, and RBI correspondence management to keep your NBFC compliant."
      benefits={[
        'Financial services authorization',
        'RBI regulated operations',
        'Diverse lending options',
        'Asset financing capability',
        'Investment opportunities',
        'Business credibility',
        'Regulated growth framework',
        'Access to capital markets'
      ]}
      process={[
        { step: 'Company Incorporation', description: 'Register as a public or private limited company' },
        { step: 'Capital Requirement', description: 'Ensure minimum net owned funds of ₹2 crore' },
        { step: 'Document Preparation', description: 'Prepare business plan, CRAR report, and other documents' },
        { step: 'RBI Application', description: 'Submit application to regional RBI office' },
        { step: 'Due Diligence', description: 'RBI conducts background verification and assessment' },
        { step: 'License Issuance', description: 'Receive Certificate of Registration from RBI' }
      ]}
      documents={[
        'Company Incorporation Certificate',
        'MOA & AOA',
        'Directors\' Documents',
        'Board Resolution',
        'Business Plan',
        'Audited Financial Statements',
        'Capital Proof',
        'Fair Practice Code'
      ]}
      faqs={[
        { question: 'What is NBFC?', answer: 'NBFC (Non-Banking Financial Company) is a company registered under the Companies Act that provides banking services like loans, credit facilities, investment without holding a banking license.' },
        { question: 'What is the minimum capital required?', answer: 'The minimum Net Owned Fund (NOF) required for NBFC registration is ₹2 crore for most categories. Some categories may require higher capital.' },
        { question: 'What are the types of NBFCs?', answer: 'NBFCs include Asset Finance Companies, Investment Companies, Loan Companies, Infrastructure Finance Companies, Core Investment Companies, and Microfinance Institutions.' },
        { question: 'Can NBFC accept deposits?', answer: 'Only certain categories of NBFCs with specific approval from RBI can accept public deposits. Most NBFCs are non-deposit taking.' },
        { question: 'How long does NBFC registration take?', answer: 'NBFC registration typically takes 4-6 months after submission of complete application, depending on RBI verification and approval process.' }
      ]}
    />
  );
}
