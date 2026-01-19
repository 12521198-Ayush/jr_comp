'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Globe } from 'lucide-react';

export default function ForeignCompanyPage() {
  return (
    <ServicePageTemplate
      title="Foreign Company Registration"
      subtitle="Establish Your India Presence"
      description="JR Compliance guarantees to provide you complete support in acquiring the Foreign Company Certificate. Get expert guidance on Foreign Company Registration in India."
      icon={Globe}
      color="indigo"
      benefits={[
        'Legal presence in India',
        'Access to Indian market',
        'Business operations authorization',
        'Tax planning opportunities',
        'Local credibility',
        'Government compliance',
        'Repatriation of profits',
        'Expansion gateway'
      ]}
      process={[
        { step: 'Structure Selection', description: 'Choose between Branch Office, Liaison Office, or Subsidiary' },
        { step: 'RBI/Government Approval', description: 'Obtain necessary approvals based on structure' },
        { step: 'Registration', description: 'Register with Registrar of Companies' },
        { step: 'Documentation', description: 'Submit required documents and declarations' },
        { step: 'Tax Registration', description: 'Obtain PAN, TAN, and GST registration' },
        { step: 'Commence Operations', description: 'Start business operations in India' }
      ]}
      documents={[
        'Certificate of Incorporation (Apostilled)',
        'MOA & AOA of Parent Company',
        'Board Resolution',
        'Power of Attorney',
        'Directors\' Details',
        'Financial Statements',
        'Business Plan for India',
        'Office Address Proof'
      ]}
      faqs={[
        { question: 'What are the options for foreign companies?', answer: 'Foreign companies can establish Liaison Office (representative), Branch Office (operational), or wholly-owned Subsidiary (Indian company with foreign ownership) in India.' },
        { question: 'What is the approval process?', answer: 'Liaison and Branch offices need RBI approval. Subsidiary follows normal company incorporation with FDI compliance.' },
        { question: 'What activities can Branch Office do?', answer: 'Branch Office can export/import, render professional services, carry out research, promote technical collaboration, and represent parent company.' },
        { question: 'Is 100% FDI allowed?', answer: '100% FDI is allowed in most sectors under automatic route. Some sectors require government approval or have sectoral caps.' },
        { question: 'What are the compliance requirements?', answer: 'Foreign companies must file annual returns, maintain books of accounts, get statutory audit, and comply with FEMA regulations.' }
      ]}
    />
  );
}
