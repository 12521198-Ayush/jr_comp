'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { FileText } from 'lucide-react';

export default function TrademarkApplicationFilingPage() {
  return (
    <ServicePageTemplate
      title="Trademark Application Filing"
      subtitle="Brand Protection"
      description="Professional trademark application filing services to protect your brand identity. We handle complete application preparation and submission to the Trademark Registry of India."
      icon={FileText}
      color="purple"
      benefits={[
        'Expert Application Drafting - Professionally prepared applications to minimize objections',
        'Proper Class Selection - Accurate identification of trademark classes for comprehensive protection',
        'Complete Documentation - All required documents prepared and filed correctly',
        'Application Tracking - Regular updates on application status and proceedings',
        'Quick Filing - Fast-track application submission to secure priority date',
        'Online Filing - Digital submission through official IP India portal',
        'Multi-class Filing - File for multiple classes in single application',
        'Logo & Wordmark Filing - Both graphical and text trademark filing'
      ]}
      process={[
        { step: 'Trademark Search', description: 'Comprehensive search to check availability and existing similar marks.' },
        { step: 'Class Identification', description: 'Identify appropriate trademark classes based on your products/services.' },
        { step: 'Document Preparation', description: 'Prepare all required documents including trademark representation.' },
        { step: 'Application Drafting', description: 'Draft application with proper specifications and descriptions.' },
        { step: 'Filing Submission', description: 'Submit application through IP India portal and obtain application number.' },
        { step: 'Acknowledgment', description: 'Receive filing receipt and application tracking details.' }
      ]}
      documents={[
        'Proof of Identity (PAN/Aadhaar)',
        'Business Registration Certificate',
        'Logo in JPG format (300 DPI, max 8cm x 8cm)',
        'Authorization Letter / POA',
        'MSME Certificate (for fee reduction)',
        'User Affidavit (if trademark already in use)',
        'Priority Document (if claiming priority)',
        'Address Proof'
      ]}
      faqs={[
        { question: 'How long does trademark filing take?', answer: 'The actual filing takes 1-2 business days once all documents are ready. You receive application number immediately after successful filing.' },
        { question: 'What is the cost of trademark filing?', answer: 'Government fees are Rs 4,500 per class for individuals/startups and Rs 9,000 for companies. Professional fees vary based on complexity.' },
        { question: 'Can I file trademark myself?', answer: 'Yes, but professional help ensures proper class selection, reduces objection chances, and handles legal complexities effectively.' },
        { question: 'What is trademark class?', answer: 'There are 45 classes under Nice Classification - 34 for goods and 11 for services. Your trademark must be filed in relevant classes.' },
        { question: 'Can I file for logo and name together?', answer: 'Yes, you can file a combined trademark with both logo and name, or file them separately for broader protection.' },
        { question: 'What happens after filing?', answer: 'After filing, the application goes through examination, publication, and registration stages over 12-18 months if unopposed.' },
        { question: 'Is priority date important?', answer: 'Yes, priority date establishes your rights from the filing date. Earlier filing gives you precedence over later similar applications.' },
        { question: 'Can I make changes after filing?', answer: 'Limited changes are allowed through trademark modification process. Substantial changes may require new filing.' }
      ]}
      stats={[
        { value: '5000+', label: 'Applications Filed' },
        { value: '4.9', label: 'Google Rating' },
        { value: '12+', label: 'Years Experience' },
        { value: '24hrs', label: 'Filing Time' }
      ]}
    />
  );
}
