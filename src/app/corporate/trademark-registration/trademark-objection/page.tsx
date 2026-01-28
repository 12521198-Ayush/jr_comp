'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { AlertTriangle } from 'lucide-react';

export default function TrademarkObjectionPage() {
  return (
    <ServicePageTemplate
      title="Trademark Objection Response"
      subtitle="Overcome Examination Objections"
      description="Expert trademark objection response services. We help you draft compelling responses to overcome examination objections and secure your trademark registration."
      icon={AlertTriangle}
      color="red"
      serviceInfo="At JR Compliance, we provide strategic trademark objection response services to overcome examination hurdles and secure your registration. Our IP specialists analyze the examination report to understand exact objection grounds - whether absolute grounds like descriptiveness or lack of distinctiveness, or relative grounds citing conflicting prior marks. We research case law, gather usage evidence, and build compelling arguments to address each objection point. Our team drafts persuasive reply statements demonstrating acquired distinctiveness through extensive use, differentiating your mark from cited references, or establishing honest concurrent use. We compile supporting evidence including sales figures, advertising expenditure, and consumer recognition surveys when needed. Our strategic approach and attention to detail help maximize your chances of overcoming objections and proceeding to registration."
      benefits={[
        'Expert Legal Response - Professionally drafted objection replies',
        'High Success Rate - Proven track record of overcoming objections',
        'Comprehensive Analysis - Detailed study of objection grounds',
        'Evidence Preparation - Compile supporting documents and evidence',
        'Hearing Representation - Represent at hearings if required',
        'Quick Turnaround - Timely filing within deadline',
        'Case Law Reference - Cite relevant precedents and judgments',
        'Strategic Arguments - Build strong legal and factual arguments'
      ]}
      process={[
        { step: 'Objection Analysis', description: 'Detailed review of examination report and objection grounds.' },
        { step: 'Strategy Development', description: 'Develop response strategy based on objection type.' },
        { step: 'Evidence Collection', description: 'Gather supporting documents, user evidence, and declarations.' },
        { step: 'Response Drafting', description: 'Draft comprehensive legal response addressing each objection.' },
        { step: 'Review & Filing', description: 'Review response and file within prescribed deadline.' },
        { step: 'Hearing Preparation', description: 'Prepare for hearing if objection is not cleared on paper.' }
      ]}
      documents={[
        'Examination Report Copy',
        'Original Application Details',
        'User Affidavit (for acquired distinctiveness)',
        'Sales Invoices and Turnover Data',
        'Advertising Materials and Expenditure',
        'Media Coverage and Press Articles',
        'Customer Testimonials',
        'Any Prior Registrations'
      ]}
      faqs={[
        { question: 'What are common trademark objections?', answer: 'Common objections include: descriptive mark, similarity to existing marks, lack of distinctiveness, prohibited marks, and geographical names.' },
        { question: 'What is the deadline for objection response?', answer: 'You must file response within 30 days of examination report, extendable by another 30 days on request.' },
        { question: 'Can all objections be overcome?', answer: 'Many objections can be overcome with proper arguments and evidence. Success depends on objection type and mark strength.' },
        { question: 'What if response is rejected?', answer: 'If written response is not accepted, you can request a hearing to present arguments before the Registrar.' },
        { question: 'What is Section 9 objection?', answer: 'Section 9 objections are absolute grounds like descriptive marks, customary marks, or marks lacking distinctive character.' },
        { question: 'What is Section 11 objection?', answer: 'Section 11 objections are relative grounds - similarity to existing registered or pending trademarks.' },
        { question: 'How to prove acquired distinctiveness?', answer: 'Through extensive use evidence - sales figures, advertising spend, market presence duration, and consumer recognition surveys.' },
        { question: 'What happens after successful response?', answer: 'If objection is overcome, trademark proceeds to publication in Trademark Journal for opposition period.' }
      ]}
      stats={[
        { value: '3000+', label: 'Objections Handled' },
        { value: '85%', label: 'Success Rate' },
        { value: '12+', label: 'Years Experience' },
        { value: '4.9', label: 'Google Rating' }
      ]}
    />
  );
}
