'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileCheck } from 'lucide-react';

export default function TrademarkEvidenceFilingPage() {
  return (
    <ServicePageTemplate
      title="Trademark Evidence Filing"
      subtitle="Build Your Case"
      description="Professional trademark evidence filing services. We help compile, organize, and file compelling evidence to support your trademark application or defend against objections and oppositions."
      icon={FileCheck}
      color="green"
      benefits={[
        'Evidence Strategy - Develop comprehensive evidence filing plan',
        'Document Organization - Properly organize and index all evidence',
        'Affidavit Drafting - Prepare user affidavits and declarations',
        'Sales Evidence - Compile turnover and sales documentation',
        'Advertising Proof - Document marketing and advertising efforts',
        'Third-party Evidence - Gather customer and trade acknowledgments',
        'Timely Filing - File evidence within prescribed deadlines',
        'Compliance Check - Ensure evidence meets legal requirements'
      ]}
      process={[
        { step: 'Evidence Assessment', description: 'Evaluate available evidence and identify gaps.' },
        { step: 'Document Collection', description: 'Collect all relevant documents and materials.' },
        { step: 'Affidavit Preparation', description: 'Draft comprehensive user affidavit with exhibits.' },
        { step: 'Evidence Organization', description: 'Organize evidence in indexed bundles.' },
        { step: 'Legal Review', description: 'Review evidence for compliance and sufficiency.' },
        { step: 'Filing Submission', description: 'File evidence within prescribed timeline.' }
      ]}
      documents={[
        'User Affidavit',
        'Sales Invoices (year-wise)',
        'Annual Turnover Certificates',
        'Advertising Bills and Materials',
        'Trade Publication References',
        'Customer Testimonials',
        'Awards and Recognitions',
        'Media Coverage Documents'
      ]}
      faqs={[
        { question: 'What evidence is required for trademark?', answer: 'Evidence may include use affidavits, sales data, advertising proof, customer declarations, and any proof of brand recognition.' },
        { question: 'When is evidence filing required?', answer: 'Evidence is filed in objection response (for acquired distinctiveness), opposition proceedings, and rectification cases.' },
        { question: 'What is user affidavit?', answer: 'User affidavit is a sworn statement declaring details of trademark use including start date, products/services, and sales figures.' },
        { question: 'How far back should evidence go?', answer: 'Ideally evidence should demonstrate continuous use from the date you started using the trademark.' },
        { question: 'What if I don\'t have old invoices?', answer: 'Alternative evidence like CA certificates, bank statements, tax returns, or third-party acknowledgments can be used.' },
        { question: 'What is the deadline for evidence?', answer: 'In opposition proceedings, applicant gets 2 months to file evidence after receiving notice, extendable by 1 month.' },
        { question: 'Can I file additional evidence later?', answer: 'Additional evidence can be filed with leave of Registrar, but it\'s better to file comprehensive evidence initially.' },
        { question: 'What makes evidence strong?', answer: 'Strong evidence shows continuous, extensive, and widespread use of the trademark with substantial sales and advertising.' }
      ]}
      stats={[
        { value: '2500+', label: 'Evidence Filed' },
        { value: '95%', label: 'Acceptance Rate' },
        { value: '12+', label: 'Years Experience' },
        { value: '4.9', label: 'Google Rating' }
      ]}
    />
  );
}
