'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Palette } from 'lucide-react';

export default function DesignRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Design Registration"
      subtitle="Protect Your Product Design"
      description="Professional design registration services to protect the visual appearance of your products. We handle complete design registration with the Design Office under the Designs Act, 2000."
      icon={Palette}
      color="pink"
      benefits={[
        'Legal Protection - Exclusive rights over your product design',
        'Competitive Edge - Prevent competitors from copying your design',
        'Commercial Value - Design becomes a valuable business asset',
        '15-Year Protection - Long-term protection renewable in periods',
        'Market Exclusivity - Sole right to use the registered design',
        'International Priority - Claim priority for international filing',
        'Licensing Revenue - License your design for royalties',
        'Brand Differentiation - Stand out with unique protected designs'
      ]}
      process={[
        { step: 'Design Assessment', description: 'Evaluate design for novelty and registrability.' },
        { step: 'Classification', description: 'Identify appropriate Locarno Classification for design.' },
        { step: 'Application Drafting', description: 'Prepare design application with representations.' },
        { step: 'Filing Submission', description: 'File application with Controller of Designs.' },
        { step: 'Examination', description: 'Design Office examines for novelty and compliance.' },
        { step: 'Registration', description: 'Design registered and certificate issued.' }
      ]}
      documents={[
        'Design Representations (4 views minimum)',
        'Statement of Novelty',
        'Applicant Identity Proof',
        'Business Registration Certificate',
        'Power of Attorney',
        'Priority Document (if claiming priority)',
        'Assignment Deed (if designer different)',
        'Article Description'
      ]}
      faqs={[
        { question: 'What can be registered as a design?', answer: 'Features of shape, configuration, pattern, ornamentation, or composition of lines/colors applied to any article can be registered.' },
        { question: 'What is the validity of design registration?', answer: 'Design registration is initially valid for 10 years, extendable by another 5 years (total 15 years).' },
        { question: 'How long does registration take?', answer: 'Design registration typically takes 6-12 months if there are no objections during examination.' },
        { question: 'What is the cost of design registration?', answer: 'Government fees range from Rs 1,000 to Rs 4,000 depending on applicant type (natural person or company).' },
        { question: 'Can I protect both 2D and 3D designs?', answer: 'Yes, both two-dimensional (patterns, ornamentation) and three-dimensional (shape) designs can be registered.' },
        { question: 'What is Locarno Classification?', answer: 'International classification system for designs consisting of 32 classes based on article types.' },
        { question: 'Can I register multiple designs together?', answer: 'Yes, up to 50 designs of the same class can be filed in single application as a set.' },
        { question: 'What if design is rejected?', answer: 'You can respond to objections and appeal to the High Court if registration is refused.' }
      ]}
      stats={[
        { value: '2000+', label: 'Designs Registered' },
        { value: '4.9', label: 'Google Rating' },
        { value: '12+', label: 'Years Experience' },
        { value: '95%', label: 'Success Rate' }
      ]}
    />
  );
}
