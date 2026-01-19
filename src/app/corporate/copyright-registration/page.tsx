'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Copyright } from 'lucide-react';

export default function CopyrightRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Copyright Registration"
      subtitle="Protect Your Original Work"
      description="We make the Copyright registration process hassle-free. Get complete guidance on documents required for copyright registration in India and its process."
      icon={Copyright}
      color="purple"
      benefits={[
        'Legal protection for original works',
        'Exclusive reproduction rights',
        'Commercial exploitation rights',
        'Legal evidence of ownership',
        'Infringement lawsuit eligibility',
        'International protection via treaties',
        'Licensing revenue opportunities',
        'Long-term asset creation'
      ]}
      process={[
        { step: 'Application Preparation', description: 'Prepare Form XIV with work details' },
        { step: 'Work Submission', description: 'Submit copies of the original work' },
        { step: 'Fee Payment', description: 'Pay applicable registration fees' },
        { step: 'Diary Entry', description: 'Receive diary number for tracking' },
        { step: 'Examination', description: 'Copyright Office examines the application' },
        { step: 'Registration', description: 'Receive Copyright Registration Certificate' }
      ]}
      documents={[
        'Application Form XIV',
        'Copies of Original Work',
        'Identity Proof of Author',
        'Power of Attorney (if applicable)',
        'NOC from Author (if different)',
        'Publication Details (if published)',
        'Statement of Ownership'
      ]}
      faqs={[
        { question: 'What works can be copyrighted?', answer: 'Literary works, dramatic works, musical works, artistic works, cinematograph films, and sound recordings can be copyrighted in India.' },
        { question: 'Is copyright registration mandatory?', answer: 'Copyright exists automatically upon creation, but registration provides legal evidence of ownership and is required for filing infringement suits.' },
        { question: 'How long is copyright valid?', answer: 'For most works, copyright is valid for 60 years after the death of the author. For films and photographs, it is 60 years from publication.' },
        { question: 'How long does registration take?', answer: 'Copyright registration typically takes 6-12 months, including mandatory 30-day objection period.' },
        { question: 'Can software be copyrighted?', answer: 'Yes, computer programs and software are protected as literary works under Indian Copyright Act.' }
      ]}
    />
  );
}
