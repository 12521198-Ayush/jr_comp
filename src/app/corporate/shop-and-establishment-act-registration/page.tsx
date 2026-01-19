'use client';

import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Store } from 'lucide-react';

export default function ShopEstablishmentPage() {
  return (
    <ServicePageTemplate
      title="Shop & Establishment Registration"
      subtitle="State Labor Law Compliance"
      description="Get Shop and Establishment Act registration for your business. JR Compliance provides complete assistance for shop license registration across all states."
      icon={Store}
      color="rose"
      benefits={[
        'Legal compliance',
        'Business legitimacy',
        'Bank account opening',
        'Government tender eligibility',
        'Employee protection',
        'Working hours regulation',
        'Leave entitlements',
        'Multi-state support'
      ]}
      process={[
        { step: 'State Identification', description: 'Identify applicable state for registration' },
        { step: 'Document Collection', description: 'Collect required business documents' },
        { step: 'Application Preparation', description: 'Prepare registration application' },
        { step: 'Online Filing', description: 'File application on state labor portal' },
        { step: 'Inspection', description: 'Inspection by labor inspector if required' },
        { step: 'Registration', description: 'Receive Shop & Establishment certificate' }
      ]}
      documents={[
        'Business Registration Documents',
        'PAN Card',
        'Address Proof of Establishment',
        'Identity Proof of Proprietor/Directors',
        'Rent Agreement/Ownership Proof',
        'Employee List',
        'Passport Size Photos'
      ]}
      faqs={[
        { question: 'What is Shop & Establishment Act?', answer: 'It is a state-level legislation regulating working conditions, hours, holidays, leaves, and other aspects of employment in shops and commercial establishments.' },
        { question: 'Who needs this registration?', answer: 'All shops, commercial establishments, restaurants, theatres, hotels, and other places of public amusement or entertainment need registration.' },
        { question: 'Is registration mandatory?', answer: 'Yes, it is mandatory within 30 days of starting business. Some states have integrated it with Udyam or simplified the process.' },
        { question: 'What is the validity?', answer: 'Validity varies by state - some states issue permanent registration, others require annual or periodic renewal.' },
        { question: 'What are the penalties for non-registration?', answer: 'Penalties vary by state and can include fines, imprisonment, or both for non-registration or violation of provisions.' }
      ]}
    />
  );
}
