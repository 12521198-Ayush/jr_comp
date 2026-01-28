'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { CreditCard } from 'lucide-react';

export default function PANIndividualPage() {
  return (
    <ServicePageTemplate
      title="PAN Registration for Individual"
      subtitle="Personal PAN Application"
      description="Get PAN Card for individuals. JR Compliance provides complete assistance for PAN registration and application for individuals, NRIs, and foreign nationals."
      icon={CreditCard}
      color="sky"
      serviceInfo="At JR Compliance, we provide quick and efficient PAN card registration services for Indian citizens, NRIs, and foreign nationals requiring Indian tax identification. Our registration experts prepare Form 49A or 49AA applications with accurate personal details and ensure all supporting documents meet Income Tax Department specifications. We handle the complete application process through authorized PAN centers, coordinate document verification, and track application status until card delivery. For NRIs and foreign nationals, we assist with proper attestation and consular verification of documents as required. Our team provides guidance on Aadhaar-PAN linking requirements and helps resolve any application discrepancies or rejections. Post-registration, we offer support for PAN correction applications, duplicate card requests, and address updates."
      benefits={[
        'Tax compliance',
        'Bank account opening',
        'Financial transactions',
        'Investment requirement',
        'Property transactions',
        'Salary processing',
        'Identity proof',
        'ITR filing'
      ]}
      process={[
        { step: 'Document Collection', description: 'Collect identity and address proofs' },
        { step: 'Form Preparation', description: 'Prepare Form 49A (Indian)/49AA (NRI)' },
        { step: 'Photo & Signature', description: 'Attach passport photo and signature' },
        { step: 'Application Submission', description: 'Submit to NSDL/UTIITSL' },
        { step: 'Fee Payment', description: 'Pay applicable fees' },
        { step: 'PAN Allotment', description: 'Receive PAN card at address' }
      ]}
      documents={[
        'Identity Proof (Aadhaar/Passport/Voter ID)',
        'Address Proof',
        'Date of Birth Proof',
        'Passport Size Photo',
        'Signature',
        'NRI Documents (if applicable)'
      ]}
      faqs={[
        { question: 'Who needs a PAN card?', answer: 'Any individual whose income exceeds taxable limit, or who needs to do financial transactions exceeding prescribed limits needs PAN card.' },
        { question: 'Can minors get PAN?', answer: 'Yes, minors can get PAN card. Parent or guardian applies on behalf of minor using their documents.' },
        { question: 'What is the processing time?', answer: 'PAN is typically issued within 15-20 working days. E-PAN is available within 48 hours through Aadhaar-based instant PAN.' },
        { question: 'What are the PAN fees?', answer: 'Rs. 93 (including GST) for Indian address delivery, Rs. 864 for foreign address delivery.' },
        { question: 'How to get instant PAN?', answer: 'Instant e-PAN can be obtained free through Income Tax portal using Aadhaar-based authentication for individuals having valid Aadhaar.' }
      ]}
    />
  );
}
