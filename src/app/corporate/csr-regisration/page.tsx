'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Heart } from 'lucide-react';

export default function CSRRegistrationPage() {
  return (
    <ServicePageTemplate
      title="CSR Registration"
      subtitle="Corporate Social Responsibility Compliance"
      description="Get CSR registration and compliance assistance. JR Compliance helps companies meet their CSR obligations under Companies Act 2013."
      icon={Heart}
      color="pink"
      benefits={[
        'Legal compliance',
        'Social impact',
        'Brand reputation',
        'Tax benefits',
        'Stakeholder trust',
        'Community development',
        'Sustainable business',
        'Government recognition'
      ]}
      process={[
        { step: 'CSR Applicability', description: 'Check if CSR provisions apply to company' },
        { step: 'CSR Policy', description: 'Formulate CSR policy and activities' },
        { step: 'Committee Formation', description: 'Form CSR committee of board' },
        { step: 'Project Selection', description: 'Select CSR projects and implementing agencies' },
        { step: 'Implementation', description: 'Execute CSR activities' },
        { step: 'Reporting', description: 'File annual CSR report and disclosures' }
      ]}
      documents={[
        'Company Financial Statements',
        'Board Resolution',
        'CSR Policy',
        'CSR Committee Details',
        'Project Details',
        'Implementing Agency Details',
        'Impact Assessment (if required)',
        'Annual CSR Report'
      ]}
      faqs={[
        { question: 'Who needs to comply with CSR?', answer: 'Companies with net worth ≥ Rs. 500 crore, or turnover ≥ Rs. 1,000 crore, or net profit ≥ Rs. 5 crore in preceding financial year.' },
        { question: 'How much CSR spending is required?', answer: 'Minimum 2% of average net profits of preceding three financial years must be spent on CSR activities.' },
        { question: 'What activities qualify as CSR?', answer: 'Activities specified in Schedule VII of Companies Act including education, healthcare, environment, skill development, women empowerment, etc.' },
        { question: 'What if CSR amount is unspent?', answer: 'Unspent CSR amount for ongoing projects must be transferred to unspent CSR account. For completed projects, it goes to Schedule VII funds.' },
        { question: 'Is CSR registration mandatory?', answer: 'NGOs implementing CSR activities must register on MCA portal and obtain CSR-1 form registration to receive CSR funds.' }
      ]}
    />
  );
}
