'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Factory } from 'lucide-react';

export default function MSMERegistrationPage() {
  return (
    <ServicePageTemplate
      title="MSME Registration"
      subtitle="Udyam Registration for MSMEs"
      description="Get MSME/Udyam registration for your business. JR Compliance provides complete assistance for MSME registration to avail government benefits and schemes."
      icon={Factory}
      color="amber"
      benefits={[
        'Government scheme eligibility',
        'Priority sector lending',
        'Interest subvention',
        'Collateral-free loans',
        'Tender preference',
        'Delayed payment protection',
        'Tax benefits',
        'Subsidy eligibility'
      ]}
      process={[
        { step: 'Eligibility Check', description: 'Verify business eligibility for MSME category' },
        { step: 'Document Collection', description: 'Collect required documents and details' },
        { step: 'Aadhaar Linking', description: 'Link Aadhaar for OTP verification' },
        { step: 'Online Registration', description: 'Register on Udyam registration portal' },
        { step: 'Verification', description: 'OTP and document verification' },
        { step: 'Certificate Generation', description: 'Receive Udyam Registration Certificate' }
      ]}
      documents={[
        'Aadhaar Card of Proprietor/Partners/Directors',
        'PAN Card of Business',
        'Business Address Details',
        'Bank Account Details',
        'Investment Details',
        'Turnover Information',
        'NIC Code of Activity'
      ]}
      faqs={[
        { question: 'What are MSME categories?', answer: 'Micro: Investment up to Rs. 1 crore and turnover up to Rs. 5 crore. Small: Investment up to Rs. 10 crore and turnover up to Rs. 50 crore. Medium: Investment up to Rs. 50 crore and turnover up to Rs. 250 crore.' },
        { question: 'Is Udyam registration free?', answer: 'Yes, Udyam registration is completely free on the government portal and can be done online using Aadhaar.' },
        { question: 'What is the validity of Udyam registration?', answer: 'Udyam registration is permanent and does not require renewal. However, information should be updated when there are changes.' },
        { question: 'Who can register for MSME?', answer: 'Any manufacturing or service enterprise meeting the investment and turnover criteria can register, including proprietorship, partnership, LLP, or company.' },
        { question: 'What benefits does MSME get?', answer: 'Priority sector lending, lower interest rates, collateral-free loans up to Rs. 1 crore, government tender preference, protection against delayed payments, and various subsidies.' }
      ]}
    />
  );
}
