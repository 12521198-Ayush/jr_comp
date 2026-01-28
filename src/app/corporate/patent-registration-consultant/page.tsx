'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Lightbulb } from 'lucide-react';

export default function PatentRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Patent Registration"
      subtitle="Protect Your Invention"
      description="Patent Registration in India - Get Experts Help for Patent Registration. JR Compliance provides complete assistance for patent filing and prosecution."
      icon={Lightbulb}
      color="amber"
      serviceInfo="JR Compliance provides comprehensive patent registration services to protect your inventions and innovations in India. Our patent experts conduct prior art searches to assess patentability and novelty of your invention before filing. We prepare detailed patent specifications including claims, descriptions, and drawings that comprehensively protect your invention. Our team handles provisional and complete patent application filings, manages publication requests, and coordinates examination responses with the Indian Patent Office. We draft persuasive replies to examination reports addressing novelty, inventive step, and industrial applicability objections. Post-grant, we provide patent maintenance services including annual renewal fee payments, assignment recordings, and licensing documentation. We also assist with patent enforcement strategies and infringement analysis when needed."
      benefits={[
        'Exclusive rights to invention',
        '20 years protection',
        'Commercial exploitation rights',
        'Licensing revenue',
        'Competitive advantage',
        'Investment attraction',
        'Legal protection against infringement',
        'Technology asset creation'
      ]}
      process={[
        { step: 'Patentability Search', description: 'Check if invention is novel and patentable' },
        { step: 'Drafting', description: 'Prepare patent specification and claims' },
        { step: 'Application Filing', description: 'File patent application with IPO' },
        { step: 'Publication', description: 'Application published after 18 months' },
        { step: 'Examination', description: 'Request examination and respond to objections' },
        { step: 'Grant', description: 'Receive patent grant upon approval' }
      ]}
      documents={[
        'Invention Disclosure Document',
        'Drawings/Diagrams',
        'Priority Documents (if applicable)',
        'Inventor Details',
        'Applicant Details',
        'Power of Attorney',
        'Assignment Deed (if required)'
      ]}
      faqs={[
        { question: 'What can be patented?', answer: 'Any new invention involving an inventive step and capable of industrial application can be patented. This includes products, processes, and methods.' },
        { question: 'What cannot be patented?', answer: 'Discoveries, mathematical methods, business methods, computer programs per se, and inventions contrary to public morality cannot be patented in India.' },
        { question: 'How long is patent valid?', answer: 'Patent is valid for 20 years from the date of filing, subject to payment of annual renewal fees.' },
        { question: 'What is provisional patent?', answer: 'Provisional specification allows securing priority date while complete specification is prepared within 12 months.' },
        { question: 'How long does patent registration take?', answer: 'Patent registration typically takes 2-4 years from filing to grant, depending on examination and objections.' }
      ]}
    />
  );
}
