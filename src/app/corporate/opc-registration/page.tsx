'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { User } from 'lucide-react';

export default function OPCRegistrationPage() {
  return (
    <ServicePageTemplate
      title="One Person Company Registration"
      subtitle="OPC Incorporation Online"
      description="Register your One Person Company (OPC) with expert guidance. OPC allows a single entrepreneur to operate a corporate entity with limited liability benefits."
      icon={User}
      color="indigo"
      benefits={[
        'Single person ownership',
        'Limited liability protection',
        'Separate legal entity',
        'Easy access to funding',
        'Less compliance burden',
        'Full control over decisions',
        'Perpetual succession',
        'Professional business image'
      ]}
      process={[
        { step: 'DSC & DIN', description: 'Obtain Digital Signature Certificate and Director Identification Number' },
        { step: 'Name Approval', description: 'Reserve unique company name through RUN service' },
        { step: 'Document Preparation', description: 'Prepare MOA, AOA, and other incorporation documents' },
        { step: 'SPICe+ Filing', description: 'File incorporation application through SPICe+ form' },
        { step: 'Verification', description: 'ROC verifies the application and documents' },
        { step: 'Incorporation', description: 'Receive Certificate of Incorporation with PAN and TAN' }
      ]}
      documents={[
        'PAN Card of Member',
        'Aadhaar Card',
        'Passport-size Photographs',
        'Address Proof (Electricity Bill)',
        'Nominee Details & Consent',
        'Registered Office Proof',
        'Digital Signature Certificate'
      ]}
      faqs={[
        { question: 'What is a One Person Company?', answer: 'OPC is a company with only one member. It provides the benefits of a private limited company to a single entrepreneur with limited liability protection.' },
        { question: 'Who can form an OPC?', answer: 'Only an Indian citizen who is a resident in India can form an OPC. The person must have stayed in India for at least 182 days during the immediately preceding financial year.' },
        { question: 'Is a nominee mandatory for OPC?', answer: 'Yes, every OPC must nominate a person who will become the member in case the original member becomes incapacitated or dies.' },
        { question: 'What are the turnover limits for OPC?', answer: 'If OPC turnover exceeds ₹2 crore or paid-up capital exceeds ₹50 lakhs, it must be converted to a private limited company.' },
        { question: 'Can OPC be converted to Private Limited?', answer: 'Yes, OPC can voluntarily convert to a private limited company after 2 years, or mandatorily if it crosses the threshold limits.' }
      ]}
    />
  );
}
