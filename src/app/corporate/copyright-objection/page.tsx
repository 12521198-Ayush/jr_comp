'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { AlertTriangle } from 'lucide-react';

export default function CopyrightObjectionPage() {
  return (
    <ServicePageTemplate
      title="Copyright Objection Response"
      subtitle="Protect Your Creative Rights"
      description="Professional copyright objection response services. We help you overcome objections raised during copyright examination and secure your copyright registration."
      icon={AlertTriangle}
      color="orange"
      benefits={[
        'Expert Response - Professionally drafted objection replies',
        'Legal Analysis - Detailed study of objection grounds',
        'Evidence Preparation - Compile supporting evidence and documents',
        'Quick Turnaround - Timely response within deadline',
        'High Success Rate - Proven track record of overcoming objections',
        'Hearing Support - Representation at hearings if required',
        'Documentation - Proper legal documentation and filing',
        'Follow-up - Track response and final registration'
      ]}
      process={[
        { step: 'Objection Analysis', description: 'Review objection letter to understand grounds and requirements.' },
        { step: 'Strategy Development', description: 'Develop response strategy based on objection type.' },
        { step: 'Evidence Collection', description: 'Gather supporting documents proving originality and ownership.' },
        { step: 'Response Drafting', description: 'Draft comprehensive legal response addressing each objection.' },
        { step: 'Review & Filing', description: 'Review response and file within prescribed deadline.' },
        { step: 'Hearing Preparation', description: 'Prepare for hearing if matter is not resolved on paper.' }
      ]}
      documents={[
        'Original Copyright Application',
        'Objection Letter from Registry',
        'Proof of Creation/Authorship',
        'Date of First Publication Evidence',
        'Assignment Deed (if applicable)',
        'NOC from Original Author (if applicable)',
        'Work Samples and Drafts',
        'Any Prior Registrations'
      ]}
      faqs={[
        { question: 'What are common copyright objections?', answer: 'Common objections include incomplete application, similarity with existing works, ownership disputes, and missing documents.' },
        { question: 'What is the deadline for response?', answer: 'You must respond within 30 days of receiving the objection notice from the Copyright Office.' },
        { question: 'Can all objections be overcome?', answer: 'Most procedural objections can be resolved. Substantive objections depend on the specific grounds and available evidence.' },
        { question: 'What if my work is similar to another?', answer: 'You need to prove that your work is independently created and has sufficient originality to merit copyright protection.' },
        { question: 'How to prove I am the original author?', answer: 'Provide drafts, creation process documents, date-stamped files, and any evidence showing work progression.' },
        { question: 'What happens after successful response?', answer: 'If objection is resolved, the copyright proceeds to registration and certificate is issued.' },
        { question: 'Is hearing necessary for copyright?', answer: 'Not always. Many objections are resolved through written submissions without requiring a hearing.' },
        { question: 'Can I appeal if objection is not cleared?', answer: 'Yes, you can file an appeal before the Copyright Board if your response is rejected.' }
      ]}
      stats={[
        { value: '500+', label: 'Objections Handled' },
        { value: '90%', label: 'Success Rate' },
        { value: '12+', label: 'Years Experience' },
        { value: '4.9', label: 'Google Rating' }
      ]}
    />
  );
}
