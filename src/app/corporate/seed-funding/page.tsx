'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Sprout } from 'lucide-react';

export default function SeedFundingPage() {
  return (
    <ServicePageTemplate
      title="Seed Funding Assistance"
      subtitle="Startup India Seed Fund Scheme"
      description="Get assistance for seed funding for your startup. JR Compliance helps startups access seed funding through government schemes and investor networks."
      icon={Sprout}
      color="green"
      serviceInfo="JR Compliance provides comprehensive seed funding assistance to help early-stage startups secure capital through government schemes and investor networks. Our startup advisors assess your funding requirements and guide you through various seed funding options including the Startup India Seed Fund Scheme. We help prepare compelling business plans, pitch decks, and financial projections required for funding applications and investor presentations. Our team assists with incubator partnerships, accelerator applications, and connections with angel investor networks in your industry. We guide you through due diligence preparation, term sheet negotiation basics, and investment documentation requirements. Post-funding, we provide ongoing support for compliance with investor reporting requirements and guidance on subsequent funding rounds as your startup scales."
      benefits={[
        'Capital for early stage',
        'Government scheme access',
        'Investor connections',
        'Business validation',
        'Proof of concept funding',
        'Mentorship opportunities',
        'Growth acceleration',
        'Market entry support'
      ]}
      process={[
        { step: 'Startup Registration', description: 'Ensure DPIIT startup recognition' },
        { step: 'Business Plan', description: 'Prepare detailed business plan and pitch' },
        { step: 'Incubator Connection', description: 'Connect with approved incubators' },
        { step: 'Application', description: 'Apply for seed fund scheme' },
        { step: 'Evaluation', description: 'Expert evaluation and selection' },
        { step: 'Funding', description: 'Receive seed funding' }
      ]}
      documents={[
        'DPIIT Recognition Certificate',
        'Business Plan',
        'Pitch Deck',
        'Financial Projections',
        'Incorporation Documents',
        'Founder Details',
        'Product/Service Details',
        'Market Analysis'
      ]}
      faqs={[
        { question: 'What is Startup India Seed Fund Scheme?', answer: 'SISFS provides seed funding up to Rs. 50 lakh to eligible startups through selected incubators for proof of concept, prototype development, and market entry.' },
        { question: 'What is the eligibility?', answer: 'Startup must be DPIIT recognized, incorporated within 2 years, have scalable business idea, and not received more than Rs. 10 lakh funding previously.' },
        { question: 'How much funding is available?', answer: 'Up to Rs. 20 lakh for proof of concept and up to Rs. 50 lakh for prototype development, market entry and commercialization.' },
        { question: 'Is it grant or investment?', answer: 'For proof of concept, it is a grant. For prototype and commercialization, it can be convertible debentures or debt-linked instruments.' },
        { question: 'How to apply?', answer: 'Apply through approved incubators under the scheme. List of approved incubators is available on Startup India portal.' }
      ]}
    />
  );
}
