'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Award } from 'lucide-react';

export default function TrademarkRegistrationPage() {
  return (
    <ServicePageTemplate
      title="Trademark Registration"
      subtitle="Brand Protection"
      description="Trademark registration protects your brand identity legally. We handle end-to-end filing, objection response, and registration with the Trademark Registry."
      icon={Award}
      color="purple"
      benefits={[
        'Legal Protection - Exclusive rights to use your brand name, logo, or slogan across India',
        'Brand Value - Registered trademarks become valuable business assets over time',
        'Prevent Infringement - Legal right to take action against copycats and brand misuse',
        'Business Credibility - Build trust with customers through officially registered brand identity',
        '10-year validity with unlimited renewal options',
        'Use registered symbol to deter infringers',
        'Marketplace brand registry eligibility',
        'Asset value for business valuation and sale'
      ]}
      process={[
        { step: 'Trademark Search', description: 'Comprehensive search to check availability of your desired trademark.' },
        { step: 'Class Identification', description: 'Identify appropriate trademark classes for your products/services.' },
        { step: 'Application Filing', description: 'File TM application with Controller General of Patents, Designs & Trademarks.' },
        { step: 'Examination', description: 'Trademark office examines application and may raise objections.' },
        { step: 'Publication', description: 'Trademark published in journal for 4 months for opposition.' },
        { step: 'Registration', description: 'Trademark registered and certificate issued if no opposition.' }
      ]}
      documents={[
        'Proof of Identity (PAN/Aadhaar)',
        'Address Proof',
        'Logo/Wordmark in JPG format (if applicable)',
        'Business Registration Certificate',
        'MSME Certificate (if applicable)',
        'Authorization Letter',
        'User Affidavit (if trademark in use)',
        'Power of Attorney'
      ]}
      faqs={[
        { question: 'How long does trademark registration take?', answer: 'Trademark registration typically takes 12-18 months if there are no objections or oppositions. You get TM status immediately upon filing.' },
        { question: 'What is the validity of trademark?', answer: 'A registered trademark is valid for 10 years from the date of filing and can be renewed indefinitely for 10-year periods.' },
        { question: 'What is TM vs registered symbol?', answer: 'TM can be used immediately after filing application. The registered symbol can only be used after trademark is officially registered.' },
        { question: 'Can I file trademark myself?', answer: 'Yes, but professional help is recommended to avoid objections, ensure proper class selection, and handle legal complexities.' },
        { question: 'What if my trademark gets objected?', answer: 'We help you file appropriate response to objections. Most objections can be resolved with proper documentation and arguments.' },
        { question: 'What are trademark classes?', answer: 'There are 45 trademark classes - 34 for goods and 11 for services. Your trademark needs to be registered in relevant classes based on your business.' },
        { question: 'Can I register a trademark for multiple classes?', answer: 'Yes, you can file trademark in multiple classes. Each additional class will have separate fees but provides broader protection.' },
        { question: 'What happens if someone opposes my trademark?', answer: 'If opposition is filed, we help you respond with counter-statement and evidence. The matter is heard by the Registrar who makes the final decision.' }
      ]}
      stats={[
        { value: '5000+', label: 'Trademarks Filed' },
        { value: '4.9', label: 'Google Rating' },
        { value: '12+', label: 'Years Experience' },
        { value: '95%', label: 'Success Rate' }
      ]}
    />
  );
}
