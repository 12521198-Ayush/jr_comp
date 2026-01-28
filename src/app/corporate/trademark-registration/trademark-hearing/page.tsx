'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Gavel } from 'lucide-react';

export default function TrademarkHearingPage() {
  return (
    <ServicePageTemplate
      title="Trademark Hearing"
      subtitle="Professional Representation"
      description="Expert representation at trademark hearings before the Registrar of Trademarks. We prepare comprehensive arguments and present your case effectively to secure registration."
      icon={Gavel}
      color="indigo"
      serviceInfo="At JR Compliance, we provide expert representation at trademark hearings to present your case effectively before the Registrar of Trademarks. Our experienced IP professionals thoroughly prepare by analyzing the examination report, reviewing case history, and identifying the strongest arguments for registration. We research relevant case law and precedents to support your position with authoritative citations. Our team prepares written submissions, evidence compilations, and legal arguments addressing each objection ground comprehensively. We attend hearings in person or via video conferencing, presenting persuasive oral arguments and responding to Registrar queries professionally. Post-hearing, we handle any additional submissions required and track the final decision. Our hearing representation has helped numerous clients overcome complex objections and secure their trademark registrations."
      benefits={[
        'Expert Representation - Experienced professionals represent your case',
        'Comprehensive Preparation - Thorough case preparation with evidence',
        'Legal Arguments - Strong legal and factual arguments presentation',
        'Case Law Citations - Reference relevant precedents and judgments',
        'Evidence Presentation - Present supporting documents effectively',
        'Real-time Response - Address Registrar queries during hearing',
        'Written Submissions - Prepare detailed written arguments',
        'Follow-up Actions - Handle post-hearing requirements'
      ]}
      process={[
        { step: 'Hearing Notice Review', description: 'Analyze hearing notice and scheduled date details.' },
        { step: 'Case Assessment', description: 'Review case history, objections, and previous responses.' },
        { step: 'Argument Preparation', description: 'Prepare detailed legal arguments addressing all issues.' },
        { step: 'Evidence Compilation', description: 'Organize supporting evidence and documents.' },
        { step: 'Hearing Attendance', description: 'Attend hearing and present arguments to Registrar.' },
        { step: 'Post-Hearing Action', description: 'Handle any additional submissions required after hearing.' }
      ]}
      documents={[
        'Hearing Notice Copy',
        'Complete Case File',
        'Previous Responses Filed',
        'User Affidavit',
        'Sales and Revenue Data',
        'Advertising Materials',
        'Third-party Acknowledgments',
        'Power of Attorney'
      ]}
      faqs={[
        { question: 'When is trademark hearing scheduled?', answer: 'Hearing is scheduled when written response doesn\'t resolve objections, or in opposition proceedings after pleadings are complete.' },
        { question: 'Can I attend hearing myself?', answer: 'Yes, applicants can attend personally, but professional representation is recommended for effective presentation.' },
        { question: 'How long is a trademark hearing?', answer: 'Typical hearings last 15-30 minutes, but complex cases may take longer depending on issues involved.' },
        { question: 'What happens at the hearing?', answer: 'Arguments are presented, Registrar may ask questions, and a decision is rendered either immediately or reserved for later.' },
        { question: 'Can hearing date be changed?', answer: 'Adjournment can be requested with valid reasons before the hearing date. Multiple adjournments are generally not granted.' },
        { question: 'What if I miss the hearing?', answer: 'Missing hearing without adjournment may result in ex-parte decision. Application may be abandoned or decided against you.' },
        { question: 'Is hearing done online?', answer: 'Yes, most hearings are now conducted via video conferencing through the IP India system.' },
        { question: 'What after favorable hearing decision?', answer: 'If hearing is in your favor, trademark proceeds to next stage - either publication or registration as applicable.' }
      ]}
      stats={[
        { value: '1500+', label: 'Hearings Attended' },
        { value: '80%', label: 'Success Rate' },
        { value: '12+', label: 'Years Experience' },
        { value: '4.9', label: 'Google Rating' }
      ]}
    />
  );
}
